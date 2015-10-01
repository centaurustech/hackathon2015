package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IMahoutProvider;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.sql.query.OSQLSynchQuery;
import org.apache.mahout.cf.taste.impl.common.FastByIDMap;
import org.apache.mahout.cf.taste.impl.model.BooleanUserPreferenceArray;
import org.apache.mahout.cf.taste.impl.model.GenericBooleanPrefDataModel;
import org.apache.mahout.cf.taste.impl.neighborhood.ThresholdUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.PearsonCorrelationSimilarity;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.model.PreferenceArray;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.UserBasedRecommender;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by kdeveloper on 10/1/15.
 */
public class MahoutProvider implements IMahoutProvider{

    UserBasedRecommender recommender;

    private String connectionStr;
    private String projectPrefix;

    public MahoutProvider() {
        connectionStr = "remote:localhost/Crowdfunding";

        try {
            ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
            db.close();
        } catch (Exception e) {
            connectionStr = "remote:ptxw13040/Crowdfunding";
        }
    }

    private long getLongFromRID(String rid) {
        return 0;
    }


    @Override
    public void learn() {
        FastByIDMap<PreferenceArray> userIdMap = new FastByIDMap<PreferenceArray>();

        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");

        try {
            List<ODocument> lstActiveProjects = db.query(new OSQLSynchQuery<ODocument>("select distinct(project.@rid.asString()) as id from payments"));
            List<ODocument> lstActiveUsers = db.query(new OSQLSynchQuery<ODocument>("select distinct(user.@rid.asString()) as id from payments"));
            Map<String, Integer> dico = new HashMap<>();

            int i=0;
            for(ODocument project : lstActiveProjects) {
                String tmp = (String)project.field("id");
                dico.put(tmp, i++);
                projectPrefix = tmp.substring(0, tmp.lastIndexOf(':'));
            }

            for(ODocument user : lstActiveUsers) {
                List<ODocument> projects = db.command(new OSQLSynchQuery<ODocument>("select distinct(projects.@rid.asString()) as id from payments where user = ?"))
                        .execute(user.field("id"));

                BooleanUserPreferenceArray userPref = new BooleanUserPreferenceArray(lstActiveProjects.size());
                i = 0;
                long userId = getLongFromRID((String)user.field("id"));
                userPref.setUserID(i, userId);

                // loop on all projects and flag as false
                for(ODocument project : lstActiveProjects) {
                    userPref.setItemID(i, getLongFromRID((String) project.field("id")));
                    userPref.setValue(i++, 0);
                }

                // init with real value
                for(ODocument project : projects) {
                    userPref.setValue(dico.get((String) project.field("id")), 1);
                }

                userIdMap.put(userId, userPref);
            }
        } finally {
            db.close();
        }

        try {
            DataModel model = new GenericBooleanPrefDataModel(GenericBooleanPrefDataModel.toDataMap(userIdMap));
            UserSimilarity similarity = new PearsonCorrelationSimilarity(model);
            UserNeighborhood neighborhood = new ThresholdUserNeighborhood(0.5, similarity, model);
            recommender = new GenericUserBasedRecommender(model, neighborhood, similarity);
        } catch (Exception e) {
            int i = 0;
        }
    }

    @Override
    public List<String> recommend(String userId) {
        List<String> ret = new ArrayList<>();
        try {
            List<RecommendedItem> recommendations = recommender.recommend(getLongFromRID(userId), 3);
            for (RecommendedItem recommendation : recommendations) {
                ret.add(projectPrefix + recommendation.getItemID());
            }
        } catch (Exception e) {
            int i = 0;
        }
        return ret;
    }
}

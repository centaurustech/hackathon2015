package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IMahoutProvider;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.sql.query.OSQLSynchQuery;
import org.apache.hadoop.yarn.webapp.ResponseInfo;
import org.apache.mahout.cf.taste.impl.common.FastByIDMap;
import org.apache.mahout.cf.taste.impl.model.*;
import org.apache.mahout.cf.taste.impl.neighborhood.ThresholdUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericItemBasedRecommender;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.PearsonCorrelationSimilarity;
import org.apache.mahout.cf.taste.impl.similarity.TanimotoCoefficientSimilarity;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.model.PreferenceArray;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.ItemBasedRecommender;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.UserBasedRecommender;
import org.apache.mahout.cf.taste.similarity.ItemSimilarity;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;
import org.slf4j.Logger;

import java.util.ArrayList;
import java.util.List;

import static org.slf4j.LoggerFactory.getLogger;

/**
 * Created by kdeveloper on 10/1/15.
 */
public class MahoutProvider implements IMahoutProvider{

    private static final Logger LOGGER = getLogger(MahoutProvider.class);

    private static UserBasedRecommender recommender;

    private String connectionStr;

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
        return Long.parseLong(rid.substring(rid.lastIndexOf(':') + 1, rid.length()));
    }

    @Override
    public void learn() {
        FastByIDMap<PreferenceArray> userIdMap = new FastByIDMap<PreferenceArray>();

        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");

        try {
            List<ODocument> lstActiveUsers = db.query(new OSQLSynchQuery<ODocument>("select distinct(user.asString()) as id  from payments"));

            for(ODocument user : lstActiveUsers) {
                List<ODocument> projects = db.command(new OSQLSynchQuery<ODocument>("select project.@rid.asString() as id, sum(amount) as amount from payments where user = ? group by (project)"))
                        .execute(user.field("id"));

                int i = 0;
                GenericUserPreferenceArray userPref = new GenericUserPreferenceArray(projects.size());
                long userId = getLongFromRID((String)user.field("id"));
                for(ODocument project : projects) {
                    Double dbl = (Double)project.field("amount");
                    Float fl = (float)(dbl.doubleValue());
                    userPref.set(i++, new GenericPreference(userId, getLongFromRID((String) project.field("id")), fl));
                }

                userIdMap.put(userId, userPref);
            }
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        } finally {
            db.close();
        }

        try {
            DataModel dataModel = new GenericDataModel(userIdMap);
            UserSimilarity similarity = new PearsonCorrelationSimilarity(dataModel);
            UserNeighborhood neighborhood = new ThresholdUserNeighborhood(0.1, similarity, dataModel);
            recommender = new GenericUserBasedRecommender(dataModel, neighborhood, similarity);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }
    }

    @Override
    public List<String> recommend(String userId) {
        String projectPrefix = "#64:";

        List<String> ret = new ArrayList<>();
        try {
            List<RecommendedItem> recommendations = recommender.recommend(getLongFromRID(userId), 3);
            for (RecommendedItem recommendation : recommendations) {
                ret.add(projectPrefix + recommendation.getItemID());
            }
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }
        return ret;
    }
}

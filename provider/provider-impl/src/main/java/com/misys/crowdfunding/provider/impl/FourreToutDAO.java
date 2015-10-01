package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IFourreToutDAO;
import com.misys.crowdfunding.provider.api.UserContribution;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.sql.query.OSQLSynchQuery;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FourreToutDAO implements IFourreToutDAO {

    private String connectionStr;

    public FourreToutDAO() {
        connectionStr = "remote:localhost/Crowdfunding";

        try {
            ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
            db.close();
        } catch (Exception e) {
            connectionStr = "remote:ptxw13040/Crowdfunding";
        }
    }

    @Override
    public List<UserContribution> getUsersContributions() {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
        try {

            List<UserContribution> listUc = new ArrayList<>();

            List<ODocument> results = db.command(new OSQLSynchQuery<ODocument>(
                    "select project.@rid as projectId, user.@rid as userId, sum(amount) as totalContribution from payments group by projectId, userId")).execute();


            for (ODocument result : results) {
                String projectId = ((ODocument)result.field("projectId")).field("@rid").toString();
                String userId = ((ODocument)result.field("userId")).field("@rid").toString();;
                Double contrib = result.field("totalContribution");
                UserContribution uc = new UserContribution(userId, projectId, contrib);
                listUc.add(uc);
            }
            return listUc;

        } finally {
            db.close();
        }
    }

    @Override
    public Map<String, List<String>> getProjectsVsUsers() {
        List<UserContribution> listUc = getUsersContributions();
        Map<String, List<String>> mapProjectsVsUsers = new HashMap<>();
        for (UserContribution uc : listUc) {
            String projectId = uc.getProjectId();
            if (mapProjectsVsUsers.containsKey(projectId)) {
                mapProjectsVsUsers.get(projectId).add(uc.getUserId());
            } else {
                List<String> listUsers = new ArrayList<>();
                listUsers.add(uc.getUserId());
                mapProjectsVsUsers.put(projectId, listUsers);
            }
        }
        return mapProjectsVsUsers;
    }

    @Override
    public Map<String, List<String>> getUsersVsProjects() {
        List<UserContribution> listUc = getUsersContributions();
        Map<String, List<String>> mapUsersVsProjects = new HashMap<>();
        for (UserContribution uc : listUc) {
            String userId = uc.getUserId();
            if (mapUsersVsProjects.containsKey(userId)) {
                mapUsersVsProjects.get(userId).add(uc.getProjectId());
            } else {
                List<String> listProjects = new ArrayList<>();
                listProjects.add(uc.getProjectId());
                mapUsersVsProjects.put(userId, listProjects);
            }
        }
        return mapUsersVsProjects;
    }
}

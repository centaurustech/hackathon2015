package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.sql.query.OSQLSynchQuery;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * Created by kdeveloper on 9/21/15.
 */
public class ProjectDAO implements IProjectDAO {

    private String connectionStr;

    public ProjectDAO() {
        connectionStr = "remote:localhost/Crowdfunding";

        try {
            ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
            db.close();
        } catch (Exception e) {
            connectionStr = "remote:192.168.100.11/Crowdfunding";
        }
    }

    @Override
    public List<Map<String, Object>> getProjects() {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
        try {
            List<ODocument> result = db.query(new OSQLSynchQuery<ODocument>("select @rid.asString() as id, name, description, imgSrc from projects"));
            List<Map<String, Object>> ret = new ArrayList<>();

            for(ODocument od : result) {
                Map<String, Object> mret = od.toMap();
                mret.remove("@rid");
                ret.add(mret);
            }

            return ret;
        } finally {
            db.close();
        }
    }

    @Override
    public Map<String, Object> getProject(String id) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
        try {
            List<ODocument> result = db.command(new OSQLSynchQuery<ODocument>("select @rid.asString() as id, name, description, imgSrc, type, currency, targetAmount, currentAmount, targetDate, creationDate from projects where @rid=?")).execute(id);
            Map<String, Object> mret = result.get(0).toMap();
            mret.remove("@rid");
            return mret;
        } finally {
            db.close();
        }
    }

    @Override
    public void createPayment(String id, double amount) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
        try {

        } finally {
            db.close();
        }
    }
}

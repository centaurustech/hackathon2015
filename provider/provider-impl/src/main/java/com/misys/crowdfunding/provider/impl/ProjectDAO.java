package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.id.ORecordId;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.sql.OCommandSQL;
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
            List<ODocument> result = db.query(new OSQLSynchQuery<ODocument>("select @rid.asString() as id, name, description, imgSrc from projects limit 8"));
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
    public List<Map<String, Object>> simulateFeatured(String id1, String id2, String id3) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
        try {
            List<ODocument> result = db.query(new OSQLSynchQuery<ODocument>(
                    "select @rid.asString() as id, name, description, imgSrc from projects where @rid in [" + id1 + "," + id2 + "," + id3 + "]"));
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
            List<ODocument> result = db.command(new OSQLSynchQuery<ODocument>(
                    "select @rid.asString() as id, name, description, imgSrc, type, currency, targetAmount, ifnull(sum(payments.amount), 0) as currentAmount, targetDate, creationDate, payments.size() as backers " +
                            "from ?")).execute(id);
            Map<String, Object> mret = result.get(0).toMap();
            mret.remove("@rid");
            return mret;
        } finally {
            db.close();
        }
    }

    @Override
    public void createPayment(String id, double amount, String currency, String source) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");

        try {
            // insert new payment
            ODocument payment = new ODocument("payments");
            payment.field("amount", amount);
            payment.field("currency", currency);
            payment.field("source", source);
            payment.field("project", new ORecordId(id));
            payment.save();

            // add payment to list of payment
            db.command(new OCommandSQL("update " + id + " add payments = " + payment.getIdentity().toString())).execute();
        } catch (Exception e) {
            int i = 0;
        } finally {
            db.close();
        }
    }
}

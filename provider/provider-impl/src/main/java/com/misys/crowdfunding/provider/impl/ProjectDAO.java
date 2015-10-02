package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.id.ORecordId;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.sql.OCommandSQL;
import com.orientechnologies.orient.core.sql.query.OSQLSynchQuery;
import org.slf4j.Logger;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.slf4j.LoggerFactory.getLogger;


/**
 * Created by kdeveloper on 9/21/15.
 */
public class ProjectDAO implements IProjectDAO {
    private static final Logger LOGGER = getLogger(ProjectDAO.class);

    private String connectionStr;

    public ProjectDAO() {
        connectionStr = "remote:localhost/Crowdfunding";

        try {
            ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
            db.close();
        } catch (Exception e) {
            connectionStr = "remote:ptxw13040/Crowdfunding";
        }
    }

    @Override
    public List<Map<String, Object>> getProjects(String lowerBound, int number) {
        List<Map<String, Object>> ret = new ArrayList<>();
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
        try {
            List<ODocument> result = db.command(new OSQLSynchQuery<ODocument>("select @rid.asString() as id, name, description, imgSrc from projects where @rid > ? limit ?"))
                    .execute(lowerBound == null || "".equals(lowerBound) ? new ORecordId() : new ORecordId(lowerBound), number);

            for(ODocument od : result) {
                Map<String, Object> mret = od.toMap();
                mret.remove("@rid");
                ret.add(mret);
            }

        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        } finally {
            db.close();
        }
        return ret;
    }

    @Override
    public List<Map<String, Object>> simulateFeatured(List<String> ids) {
        List<Map<String, Object>> ret = new ArrayList<>();
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");
        try {

            List<ORecordId> lstId = new ArrayList<>();

            for (String id : ids) {
                lstId.add(new ORecordId(id));
            }

            List<ODocument> result = db.command(new OSQLSynchQuery<ODocument>(
                    "select @rid.asString() as id, name, description, imgSrc from projects where @rid in ?"))
                    .execute(lstId);

            for(ODocument od : result) {
                Map<String, Object> mret = od.toMap();
                mret.remove("@rid");
                ret.add(mret);
            }

        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        } finally {
            db.close();
        }
        return ret;
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
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        } finally {
            db.close();
        }
        return new HashMap<>();
    }

    @Override
    public void createPayment(String user, String projectId, double amount, String currency, String source) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");

        try {
            // insert new payment
            ODocument payment = new ODocument("payments");
            payment.field("amount", amount);
            payment.field("currency", currency);
            payment.field("source", source);
            payment.field("project", new ORecordId(projectId));
            payment.field("user", new ORecordId(user));
            payment.save();

            // add payment to list of payment
            db.command(new OCommandSQL("update " + projectId + " add payments = " + payment.getIdentity().toString())).execute();
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        } finally {
            db.close();
        }
    }
}

package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentPool;
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

    @Override
    public List<Map<String, Object>> getProjects() {
        //ODatabaseDocumentTx db = ODatabaseDocumentPool.global().acquire("remote:localhost/Crowdfunding", "admin", "admin");
        ODatabaseDocumentTx db = ODatabaseDocumentPool.global().acquire("remote:192.168.100.11/Crowdfunding", "admin", "admin");
        try {
            List<ODocument> result = db.query(new OSQLSynchQuery<ODocument>("select @rid.asString() as id, name, description, imgSrc from projects"));
            List<Map<String, Object>> ret = new ArrayList<>();

            for(ODocument od : result) {
                ret.add(od.toMap());
            }

            return ret;
        } finally {
            db.close();
        }
    }

    @Override
    public Map<String, Object> getProject(String id) {
        //ODatabaseDocumentTx db = ODatabaseDocumentPool.global().acquire("remote:localhost/Crowdfunding", "admin", "admin");
        ODatabaseDocumentTx db = ODatabaseDocumentPool.global().acquire("remote:192.168.100.11/Crowdfunding", "admin", "admin");
        try {

            List<ODocument> result = db.command(new OSQLSynchQuery<ODocument>("select @rid.asString() as id, name, description, imgSrc, type, currency, targetAmount, currentAmount, targetDate, creationDate from projects where @rid=?")).execute(id);
            return result.get(0).toMap();
        } finally {
            db.close();
        }
    }
}

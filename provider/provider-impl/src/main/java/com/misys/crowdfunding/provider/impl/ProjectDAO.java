package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.sql.query.OSQLSynchQuery;


import java.util.List;
import java.util.Map;


/**
 * Created by kdeveloper on 9/21/15.
 */
public class ProjectDAO implements IProjectDAO {

    @Override
    public Map<String, Object> getProject(String id) {
        //ODatabaseDocumentTx db = new ODatabaseDocumentTx("remote:localhost/Crowdfunding").open("admin", "admin");
        ODatabaseDocumentTx db = new ODatabaseDocumentTx("remote:192.168.100.11/Crowdfunding").open("admin", "admin");
        List<ODocument> result = db.query(new OSQLSynchQuery<ODocument>("select @rid.asString() as id, name, description, imgSrc, type, currency, targetAmount, currentAmount, targetDate, creationDate from projects where @rid="+id));

        return result.get(0).toMap();
    }
}

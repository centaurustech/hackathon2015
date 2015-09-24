package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;


/**
 * Created by kdeveloper on 9/21/15.
 */
public class ProjectDAO implements IProjectDAO {


    @Override
    public Object getProject(int id) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx("remote:localhost/Crowdfunding").open("root", "crowdfunding");
        return null;
    }
}

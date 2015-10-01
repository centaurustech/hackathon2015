package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.UserContribution;
import junit.framework.TestCase;
import org.junit.Assert;

import java.util.List;

/**
 * Created by kdeveloper on 10/1/15.
 */
public class FourreToutDAOTest extends TestCase {

    public void testGetUsersContributions() throws Exception {
        FourreToutDAO dao = new FourreToutDAO();
        List<UserContribution> listUc = dao.getUsersContributions();
        Assert.assertTrue(true);
    }
}
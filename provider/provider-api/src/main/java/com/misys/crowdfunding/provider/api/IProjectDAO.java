package com.misys.crowdfunding.provider.api;

import java.util.List;
import java.util.Map;

/**
 * Created by kdeveloper on 9/21/15.
 */
public interface IProjectDAO {
    public List<Map<String, Object>> getProjects();
    public Map<String, Object> getProject(String id);
    void createPayment(String id, double amount);
}

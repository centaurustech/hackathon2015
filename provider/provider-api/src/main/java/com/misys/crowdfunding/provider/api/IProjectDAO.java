package com.misys.crowdfunding.provider.api;

import java.util.List;
import java.util.Map;

/**
 * Created by kdeveloper on 9/21/15.
 */
public interface IProjectDAO {
    List<Map<String, Object>> getProjects(String lowerBound, int number);
    List<Map<String, Object>> simulateFeatured(List<String> ids);
    Map<String, Object> getProject(String id);
    void createPayment(String id, double amount, String currency, String source);
}

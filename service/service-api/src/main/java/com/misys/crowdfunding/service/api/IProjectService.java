package com.misys.crowdfunding.service.api;

/**
 * Created by kdeveloper on 9/21/15.
 */
public interface IProjectService {
    String getProjects(String lowerBound);
    String getFeaturedProjects(String user);
    String getProject(String id);
    void createPayment(String id, double amount, String currency, String source);
}

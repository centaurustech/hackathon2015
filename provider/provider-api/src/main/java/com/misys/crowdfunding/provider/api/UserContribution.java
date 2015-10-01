package com.misys.crowdfunding.provider.api;

/**
 * Created by kdeveloper on 10/1/15.
 */
public class UserContribution {

    private final String userId;
    private final String projectId;
    private final Double totalContribution;

    public UserContribution(String userId, String projectId, Double totalContribution) {
        this.userId = userId;
        this.projectId = projectId;
        this.totalContribution = totalContribution;
    }

    public Double getTotalContribution() {
        return totalContribution;
    }

    public String getUserId() {
        return userId;
    }

    public String getProjectId() {
        return projectId;
    }

}

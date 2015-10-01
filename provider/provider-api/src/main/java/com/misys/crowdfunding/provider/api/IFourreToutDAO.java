package com.misys.crowdfunding.provider.api;


import java.util.List;
import java.util.Map;

public interface IFourreToutDAO {

    List<UserContribution> getUsersContributions();

    Map<String, List<String>> getProjectsVsUsers();
    Map<String, List<String>> getUsersVsProjects();
}

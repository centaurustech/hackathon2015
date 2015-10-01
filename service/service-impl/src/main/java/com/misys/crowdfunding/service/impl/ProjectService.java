package com.misys.crowdfunding.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.misys.crowdfunding.provider.api.IMahoutProvider;
import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.misys.crowdfunding.service.api.IProjectService;
import org.slf4j.Logger;

import javax.inject.Inject;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import static org.slf4j.LoggerFactory.getLogger;

/**
 * Created by kdeveloper on 9/21/15.
 */
public class ProjectService implements IProjectService {

    private static final Logger LOGGER = getLogger(ProjectService.class);
    private final IProjectDAO projectDAO;
    private final IMahoutProvider mahoutProvider;
    private final ObjectMapper objectMapper;

    @Inject
    public ProjectService(IProjectDAO projectDAO, IMahoutProvider mahoutProvider) {
        this.projectDAO = projectDAO;
        this.mahoutProvider = mahoutProvider;
        objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'"));
    }

    @Override
    public String getProjects(String lowerBound) {
        List<Map<String, Object>> data = projectDAO.getProjects(lowerBound, 12);

        try {
            return objectMapper.writeValueAsString(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    /*@Override
    public String getFeaturedProjects(String user) {
        List<Map<String, Object>> data = projectDAO.getProjects(null, 5000);

        List<String> ids = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            ids.add((String)data.get((int)(Math.random() * data.size())).get("id"));
        }

        List<Map<String, Object>> simulated = projectDAO.simulateFeatured(ids);

        try {
            return objectMapper.writeValueAsString(simulated);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }*/

    @Override
    public String getFeaturedProjects(String user) {
        List<Map<String, Object>> simulated = projectDAO.simulateFeatured(mahoutProvider.recommend(user));

        try {
            return objectMapper.writeValueAsString(simulated);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    @Override
    public String getProject(String id) {
        Map<String, Object> data = projectDAO.getProject(id);

        try {
            return objectMapper.writeValueAsString(data);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "";
    }

    @Override
    public void createPayment(String user, String projectId, double amount, String currency, String source) {
        projectDAO.createPayment(user, projectId, amount, currency, source);
        mahoutProvider.learn();
    }
}

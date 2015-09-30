package com.misys.crowdfunding.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
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
    private final ObjectMapper objectMapper;

    @Inject
    public ProjectService(IProjectDAO projectDAO) {
        this.projectDAO = projectDAO;
        objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'"));
    }

    @Override
    public String getProjects() {
        List<Map<String, Object>> data = projectDAO.getProjects();

        try {
            return objectMapper.writeValueAsString(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    @Override
    public String getFeaturedProjects() {
        List<Map<String, Object>> data = projectDAO.getProjects();

        String id1 = (String)data.get((int)(Math.random() * data.size())).get("id");
        String id2 = (String)data.get((int)(Math.random() * data.size())).get("id");
        String id3 = (String)data.get((int)(Math.random() * data.size())).get("id");

        List<Map<String, Object>> simulated = projectDAO.simulateFeatured(id1, id2, id3);

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
    public void createPayment(String id, double amount, String currency, String source) {
        projectDAO.createPayment(id, amount, currency, source);
    }
}

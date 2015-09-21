package com.misys.crowdfunding.rest;


import com.misys.crowdfunding.service.api.IProjectService;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static org.slf4j.LoggerFactory.getLogger;

/**
 * Created by kdeveloper on 9/21/15.
 */
@Path("/project")
public class ProjectResource {

    private static final Logger LOGGER = getLogger(ProjectResource.class);
    private final IProjectService projectService;

    @Inject
    public ProjectResource(IProjectService projectService) {
        this.projectService = projectService;
    }

    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public String getProject(int id) {
        return projectService.getProject(id);
    }
}
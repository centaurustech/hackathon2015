package com.misys.crowdfunding.rest;


import com.misys.crowdfunding.service.api.IProjectService;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.*;
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
    @Path("/")
    @Produces({MediaType.APPLICATION_JSON})
    public String getProjects(@DefaultValue("") @QueryParam("lowerBound") String lowerBound) {
        return projectService.getProjects(lowerBound);
    }

    @GET
    @Path("/featured")
    @Produces({MediaType.APPLICATION_JSON})
    public String getFeaturedProjects(@QueryParam("userId") String user) {
        return projectService.getFeaturedProjects(user);
    }

    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public String getProject(@QueryParam("user") String user, @PathParam("id") String id) {
        //return projectService.getProject("#67:911");
        return projectService.getProject("#67:903");
    }
}

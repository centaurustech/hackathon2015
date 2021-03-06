package com.misys.crowdfunding.rest;


import com.misys.crowdfunding.service.api.IProjectService;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static org.slf4j.LoggerFactory.getLogger;

/**
 * Created by kdeveloper on 9/21/15.
 */
@Path("/payment")
public class PaymentResource {

    private static final Logger LOGGER = getLogger(PaymentResource.class);
    private final IProjectService projectService;

    @Inject
    public PaymentResource(IProjectService projectService) {
        this.projectService = projectService;
    }

    @POST
    @Path("/create")
    @Produces({MediaType.APPLICATION_JSON})
    public Response createPayment(@FormParam("userId") String user,
                                  @FormParam("id") String projectId,
                                  @FormParam("amount") double amount,
                                  @FormParam("currency") String currency,
                                  @FormParam("source") String source) {
            projectService.createPayment(user, projectId, amount, currency, source);
            return Response.ok().build();
        }
    }

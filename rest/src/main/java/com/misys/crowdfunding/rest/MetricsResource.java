package com.misys.crowdfunding.rest;

import com.misys.crowdfunding.service.api.IMetricsService;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static org.slf4j.LoggerFactory.getLogger;

/**
 * Created by kdeveloper on 9/30/15.
 */
@Path("/metrics")
public class MetricsResource {
    private static final Logger LOGGER = getLogger(ProjectResource.class);
    private final IMetricsService metricsService;

    @Inject
    public MetricsResource(IMetricsService metricsService) {
        this.metricsService = metricsService;
    }

    @GET
    @Path("/funds")
    @Produces({MediaType.APPLICATION_JSON})
    public String getFunds() {
        return metricsService.getFunds("json");
    }

    @GET
    @Path("/funds/xml")
    @Produces({MediaType.APPLICATION_XML})
    public String getFundsAsXML() {
        return metricsService.getFunds("xml");
    }

    @GET
    @Path("/funds/csv")
    @Produces({MediaType.TEXT_PLAIN})
    public String getFundsAsCSV() {
        return metricsService.getFunds("csv");
    }

    @GET
    @Path("/investors")
    @Produces({MediaType.APPLICATION_JSON})
    public String getInvestors() {
        return metricsService.getInvestors("json");
    }

    @GET
    @Path("/investors/xml")
    @Produces({MediaType.APPLICATION_XML})
    public String getInvestorsAsXML() {
        return metricsService.getInvestors("xml");
    }

    @GET
    @Path("/investors/csv")
    @Produces({MediaType.TEXT_PLAIN})
    public String getInvestorsAsCSV() {
        return metricsService.getInvestors("csv");
    }
}

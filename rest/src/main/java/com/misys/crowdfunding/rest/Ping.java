package com.misys.crowdfunding.rest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/ping")
public class Ping {
    @GET
    public String pong() {
        return "pong";
    }
}

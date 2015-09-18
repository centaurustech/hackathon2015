package com.trmsys.boat.rest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/ping")
public class Ping {
    @GET
    public String ping() {
        return "pong";
    }
}

package com.misys.crowdfunding.service.impl;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.Version;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.misys.crowdfunding.service.api.IMetricsService;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by kdeveloper on 9/30/15.
 */
public class MetricsService implements IMetricsService {

    private final ObjectMapper objectMapper;

    public MetricsService() {
        objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'"));
    }

    @Override
    public String getInvestors() {
        return "[\n" +
                "  {\n" +
                "    \"Olivia\": 1415.266\n" +
                "  },\n" +
                "  {\n" +
                "    \"Noah\": 4242.42\n" +
                "  },\n" +
                "  {\n" +
                "    \"Jacob\": 12486.4158\n" +
                "  },\n" +
                "  {\n" +
                "    \"William\": 15658.465\n" +
                "  },\n" +
                "  {\n" +
                "    \"Emma\": 44821.156\n" +
                "  },\n" +
                "  {\n" +
                "    \"Sophia\": 51584.189\n" +
                "  },\n" +
                "  {\n" +
                "    \"Mason\": 78242.41\n" +
                "  },\n" +
                "  {\n" +
                "    \"Isabella\": 78966.156\n" +
                "  },\n" +
                "  {\n" +
                "    \"Liam\": 168163.415\n" +
                "  },\n" +
                "  {\n" +
                "    \"Others\": 79846.54\n" +
                "  }\n" +
                "]";
    }

    @Override
    public String getFunds() {
        return "[\n" +
                "  {\n" +
                "    \"2015-10-21T00:00Z\": 4242.42\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-22T00:00Z\": 1415.266\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-23T00:00Z\": 168163.415\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-24T00:00Z\": 44821.156\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-25T00:00Z\": 78242.41\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-26T00:00Z\": 79846.54\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-27T00:00Z\": 51584.189\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-28T00:00Z\": 12486.4158\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-29T00:00Z\": 78966.156\n" +
                "  },\n" +
                "  {\n" +
                "    \"2015-10-30T00:00Z\": 15658.465\n" +
                "  }\n" +
                "]";
    }
}

package com.misys.crowdfunding.service.impl;

import com.misys.crowdfunding.service.api.IMetricsService;

/**
 * Created by kdeveloper on 9/30/15.
 */
public class MetricsService implements IMetricsService {
    @Override
    public String getInvestors(String type) {
        if (type.toLowerCase().equals("csv"))
            return "Olivia,1415.266\n" +
                    "Noah,4242.42\n" +
                    "Jacob,12486.4158\n" +
                    "William,15658.465\n" +
                    "Emma,44821.156\n" +
                    "Sophia,51584.189\n" +
                    "Mason,78242.41\n" +
                    "Isabella,78966.156\n" +
                    "Liam,168163.415\n" +
                    "Others,79846.54";

        if (type.toLowerCase().equals("xml"))
            return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                    "<metrics>\n" +
                    "  <metric>\n" +
                    "    <name>Olivia</name>\n" +
                    "    <value>1415.266</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Noah</name>\n" +
                    "    <value>4242.42</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Jacob</name>\n" +
                    "    <value>12486.4158</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>William</name>\n" +
                    "    <value>15658.465</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Emma</name>\n" +
                    "    <value>44821.156</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Sophia</name>\n" +
                    "    <value>51584.189</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Mason</name>\n" +
                    "    <value>78242.41</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Isabella</name>\n" +
                    "    <value>78966.156</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Liam</name>\n" +
                    "    <value>168163.415</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <name>Others</name>\n" +
                    "    <value>79846.54</value>\n" +
                    "  </metric>\n" +
                    "</metrics>";

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
    public String getFunds(String type) {
        if (type.toLowerCase().equals("csv"))
            return "\"2015-10-21T00:00Z\",4242.42\n" +
                    "\"2015-10-22T00:00Z\",1415.266\n" +
                    "\"2015-10-23T00:00Z\",168163.415\n" +
                    "\"2015-10-24T00:00Z\",44821.156\n" +
                    "\"2015-10-25T00:00Z\",78242.41\n" +
                    "\"2015-10-26T00:00Z\",79846.54\n" +
                    "\"2015-10-27T00:00Z\",51584.189\n" +
                    "\"2015-10-28T00:00Z\",12486.4158\n" +
                    "\"2015-10-29T00:00Z\",78966.156\n" +
                    "\"2015-10-30T00:00Z\",15658.465\n";

        if (type.toLowerCase().equals("xml"))
            return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                    "<metrics>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-21T00:00Z</date>\n" +
                    "    <value>4242.42</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-22T00:00Z</date>\n" +
                    "    <value>1415.266</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-23T00:00Z</date>\n" +
                    "    <value>168163.415</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-24T00:00Z</date>\n" +
                    "    <value>44821.156</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-25T00:00Z</date>\n" +
                    "    <value>78242.41</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-26T00:00Z</date>\n" +
                    "    <value>79846.54</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-27T00:00Z</date>\n" +
                    "    <value>51584.189</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-28T00:00Z</date>\n" +
                    "    <value>12486.4158</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-29T00:00Z</date>\n" +
                    "    <value>78966.156</value>\n" +
                    "  </metric>\n" +
                    "  <metric>\n" +
                    "    <date>2015-10-30T00:00Z</date>\n" +
                    "    <value>15658.465</value>\n" +
                    "  </metric>\n" +
                    "</metrics>";

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

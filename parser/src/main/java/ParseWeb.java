import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;

public class ParseWeb {

    public static final String MAIN_URL = "https://www.kickstarter.com/discover/advanced?format=json&page=";
    public static final String NAME = "outputjson/data";
    public static final String EXT = ".json";

    public static final int PG_NUMBER = 200;

    public static void main (String[] args) {


        for (int i = 1; i < PG_NUMBER + 1; i++ ) {
            try {
                FileWriter outFile = null;
                outFile = new FileWriter(getFileName(i));

                PrintWriter out = new PrintWriter(outFile);

                ParseWeb parse = new ParseWeb();
                out.print(parse.parse(i));

                out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static String getUrl(int page) {
        return MAIN_URL + page;
    }

    public static String getFileName (int page) {
        return NAME + page + EXT;
    }

    private String parse(int page) {
        try {
            String urlStr = getUrl(page);
            System.out.println(urlStr);

            URL url = new URL(urlStr);
            HttpURLConnection uc = (HttpURLConnection) url.openConnection();

            uc.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB;     rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729)");

            InputStreamReader input = new InputStreamReader(uc.getInputStream());
            BufferedReader in = new BufferedReader(input);
            String inputLine;
            StringBuffer strb = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                strb.append(inputLine);
            }

            in.close();

            return jsonify(strb.toString(), page);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    private String jsonify(String json, int page){
        JSONParser parser = new JSONParser();
        JSONArray resultArray = new JSONArray();

        try {
            Map jsonMap = (Map) parser.parse(json);
            JSONArray projectArray = (JSONArray) jsonMap.get("projects");
            for(Object obj: projectArray){
                JSONObject projectInput = (JSONObject) obj;
                JSONObject projectOutput = new JSONObject();

                projectOutput.put("name", projectInput.get("name"));
                projectOutput.put("description", projectInput.get("blurb"));
                projectOutput.put("targetAmount", projectInput.get("goal"));
                projectOutput.put("currency", projectInput.get("currency"));
                projectOutput.put("targetDate", projectInput.get("deadline"));
                projectOutput.put("creationDate", projectInput.get("created_at"));

                JSONObject photoMap = (JSONObject) projectInput.get("photo");
                projectOutput.put("imgSrc", photoMap.get("ed"));

                JSONObject categoryMap = (JSONObject) projectInput.get("category");
                projectOutput.put("category", categoryMap.get("slug"));

                resultArray.add(projectOutput);
            }

        } catch (ParseException e) {
            e.printStackTrace();
        }

        return resultArray.toString();
    }

}
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.metadata.schema.OType;
import com.orientechnologies.orient.core.record.impl.ODocument;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

/**
 * Created by kdeveloper on 9/30/15.
 */
public class ProjectsImport {
    public static String connectionStr = "remote:10.25.31.150/Crowdfunding";
    public static void main(String[] args) {

        System.out.println("Hello !");

        for (int i = 1; i<=200; i++) {

            try {
                String jsonProjects = new Scanner(new File("/ssd/hackathon2015/projects/data" + String.valueOf(i) + ".json"), "UTF-8").useDelimiter("\\A").next();
                ObjectMapper om = new ObjectMapper();
                List<JsonProject> listOfProjects = om.readValue(jsonProjects, new TypeReference<List<JsonProject>>() {
                });
                for (JsonProject project : listOfProjects) {
                    System.out.println("Inserting " + project.getName());
                    createProject(project);
                }

            } catch (Exception e) {
                System.out.println("Exception : " + e);
                e.printStackTrace();
            }
        }


    }

    public static void createProject(JsonProject jsonProject) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");

        try {
            // insert new payment
            ODocument project = new ODocument("projects_test");
            project.field("category", jsonProject.getCategory());
            project.field("creationDate", new Date(jsonProject.getCreationDate() * 1000L));
            project.field("currency", jsonProject.getCurrency());
            project.field("description", jsonProject.getDescription());
            project.field("imgSrc", jsonProject.getImgSrc());
            project.field("name", jsonProject.getName());
            project.field("targetAmount", jsonProject.getTargetAmount());
            project.field("targetDate", new Date(jsonProject.getTargetDate() * 1000L));
            project.field("type", "reward"); // unknown for kickstarter
            project.field("payments", new ArrayList<>(), OType.LINKSET);
            project.save();
        } finally {
            db.close();
        }
    }
}

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.record.impl.ODocument;

import java.io.File;
import java.util.List;
import java.util.Scanner;


public class UsersImport {
    public static String connectionStr = "remote:10.25.31.150/Crowdfunding";
    public static void main(String[] args) {

        System.out.println("Hello !");

        try {
            String jsonUsers = new Scanner(new File("/ssd/hackathon2015/users/Users.json"), "UTF-8").useDelimiter("\\A").next();
            ObjectMapper om = new ObjectMapper();
            List<JsonUser> listOfUsers = om.readValue(jsonUsers, new TypeReference<List<JsonUser>>() {
            });
            for (JsonUser user : listOfUsers) {
                System.out.println("Inserting " + user.getFirstName() + " " + user.getLastName());
                createUser(user);
            }

        } catch (Exception e) {
            System.out.println("Exception : " + e);
            e.printStackTrace();
        }
    }

    public static void createUser(JsonUser jsonUser) {
        ODatabaseDocumentTx db = new ODatabaseDocumentTx(connectionStr).open("admin", "admin");

        try {
            // insert new payment
            ODocument user = new ODocument("users");
            user.field("childLessThanTwo", jsonUser.getChildLessThantwo());
            user.field("clothing", jsonUser.getClothing());
            user.field("domestic", jsonUser.getDomestic());
            user.field("education", jsonUser.getEducation());
            user.field("entertainment", jsonUser.getEntertainment());
            user.field("expenditure", jsonUser.getExpenditure());
            user.field("familySize", jsonUser.getFamilySize());
            user.field("fees", jsonUser.getFees());
            user.field("females", jsonUser.getFemales());
            user.field("firstName", jsonUser.getFirstName());
            user.field("foodAtHome", jsonUser.getFoodAtHome());
            user.field("foodAway", jsonUser.getFoodAway());
            user.field("footwear", jsonUser.getFootwear());
            user.field("furniture", jsonUser.getFurniture());
            user.field("gasoline", jsonUser.getGasoline());
            user.field("health", jsonUser.getHealth());
            user.field("houseHoldTenure", jsonUser.getHouseHoldTenure());
            user.field("houseType", jsonUser.getHouseType());
            user.field("housing", jsonUser.getHousing());
            user.field("juniorFemales", jsonUser.getJuniorFemales());
            user.field("juniorMales", jsonUser.getJuniorMales());
            user.field("lastName", jsonUser.getLastName());
            user.field("linen", jsonUser.getLinen());
            user.field("localTransportation", jsonUser.getLocalTransportation());
            user.field("login", jsonUser.getLogin());
            user.field("majorHouseHold", jsonUser.getMajorHousehold());
            user.field("males", jsonUser.getMales());
            user.field("read", jsonUser.getRead());
            user.field("referenceAge", jsonUser.getReferenceAge());
            user.field("referenceEducation", jsonUser.getReferenceEducation());
            user.field("smallApp", jsonUser.getSmallAppliance());
            user.field("telephone", jsonUser.getTelephone());
            user.field("tobacco", jsonUser.getTobacco());
            user.field("toys", jsonUser.getToys());
            user.field("transport", jsonUser.getTransportation());
            user.save();
        } finally {
            db.close();
        }
    }
}


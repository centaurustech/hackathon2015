package com.misys.crowdfunding.service.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.misys.crowdfunding.service.api.IProjectService;
import org.slf4j.Logger;

import javax.inject.Inject;

import static org.slf4j.LoggerFactory.getLogger;

/**
 * Created by kdeveloper on 9/21/15.
 */
public class ProjectService implements IProjectService {

    private static final Logger LOGGER = getLogger(ProjectService.class);
    private final IProjectDAO projectDAO;

    @Inject
    public ProjectService(IProjectDAO projectDAO) {
        this.projectDAO = projectDAO;
    }

    @Override
    public String getProjects() {
        // TODO call DAO and process output to json

        return "[\n" +
                "  {\n" +
                "    \"id\": \"1\",\n" +
                "    \"name\": \"CrowdFunding\",\n" +
                "    \"description\": \"Our fantastic project that will revolutionize the world\",\n" +
                "    \"imgSrc\": \"https://resistanceinventerre.files.wordpress.com/2013/10/asumo2.jpg?w=300&h=277\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": \"2\",\n" +
                "    \"name\": \"Save the rock\",\n" +
                "    \"description\": \"Some concrete funding !\",\n" +
                "    \"imgSrc\": \"http://www.megaconnard.com/wp-content/uploads/2011/02/Darwin.jpg\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": \"3\",\n" +
                "    \"name\": \"New coffee brand\",\n" +
                "    \"description\": \"We need more cafein in our sweet beverage\",\n" +
                "    \"imgSrc\": \"http://rlv.zcache.fr/cafe_de_boissons_faites_les_choses_stupides_carte_postale-r049dd921942847f684201d09f0081ad8_vgbaq_8byvr_324.jpg\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": \"4\",\n" +
                "    \"name\": \"Waterproof ipad\",\n" +
                "    \"description\": \"An underwater version of the well known device\",\n" +
                "    \"imgSrc\": \"http://www.lebonbuzz.net/wp-content/uploads/2015/09/354.jpg\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": \"5\",\n" +
                "    \"name\": \"Shoes umbrella\",\n" +
                "    \"description\": \"Never wet again... ever\",\n" +
                "    \"imgSrc\": \"http://tooply.com/photo/item/570/5001581126219.jpg\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": \"6\",\n" +
                "    \"name\": \"Ecolosmoke\",\n" +
                "    \"description\": \"Smoking CAN be ecological !\",\n" +
                "    \"imgSrc\": \"http://tooply.com/photo/item/570/4375366211217.jpg\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": \"7\",\n" +
                "    \"name\": \"Pastafarianism\",\n" +
                "    \"description\": \"In pasta we trust\",\n" +
                "    \"imgSrc\": \"http://kevenroy.ca/wp-content/uploads/2015/02/une-pastafarianisme-660x330.jpg\"\n" +
                "  }\n" +
                "]";
    }

    @Override
    public String getProject(int id) {
        // TODO call DAO and process output to json

        final String ret = "{\n" +
                "  \"id\": \"TOFILLUP\",\n" +
                "  \"name\": \"CrowdFunding\",\n" +
                "  \"description\": \"Our fantastic project that will revolutionize the world\",\n" +
                "  \"imgSrc\": \"https://resistanceinventerre.files.wordpress.com/2013/10/asumo2.jpg?w=300&h=277\",\n" +
                "  \"type\": \"Donation\",\n" +
                "  \"currency\": \"EUR\",\n" +
                "  \"targetAmount\": \"20000\",\n" +
                "  \"currentAmount\": \"8547\",\n" +
                "  \"targetDate\": \"2015-12-22T11:27:58.614+04:00\",\n" +
                "  \"backers\": \"12\"\n" +
                "}";

        return ret.replace("TOFILLUP", Integer.toString(id));
    }
}

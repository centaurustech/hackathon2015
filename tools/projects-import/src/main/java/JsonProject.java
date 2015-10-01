import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "targetAmount",
        "targetDate",
        "name",
        "description",
        "currency",
        "creationDate",
        "category",
        "imgSrc"
})
public class JsonProject {

    @JsonProperty("targetAmount")
    private Double targetAmount;
    @JsonProperty("targetDate")
    private Integer targetDate;
    @JsonProperty("name")
    private String name;
    @JsonProperty("description")
    private String description;
    @JsonProperty("currency")
    private String currency;
    @JsonProperty("creationDate")
    private Integer creationDate;
    @JsonProperty("category")
    private String category;
    @JsonProperty("imgSrc")
    private String imgSrc;

    /**
     *
     * @return
     * The targetAmount
     */
    @JsonProperty("targetAmount")
    public Double getTargetAmount() {
        return targetAmount;
    }

    /**
     *
     * @param targetAmount
     * The targetAmount
     */
    @JsonProperty("targetAmount")
    public void setTargetAmount(Double targetAmount) {
        this.targetAmount = targetAmount;
    }

    /**
     *
     * @return
     * The targetDate
     */
    @JsonProperty("targetDate")
    public Integer getTargetDate() {
        return targetDate;
    }

    /**
     *
     * @param targetDate
     * The targetDate
     */
    @JsonProperty("targetDate")
    public void setTargetDate(Integer targetDate) {
        this.targetDate = targetDate;
    }

    /**
     *
     * @return
     * The name
     */
    @JsonProperty("name")
    public String getName() {
        return name;
    }

    /**
     *
     * @param name
     * The name
     */
    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    /**
     *
     * @return
     * The description
     */
    @JsonProperty("description")
    public String getDescription() {
        return description;
    }

    /**
     *
     * @param description
     * The description
     */
    @JsonProperty("description")
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     *
     * @return
     * The currency
     */
    @JsonProperty("currency")
    public String getCurrency() {
        return currency;
    }

    /**
     *
     * @param currency
     * The currency
     */
    @JsonProperty("currency")
    public void setCurrency(String currency) {
        this.currency = currency;
    }

    /**
     *
     * @return
     * The creationDate
     */
    @JsonProperty("creationDate")
    public Integer getCreationDate() {
        return creationDate;
    }

    /**
     *
     * @param creationDate
     * The creationDate
     */
    @JsonProperty("creationDate")
    public void setCreationDate(Integer creationDate) {
        this.creationDate = creationDate;
    }

    /**
     *
     * @return
     * The category
     */
    @JsonProperty("category")
    public String getCategory() {
        return category;
    }

    /**
     *
     * @param category
     * The category
     */
    @JsonProperty("category")
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     *
     * @return
     * The imgSrc
     */
    @JsonProperty("imgSrc")
    public String getImgSrc() {
        return imgSrc;
    }

    /**
     *
     * @param imgSrc
     * The imgSrc
     */
    @JsonProperty("imgSrc")
    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }



}

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "UserId",
        "Login",
        "FirstName",
        "LastName",
        "FamilySize",
        "Males",
        "Females",
        "JuniorMales",
        "JuniorFemales",
        "ChildLessThantwo",
        "Expenditure",
        "FoodAtHome",
        "FoodAway",
        "Housing",
        "Telephone",
        "Domestic",
        "Linen",
        "Furniture",
        "MajorHousehold",
        "SmallAppliance",
        "Clothing",
        "Footwear",
        "Gasoline",
        "Transportation",
        "LocalTransportation",
        "Health",
        "Entertainment",
        "Fees",
        "Toys",
        "Read",
        "Education",
        "Tobacco",
        "ReferenceAge",
        "ReferenceEducation",
        "HouseHoldTenure",
        "HouseType"
})
public class JsonUser {

    @JsonProperty("UserId")
    private Integer UserId;
    @JsonProperty("Login")
    private String Login;
    @JsonProperty("FirstName")
    private String FirstName;
    @JsonProperty("LastName")
    private String LastName;
    @JsonProperty("FamilySize")
    private Integer FamilySize;
    @JsonProperty("Males")
    private Integer Males;
    @JsonProperty("Females")
    private Integer Females;
    @JsonProperty("JuniorMales")
    private Integer JuniorMales;
    @JsonProperty("JuniorFemales")
    private Integer JuniorFemales;
    @JsonProperty("ChildLessThantwo")
    private Integer ChildLessThantwo;
    @JsonProperty("Expenditure")
    private Integer Expenditure;
    @JsonProperty("FoodAtHome")
    private Integer FoodAtHome;
    @JsonProperty("FoodAway")
    private Integer FoodAway;
    @JsonProperty("Housing")
    private Integer Housing;
    @JsonProperty("Telephone")
    private Integer Telephone;
    @JsonProperty("Domestic")
    private Integer Domestic;
    @JsonProperty("Linen")
    private Integer Linen;
    @JsonProperty("Furniture")
    private Integer Furniture;
    @JsonProperty("MajorHousehold")
    private Integer MajorHousehold;
    @JsonProperty("SmallAppliance")
    private Integer SmallAppliance;
    @JsonProperty("Clothing")
    private Integer Clothing;
    @JsonProperty("Footwear")
    private Integer Footwear;
    @JsonProperty("Gasoline")
    private Integer Gasoline;
    @JsonProperty("Transportation")
    private Integer Transportation;
    @JsonProperty("LocalTransportation")
    private Integer LocalTransportation;
    @JsonProperty("Health")
    private Integer Health;
    @JsonProperty("Entertainment")
    private Integer Entertainment;
    @JsonProperty("Fees")
    private Integer Fees;
    @JsonProperty("Toys")
    private Integer Toys;
    @JsonProperty("Read")
    private Integer Read;
    @JsonProperty("Education")
    private Integer Education;
    @JsonProperty("Tobacco")
    private Integer Tobacco;
    @JsonProperty("ReferenceAge")
    private Integer ReferenceAge;
    @JsonProperty("ReferenceEducation")
    private Integer ReferenceEducation;
    @JsonProperty("HouseHoldTenure")
    private Integer HouseHoldTenure;
    @JsonProperty("HouseType")
    private Integer HouseType;
    /**
     *
     * @return
     * The UserId
     */
    @JsonProperty("UserId")
    public Integer getUserId() {
        return UserId;
    }

    /**
     *
     * @param UserId
     * The UserId
     */
    @JsonProperty("UserId")
    public void setUserId(Integer UserId) {
        this.UserId = UserId;
    }

    /**
     *
     * @return
     * The Login
     */
    @JsonProperty("Login")
    public String getLogin() {
        return Login;
    }

    /**
     *
     * @param Login
     * The Login
     */
    @JsonProperty("Login")
    public void setLogin(String Login) {
        this.Login = Login;
    }

    /**
     *
     * @return
     * The FirstName
     */
    @JsonProperty("FirstName")
    public String getFirstName() {
        return FirstName;
    }

    /**
     *
     * @param FirstName
     * The FirstName
     */
    @JsonProperty("FirstName")
    public void setFirstName(String FirstName) {
        this.FirstName = FirstName;
    }

    /**
     *
     * @return
     * The LastName
     */
    @JsonProperty("LastName")
    public String getLastName() {
        return LastName;
    }

    /**
     *
     * @param LastName
     * The LastName
     */
    @JsonProperty("LastName")
    public void setLastName(String LastName) {
        this.LastName = LastName;
    }

    /**
     *
     * @return
     * The FamilySize
     */
    @JsonProperty("FamilySize")
    public Integer getFamilySize() {
        return FamilySize;
    }

    /**
     *
     * @param FamilySize
     * The FamilySize
     */
    @JsonProperty("FamilySize")
    public void setFamilySize(Integer FamilySize) {
        this.FamilySize = FamilySize;
    }

    /**
     *
     * @return
     * The Males
     */
    @JsonProperty("Males")
    public Integer getMales() {
        return Males;
    }

    /**
     *
     * @param Males
     * The Males
     */
    @JsonProperty("Males")
    public void setMales(Integer Males) {
        this.Males = Males;
    }

    /**
     *
     * @return
     * The Females
     */
    @JsonProperty("Females")
    public Integer getFemales() {
        return Females;
    }

    /**
     *
     * @param Females
     * The Females
     */
    @JsonProperty("Females")
    public void setFemales(Integer Females) {
        this.Females = Females;
    }

    /**
     *
     * @return
     * The JuniorMales
     */
    @JsonProperty("JuniorMales")
    public Integer getJuniorMales() {
        return JuniorMales;
    }

    /**
     *
     * @param JuniorMales
     * The JuniorMales
     */
    @JsonProperty("JuniorMales")
    public void setJuniorMales(Integer JuniorMales) {
        this.JuniorMales = JuniorMales;
    }

    /**
     *
     * @return
     * The JuniorFemales
     */
    @JsonProperty("JuniorFemales")
    public Integer getJuniorFemales() {
        return JuniorFemales;
    }

    /**
     *
     * @param JuniorFemales
     * The JuniorFemales
     */
    @JsonProperty("JuniorFemales")
    public void setJuniorFemales(Integer JuniorFemales) {
        this.JuniorFemales = JuniorFemales;
    }

    /**
     *
     * @return
     * The ChildLessThantwo
     */
    @JsonProperty("ChildLessThantwo")
    public Integer getChildLessThantwo() {
        return ChildLessThantwo;
    }

    /**
     *
     * @param ChildLessThantwo
     * The ChildLessThantwo
     */
    @JsonProperty("ChildLessThantwo")
    public void setChildLessThantwo(Integer ChildLessThantwo) {
        this.ChildLessThantwo = ChildLessThantwo;
    }

    /**
     *
     * @return
     * The Expenditure
     */
    @JsonProperty("Expenditure")
    public Integer getExpenditure() {
        return Expenditure;
    }

    /**
     *
     * @param Expenditure
     * The Expenditure
     */
    @JsonProperty("Expenditure")
    public void setExpenditure(Integer Expenditure) {
        this.Expenditure = Expenditure;
    }

    /**
     *
     * @return
     * The FoodAtHome
     */
    @JsonProperty("FoodAtHome")
    public Integer getFoodAtHome() {
        return FoodAtHome;
    }

    /**
     *
     * @param FoodAtHome
     * The FoodAtHome
     */
    @JsonProperty("FoodAtHome")
    public void setFoodAtHome(Integer FoodAtHome) {
        this.FoodAtHome = FoodAtHome;
    }

    /**
     *
     * @return
     * The FoodAway
     */
    @JsonProperty("FoodAway")
    public Integer getFoodAway() {
        return FoodAway;
    }

    /**
     *
     * @param FoodAway
     * The FoodAway
     */
    @JsonProperty("FoodAway")
    public void setFoodAway(Integer FoodAway) {
        this.FoodAway = FoodAway;
    }

    /**
     *
     * @return
     * The Housing
     */
    @JsonProperty("Housing")
    public Integer getHousing() {
        return Housing;
    }

    /**
     *
     * @param Housing
     * The Housing
     */
    @JsonProperty("Housing")
    public void setHousing(Integer Housing) {
        this.Housing = Housing;
    }

    /**
     *
     * @return
     * The Telephone
     */
    @JsonProperty("Telephone")
    public Integer getTelephone() {
        return Telephone;
    }

    /**
     *
     * @param Telephone
     * The Telephone
     */
    @JsonProperty("Telephone")
    public void setTelephone(Integer Telephone) {
        this.Telephone = Telephone;
    }

    /**
     *
     * @return
     * The Domestic
     */
    @JsonProperty("Domestic")
    public Integer getDomestic() {
        return Domestic;
    }

    /**
     *
     * @param Domestic
     * The Domestic
     */
    @JsonProperty("Domestic")
    public void setDomestic(Integer Domestic) {
        this.Domestic = Domestic;
    }

    /**
     *
     * @return
     * The Linen
     */
    @JsonProperty("Linen")
    public Integer getLinen() {
        return Linen;
    }

    /**
     *
     * @param Linen
     * The Linen
     */
    @JsonProperty("Linen")
    public void setLinen(Integer Linen) {
        this.Linen = Linen;
    }

    /**
     *
     * @return
     * The Furniture
     */
    @JsonProperty("Furniture")
    public Integer getFurniture() {
        return Furniture;
    }

    /**
     *
     * @param Furniture
     * The Furniture
     */
    @JsonProperty("Furniture")
    public void setFurniture(Integer Furniture) {
        this.Furniture = Furniture;
    }

    /**
     *
     * @return
     * The MajorHousehold
     */
    @JsonProperty("MajorHousehold")
    public Integer getMajorHousehold() {
        return MajorHousehold;
    }

    /**
     *
     * @param MajorHousehold
     * The MajorHousehold
     */
    @JsonProperty("MajorHousehold")
    public void setMajorHousehold(Integer MajorHousehold) {
        this.MajorHousehold = MajorHousehold;
    }

    /**
     *
     * @return
     * The SmallAppliance
     */
    @JsonProperty("SmallAppliance")
    public Integer getSmallAppliance() {
        return SmallAppliance;
    }

    /**
     *
     * @param SmallAppliance
     * The SmallAppliance
     */
    @JsonProperty("SmallAppliance")
    public void setSmallAppliance(Integer SmallAppliance) {
        this.SmallAppliance = SmallAppliance;
    }

    /**
     *
     * @return
     * The Clothing
     */
    @JsonProperty("Clothing")
    public Integer getClothing() {
        return Clothing;
    }

    /**
     *
     * @param Clothing
     * The Clothing
     */
    @JsonProperty("Clothing")
    public void setClothing(Integer Clothing) {
        this.Clothing = Clothing;
    }

    /**
     *
     * @return
     * The Footwear
     */
    @JsonProperty("Footwear")
    public Integer getFootwear() {
        return Footwear;
    }

    /**
     *
     * @param Footwear
     * The Footwear
     */
    @JsonProperty("Footwear")
    public void setFootwear(Integer Footwear) {
        this.Footwear = Footwear;
    }

    /**
     *
     * @return
     * The Gasoline
     */
    @JsonProperty("Gasoline")
    public Integer getGasoline() {
        return Gasoline;
    }

    /**
     *
     * @param Gasoline
     * The Gasoline
     */
    @JsonProperty("Gasoline")
    public void setGasoline(Integer Gasoline) {
        this.Gasoline = Gasoline;
    }

    /**
     *
     * @return
     * The Transportation
     */
    @JsonProperty("Transportation")
    public Integer getTransportation() {
        return Transportation;
    }

    /**
     *
     * @param Transportation
     * The Transportation
     */
    @JsonProperty("Transportation")
    public void setTransportation(Integer Transportation) {
        this.Transportation = Transportation;
    }

    /**
     *
     * @return
     * The LocalTransportation
     */
    @JsonProperty("LocalTransportation")
    public Integer getLocalTransportation() {
        return LocalTransportation;
    }

    /**
     *
     * @param LocalTransportation
     * The LocalTransportation
     */
    @JsonProperty("LocalTransportation")
    public void setLocalTransportation(Integer LocalTransportation) {
        this.LocalTransportation = LocalTransportation;
    }

    /**
     *
     * @return
     * The Health
     */
    @JsonProperty("Health")
    public Integer getHealth() {
        return Health;
    }

    /**
     *
     * @param Health
     * The Health
     */
    @JsonProperty("Health")
    public void setHealth(Integer Health) {
        this.Health = Health;
    }

    /**
     *
     * @return
     * The Entertainment
     */
    @JsonProperty("Entertainment")
    public Integer getEntertainment() {
        return Entertainment;
    }

    /**
     *
     * @param Entertainment
     * The Entertainment
     */
    @JsonProperty("Entertainment")
    public void setEntertainment(Integer Entertainment) {
        this.Entertainment = Entertainment;
    }

    /**
     *
     * @return
     * The Fees
     */
    @JsonProperty("Fees")
    public Integer getFees() {
        return Fees;
    }

    /**
     *
     * @param Fees
     * The Fees
     */
    @JsonProperty("Fees")
    public void setFees(Integer Fees) {
        this.Fees = Fees;
    }

    /**
     *
     * @return
     * The Toys
     */
    @JsonProperty("Toys")
    public Integer getToys() {
        return Toys;
    }

    /**
     *
     * @param Toys
     * The Toys
     */
    @JsonProperty("Toys")
    public void setToys(Integer Toys) {
        this.Toys = Toys;
    }

    /**
     *
     * @return
     * The Read
     */
    @JsonProperty("Read")
    public Integer getRead() {
        return Read;
    }

    /**
     *
     * @param Read
     * The Read
     */
    @JsonProperty("Read")
    public void setRead(Integer Read) {
        this.Read = Read;
    }

    /**
     *
     * @return
     * The Education
     */
    @JsonProperty("Education")
    public Integer getEducation() {
        return Education;
    }

    /**
     *
     * @param Education
     * The Education
     */
    @JsonProperty("Education")
    public void setEducation(Integer Education) {
        this.Education = Education;
    }

    /**
     *
     * @return
     * The Tobacco
     */
    @JsonProperty("Tobacco")
    public Integer getTobacco() {
        return Tobacco;
    }

    /**
     *
     * @param Tobacco
     * The Tobacco
     */
    @JsonProperty("Tobacco")
    public void setTobacco(Integer Tobacco) {
        this.Tobacco = Tobacco;
    }

    /**
     *
     * @return
     * The ReferenceAge
     */
    @JsonProperty("ReferenceAge")
    public Integer getReferenceAge() {
        return ReferenceAge;
    }

    /**
     *
     * @param ReferenceAge
     * The ReferenceAge
     */
    @JsonProperty("ReferenceAge")
    public void setReferenceAge(Integer ReferenceAge) {
        this.ReferenceAge = ReferenceAge;
    }

    /**
     *
     * @return
     * The ReferenceEducation
     */
    @JsonProperty("ReferenceEducation")
    public Integer getReferenceEducation() {
        return ReferenceEducation;
    }

    /**
     *
     * @param ReferenceEducation
     * The ReferenceEducation
     */
    @JsonProperty("ReferenceEducation")
    public void setReferenceEducation(Integer ReferenceEducation) {
        this.ReferenceEducation = ReferenceEducation;
    }

    /**
     *
     * @return
     * The HouseHoldTenure
     */
    @JsonProperty("HouseHoldTenure")
    public Integer getHouseHoldTenure() {
        return HouseHoldTenure;
    }

    /**
     *
     * @param HouseHoldTenure
     * The HouseHoldTenure
     */
    @JsonProperty("HouseHoldTenure")
    public void setHouseHoldTenure(Integer HouseHoldTenure) {
        this.HouseHoldTenure = HouseHoldTenure;
    }

    /**
     *
     * @return
     * The HouseType
     */
    @JsonProperty("HouseType")
    public Integer getHouseType() {
        return HouseType;
    }

    /**
     *
     * @param HouseType
     * The HouseType
     */
    @JsonProperty("HouseType")
    public void setHouseType(Integer HouseType) {
        this.HouseType = HouseType;
    }

}
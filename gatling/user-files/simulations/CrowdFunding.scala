
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class CrowdFunding extends Simulation {

    val baseURL = "http://10.25.30.127:8181";
	val httpProtocol = http
		.baseURL( baseURL)
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.(t|o)tf""", """.*\.png"""), WhiteList())

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Accept" -> "application/json, text/javascript, */*; q=0.01",
		"X-Requested-With" -> "XMLHttpRequest")

	val scn = scenario("CrowdFunding")
		.exec(http("homepage")
			.get("/crofu/index.html")
			.headers(headers_0))
		.pause(2)
		.exec(http("projectList")
			.get("/crofu/crowdfunding.html")
            .headers(headers_1))
        .pause(2)
        .exec(http("projectView")
             .get( "/api/project")
             .headers(headers_1))

//	setUp(scn.inject(atOnceUsers(1000))).protocols(httpProtocol)
	setUp(scn.inject(rampUsers(10000) over (10 seconds))).protocols(httpProtocol)
}
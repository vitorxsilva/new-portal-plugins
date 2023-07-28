package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
       plugin = {"json:target/reports/cucumberTestes.json", "html:target/reports/"},
        features = "src/test/resources/features",
        glue = {"steps"},
       tags = {"@usuario-cadastrado-portal,@usuario-não-cadastrado"}
)
public class RunTestes extends RunBase{
@AfterClass
    public static void stop(){
    getDriver().quit();
}
}

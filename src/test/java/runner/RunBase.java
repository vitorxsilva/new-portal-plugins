package runner;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import java.util.concurrent.TimeUnit;

public class RunBase {

   public static WebDriver driver;
    public static WebDriver getDriver (){
        return driver;
    }

    public static WebDriver initDriver (String browser){
if (driver !=null){
    driver.quit();
}
        switch (browser){
            case "chrome":

                driver = new ChromeDriver();

                break;

            case "firefox":
                driver = new FirefoxDriver();
               break;
            case "edge":
                throw new IllegalArgumentException("O navegdor EDGE AINDA NÃO é suportado");

            default:
                throw new IllegalArgumentException("Navegador nao encontrado...Passe um navegador valido");
        }

        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.manage().window().setSize(new Dimension(1440,900));
        return driver;
    }

}

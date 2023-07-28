package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunTestes;
import support.SupportEnv;

public class LogonPage extends RunTestes {


    private By botaoAcessarConta = By.className("bg-blue-700");
    private By campoEmail = By.id("email");
    private By campoPassword = By.id("password");

    private String URLZENDESK = "https://poinng1.zendesk.com/";

    public void acessarAplicacao() {
        initDriver("chrome");
        getDriver().get(SupportEnv.getEnv());
    }

    public void preencherEmail(String email) {

        getDriver().findElement(campoEmail).sendKeys(email);
    }

    public void preencherSenha(String password) {

        getDriver().findElement(campoPassword).sendKeys(password);
    }

    public void clickLogin() {
        getDriver().findElement(botaoAcessarConta).click();
    }


    public void acessarZendesk() {

        getDriver().get(URLZENDESK);
    }

    public void validarSingSingOn(){
        String textoEsperado = "Sair";
        getDriver().findElement(By.className("dropdown-chevron-icon")).click();
        String textoTela = getDriver().findElement(By.linkText("Sair")).getText();
        System.out.println("Texto capturado: " +  textoTela);
        Assert.assertEquals("Os textos não são iguais", textoEsperado,textoTela);
    }
public void validarUsuarioNaoLogado () {
 WebElement elemento = getDriver().findElement(campoEmail);

    if (elemento.isDisplayed()) {
        System.out.println("O elemento 'email' está dentro da tela!");
    } else {
        System.out.println("O elemento 'email' não está visível na tela!");
    }

}

}


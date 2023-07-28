package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;
import pages.LogonPage;
import runner.RunTestes;

public class LogonSteps extends RunTestes {

    WebDriver driver;

    LogonPage logonPage = new LogonPage();

    @Dado("^que estou logado no portal$")
    public void que_estou_logado_no_portal(){
        logonPage.acessarAplicacao();
        logonPage.preencherEmail("Vitor@sensedia.com");
        logonPage.preencherSenha("123456");
        logonPage.clickLogin();
    }

    @Quando("^clico em acessar o zendesk$")
    public void clico_em_acessar_o_zendesk(){
        logonPage.acessarZendesk();
    }

    @Então("^vejo a tela de interação com o suporte zendesk$")
    public void vejo_a_tela_de_interação_com_o_suporte_zendesk()  {
        logonPage.validarSingSingOn();
    }

    @Dado("^que não estou logado no portal$")
    public void que_não_estou_logado_no_portal(){
        logonPage.acessarAplicacao();
        logonPage.validarUsuarioNaoLogado();
    }

    @Quando("^clice em acessar o zendesk$")
    public void clice_em_acessar_o_zendesk(){
        logonPage.acessarZendesk();
    }

    @Então("^vejo a tela de login do portal$")
    public void vejo_a_tela_de_login_do_portal() {
        logonPage.validarUsuarioNaoLogado();
    }
}





#language: pt
  @login
  Funcionalidade: Login
    Eu como usuario do sistema
    Quero fazer login
    Para fazer uma compra na americanas

    Contexto: Acessar aplicação
      Dado que estou na tela de login

      @login-sucesso
  Cenario: Login com sucesso
    E preencho o email "finotti@gmail.com" e senha "1234567"
    Quando clico no botão login
    Entao sou logado com sucesso

    @login-falha
    Esquema do Cenario: Credenciais invalidas
      E preencho o email "<email>" e senha "<senha>"
      Quando clico no botão login
      Então vejo a mensagem "<mensagem>"

      Exemplos:
        | email            | senha| mensagem       |
        | xxxx             | 12314| E-mail inválido.|
        | finotti@gmail.com| .... | Senha inválida.|











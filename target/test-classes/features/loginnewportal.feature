#language: pt

@cadastro_usuario
Funcionalidade: Efetuar o login no zendesk utilizando o single sing on
  Eu como usuario
  Quero me logar no zendesk atráves do portal
  Para a abertura de tickets e interações no zendesk

  @usuario-cadastrado-portal
  Cenario: Usuario com cadastro no portal
    Dado que estou logado no portal
    Quando clico em acessar o zendesk
    Então vejo a tela de interação com o suporte zendesk

    @usuario-não-cadastrado
    Cenário: Usuario sem cadastro no portal
      Dado que não estou logado no portal
      Quando clice em acessar o zendesk
      Então vejo a tela de login do portal






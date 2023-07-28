#language: pt

@cadastro_usuario
Funcionalidade: Cadastro de usuários
  Eu como visitante do sistema
  Quero me cadastrar
  Para fazer uma compra

  @cadastro-usuario-sucesso
  Cenario: Cadastro de usuário com sucesso
   Dado que estou no cadastro de usuarios
    E preencho todos os campos obrigatórios
    Quando clico em cadastrar usuario
    Então vejo de mensagem de cadastro com sucesso

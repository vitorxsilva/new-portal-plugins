$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginnewportal.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Efetuar o login no zendesk utilizando o single sing on",
  "description": "Eu como usuario\r\nQuero me logar no zendesk atráves do portal\r\nPara a abertura de tickets e interações no zendesk",
  "id": "efetuar-o-login-no-zendesk-utilizando-o-single-sing-on",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@cadastro_usuario"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Usuario com cadastro no portal",
  "description": "",
  "id": "efetuar-o-login-no-zendesk-utilizando-o-single-sing-on;usuario-com-cadastro-no-portal",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@usuario-cadastrado-portal"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou logado no portal",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "clico em acessar o zendesk",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "vejo a tela de interação com o suporte zendesk",
  "keyword": "Então "
});
formatter.match({
  "location": "LogonSteps.que_estou_logado_no_portal()"
});
formatter.result({
  "duration": 9824903500,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.8.2\u0027, revision: \u0027826dbfc730\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [76ce0e8460774ea372e7c08efd3787b2, get {url\u003dhttp://localhost:3000/tst3}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.110, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\VITOR~1.SIL\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:58556}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58556/devtoo..., se:cdpVersion: 115.0.5790.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 76ce0e8460774ea372e7c08efd3787b2\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:297)\r\n\tat pages.LogonPage.acessarAplicacao(LogonPage.java:20)\r\n\tat steps.LogonSteps.que_estou_logado_no_portal(LogonSteps.java:18)\r\n\tat ✽.Dado que estou logado no portal(loginnewportal.feature:11)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: Foi forçado o cancelamento de uma conexão existente pelo host remoto\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:73)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:99)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:297)\r\n\tat pages.LogonPage.acessarAplicacao(LogonPage.java:20)\r\n\tat steps.LogonSteps.que_estou_logado_no_portal(LogonSteps.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.io.IOException: Foi forçado o cancelamento de uma conexão existente pelo host remoto\r\n\tat sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat sun.nio.ch.SocketDispatcher.read(Unknown Source)\r\n\tat sun.nio.ch.IOUtil.readIntoNativeBuffer(Unknown Source)\r\n\tat sun.nio.ch.IOUtil.read(Unknown Source)\r\n\tat sun.nio.ch.SocketChannelImpl.read(Unknown Source)\r\n\tat io.netty.buffer.PooledByteBuf.setBytes(PooledByteBuf.java:256)\r\n\tat io.netty.buffer.AbstractByteBuf.writeBytes(AbstractByteBuf.java:1132)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doReadBytes(NioSocketChannel.java:357)\r\n\tat io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:151)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogonSteps.clico_em_acessar_o_zendesk()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LogonSteps.vejo_a_tela_de_interação_com_o_suporte_zendesk()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Usuario sem cadastro no portal",
  "description": "",
  "id": "efetuar-o-login-no-zendesk-utilizando-o-single-sing-on;usuario-sem-cadastro-no-portal",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 15,
      "name": "@usuario-não-cadastrado"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "que não estou logado no portal",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "clice em acessar o zendesk",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "vejo a tela de login do portal",
  "keyword": "Então "
});
formatter.match({
  "location": "LogonSteps.que_não_estou_logado_no_portal()"
});
formatter.result({
  "duration": 8630280800,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.8.2\u0027, revision: \u0027826dbfc730\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5ca32cd6c99c2e2beb674f3da1017ef7, get {url\u003dhttp://localhost:3000/tst3}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.110, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\VITOR~1.SIL\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:58583}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58583/devtoo..., se:cdpVersion: 115.0.5790.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5ca32cd6c99c2e2beb674f3da1017ef7\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:297)\r\n\tat pages.LogonPage.acessarAplicacao(LogonPage.java:20)\r\n\tat steps.LogonSteps.que_não_estou_logado_no_portal(LogonSteps.java:36)\r\n\tat ✽.Dado que não estou logado no portal(loginnewportal.feature:17)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: Foi forçado o cancelamento de uma conexão existente pelo host remoto\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:73)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:99)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:297)\r\n\tat pages.LogonPage.acessarAplicacao(LogonPage.java:20)\r\n\tat steps.LogonSteps.que_não_estou_logado_no_portal(LogonSteps.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.io.IOException: Foi forçado o cancelamento de uma conexão existente pelo host remoto\r\n\tat sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat sun.nio.ch.SocketDispatcher.read(Unknown Source)\r\n\tat sun.nio.ch.IOUtil.readIntoNativeBuffer(Unknown Source)\r\n\tat sun.nio.ch.IOUtil.read(Unknown Source)\r\n\tat sun.nio.ch.SocketChannelImpl.read(Unknown Source)\r\n\tat io.netty.buffer.PooledByteBuf.setBytes(PooledByteBuf.java:256)\r\n\tat io.netty.buffer.AbstractByteBuf.writeBytes(AbstractByteBuf.java:1132)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doReadBytes(NioSocketChannel.java:357)\r\n\tat io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:151)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogonSteps.clice_em_acessar_o_zendesk()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LogonSteps.vejo_a_tela_de_login_do_portal()"
});
formatter.result({
  "status": "skipped"
});
});
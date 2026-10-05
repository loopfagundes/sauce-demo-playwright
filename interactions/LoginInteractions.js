const { LoginPage } = require("../pages/LoginPage");

class LoginInteractions {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(nomeUsuario, senha) {
    await this.loginPage.nomeUsuarioInput.fill(nomeUsuario);
    await this.loginPage.senhaInput.fill(senha);
    await this.loginPage.loginButton.click();
  }

  getErrorMensagem() {
    return this.loginPage.errorMensagem;
  }
}

module.exports = { LoginInteractions };

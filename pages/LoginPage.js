class LoginPage {
  constructor(page) {
    this.page = page;
    this.nomeUsuarioInput = page.locator("#user-name");
    this.senhaInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMensagem = page.locator('[data-test="error"]');
  }
}

module.exports = { LoginPage };

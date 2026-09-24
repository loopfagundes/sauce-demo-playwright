const { LoginPage } = require("../pages/loginpage");

class LoginInteractions {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.loginPage.usernameInput.fill(username);
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.loginButton.click();
  }

  getErrorMessage() {
    return this.loginPage.errorMessage;
  }
}

module.exports = { LoginInteractions };

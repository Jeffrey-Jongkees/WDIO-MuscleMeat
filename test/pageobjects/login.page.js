import { config } from "dotenv";
config();

class LoginPage {

  elements = {

    accountButton: () => $('a[href="https://musclemeat.nl/my-account/ "]'),
    username: () => $('[id="username"]'),
    password: () => $('[id="password"]'),
    loginButton: () => $('[name="login"]'),
    logoutButton: () =>$('div.woocommerce-MyAccount-content a[href*="customer-logout"]'),
  };

  async clickAccountButton() {

    await this.elements.accountButton().waitForDisplayed();
    await this.elements.accountButton().click();
  }

  async fillInCredentials(username, password) {

    await this.elements.username().waitForDisplayed();
    await this.elements.username().setValue(username);
    await this.elements.password().setValue(password);
    await this.elements.loginButton().click();
  }

  async clickLogOutbutton() {

    await this.elements.logoutButton().click();
  }
}

export default new LoginPage();

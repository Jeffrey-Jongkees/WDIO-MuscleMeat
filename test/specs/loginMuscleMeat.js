import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

describe('Login and logout procedures', () => {

  beforeEach(() => {
    browser.maximizeWindow();
    browser.url('/')
  });
  
  it('Logging into musclemeat.nl', async () => {
    
    // Verify if the webpage is correctly loaded
    const musclemeatLogo = await $('[data-src*="musclemeat-logo"]');
    await musclemeatLogo.isDisplayed();

    // Click the account button
    await HomePage.clickAccountButton();

    // To validate the login page successfully loaded
    const inloggen = await $('//h2[text()="Inloggen"]');
    await expect(inloggen).toHaveText('INLOGGEN');

    // Fill in login credentials
    await LoginPage.fillInCredentials();

    // Verify if the Muscle Meat Logo is displayed
    await musclemeatLogo.isDisplayed();

    // To validate the successful login, check if the 'ACCOUNT' button is present
    const accountLogo = await $('//h1[text()="Account"]');
    await expect(accountLogo).toHaveText('ACCOUNT');
  });

  
  it('Logging out of musclemeat.nl', async () => {
    
    // Verify if the page is correctly loaded
    const musclemeatLogo = await $('[data-src*="musclemeat-logo"]');
    await musclemeatLogo.isDisplayed();
  
    // Click the account button
    await HomePage.clickAccountButton();

    // Verify if the Muscle Meat Logo is displayed
    await musclemeatLogo.isDisplayed();
  
    // Click the logout button (Log uit)
    await LoginPage.clickLogOutbutton();
  
    // To validate the successful logout, check if the 'INLOGGEN' text is present on the login page
    const inloggen = await $('//h2[text()="Inloggen"]');
    await expect(inloggen).toHaveText('INLOGGEN');
  });

});
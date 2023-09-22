import LoginPage from '../../pageobjects/MuscleMeat/login.js';

describe('Login and Logout Tests', () => {
  it('should log into musclemeat.nl', async () => {
    // Navigate to the website
    await browser.url('https://musclemeat.nl/');

    // Verify if the page is correctly loaded
    const musclemeatLogo = await $('[data-src*="musclemeat-logo"]');
    await musclemeatLogo.isDisplayed();

    // Click the account button
    await LoginPage.clickAccountButton();

    // To validate the login page successfully loaded
    const inloggen = await $('//h2[text()="Inloggen"]');
    await expect(inloggen).toHaveText('INLOGGEN');

    // Fill in login credentials
    await LoginPage.fillInCredentials();

    // Verify if the welcome message is displayed
    const welcomeMessage = await $('//*[contains(text(),"Hallo")]');
    await welcomeMessage.isDisplayed();

    // To validate the successful login, check if the 'Log out' button is present
    const logOutButton = await $('//a[text()="Log uit"]');
    await expect(logOutButton).toHaveText('Log uit');
  });

  
  it('should log out of musclemeat.nl', async () => {
    // Navigate to the website
    await browser.url('https://musclemeat.nl/');

    // Verify if the page is correctly loaded
    const musclemeatLogo = await $('[data-src*="musclemeat-logo"]');
    await musclemeatLogo.isDisplayed();
  
    // Click the account button
    await LoginPage.clickAccountButton();
  
    // Verify if the welcome message is displayed
    const welcomeMessage = await $('//*[contains(text(),"Hallo")]');
    await welcomeMessage.isDisplayed();
  
    // Click the logout button (Log uit)
    await LoginPage.clickLogOutbutton();
  
    // To validate the successful logout, check if the 'INLOGGEN' text is present on the login page
    const inloggen = await $('//h2[text()="Inloggen"]');
    await expect(inloggen).toHaveText('INLOGGEN');
  });

});
import LoginPage from '../../pageobjects/MuscleMeat/login.js';
import HomePage from '../../pageobjects/MuscleMeat/homepage.js';

describe('Login and Logout Tests', () => {
  it('Logging into musclemeat.nl', async () => {
    
    // Set the window size for testing
    browser.setWindowSize(1920, 700);

    // Navigate to the website
    await browser.url('https://musclemeat.nl/');

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

    // Verify if the welcome message is displayed
    const welcomeMessage = await $('//*[contains(text(),"Hallo")]');
    await welcomeMessage.isDisplayed();

    // To validate the successful login, check if the 'Log out' button is present
    const logOutButton = await $('//a[text()="Log uit"]');
    await expect(logOutButton).toHaveText('Log uit');
  });

  
  // it('Logging out of musclemeat.nl', async () => {
  //   // Navigate to the website
  //   await browser.url('https://musclemeat.nl/');

  //   // Verify if the page is correctly loaded
  //   const musclemeatLogo = await $('[data-src*="musclemeat-logo"]');
  //   await musclemeatLogo.isDisplayed();
  
  //   // Click the account button
  //   await HomePage.clickAccountButton();
  
  //   // Verify if the welcome message is displayed
  //   const welcomeMessage = await $('//*[contains(text(),"Hallo")]');
  //   await welcomeMessage.isDisplayed();
  
  //   // Click the logout button (Log uit)
  //   await LoginPage.clickLogOutbutton();
  
  //   // To validate the successful logout, check if the 'INLOGGEN' text is present on the login page
  //   const inloggen = await $('//h2[text()="Inloggen"]');
  //   await expect(inloggen).toHaveText('INLOGGEN');
  // });

});
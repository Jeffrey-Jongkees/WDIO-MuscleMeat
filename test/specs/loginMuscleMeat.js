import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import fs from "fs-extra";
import { config } from "dotenv";
config();


describe('Login and logout procedures', () => {

  beforeEach(async () => {
    
    await browser.maximizeWindow();
    await browser.url('/')
    
    // Verify if the URL is correct
    await expect(browser).toHaveUrl('https://musclemeat.nl/')
  });
  
  it('Logging into musclemeat.nl', async () => {
    
    // Click the account button
    await HomePage.clickAccountButton();

    // Fill in login credentials
    await LoginPage.fillInCredentials(
      process.env.EMAIL_ADDRESS, 
      process.env.MM_PASSWORD
    );

    // To validate the successful login, check if the 'ACCOUNT' button is present
    const accountLogo = await $('//h1[text()="Account"]');
    await expect(accountLogo).toHaveText('ACCOUNT');
  });

  
  it('Logging out of musclemeat.nl', async () => {
    
    // Click the account button
    await HomePage.clickAccountButton();
  
    // Click the logout button (Log uit)
    await LoginPage.clickLogOutbutton();
  
    // To validate the successful logout, check if the 'INLOGGEN' text is present on the login page
    const inloggen = await $('//h2[text()="Inloggen"]');
    await expect(inloggen).toHaveText('INLOGGEN');
  });


  it('Unhappy flow - Log in with invalid password', async () => {

    const jsonData = await fs.readJson("./testdata.json");
   
    // Verify if the URL is correct
    await expect(browser).toHaveUrl('https://musclemeat.nl/')

    // Click the account button
    await HomePage.clickAccountButton();

    // Fill in invalid password
    await LoginPage.fillInCredentials(
      process.env.EMAIL_ADDRESS,
      jsonData.credentials.invalidPassword);

    // To validate the ERROR message being displayed
    const error = await $('//li[contains(., "De gebruikersnaam of wachtwoord dat je hebt ingevuld is incorrect.")]');
    // To validate the ERROR message being displayed
    await expect(error).toHaveTextContaining('De gebruikersnaam of wachtwoord dat je hebt ingevuld is incorrect.');
   
  });

  it('Unhappy flow - Log in with invalid email', async () => {

    const jsonData = await fs.readJson("./testdata.json");
   
    // Verify if the URL is correct
    await expect(browser).toHaveUrl('https://musclemeat.nl/')

    // Click the account button
    await HomePage.clickAccountButton();

    // Fill in invalid emailaddress
    await LoginPage.fillInCredentials(
      jsonData.credentials.invalidEmail, 
      process.env.MM_PASSWORD);

    // To validate the ERROR message being displayed
    const error = await $('//li[contains(., "De gebruikersnaam of wachtwoord dat je hebt ingevuld is incorrect.")]');
    // To validate the ERROR message being displayed
    await expect(error).toHaveTextContaining('De gebruikersnaam of wachtwoord dat je hebt ingevuld is incorrect.');    
  });

});
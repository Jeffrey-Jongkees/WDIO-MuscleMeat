import HomePage from '../pageobjects/homepage.js'; //npx wdio run ./wdio.conf.js --spec placingAnOrder.js
import fs from "fs-extra";

let jsonData = ""

describe('Login and Logout Tests', () => {

    before(async () => {
    jsonData = await fs.readJson("./testdata.json");

    await browser.maximizeWindow();
    await browser.url('/')
    });

  
  
  it('Logging into musclemeat.nl', async () => {
    
    // Move to the Voeding dropdown menu
    await HomePage.movetoDropDownMenu(jsonData.homePage.dropdownmenus.voeding.voeding);
    await browser.pause(3000);  
  })
});
import HomePage from '../pageobjects/homepage.js'; //npx wdio run ./wdio.conf.js --spec placingAnOrder.js
import fs from "fs-extra";

let jsonData = ""

describe('Go through the ordering process', () => {

    before(async () => {
    jsonData = await fs.readJson("./testdata.json");

    await browser.maximizeWindow();
    await browser.url('/')
    });

  
  
  it('Placing an order', async () => {
    
    // Move to the VOEDING dropdown menu
    await HomePage.moveToDropDownMenu(jsonData.homePage.dropdownmenus.voeding.voeding);
    await browser.pause(3000);  
  })
});
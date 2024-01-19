//import HomePage from "../pageobjects/home.page.js"; //npx wdio run ./wdio.conf.js --spec placingAnOrder.js
import vleesEnKip from "../pageobjects/vleesEnKip.page.js";
import { moveToDropDownMenuAndSelectProduct } from "../functions.js";
import fs from "fs-extra";

let jsonData = "";

describe("Go through the ordering process", () => {
  before(async () => {
    jsonData = await fs.readJson("./testdata.json");

    await browser.maximizeWindow();
    await browser.url("/");
  });

  it("Placing an order", async () => {
    
    // Select VLEES EN KIP
    await moveToDropDownMenuAndSelectProduct(
      jsonData.homePage.dropdownmenus.voeding.voeding,
      jsonData.homePage.dropdownmenus.voeding.vleesEnKip
    );

    // Select a Vlees or Kip product
    await vleesEnKip.selectVleesKipProduct(
      jsonData.vleesEnKipPage.roastedKipfiletBlokjes.roastedKipfiletBlokjes,
      jsonData.vleesEnKipPage.roastedKipfiletBlokjes.typeOfKipfiletBlokjes.indianButter
      );
     
    // // Assertion to validate the correct page is successfully loaded
    // const expectedText = 'ROASTED KIPFILETBLOKJES'
    // const kipVlees = await $(`//h1[contains(text(), "Roasted Kipfiletblokjes")]`)
    // await expect(kipVlees).toHaveTextContaining(expectedText, {ignoreCase: true});

    // // Select the desired Roasted Chicken flavour
    // await vleesEnKip.selectSmaken(
    //   jsonData.vleesEnKipPage.roastedKipfiletBlokjes.typeOfKipfiletBlokjes.indianButter
    // );

  });
});

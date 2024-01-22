import VleesEnKip from "../pageobjects/vleesEnKip.page.js";
import AardappelRijstPastaBonen from "../pageobjects/aardappelRijstPastaBonen.page.js";
import BakolieSprays from "../pageobjects/bakolieSprays.page.js";
import Winkelwagen from "../pageobjects/winkelwagen.page.js";
import Afrekenen from "../pageobjects/afrekenen.page.js";
import { moveToDropDownMenuAndSelectProduct, selectWinkelwagen } from "../functions.js";
import { selectWinkelwagen } from "../functions.js";
import fs from "fs-extra";

let jsonData = "";

describe("Go through the ordering process", () => {
  before(async () => {
    jsonData = await fs.readJson("./testdata.json");

    await browser.maximizeWindow();
    await browser.url("/");
  });

  it("Placing an order", async () => {
    
    // Select VLEES EN KIP menu
    await moveToDropDownMenuAndSelectProduct(
      jsonData.dropdownmenus.voeding.voeding,
      jsonData.dropdownmenus.voeding.vleesEnKip
    );

    // Select Roasted Kipfiletblokjes
    await VleesEnKip.selectVleesKipProduct(
      jsonData.vleesEnKipPage.roastedKipfiletBlokjes.roastedKipfiletBlokjes,
      jsonData.vleesEnKipPage.roastedKipfiletBlokjes.typeOfKipfiletBlokjes.indianButter
      );

    // Select VLEES EN KIP menu
    await moveToDropDownMenuAndSelectProduct(
      jsonData.dropdownmenus.voeding.voeding,
      jsonData.dropdownmenus.voeding.vleesEnKip
    );

    // Select Beef meat-Balls 100% rundvlees
    await VleesEnKip.selectVleesKipProduct(
      jsonData.vleesEnKipPage.beefMeatBallsRundvlees
      );

    // Select AARDAPPEL RIJST PASTA EN BONEN menu
    await moveToDropDownMenuAndSelectProduct(
      jsonData.dropdownmenus.voeding.voeding,
      jsonData.dropdownmenus.voeding.aardappelRijstPastaEnBonen
    );

    // Select Witte Rijst
    await AardappelRijstPastaBonen.selectAardappelRijstPastaBonenProduct(
      jsonData.aardappelRijstPastaEnBonenPage.witteRijst
    )

    // Select BAKOLIE SPRAYS menu
    await moveToDropDownMenuAndSelectProduct(
      jsonData.dropdownmenus.voeding.voeding,
      jsonData.dropdownmenus.voeding.bakolieSprays
    );

    // Select Cooking Spray
    await BakolieSprays.selectCookingSpray();

    // Select WINKELWAGEN
    await selectWinkelwagen();

    // Checkout and fill in credentials and select payment option
    await Winkelwagen.clickDoorgaanNaarAfrekenenButton()

    // Agreeing with the shippping terms. Selecting AKKOORD
    await Afrekenen.clickAkkoordButton();
    
    // Fill in billing information
    await Afrekenen.fillinBillingInformation();
  });

});

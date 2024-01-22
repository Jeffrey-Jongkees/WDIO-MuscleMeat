import VleesEnKip from "../pageobjects/vleesEnKip.page.js";
import AardappelRijstPastaBonen from "../pageobjects/aardappelRijstPastaBonen.page.js";
import BakolieSprays from "../pageobjects/bakolieSprays.page.js";
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
    await BakolieSprays.selectCookingSpray()

  });

});

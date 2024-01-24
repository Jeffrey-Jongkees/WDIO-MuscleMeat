import HomePage from "../pageobjects/home.page.js"
import LoginPage from "../pageobjects/login.page.js";
import VleesEnKip from "../pageobjects/vleesEnKip.page.js";
import AardappelRijstPastaBonen from "../pageobjects/aardappelRijstPastaBonen.page.js";
import BakolieSprays from "../pageobjects/bakolieSprays.page.js";
import Winkelwagen from "../pageobjects/winkelwagen.page.js";
import Afrekenen from "../pageobjects/afrekenen.page.js";
import { moveToDropDownMenuAndSelectProduct, selectWinkelwagen } from "../functions.js";
import fs from "fs-extra";

let jsonData = "";

describe("Go through the ordering process", () => {
  before(async () => {
    jsonData = await fs.readJson("./testdata.json");

    await browser.maximizeWindow();
    await browser.url("/");
  });

  it("Placing an order", async () => {

    // Click the account button
    await HomePage.clickAccountButton();

    // Fill in login credentials
    await LoginPage.fillInCredentials();

    // To validate the successful login, check if the 'ACCOUNT' button is present
    const accountLogo = await $('//h1[text()="Account"]');
    await expect(accountLogo).toHaveText('ACCOUNT');
    
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

    // Select Zoete Aardappelblokjes
    await AardappelRijstPastaBonen.selectAardappelRijstPastaBonenProduct(
      jsonData.aardappelRijstPastaEnBonenPage.zoeteAardappelBlokjes
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
    await Afrekenen.fillinBillingInformation(
      jsonData.factuurGegevens.voornaam,
      jsonData.factuurGegevens.achternaam,
      jsonData.factuurGegevens.straatEnHuisnummer,
      jsonData.factuurGegevens.postcode,
      jsonData.factuurGegevens.plaats,
      jsonData.factuurGegevens.telefoon,
      jsonData.factuurGegevens.emailAdres,
      jsonData.factuurGegevens.bank
    );

    // Select the TERMS checkbox
    await Afrekenen.selectAlgemeneVoorwaarden();

    // Assertion on the Place order button
    const bestellenEnBetalenButton = await $('[id="place_order"]');
    await bestellenEnBetalenButton.scrollIntoView();
    await expect(bestellenEnBetalenButton).toHaveText('Bestellen en Betalen');

  });

});

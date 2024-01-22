import fs from "fs-extra";

export async function moveToDropDownMenuAndSelectProduct(dropdownmenu, product){

  let product_ = await $(`//a[text()="${dropdownmenu}"]/../ul//a[@href="${product}"]`);

  await $(`//a[text()="${dropdownmenu}"]`).moveTo();
  await product_.waitForClickable();
  await product_.click();
}


// Select a product to add in the shopping cart
// 
export async function selectProduct(product, smaak){

  const jsonData = await fs.readJson("./testdata.json");
  
  let vleesKipProduct = await $(`//h4[@class="woocommerce-loop-product_title"]/../../../a[@href="${product}"]`);
  
  await vleesKipProduct.waitForDisplayed();
  await vleesKipProduct.click();
  
  // Check if the product matches the specific string
  if (product === jsonData.vleesEnKipPage.roastedKipfiletBlokjes.roastedKipfiletBlokjes) {
      
      // Steps from selectSmaken if condition is met
      let smaken = await $('[id="pa_smaak"]');
      await smaken.waitForClickable();
      await smaken.selectByAttribute('value', `${smaak}`)
  
}

await clickInWinkelmand();
}




export async function clickInWinkelmand() {
  
  const winkelmand = await $('[class="single_add_to_cart_button button alt"]');
  await winkelmand.waitForClickable();
  await winkelmand.click();
}

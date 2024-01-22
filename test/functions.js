// Select a dropdown menu 
export async function moveToDropDownMenuAndSelectProduct(dropdownmenu, product){

  let product_ = await $(`//a[text()="${dropdownmenu}"]/../ul//a[@href="${product}"]`);

  await $(`//a[text()="${dropdownmenu}"]`).moveTo();
  await product_.waitForClickable();
  await product_.click();
}

// Adding an item to the shopping cart
export async function clickInWinkelmand() {
  
  const winkelmand = await $('[class="single_add_to_cart_button button alt"]');
  await winkelmand.waitForClickable();
  await winkelmand.click();
}

// Select shopping cart to review the selected itmes
export async function selectWinkelwagen() {
  await $('[title="Bekijk je winkelwagen"]').moveTo();
  const winkelwagen = $('//a[contains(text(), "Bekijk je winkelwagen")]');
  await winkelwagen.waitForClickable();
  await winkelwagen.click();
}
 
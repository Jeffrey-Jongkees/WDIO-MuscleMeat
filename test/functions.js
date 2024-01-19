export async function moveToDropDownMenuAndSelectProduct(dropdownmenu, product){

  let product_ = await $(`//a[text()="${dropdownmenu}"]/../ul//a[@href="${product}"]`);

  await $(`//a[text()="${dropdownmenu}"]`).moveTo();
  await product_.waitForClickable();
  await product_.click();
}


export async function clickInWinkelmand() {
  
  const winkelmand = await $('[class="single_add_to_cart_button button alt"]');
  await winkelmand.waitForClickable();
  await winkelmand.click();
}

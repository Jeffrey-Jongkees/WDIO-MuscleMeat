import { clickInWinkelmand } from "../functions.js"

class AardappelRijstPastaBonen{
    
    elements ={

        // Define your elements here        
        }


        async selectAardappelRijstPastaBonenProduct(product){
         
            let aardappelRijstPastaBonen = await $(`//h4[@class="woocommerce-loop-product_title"]/../../../a[@href="${product}"]`);
            let aantal = $('[title="Aantal"]')
            
            await aardappelRijstPastaBonen.waitForDisplayed();
            await aardappelRijstPastaBonen.click();

            await aantal.waitForClickable()
            await aantal.setValue('2')

            await clickInWinkelmand();      
        }
        
    }


export default new AardappelRijstPastaBonen(); 
import { clickInWinkelmand } from "../functions.js"
import fs from "fs-extra";


class VleesEnKip{
    
    elements ={

        // Define your elements here        
        }


        async selectVleesKipProduct(product, smaak){

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
}

export default new VleesEnKip(); 
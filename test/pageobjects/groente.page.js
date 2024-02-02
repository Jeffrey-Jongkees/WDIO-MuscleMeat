// import { clickInWinkelmand } from "../functions.js"
// import fs from "fs-extra";


class Groenten{       
     
    // Function to select and add specific groenten based on their IDs
    async selectGroenten(...groentenIDs) {
        // Loop through all the IDs you want to add
        for (let groentenID of groentenIDs) {
            // Use WebDriverIO's API to find the element
            let groente = await $(`[data-product_id="${groentenID}"]`);

            // Check if the element exists
            if (groente) {
                // Click the element to add it to the cart
                await groente.click();
            }
        }
    }
}

    
export default new Groenten();
    
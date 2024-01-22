
class BakolieSprays{
    
    elements ={

        cookingSpray: ()=> $('[data-product_sku="Cooking Spray MUSCLE MEAT"]')        
        }


        async selectCookingSpray(){
            await this.elements.cookingSpray().waitForClickable();
            await this.elements.cookingSpray().click();
    }
}

export default new BakolieSprays(); 
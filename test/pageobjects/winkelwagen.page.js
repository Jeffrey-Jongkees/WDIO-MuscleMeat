class  Winkelwagen{
    
    elements ={


        doorgaanNaarAfrekenenButton: () => $('a[class*="checkout-button"]'),
    
        }


       async clickDoorgaanNaarAfrekenenButton(){

        await this.elements.doorgaanNaarAfrekenenButton().waitForClickable();
        await this.elements.doorgaanNaarAfrekenenButton().click();
        }
}

export default new Winkelwagen();
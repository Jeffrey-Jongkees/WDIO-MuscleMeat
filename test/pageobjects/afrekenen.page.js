class  Afrekenen{
    
    elements ={


        akkoordButton: () => $('//button[contains(text(), "Akkoord")]'),
        voornaam: () => $('[id="billing_first_name"]'),
        achternaam: () => $('[id="billing_last_name"]'),
        straatEnHuisnummer: () => $('[placeholder="Straatnaam en huisnummer"]'),
        postcode: () => $('[id="billing_postcode"]'),
        plaats: () => $('[id="billing_city"]'),
        telefoon: () => $('[id="billing_phone"]'),
        emailAdres: () => $('[id="billing_email"]'),
        bank: () => $('[id="extvar8"]'),
        algemeneVoorwaardenCheckbox: () => $('[id="terms"]'),
    
        }


       async clickAkkoordButton() {

        await this.elements.akkoordButton().waitForClickable();
        await this.elements.akkoordButton().click();
        }

        async fillinBillingInformation(
        voornaam, 
        achternaam, 
        straatHuisnummer, 
        postcode, 
        plaats, 
        telefoon, 
        emailadres, 
        bank) {

            await this.elements.voornaam().waitForClickable();
            await this.elements.voornaam().setValue(voornaam);
            await this.elements.achternaam().setValue(achternaam);
            await this.elements.straatEnHuisnummer().setValue(straatHuisnummer);
            await this.elements.postcode().setValue(postcode);
            await this.elements.plaats().setValue(plaats);
            await this.elements.telefoon().setValue(telefoon);
            await this.elements.emailAdres().setValue(emailadres);
            await this.elements.bank().waitForClickable();
            await this.elements.bank().selectByAttribute('value', `${bank}`);

        }

        async selectAlgemeneVoorwaarden() {
            await this.elements.algemeneVoorwaardenCheckbox().waitForClickable();
            await this.elements.algemeneVoorwaardenCheckbox().click();
            await browser.pause(5000);
        }
}

export default new Afrekenen();
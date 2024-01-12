class HomePage{
    
    elements ={


        accountButton: () => $('a[href="https://musclemeat.nl/my-account/ "]'),
        vleesEnKip: () => $('//a[text()="Voeding"]/../ul//a[@href="https://musclemeat.nl/voeding/vlees-kip/"]')
        }


       async clickAccountButton(){
            await this.elements.accountButton().click();
        }

        async movetoDropDownMenu(dropdownmenu){

            await $(`//a[text()="${dropdownmenu}"]`).moveTo();
            await this.elements.vleesEnKip().waitForClickable();
            await this.elements.vleesEnKip().click();
        }
}

export default new HomePage();
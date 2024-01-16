class HomePage{
    
    elements ={


        accountButton: () => $('a[href="https://musclemeat.nl/my-account/ "]'),
        vleesEnKip: () => $('//a[text()="Voeding"]/../ul//a[@href="https://musclemeat.nl/voeding/vlees-kip/"]'),
        aardappelRijsBonen: () => $('//a[text()="Voeding"]/../ul//a[@href="https://musclemeat.nl/voeding/aardappel-rijst-pasta-bonen/"]')
        }


       async clickAccountButton(){
            await this.elements.accountButton().click();
        }

        async moveToDropDownMenu(dropdownmenu){

            await $(`//a[text()="${dropdownmenu}"]`).moveTo();
        }

        async selectProduct(){
            await this.elements.vleesEnKip().click();
        }
}

export default new HomePage();
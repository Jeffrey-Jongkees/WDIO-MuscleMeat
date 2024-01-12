class HomePage{
    
    elements ={


        accountButton : () => $('a[href="https://musclemeat.nl/my-account/ "]'),
        }


       async clickAccountButton(){
            await this.elements.accountButton().click();
        }
}

export default new HomePage();
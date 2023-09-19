import LoginPage from  "../../pageobjects/MuscleMeat/login.js";


describe('Log into MuscleMeat', () => {
    
    it('Login', async ()=> {
        
       await browser.url('https://musclemeat.nl/')

       await LoginPage.clickAccountButton();
       await LoginPage.fillInCredentials();

       const logOutButton = await $('//a[text()[contains(.,"Log uit")]]')
       await expect(logOutButton).toHaveText('Log uit');
    })
})

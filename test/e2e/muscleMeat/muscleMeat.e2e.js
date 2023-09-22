import LoginPage from  "../../pageobjects/MuscleMeat/login.js";


describe('Log into MuscleMeat', () => {
    
    it('Login', async ()=> {
        
       await browser.url('https://musclemeat.nl/')

       await LoginPage.clickAccountButton();
       await LoginPage.fillInCredentials();

       await browser.pause(2000)

       const logOutButton = await $('//a[text()="Log uit"]')
       await expect(logOutButton).toHaveText('Log uit');
    })
})


describe('Logging out of MuscleMeat!', () => {
    
    it('Logout', async ()=> {
        
       await browser.url('https://musclemeat.nl/') 

       await LoginPage.clickAccountButton();
       await browser.pause(2000)

       const logOutButton = await $('//a[text()[contains(.,"Log uit")]]')
       await expect(logOutButton).toHaveText('Log uit');

       await LoginPage.clickLogOutbutton();
       await browser.pause(2000);
        
       //Volgende stap is om te valideren dat er correct uitgelogd is
       const inloggen = await $('//h2[text()="Inloggen"]');
       await expect(inloggen).toHaveText('INLOGGEN');
    })
})

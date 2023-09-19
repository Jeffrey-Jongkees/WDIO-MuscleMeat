// import { browser } from 'webdriverio';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await browser.url('https://www.google.com');
        await $('button[id="L2AGLb"]').click();
       
        const searchInput = $('[type="search"]');
        
        await searchInput.setValue('BSure Digital');
        await browser.keys('Enter');
        await browser.pause(2000);
    })
})


describe('Demo test', () => {
    
    it('Login Test', async ()=> {
        
        await browser.url('https://the-internet.herokuapp.com/login')

        await $('[id="username"]').setValue('tomsmith')
        await $('[id="password"]').setValue('SuperSecretPassword!')
        await $('[type="submit"]').click()

        await expect($('[id="flash"]')).toHaveTextContaining("You logged into a secure area!")
    })
})
import { config } from 'dotenv';
config();

class LoginPage{
    
    elements ={


        accountButton : () => $('a[href="https://musclemeat.nl/my-account/ "]'),
        username : () => $('[id="username"]'),
        password : () => $('[id="password"]'),
        loginButton : () => $('[name="login"]'),
        logoutButton : () => $('div.woocommerce-MyAccount-content a[href*="customer-logout"]')
        }


       async clickAccountButton(){
            await this.elements.accountButton().click();
        }

        async fillInCredentials(){

            let username = process.env.EMAIL_ADDRESS;
            let password = process.env.MM_PASSWORD;

            await this.elements.username().keys(username);
            await this.elements.password().keys(password);
            await this.elements.loginButton().click();
        }

        async clickLogOutbutton(){
            await this.elements.logoutButton().click();
        }
}

export default new LoginPage(); 
import { config } from 'dotenv';
config();

class LoginPage{
    
    elements ={


        accountButton : () => $('a[href="https://musclemeat.nl/my-account/ "]'),
        username : () => $('[id="username"]'),
        password : () => $('[id="password"]'),
        loginButton : () => $('[name="login"]')
        }


       async clickAccountButton(){
            await this.elements.accountButton.click();
        }

        async fillInCredentials(){

            const username = process.env.EMAIL_ADDRESS;
            const password = process.env.MM_PASSWORD;

            await this.elements.username.setValue(username);
            await this.elements.password.setValue(password);
            await this.elements.loginButton.click();
        }
}

export default new LoginPage(); 
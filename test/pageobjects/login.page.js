

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonAccountExists() {
        return $('span');
    }

    get inputEmail() {
        return $('input[type="email"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username = browser.config.goodUser, password = browser.config.goodPass) {
        await this.buttonAccountExists.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('apply/career.html');
    }
}

export default new LoginPage();

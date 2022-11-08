import LoginPage from '../../pageobjects/login.page';

describe('Careers Login Page', () => {

    beforeEach(async () => {
        // Navigate to Login Page before executing each test
        await LoginPage.open();
    });

    it('should login with existing credentials', async () => {
        await LoginPage.login();
        await expect(LoginPage.btnSubmit).not.toBeExisting();
    });

    // Disabled because I got locked out of logging in for running this too often
    xit('should fail to login with invalid password', async () => {
        await LoginPage.login(password = browser.config.badPass);
        await expect(LoginPage.btnSubmit).toBeExisting();
        // TODO: add check for snackbar popup
    });

    xit('should fail to login with invalid email', async () => {
        await LoginPage.login(browser.config.badUser, browser.config.badPass);
        await expect(LoginPage.btnSubmit).toBeExisting();
        // TODO: add check for snackbar popup
    });
});



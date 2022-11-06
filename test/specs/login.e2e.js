import BasicInfoPage from '../pageobjects/info-pages/basic-info.page'
import LoginPage from '../pageobjects/login.page';

import waitForPageLoad from '../test-utils.js';

describe('Careers Login Page', () => {
    it('should login with existing credentials', async () => {
        await LoginPage.open();

        await expect(BasicInfoPage.inputFirstName).not.toBeExisting();
        await LoginPage.login('rrd-test@mailinator.com', 'ForTesting0nly!');
        await waitForPageLoad;

        await expect(BasicInfoPage.inputFirstName).toBeExisting();
    });

    // Disabled because I got locked out for doing this too often
    xit('should fail to login with invalid password', async () => {
        await LoginPage.open();

        await expect(BasicInfoPage.inputFirstName).not.toBeExisting();
        await LoginPage.login('rrd-test@mailinator.com', 'BadPassword');
        await waitForPageLoad;

        await expect(BasicInfoPage.inputFirstName).not.toBeExisting();
        // TODO: add check for snackbar popup
    });

    // TODO: add test for invalid username
});



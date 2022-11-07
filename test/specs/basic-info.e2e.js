import BasicInfoPage from '../pageobjects/info-pages/basic-info.page'
import ConfirmPhonePage from '../pageobjects/info-pages/confirm-phone.page'

describe("Careers Basic Info Page", () => {

    beforeEach(async () => {
        // Navigate to Basic Info Page before executing each test
        await BasicInfoPage.open();
    });

    it("should verify all fields are present", async () => {
        // diagnostic test - confirm that all objects are still correctly identified
        await expect(BasicInfoPage.inputFirstName).toBeExisting();
        await expect(BasicInfoPage.inputLastName).toBeExisting();
        await expect(BasicInfoPage.inputMobile).toBeExisting();
        await expect(BasicInfoPage.inputZipCode).toBeExisting();

        await expect(BasicInfoPage.dropdownQualifications).toBeExisting();
        await expect(BasicInfoPage.ddOverlayQualifications.container).toBeExisting();

        await expect(BasicInfoPage.chkboxGrpShiftType.container).toBeExisting();

        await expect(BasicInfoPage.radioGrpWorkExperience.container).toBeExisting();

        await expect(BasicInfoPage.chkboxTermsAccept).toBeExisting();
        await expect(BasicInfoPage.buttonContinue).toBeExisting();
    });

    it("should verify the Continue button is disabled until all fields are filled", async () => {
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');

        await BasicInfoPage.inputFirstName.setValue("Robert");
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');

        await BasicInfoPage.inputLastName.setValue("Doyle");
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');

        await BasicInfoPage.inputMobile.setValue(browser.config.phone);
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');

        await BasicInfoPage.inputZipCode.setValue(browser.config.zipCode);
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');

        await BasicInfoPage.dropdownQualifications.click();
        await expect(BasicInfoPage.ddOverlayQualifications.container).toBeDisplayed();
        await BasicInfoPage.ddOverlayQualifications.setSearchValue('RN');
        await BasicInfoPage.ddOverlayQualifications.clickAtIndex(0);
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');
        await BasicInfoPage.ddOverlayQualifications.close();

        await BasicInfoPage.chkboxGrpShiftType.clickAtIndex(0);
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');

        await BasicInfoPage.radioGrpWorkExperience.clickAtIndex(0);
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');

        await BasicInfoPage.chkboxTermsAccept.click();
        await expect(BasicInfoPage.buttonContinue).not.toHaveAttrContaining('class', 'disabled');

        // confirm it is not just the TOS checkbox that enables the button by clearing
        //   a previously completed field while that box is checked
        await BasicInfoPage.inputFirstName.setValue("");
        await expect(BasicInfoPage.buttonContinue).toHaveAttrContaining('class', 'disabled');
        await BasicInfoPage.inputFirstName.setValue("Robert");
        await expect(BasicInfoPage.buttonContinue).not.toHaveAttrContaining('class', 'disabled');
        await BasicInfoPage.buttonContinue.click();

        await expect(ConfirmPhonePage.inputConfirmationCode).toBeExisting();
    });

});
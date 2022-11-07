import LoginPage from '../login.page'
import ConfirmPhonePage from './confirm-phone.page'
import Page from '../page';

import CheckboxGroupField from '../fields/checkbox-group.field'
import DropdownOverlayField from '../fields/dropdown-overlay.field'
import RadioButtonGroupField from '../fields/radio-button-group.field'

class BasicInfoPage extends Page {

    /**
    * selectors
    */

    get container() {
        return $('[automation-id="basic-info"]');
    }

    // text inputs

    get inputFirstName() {
        return this.container.$('[automation-id="first-name-answer"]');
    }

    get inputLastName() {
        return this.container.$('[automation-id="last-name-answer"]');
    }

    get inputMobile() {
        return this.container.$('[automation-id="mobile-answer"');
    }

    get inputZipCode() {
        return this.container.$('[automation-id="zip-code-answer"');
    }

    // qualifications dropdown

    get dropdownQualifications() {
        return this.container.$('md-select');
    }

    ddOverlayQualifications = new DropdownOverlayField('[class^="md-select-menu-container"]');


    // checkboxes + radio buttons

    chkboxGrpShiftType = new CheckboxGroupField('[automation-id="interested-shift-types-answer"]');
 
    radioGrpWorkExperience = new RadioButtonGroupField('[automation-id="please-select-your-amount-of-licensed-work-experience-below-answer"]');

    // misc.
    // TODO: add objects for legalese links

    get chkboxTermsAccept() {
        return this.container.$('[automation-id="termsAccept-answer"]');
    }

    get buttonContinue() {
        return $('button[id="AP_Basic_Info_continue"');
    }


    /**
     * overwrite inherited options
     */
    async open() {
        await LoginPage.open();
        await LoginPage.login();

        // Add a check here to skip back to Basic Info if Confirm Phone comes up instead
        if (await ConfirmPhonePage.inputConfirmationCode.isVisible) {
            await ConfirmPhonePage.buttonUpdateNumber.click();
        }

        await expect(this.buttonContinue).toBeExisting();
    }
}

export default new BasicInfoPage();
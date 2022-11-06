import Page from '../page';

import CheckboxGroupField from '../fields/checkbox-group.field'
import RadioButtonGroupField from '../fields/radio-button-group.field'

class BasicInfoPage extends Page {

    /**
    * define selectors
    */

    // text inputs

    get inputFirstName() {
        return $('[automation-id="first-name-answer"]');
    }

    get inputLastName() {
        return $('[automation-id="last-name-answer"]');
    }

    get inputMobile() {
        return $('[automation-id="mobile-answer"');
    }

    get inputZipCode() {
        return $('[automation-id="zip-code-answer"');
    }

    // qualifications dropdown

    get dropdownQualifications() {
        return $('md-select[id="select_10"]');
    }

    // shift type checkboxes

    // ideally this would be private - don't know JS syntax well enough to implement
    shiftType = new CheckboxGroupField('[automation-id="interested-shift-types-answer"]');

    get chkboxGrpShiftType() {
        return this.shiftType.field;
    }

    get chkboxDayShifts() {
        return this.shiftType.checkboxByIndex(0);
    }

    get chkboxEveningShifts() {
        return this.shiftType.checkboxByIndex(1);
    }

    get chkboxOvernightShifts() {
        return this.shiftType.checkboxByIndex(2);
    }

    get chkboxWeekendShifts() {
        return this.shiftType.checkboxByIndex(3);
    }

    get chkboxWeekdayShifts() {
        return this.shiftType.checkboxByIndex(4);
    }

    // work experience radio buttons

    // ideally this would be private - don't know JS syntax well enough to implement
    workExperience = new RadioButtonGroupField('[automation-id="please-select-your-amount-of-licensed-work-experience-below-answer"]');

    get radioGrpWorkExperience() {
        return this.workExperience.field;
    }

    get radio03Months() {
        return this.workExperience.buttonByIndex(0);
    }

    get radio46Months() {
        return this.workExperience.buttonByIndex(1);
    }

    get radio6PlusMonths() {
        return this.workExperience.buttonByIndex(2);
    }

    // misc.

    get chkboxTermsAccept() {
        return $('[automation-id="termsAccept-answer"]');
    }

    get buttonContinue() {
        return $('button[id="AP_Basic_Info_continue"');
    }
}

export default new BasicInfoPage();
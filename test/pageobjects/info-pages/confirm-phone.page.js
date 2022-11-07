import Page from '../page';

class ConfirmPhonePage extends Page {

    /**
    * selectors
    */

    get container() {
        return $('[automation-id="phonevalidate"]');
    }

    get inputConfirmationCode() {
        return this.container.$('[automation-id="confirmation-code-answer"]');
    }

    get buttonUpdateNumber() {
        return this.container.$('p').$('span');
    }
}

export default new ConfirmPhonePage();
import GroupField from './group-field'

export default class DropdownOverlayField extends GroupField {

    childClass = 'md-option';

    /**
     * selectors
     */

    get inputSearch() {
        return this.container.$('input[type="search"]');
    }

    get backdrop() {
        return $('md-backdrop');
    }

    /**
     * methods
     */

    // Closes the dropdown by clicking on the backdrop object
    async close() {
        await this.backdrop.click();
    }

    // Set a value in the search bar
    async setSearchValue(value) {
        await this.inputSearch.setValue(value);
    }
}
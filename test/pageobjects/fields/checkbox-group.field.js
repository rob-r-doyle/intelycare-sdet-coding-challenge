import Field from './field'

export default class CheckboxGroupField extends Field {

    async checkboxByIndex(index) {
        return await this.field.$$('md-checkbox')[index];
    }

    // TODO: Implement checkboxByLabel
}
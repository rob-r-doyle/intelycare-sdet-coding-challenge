import Field from './field'

export default class RadioButtonGroupField extends Field {

    async buttonByIndex(index) {
        return await this.field.$$('md-radio-button')[index];
    }

    // TODO: implement buttonByLabel
}
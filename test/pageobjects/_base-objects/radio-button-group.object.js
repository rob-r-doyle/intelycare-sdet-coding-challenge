import Object from './object'

class RadioButtonGroup extends Object {

    get buttonByLabel(label) {
        return this.object.$(`md-radio-button[#${label}`);
    }

    get buttonByID(id) {
        return this.object.$(`md-radio-button[${id}]`);
    }
}
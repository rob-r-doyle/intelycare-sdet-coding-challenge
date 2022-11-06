import Object from './object'

class CheckboxGroup extends Object {

    get checkboxByLabel(label) {
        return this.object.$(`md-checkbox[#${label}`);
    }

    get checkboxByID(id) {
        return this.object.$(`md-checkbox[${id}]`);
    }
}
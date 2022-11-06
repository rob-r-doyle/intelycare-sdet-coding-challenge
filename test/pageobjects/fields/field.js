
export default class Field {

    constructor(identifier) {
        this.identifier = identifier
    }

    get field() {
        return $(this.identifier);
    }
}
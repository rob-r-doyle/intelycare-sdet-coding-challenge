
export default class Field {

    constructor(identifier) {
        this.identifier = identifier
    }

    get container() {
        return $(this.identifier);
    }
}
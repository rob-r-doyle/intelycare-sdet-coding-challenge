
class Object {

    constructor(identifier) {
        this.identifier = identifier
    }

    get object() {
        return $(this.identifier);
    }
}
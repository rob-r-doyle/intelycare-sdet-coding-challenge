import Field from './field'

export default class GroupField extends Field {

    childClass = null; // overwrite this in any classes that inherit it

    async listOfChildren() {
        return await this.container.$$(this.childClass);
    }

    // clicks the child object at the given index
    async clickAtIndex(index) {
        await this.listOfChildren().then((children) => {
            children[index].click();
        });
    }

    // TODO: Implement way to click child by label
}
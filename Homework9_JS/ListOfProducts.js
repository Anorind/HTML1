class ShoppingList {
    constructor() {
        this.list = [];
    }

    displayList() {
        let notBought = this.list.filter(item => !item.bought);
        let bought = this.list.filter(item => item.bought);
        let sortedList = [...notBought, ...bought];
        let listHtml = '';
        sortedList.forEach(item => {
            listHtml += `<p>Name: ${item.name}, Count: ${item.quantity}, Bought: ${item.bought ? 'Yes' : 'No'}</p>`;
        });
        document.getElementById('shoppingList').innerHTML = listHtml;
    }

    addItem(name, quantity) {
        let item = this.list.find(item => item.name === name);
        if (item) {
            item.quantity += quantity;
        } else {
            this.list.push({ name, quantity, bought: false });
        }
    }

    buyItem(name) {
        let item = this.list.find(item => item.name === name);
        if (item) {
            item.bought = true;
        } else {
            alert(`Product ${name} not found at list.`);
        }
    }
}
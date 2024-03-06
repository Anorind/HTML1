class Receipt {
    constructor() {
        this.items = [];
    }

    addItem(name, quantity, price) {
        this.items.push({ name, quantity, price });
    }

    displayReceipt() {
        let receiptHtml = '';
        this.items.forEach(item => {
            receiptHtml += `<p>Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price} $</p>`;
        });
        document.getElementById('receipt').innerHTML = receiptHtml;
    }

    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.quantity * item.price;
        });
        return total;

    }

    getMostExpensive() {
        let mostExpensive = this.items[0];
        this.items.forEach(item => {
            if (item.price > mostExpensive.price) {
                mostExpensive = item;
            }
        });
        return mostExpensive;
    }

    getAveragePrice() {
        let totalQuantity = 0;
        let totalPrice = 0;
        this.items.forEach(item => {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.price;
        });
        return totalPrice / totalQuantity;
    }
}

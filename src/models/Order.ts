// src/models/Order.ts

export class Order {
    private orderId: string;
    private items: Map<string, number>; // item name and quantity
    private restaurantName: string;

    constructor(orderId: string, items: { [item: string]: number }, restaurantName: string) {
        this.orderId = orderId;
        this.items = new Map(Object.entries(items));
        this.restaurantName = restaurantName;
    }

    getItems() {
        return this.items;
    }

    getRestaurantName() {
        return this.restaurantName;
    }
}

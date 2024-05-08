// src/models/Restaurant.ts

export class Restaurant {
    private name: string;
    private menu: Map<string, number>;
    private totalCapacity: number;
    private capacityInUse: number;

    constructor(name: string, menu: { [item: string]: number }, totalCapacity: number) {
        this.name = name;
        this.menu = new Map(Object.entries(menu));
        this.totalCapacity = totalCapacity;
        this.capacityInUse = 0;
    }

    getName() {
        return this.name;
    }

    addMenuItem(itemName: string, price: number) {
        this.menu.set(itemName, price);
    }

    removeMenuItem(itemName: string) {
        this.menu.delete(itemName);
    }

    updateMenuItem(itemName: string, price: number) {
        if (this.menu.has(itemName)) {
            this.menu.set(itemName, price);
        }
    }

    updateMenu(menu: { [item: string]: number }) {
        this.menu = new Map(Object.entries(menu));
    }

    canAcceptOrder(quantity: number): boolean {
        return (this.capacityInUse + quantity) <= this.totalCapacity;
    }

    placeOrder(quantity: number) {
        if (this.canAcceptOrder(quantity)) {
            this.capacityInUse += quantity;
        } else {
            throw new Error('Capacity exceeded');
        }
    }

    completeOrder(quantity: number) {
        this.capacityInUse -= quantity;
    }

    getMenu() {
        return this.menu;
    }

    getCapacityInUse() {
        return this.capacityInUse;
    }
}

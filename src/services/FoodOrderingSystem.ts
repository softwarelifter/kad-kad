// src/services/FoodOrderingSystem.ts

import { Restaurant } from "../models/Restaurant";
import { Order } from "../models/Order";

export class FoodOrderingSystem {
    private restaurants: Map<string, Restaurant> = new Map();
    private orders: Map<string, Order> = new Map();
    private orderCounter = 0;

    addRestaurant(name: string, menu: { [item: string]: number }, capacity: number) {
        if (!this.restaurants.has(name)) {
            this.restaurants.set(name, new Restaurant(name, menu, capacity));
        }
    }

    placeOrder(customerId: string, orderItems: { [item: string]: number }): Order {
        // Simplified logic for selecting restaurant and placing orders
        let selectedRestaurant: Restaurant | null = null;

        // find suitable restaurant based on a simplified selection strategy
        for (let [_, restaurant] of this.restaurants) {
            if (restaurant.canAcceptOrder(Object.values(orderItems).reduce((a, b) => a + b, 0))) {
                selectedRestaurant = restaurant;
                break;
            }
        }

        if (!selectedRestaurant) throw new Error("No restaurant can accept the order currently.");

        this.orderCounter++;
        const orderId = `order${this.orderCounter}`;
        const newOrder = new Order(orderId, orderItems, selectedRestaurant.getName());
        this.orders.set(orderId, newOrder);
        return newOrder;
    }

    printOrders() {
        console.log("Orders:", this.orders);
    }

    printRestaurants() {
        console.log("Restaurants:", this.restaurants);
    }

    // Other methods like updateMenu, markAsDelivered, etc.
}

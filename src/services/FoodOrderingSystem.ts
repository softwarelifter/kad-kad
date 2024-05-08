import { Restaurant } from '../models/Restaurant';
import { Order } from '../models/Order';
import { SelectionStrategy } from '../strategies/SelectionStrategy';

export class FoodOrderingSystem {
    private restaurants: Map<string, Restaurant> = new Map();
    private orders: Map<string, Order> = new Map();
    private orderCounter = 0;
    private selectionStrategy: SelectionStrategy;

    constructor(selectionStrategy: SelectionStrategy) {
        this.selectionStrategy = selectionStrategy;
    }

    addRestaurant(name: string, menu: { [item: string]: number }, capacity: number) {
        if (!this.restaurants.has(name)) {
            this.restaurants.set(name, new Restaurant(name, menu, capacity));
        }
    }

    updateMenu(restaurantName: string, newMenu: { [item: string]: number }) {
        const restaurant = this.restaurants.get(restaurantName);
        if (restaurant) {
            restaurant.updateMenu(newMenu);
        }
    }

    placeOrder(customerId: string, orderItems: { [item: string]: number }): Order {
        const selectedRestaurant = this.selectionStrategy.selectRestaurant(
            Array.from(this.restaurants.values()),
            orderItems
        );

        if (!selectedRestaurant) {
            throw new Error('No restaurant can accept the order currently.');
        }

        this.orderCounter++;
        const orderId = `order${this.orderCounter}`;
        const newOrder = new Order(orderId, orderItems, selectedRestaurant.getName());
        this.orders.set(orderId, newOrder);
        selectedRestaurant.placeOrder(this.calculateOrderQuantity(orderItems));
        return newOrder;
    }

    markOrderAsDelivered(orderId: string) {
        const order = this.orders.get(orderId);
        if (order) {
            const restaurant = this.restaurants.get(order.getRestaurantName());
            if (restaurant) {
                restaurant.completeOrder(this.calculateOrderQuantity(order.getItems()));
                this.orders.delete(orderId);
            }
        }
    }

    printRestaurants() {
        console.log('List of restaurants:', this.restaurants);
    }

    printOrders() {
        console.log('List of orders:', this.orders);
    }

    // Helper method to calculate total quantity in an order
    private calculateOrderQuantity(orderItems: { [item: string]: number } | Map<string, number>): number {
        return Object.values(orderItems).reduce((acc, qty) => acc + qty, 0);
    }

    // Other methods like printRestaurants, getOrders, etc.
}

import { FoodOrderingSystem } from './services/FoodOrderingSystem';
import { LowestPriceStrategy } from './strategies/LowestPriceStrategy';

// Define a selection strategy
const lowestPriceStrategy = new LowestPriceStrategy();

// Instantiate the food ordering system
const foodOrderingSystem = new FoodOrderingSystem(lowestPriceStrategy);

// Onboard some restaurants
foodOrderingSystem.addRestaurant('resta1', { 'king_burger': 10, 'samosa_pizza': 20, 'alu_pasta': 19 }, 15);
foodOrderingSystem.addRestaurant('resta2', { 'bendi_macaroni': 12, 'samosa_pizza': 25, 'alu_pasta': 17 }, 12);

// Place an order (example)
try {
    const order = foodOrderingSystem.placeOrder('cust1', { 'king_burger': 2, 'samosa_pizza': 1 });
    console.log(`Order placed: ${JSON.stringify(order)}`);
} catch (error) {
    console.error(`Error placing order: ${error}`);
}

// Update menu of a restaurant
foodOrderingSystem.updateMenu('resta1', { 'king_burger': 12, 'fries': 5 });

// Mark an order as delivered
const orderIdToDeliver = 'order1';
console.log(`Marking order ${orderIdToDeliver} as delivered...`);
foodOrderingSystem.markOrderAsDelivered(orderIdToDeliver);

// Print state of system (restaurants)
console.log('Current state of restaurants:');
foodOrderingSystem.printRestaurants();

import { FoodOrderingSystem } from './services/FoodOrderingSystem';
import { LowestPriceStrategy } from './strategies/LowestPriceStrategy';

// Instantiate the food ordering system
const foodOrderingSystem = new FoodOrderingSystem();

// Onboard some restaurants
foodOrderingSystem.addRestaurant('resta1', { 'king_burger': 10, 'samosa_pizza': 20, 'alu_pasta': 19 }, 15);
foodOrderingSystem.addRestaurant('resta2', { 'bendi_macaroni': 12, 'samosa_pizza': 25, 'alu_pasta': 17 }, 12);
foodOrderingSystem.addRestaurant('resta3', { 'king_burger': 9, 'fries': 5, 'cola': 2 }, 10);
foodOrderingSystem.addRestaurant('resta4', { 'noodle_salad': 15, 'veggie_wrap': 8, 'smoothie': 6 }, 8);
foodOrderingSystem.addRestaurant('resta5', { 'sushi_roll': 22, 'miso_soup': 9, 'green_tea': 4 }, 12);

// Define a selection strategy
const lowestPriceStrategy = new LowestPriceStrategy();

// Place an order (example)
try {
    const order = foodOrderingSystem.placeOrder('cust1', { 'king_burger': 2, 'samosa_pizza': 1 });
    console.log(`Order placed: ${JSON.stringify(order)}`);
} catch (error) {
    console.error(`Error placing order: ${error}`);
}

// Simulate more operations...

// Print state of system (restaurants)
console.log('Current state of restaurants:');
foodOrderingSystem.printRestaurants();

// Note: For a real implementation, you might have methods in FoodOrderingSystem to handle updating menus, printing state, etc.

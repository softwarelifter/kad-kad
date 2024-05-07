// src/strategies/LowestPriceStrategy.ts

import { SelectionStrategy } from "./SelectionStrategy";
import { Restaurant } from "../models/Restaurant";

export class LowestPriceStrategy implements SelectionStrategy {
    selectRestaurant(restaurants: Restaurant[], orderItems: { [item: string]: number }): Restaurant {
        let selectedRestaurant: Restaurant | null = null;
        let lowestCost = Infinity;

        restaurants.forEach(restaurant => {
            let cost = 0;
            let canFulfillOrder = true;
            for (const item in orderItems) {
                if (restaurant.getMenu().has(item)) {
                    cost += restaurant.getMenu().get(item)! * orderItems[item];
                } else {
                    canFulfillOrder = false;
                    break;
                }
            }
            if (canFulfillOrder && cost < lowestCost) {
                lowestCost = cost;
                selectedRestaurant = restaurant;
            }
        });

        if (!selectedRestaurant) throw new Error("No suitable restaurant found.");
        return selectedRestaurant;
    }
}

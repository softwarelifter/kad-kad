// src/strategies/SelectionStrategy.ts

import { Restaurant } from "../models/Restaurant";

export interface SelectionStrategy {
    selectRestaurant(restaurants: Restaurant[], orderItems: { [item: string]: number }): Restaurant;
}

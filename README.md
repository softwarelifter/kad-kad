# Online Food Ordering System

This project implements a simple online food ordering system in TypeScript. It allows users to place orders from multiple restaurants and manages the menu and capacity of each restaurant.

## Features

- Onboarding new restaurants with their menu and processing capacity.
- Updating menus of existing restaurants.
- Placing orders from customers.
- Selecting restaurants based on a specified strategy (e.g., lowest price).
- Marking orders as delivered to release capacity.

## Installation

1. Clone the repository:

    ```
    git clone <repository_url>
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Build the TypeScript files:

    ```
    npm run build
    ```

4. Run the application:

    ```
    npm start
    ```

## Usage

1. Instantiate the FoodOrderingSystem class.
2. Add restaurants with their menus and capacities.
3. Place orders from customers using the provided strategies.
4. Update menus of restaurants as needed.
5. Mark orders as delivered to release capacity back to the restaurants.

## File Structure

```
/food-ordering-system
|-- /src                    # Source files
|   |-- /models             # Data models
|   |-- /services           # Main business logic
|   |-- /strategies         # Restaurant selection strategies
|   |-- /utils              # Utility functions
|-- /tests                  # Unit tests
|   |-- /unit               # Unit test files
|-- /dist                   # Compiled JavaScript files (after build)
|-- package.json            # Node.js project manifest file
|-- tsconfig.json           # TypeScript configuration file
|-- README.md               # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the established code style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
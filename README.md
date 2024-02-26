# calculus-toolkit

calculus-toolkit is a JavaScript library that provides various mathematical functions including calculus operations such as derivatives and integrals. It also includes basic arithmetic operations and number formatting utilities.

## Installation

You can install calculus-toolkit via npm:

```bash
npm install math-kit
```

## Usage

### Derivative

```javascript
import { derivative } from 'math-kit';

// Define your function
const myFunction = x => x ** 2;

// Calculate the derivative at a specific point
console.log(derivative(myFunction, 2)); // Output: 4
```

### Integral

```javascript
import { integral } from 'math-kit';

// Define your function
const myFunction = x => x ** 2;

// Calculate the integral within a specific range
console.log(integral(myFunction, 0, 2)); // Output: 2.6667
```

## Contribution

You can contribute to the development of calculus-toolkit by submitting pull requests to the [GitHub repository](https://github.com/your-username/math-kit).

## License

calculus-toolkit is licensed under the [MIT License](https://opensource.org/licenses/MIT).
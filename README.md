# First NPM package by shibilicv


This is a simple test library written in TypeScript for learning how to publish TypeScript packages to NPM.

## Installation

```bash
npm install first-npm-by-shibilicv
```

## Usage

Import the library functions and use them:

```typescript
import { sayHello, sayHelloProps } from 'first-npm-by-shibilicv';

// Define the props
const user: sayHelloProps = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
};

// Use the function
sayHello(user);

```

## Getting Started

This library requires:

- Node.js and NPM
- TypeScript
- Tsup

To start using in your project:

1. Install with `npm install first-npm-by-shibilicv`
2. Import needed functions and classes
3. Build your project using TypeScript compiler

## License

This library is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contributing

Contributions welcome! Please open issues or PRs on [GitHub](https://github.com/mohd-shibilicv/First-NPM).

## Author

Shibilicv

This provides details on installation, usage, getting started, licensing, contributing, and the author for a simple test TypeScript npm package. Let me know if you need any part expanded or clarified!
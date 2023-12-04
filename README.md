# Exact Change Calculator
LeanTECHniques Technical Showcase

## Introduction
Change Calculator is a simple React application that helps users calculate the least amount of change possible for a given amount of money. The app is built with Vite and React, offering a fast and modern development experience.

## Features
- Robust input validation with Zod, ensuring the amount entered is a non-negative number.
- Efficient and precise calculation of the least amount of change possible using a custom algorithm.
- Sleek and responsive user interface designed with Tailwind CSS, and shadcn/ui.
- Implementation of modern React hooks for stateful logic and component lifecycle management.
- Fast and reliable unit testing with Vitest to ensure code quality and functionality.
- Error handling and user guidance for a seamless user experience.

![Screenshot 2023-12-03 at 23-20-03 Exact Change Calculator](https://github.com/nick-neely/exact-change-calculator/assets/49537823/1bfc5c52-07e5-43e3-82bf-1006fdbd31ec)

## Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm or pnpm (This README uses `pnpm` for commands)

### Installation
Clone the repository to your local machine:
```bash
git clone https://github.com/nick-neely/exact-change-calculator.git
cd exact-change-calculator
```

Install the necessary dependencies:

```
pnpm install
```

### Running the App

To start the development server, run:

```
pnpm dev
```

This will launch the app in your default browser. If it doesn't open automatically, visit [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Enter the amount of money for which you need change in the input field.
2. Press the 'Calculate' button to see the least amount of change possible.
3. The results will display in a table below the input field, showing the denomination and quantity of each bill and coin.

## Running Tests

### Test Prerequisites

Ensure `vitest` is installed as a dev dependency. If not, install it using:

```
pnpm add vitest -D
```

### Running the Tests

To execute the tests, run:

```
pnpm test
```

This will initiate Vitest in watch mode, where it will monitor for any file changes and automatically rerun the relevant tests, providing the results in the terminal.

## License

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE).

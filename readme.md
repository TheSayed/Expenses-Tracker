# Expenses Tracker App

## Overview

This project is a React Native application using Expo. It provides a template for getting started with React Native development using Expo to build an Expenses Tracker App.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional but recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install with `npm install -g expo-cli`)

## Installation

**Install the dependencies:**

Make sure you're in the project directory, then install the required node modules by running:

````bash
yarn install

If you prefer using npm, you can use:

```bash
npm install
````

## Run The App

**Start the development server:**

To start the Expo development server, run:

```bash
npx expo start
```

**Run the app:**

For iOS: Using your device Camera scan the QR code displayed in your terminal or in the Expo DevTools in your browser. Open the Expo Go app on your physical iOS device. If you don't have Expo Go installed, you can download it from the App Store.

For Android: Open the Expo Go app on your physical Android device and scan the QR code displayed in your terminal or in the Expo DevTools in your browser. If you don't have Expo Go installed, you can download it from the Google Play Store.

Make sure your device and development server are on the same WiFi network:

For Expo Go to connect successfully, your development server (the machine running the Expo CLI) and your physical device should be on the same Wi-Fi network.

## Troubleshooting

If the app does not load, ensure that your device and development server are on the same network. Check the terminal for any error messages that might provide more information on issues you encounter.

## Running Tests

To run the tests with Jest, use the following command:

```bash
yarn test
```

Or, if you prefer npm:

```bash
npm test
```

## Project Details

**Project Name:** Expenses Tracker App

**Type:** React Native with Expo

**Features:**

- Uses Redux for state management.
- Uses TypeScript for type safety.
- Implements dynamic routes for managing expenses.
- Filters expenses based on date and category.
- Uses `useGetExpenseItemsQuery` hook for fetching and displaying expenses.
- Implements form functionality with a `useExpenseFormHook` component.
- Custom splash screen component managed by loading state.

## Additional Information

**Custom Splash Screen Component:** Managed by loading state and font loading, does not rely on Expo's splash screen configuration.

**Package Manager:** Yarn (preferred), npm also supported.

**Error Handling:** Issues with loading data but other expense details like amount, date, and description are displayed normally.

**Code Repository:** GitHub Repository

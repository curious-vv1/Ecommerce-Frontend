# E-commerce Frontend Project

## Overview

This project is a full-featured e-commerce frontend application built with React. It provides a responsive and interactive shopping experience, complete with product browsing, cart management, user authentication, and an admin panel for product and order management.

## Features

- User authentication (signup and login)
- Product listing with sorting and filtering options
- Shopping cart functionality
- Checkout process with address management
- Admin panel for product and order management
- Responsive design for various screen sizes

## Technologies Used

- React 18
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Headless UI and Heroicons for UI components
- React Hook Form for form handling
- JSON Server as a mock backend

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ecommerce-frontend.git
   ```

2. Navigate to the project directory:
   ```
   cd ecommerce-frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

5. In a separate terminal, start the JSON server:
   ```
   json-server --watch db.json --port 8080
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

- `src/components`: React components
- `src/pages`: Page components
- `src/features`: Redux slices and related logic
- `src/app`: Redux store configuration
- `src/utils`: Utility functions
- `public`: Static assets

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


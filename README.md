# React.js Assignment

## Project Overview
This is a React.js project using Redux that includes:
-  **Landing Page**
-  **Login Page**
-  **Signup Page**
-  **Account Settings Page**

This project follows a pixel-perfect design based on the provided Adobe XD reference and ensures smooth navigation between pages. The design is mobile-responsive and optimized for performance.

## Features
- **Authentication using Redux**: Manages user login/logout state. Saving the data in the localstorage.
- **Pixel-perfect UI**: Implements the given Adobe XD design accurately.
- **Responsive Layout**: Styled with Tailwind CSS for mobile-first design.
- **Navigation**: Seamless transitions between pages using React Router.
- **State Management**: Global state handling with Redux. 

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Deployment**: Vercel 

## Installation & Setup

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/adity672roy/Adobe_design_XD-.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd  Adobe_design_XD-
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```

## Folder Structure
```
Adobe_design_XD-/
├── src/ 
│   ├── pages/           # Individual page 
│   │   ├── Account.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   ├── utils/           # Redux state management
│   │   ├── store.js
│   │   ├── userSlice.js
│   ├── App.jsx          # Main application component
│   ├── index.css
│   ├── main.jsx        # React entry point
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── README.md            # Project documentation
```

## Deployment
- **Hosted on Vercel:** [Live Demo](https://adobe-design-xd.vercel.app/)
- **GitHub Repository:** [View Source Code](https://github.com/adity672roy/Adobe_design_XD-)
 
 


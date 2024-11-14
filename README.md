# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Setup Instructions
Prerequisites
Before setting up the project, make sure you have the following installed:

Node.js (>= 14.x.x)
npm (comes with Node.js)
Git
Installation
Clone the repository:
git clone https://github.com/DypenCrest/TASKB.git
Navigate to the project directory

Install the dependencies:
npm install
Running the Application
To start the development server:
npm run dev
Visit http://localhost:5173 in your browser to see the application running.


Frontend Technologies
React: Chosen for building a dynamic and interactive UI with reusable components.
Tailwind CSS: Used for styling to provide utility-first CSS that is easy to customize and makes the development process faster.
React Router: Used for client-side routing to handle navigation between different pages without reloading the whole page.

Testing
Cypress: Chosen for end-to-end testing because it offers a simple, easy-to-use API for testing real user interactions. It is particularly good for simulating browser behavior and testing UI components.


Known Limitations/Trade-offs
Responsiveness: While the application works desktop, certain complex components may require additional work to ensure full responsiveness on all screen sizes.
Browser Support: The app is optimized for modern browsers. Older browsers (e.g., Internet Explorer) may not provide the best experience.
Performance: With a large number of products in the cart, the app may slow down due to the heavy reliance on localStorage for storing cart data.

# React + Vite

## Run the project

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open a terminal in the project folder.
3. Install the project dependencies:

   ```powershell
   npm install
   ```

4. Start the development server:

   ```powershell
   npm run dev
   ```

5. Open the URL printed in the terminal (usually `http://localhost:5173`) in your browser.

To stop the server, press `Ctrl+C` in the terminal.

## Deploy on Render

This project includes a `render.yaml` Blueprint configuration for a Render Static Site.

1. Push the project to GitHub.
2. In Render, select **New +** → **Blueprint** and connect the GitHub repository.
3. Select the repository's `main` branch and apply the Blueprint.
4. Render will install dependencies, build the Vite app, and publish the `dist` folder. Open the URL Render provides when the deployment is ready.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Admin login:
Email: admin@me.com
pass: 123

# Employee login:
Email: employee1@example.com
pass: 123

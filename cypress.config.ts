import { defineConfig } from "cypress";


interface CustomConfigOptions<ConfigOptions> {
  baseUrl?: string;
}

export default defineConfig({
  // baseUrl: "http://localhost:3000", // Replace with your React application's URL
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },



  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


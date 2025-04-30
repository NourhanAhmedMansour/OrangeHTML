import { test as baseTest } from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import PlaywrightFactoryMethods from "../FactoryMethods/PlaywrightFactoryMethods.js";  // Correct path

const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  playwrightFactoryMethods: async ({ page }, use) => {
    const playwrightFactoryMethod = new PlaywrightFactoryMethods(page);  // Correct class name
    await use(playwrightFactoryMethod);  // Pass the correct instance to test context
  },
  dashboard: async ({ page }, use) => {
    const dashboard = new Dashboard(page);
    await use(dashboard);
  },
});

export { test };
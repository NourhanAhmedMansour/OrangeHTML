import { test as baseTest } from "@playwright/test";
import LoginPage from "../Pages/LoginPage.js";
import Dashboard from "../Pages/Dashboard.js";
import AddEmpolyee from "../Pages/AddEmpolyee.js";
import AddRecruitment from "../Pages/AddRecruitment.js";
import AddLeave from "../Pages/AddLeave.js";


import PlaywrightFactoryMethods from "../FactoryMethods/PlaywrightFactoryMethods.js";

const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboard: async ({ page }, use) => {
    await use(new Dashboard(page));
  },
  addEmpolyee: async ({ page }, use) => {
    await use(new AddEmpolyee(page));
  },
  playwrightFactoryMethods: async ({ page }, use) => {
    await use(new PlaywrightFactoryMethods(page));
  },

addRecruitment: async ({ page }, use) => {
  await use(new AddRecruitment(page));
},
addLeave: async ({ page }, use) => {
  const addLeave = new AddLeave(page);
  await use(addLeave);
},
});

export { test };
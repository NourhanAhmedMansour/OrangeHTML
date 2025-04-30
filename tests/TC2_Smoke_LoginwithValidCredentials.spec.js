import { test } from "../Fixture/PageFixture"; 
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";

import fs from 'fs';
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);

test('LoginwithValidCredentials', async ({ playwrightFactoryMethods }) => {  
  const loginPage = new LoginPage(playwrightFactoryMethods.page);
  const dashboard = new Dashboard(playwrightFactoryMethods.page);

  await playwrightFactoryMethods.GoToPage();
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await playwrightFactoryMethods.VerifyFieldPresence(dashboard.SideBar);

});

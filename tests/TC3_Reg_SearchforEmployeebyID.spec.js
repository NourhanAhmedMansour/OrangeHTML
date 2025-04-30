import { test } from "../Fixture/PageFixture"; 
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import AddEmpolyee from "../Pages/AddEmpolyee";

import fs from 'fs';
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);
const AddEmpolyeeData = JSON.parse(
    fs.readFileSync(join('JsonFiles', 'AddEmpolyeeData.json'), 'utf-8')
  );
test('LoginwithValidCredentials', async ({ playwrightFactoryMethods, page }) => {  
  const loginPage = new LoginPage(playwrightFactoryMethods.page);
  const dashboard = new Dashboard(playwrightFactoryMethods.page);
  const addEmpolyee = new AddEmpolyee (playwrightFactoryMethods.page);

  await playwrightFactoryMethods.GoToPage();
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await playwrightFactoryMethods.ClickOnButton(dashboard.Empolyee);
  await playwrightFactoryMethods.ClickOnButton(addEmpolyee.EmpolyeeId);
  await playwrightFactoryMethods.InputValuesinTB(addEmpolyee.EmpolyeeId1, AddEmpolyeeData.EmpolyeeId);
  await page.waitForTimeout(5000); 
await playwrightFactoryMethods.ClickOnButton(addEmpolyee.SearchButton);
await playwrightFactoryMethods.VerifyValueExists(addEmpolyee.Cell1, AddEmpolyeeData.EmpolyeeId);
await playwrightFactoryMethods.VerifyValueExists(addEmpolyee.Cell2, AddEmpolyeeData.FirstName);
await playwrightFactoryMethods.VerifyValueExists(addEmpolyee.Cell3, AddEmpolyeeData.LastName);



});

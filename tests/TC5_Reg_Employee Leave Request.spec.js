import { test } from "../Fixture/PageFixture"; 
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import AddLeave from "../Pages/AddLeave";

import fs from 'fs';
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);
const AddLeaveData = JSON.parse(
    fs.readFileSync(join('JsonFiles', 'AddLeaveData.json'), 'utf-8')
  );
test('LoginwithValidCredentials', async ({ playwrightFactoryMethods, page }) => {  
  const loginPage = new LoginPage(playwrightFactoryMethods.page);
  const dashboard = new Dashboard(playwrightFactoryMethods.page);
  const addLeave = new AddLeave (playwrightFactoryMethods.page);

  await playwrightFactoryMethods.GoToPage();
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await playwrightFactoryMethods.ClickOnButton(dashboard.Leave);
  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignLeave);
  await playwrightFactoryMethods.selectFromAutocompleteField(addLeave.EmpolyeeName,'John',  AddLeaveData.EmpolyeeName);
  await playwrightFactoryMethods.SelectOptionFromDDL(addLeave.LeaveType, AddLeaveData.LeaveType);
  await playwrightFactoryMethods.InputValuesinTB(addLeave.FromDate, "2025-29-04");
  await page.waitForTimeout(5000); 
  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignButton);
  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignButton);

  await playwrightFactoryMethods.ClickOnButton(addLeave.ConfirmButton);
  await playwrightFactoryMethods.ClickOnButton(addLeave.LeaveList);
  await playwrightFactoryMethods.SelectOptionFromDDL(addLeave.LeaveType, AddLeaveData.LeaveStatus);
  await page.waitForTimeout(5000); 

  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignButton);

  await playwrightFactoryMethods.VerifyValueExists(addLeave.Cell1, '2025-29-04');
  await playwrightFactoryMethods.VerifyValueExists(addLeave.Cell3, AddLeaveData.LeaveType);




});
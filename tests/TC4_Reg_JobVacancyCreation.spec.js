import { test } from "../Fixture/PageFixture"; 
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import AddRecruitment from "../Pages/AddRecruitment";

import fs from 'fs';
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);
const AddRecruitmentData = JSON.parse(
    fs.readFileSync(join('JsonFiles', 'AddRecruitmentData.json'), 'utf-8')
  );
test('LoginwithValidCredentials', async ({ playwrightFactoryMethods, page }) => {  
  const loginPage = new LoginPage(playwrightFactoryMethods.page);
  const dashboard = new Dashboard(playwrightFactoryMethods.page);
  const addRecruitment = new AddRecruitment (playwrightFactoryMethods.page);

  await playwrightFactoryMethods.GoToPage();
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await playwrightFactoryMethods.ClickOnButton(dashboard.Recruitment);
  await playwrightFactoryMethods.ClickOnButton(addRecruitment.Vacancies); 
  await playwrightFactoryMethods.ClickOnButton(addRecruitment.AddButton);

  await playwrightFactoryMethods.SelectOptionFromDDL(addRecruitment.JobTitle, AddRecruitmentData.JobTitle);
await playwrightFactoryMethods.InputValuesinTB(addRecruitment.VacancyName, AddRecruitmentData.VacancyName);
await playwrightFactoryMethods.ClickOnButton(addRecruitment.HiringManager);
await playwrightFactoryMethods.selectFromAutocompleteField(addRecruitment.HiringManager,'Admin',  AddRecruitmentData.HiringManager);
await page.waitForTimeout(5000); 
await playwrightFactoryMethods.ClickOnButton(addRecruitment.SaveButton);
await page.waitForTimeout(5000); 
await playwrightFactoryMethods.ClickOnButton(addRecruitment.Vacancies);  
await playwrightFactoryMethods.SelectOptionFromDDL(addRecruitment.JobTitle, AddRecruitmentData.JobTitle);
await page.waitForTimeout(5000); 
await playwrightFactoryMethods.ClickOnButton(addRecruitment.SearchButton);
await playwrightFactoryMethods.VerifyFieldExists(addRecruitment.JobTitleCellTable, addRecruitment.JobTitle);



});
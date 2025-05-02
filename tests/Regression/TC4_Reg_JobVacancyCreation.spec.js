import { test } from "../../Fixture/PageFixture"; 

import fs from 'fs';
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);
const AddRecruitmentData = JSON.parse(
    fs.readFileSync(join('JsonFiles', 'AddRecruitmentData.json'), 'utf-8')
  );
test('TC4_Reg_JobVacancyCreation.spec', async ({ playwrightFactoryMethods, page }) => {  

await playwrightFactoryMethods.GoToPage();
await logger.logStep(page, 'Navigated to login page');
await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
await logger.logStep(page, 'Entered Username');
await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
await logger.logStep(page, 'Entered Password');
await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
await logger.logStep(page, 'Clicked Login button');
await playwrightFactoryMethods.ClickOnButton(dashboard.Recruitment);
await logger.logStep(page, 'Clicked Recruitment');
await playwrightFactoryMethods.ClickOnButton(addRecruitment.Vacancies); 
await logger.logStep(page, 'Clicked Vacancies');
await playwrightFactoryMethods.ClickOnButton(addRecruitment.AddButton);
await logger.logStep(page, 'Clicked AddButton');
await playwrightFactoryMethods.SelectOptionFromDDL(addRecruitment.JobTitle, AddRecruitmentData.JobTitle);
await logger.logStep(page, 'Choose JobTitle');
await playwrightFactoryMethods.InputValuesinTB(addRecruitment.VacancyName, AddRecruitmentData.VacancyName);
await logger.logStep(page, 'Choose VacancyName');
await playwrightFactoryMethods.ClickOnButton(addRecruitment.HiringManager);
await playwrightFactoryMethods.selectFromAutocompleteField(addRecruitment.HiringManager,'Admin',  AddRecruitmentData.HiringManager);
await page.waitForTimeout(5000); 
await logger.logStep(page, 'Choose HiringManager');
await playwrightFactoryMethods.ClickOnButton(addRecruitment.SaveButton);
await logger.logStep(page, 'Clicked SaveButton');
await page.waitForTimeout(5000); 
await logger.logStep(page, 'Clicked SaveButton');
await playwrightFactoryMethods.ClickOnButton(addRecruitment.Vacancies);  
await logger.logStep(page, 'Clicked Vacancies');
await playwrightFactoryMethods.SelectOptionFromDDL(addRecruitment.JobTitle, AddRecruitmentData.JobTitle);
await page.waitForTimeout(5000); 
await logger.logStep(page, 'Choose JobTitle');
await playwrightFactoryMethods.ClickOnButton(addRecruitment.SearchButton);
await logger.logStep(page, 'Clicked Search button');
await playwrightFactoryMethods.VerifyFieldExists(addRecruitment.JobTitleCellTable, addRecruitment.JobTitle);
await logger.logStep(page, 'Verify JobTitle');
await generatePdf(logger.getSteps(), 'TC4_Reg_JobVacancyCreation.spec');


});
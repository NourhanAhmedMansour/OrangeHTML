import { test } from "../../Fixture/PageFixture";
import fs from 'fs';
import { join } from 'path';
const { StepLogger } = require('../..//utils/stepLogger');
const { generatePdf } = require('../..//utils/pdfGenerator');
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);
const AddEmpolyeeData = JSON.parse(
    fs.readFileSync(join('JsonFiles', 'AddEmpolyeeData.json'), 'utf-8')
  );
test('TC2_Reg_SearchforEmployeebyID.spec', async ({ playwrightFactoryMethods, page, loginPage, dashboard, addEmpolyee }) => {  

  const logger = new StepLogger('TC2_Reg_SearchforEmployeebyID.spec');

  await playwrightFactoryMethods.GoToPage();
  await logger.logStep(page, 'Navigated to login page');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await logger.logStep(page, 'Entered Username');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await logger.logStep(page, 'Entered Password');
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await logger.logStep(page, 'Clicked Login button');
  await playwrightFactoryMethods.ClickOnButton(dashboard.Empolyee);
  await logger.logStep(page, 'Clicked Empolyee');
  await playwrightFactoryMethods.ClickOnButton(addEmpolyee.EmpolyeeId);
  await playwrightFactoryMethods.InputValuesinTB(addEmpolyee.EmpolyeeId1, AddEmpolyeeData.EmpolyeeId);
  await page.waitForTimeout(5000); 
  await logger.logStep(page, 'Entered EmpolyeeId');
await playwrightFactoryMethods.ClickOnButton(addEmpolyee.SearchButton);
await logger.logStep(page, 'Clicked Search button');
await playwrightFactoryMethods.VerifyValueExists(addEmpolyee.Cell1, AddEmpolyeeData.EmpolyeeId);
await logger.logStep(page, 'Verify EmpolyeeId');
await playwrightFactoryMethods.VerifyValueExists(addEmpolyee.Cell2, AddEmpolyeeData.FirstName);
await logger.logStep(page, 'Verify FirstName');
await playwrightFactoryMethods.VerifyValueExists(addEmpolyee.Cell3, AddEmpolyeeData.LastName);
await logger.logStep(page, 'Verify LastName');
await generatePdf(logger.getSteps(), 'TC2_Reg_SearchforEmployeebyID.spec');
});

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
test('TC1_Reg_AddNewEmployee.spec', async ({ playwrightFactoryMethods, page,loginPage, dashboard, addEmpolyee  }) => {  
  const logger = new StepLogger('TC1_Reg_AddNewEmployee.spec');
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
  await playwrightFactoryMethods.ClickOnButton(addEmpolyee.AddButton);
  await logger.logStep(page, 'Clicked Add Empolyee');
  await playwrightFactoryMethods.InputValuesinTB(addEmpolyee.FirstName, AddEmpolyeeData.FirstName);
  await logger.logStep(page, 'Entered Firstname');
  await playwrightFactoryMethods.InputValuesinTB(addEmpolyee.LastName, AddEmpolyeeData.LastName);
  await logger.logStep(page, 'Entered LastName');
  await playwrightFactoryMethods.ClickOnButton(addEmpolyee.EmpolyeeId);
  await playwrightFactoryMethods.InputValuesinTB(addEmpolyee.EmpolyeeId1, AddEmpolyeeData.EmpolyeeId);
  await logger.logStep(page, 'Entered EmpolyeeId');
  const filePath = 'C:/Users/8416/Downloads/image.png';
  await page.setInputFiles('input[type="file"]', filePath);  
  await logger.logStep(page, 'Add Photo');
  await playwrightFactoryMethods.ClickOnButton(addEmpolyee.SaveButton);
  await logger.logStep(page, 'Save');
  await page.waitForTimeout(5000); 
  await playwrightFactoryMethods.ClickOnButton(dashboard.Empolyee);
  await playwrightFactoryMethods.ClickOnButton(addEmpolyee.EmpolyeeId);
  await logger.logStep(page, 'Clicked Empolyee');
  await playwrightFactoryMethods.InputValuesinTB(addEmpolyee.EmpolyeeId1, AddEmpolyeeData.EmpolyeeId);
  await page.waitForTimeout(5000); 
  await logger.logStep(page, 'Entered EmpolyeeId');
await playwrightFactoryMethods.ClickOnButton(addEmpolyee.SearchButton);
await logger.logStep(page, 'Clicked SearchButton');
await playwrightFactoryMethods.VerifyValueExists(addEmpolyee.Cell1, AddEmpolyeeData.EmpolyeeId);
await logger.logStep(page, 'Verify Data');
await generatePdf(logger.getSteps(), 'TC1_Reg_AddNewEmployee.spec');

});

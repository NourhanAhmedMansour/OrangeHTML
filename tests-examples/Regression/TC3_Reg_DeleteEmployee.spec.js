import { test } from "../../Fixture/PageFixture";
const { StepLogger } = require('../../utils/stepLogger');
const { generatePdf } = require('../../utils/pdfGenerator');
import fs from 'fs';
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);
const AddEmpolyeeData = JSON.parse(
    fs.readFileSync(join('JsonFiles', 'AddEmpolyeeData.json'), 'utf-8')
  );
test('TC3_Reg_DeleteEmployee.spec', async ({ playwrightFactoryMethods, page, loginPage,addEmpolyee, dashboard }) => {  
const logger = new StepLogger('TC3_Reg_DeleteEmployee.spec');
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
await logger.logStep(page, 'Clicked SearchButton');
await playwrightFactoryMethods.ClickOnButton(addEmpolyee.Cell0);
await page.waitForTimeout(5000); 
await logger.logStep(page, 'Checked TheEmpolyee ');
await playwrightFactoryMethods.ClickOnButton(addEmpolyee.DeleteButton);
await logger.logStep(page, 'Clicked DeleteButton ');
await playwrightFactoryMethods.ClickOnButton(addEmpolyee.ConfirmDeletation);
await page.waitForTimeout(10000); 
await logger.logStep(page, 'Confirm Deletation ');
await playwrightFactoryMethods.VerifyFieldExists(addEmpolyee.Records)
await logger.logStep(page, 'Verify Deletation ');
await generatePdf(logger.getSteps(), 'TC3_Reg_DeleteEmployee.spec');

});

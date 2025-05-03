import { test } from "../../Fixture/PageFixture"; 
const { StepLogger } = require('../../utils/stepLogger');
const { generatePdf } = require('../../utils/pdfGenerator');
import fs from 'fs';
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);

test('TC3_Smoke_VerifyLogoutFunctionality.spec', async ({ playwrightFactoryMethods,page, dashboard,  loginPage}) => {  
  const logger = new StepLogger('TC3_Smoke_VerifyLogoutFunctionality.spec');

  await playwrightFactoryMethods.GoToPage();
  await logger.logStep(page, 'Navigated to login page');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await logger.logStep(page, 'Entered Username');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await logger.logStep(page, 'Entered Password');
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await logger.logStep(page, 'Clicked Login button');
  await playwrightFactoryMethods.ClickOnButton(dashboard.UserDDL);
  await logger.logStep(page, 'Clicked UserMenu');
  await playwrightFactoryMethods.ClickOnButton(dashboard.LogOutButton);
  await logger.logStep(page, 'Clicked Logout button');
  await playwrightFactoryMethods.VerifyFieldExists(loginPage.LoginButton);
  await logger.logStep(page, 'Verify LoginButtonExisting');
  await playwrightFactoryMethods.VerifyFieldExists(loginPage.ForgetPassword);
  await logger.logStep(page, 'Verify ForgetPasswordExisting');
  await generatePdf(logger.getSteps(), 'TC3_Smoke_VerifyLogoutFunctionality.spec');

});

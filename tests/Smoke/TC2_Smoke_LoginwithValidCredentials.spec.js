import { test } from "../../Fixture/PageFixture"; 
import fs from 'fs';
import { join } from 'path';
const { StepLogger } = require('../../utils/stepLogger');
const { generatePdf } = require('../../utils/pdfGenerator');
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);

test('TC2_Smoke_LoginwithValidCredentials.spec', async ({ playwrightFactoryMethods,page, loginPage, dashboard  }) => { 
  const logger = new StepLogger('TC2_Smoke_LoginwithValidCredentials.spec');

  await playwrightFactoryMethods.GoToPage();
  await logger.logStep(page, 'Navigated to login page');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await logger.logStep(page, 'Entered Username');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await logger.logStep(page, 'Entered Password');
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await logger.logStep(page, 'Clicked Login button');
  await playwrightFactoryMethods.VerifyFieldPresence(dashboard.SideBar);
  await logger.logStep(page, 'Verify dashboard Appears');
  await generatePdf(logger.getSteps(), 'TC2_Smoke_LoginwithValidCredentials.spec');
});

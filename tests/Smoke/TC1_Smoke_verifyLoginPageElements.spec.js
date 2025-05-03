import { test } from "../../Fixture/PageFixture"; 
const { StepLogger } = require('../../utils/stepLogger');
const { generatePdf } = require('../../utils/pdfGenerator');

test('TC1_Smoke_verifyLoginPageElements.spec', async ({ playwrightFactoryMethods, page, loginPage }) => {  
  const logger = new StepLogger('TC1_Smoke_verifyLoginPageElements.spec');
  await playwrightFactoryMethods.GoToPage();
  await logger.logStep(page, 'Navigated to login page');
  await playwrightFactoryMethods.VerifyFieldExists(loginPage.Username);
  await logger.logStep(page, 'Entered Username');
  await playwrightFactoryMethods.VerifyFieldExists(loginPage.Password);
  await logger.logStep(page, 'Entered Password');
  await playwrightFactoryMethods.VerifyFieldExists(loginPage.LoginButton);
  await logger.logStep(page, 'Verify LoginButton');
  await playwrightFactoryMethods.VerifyFieldExists(loginPage.ForgetPassword);
  await logger.logStep(page, 'Verify ForgetPassword');
  await generatePdf(logger.getSteps(), 'TC1_Smoke_verifyLoginPageElements.spec');
  
});
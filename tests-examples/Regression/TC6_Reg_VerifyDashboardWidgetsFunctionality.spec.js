import { test } from "../../Fixture/PageFixture"; 
const { StepLogger } = require('../../utils/stepLogger');
const { generatePdf } = require('../../utils/pdfGenerator');
import fs from 'fs';
import { join } from 'path';

const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);

test('TC6_Reg_VerifyDashboardWidgetsFunctionality', async ({ playwrightFactoryMethods, page, loginPage, dashboard  }) => {  
  const logger = new StepLogger('TC6_Reg_VerifyDashboardWidgetsFunctionality');
  await playwrightFactoryMethods.GoToPage();
  await logger.logStep(page, 'Navigated to login page');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await logger.logStep(page, 'Entered Username');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await logger.logStep(page, 'Entered Password');
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await logger.logStep(page, 'Clicked Login button');
  await playwrightFactoryMethods.VerifyFieldPresence(dashboard.EmployeeDistributionSub);
  await logger.logStep(page, 'Verified presence of "Employee Distribution by Subunit" widget');
  await playwrightFactoryMethods.VerifyFieldPresence(dashboard.EmployeeDistributionLoc);
  await logger.logStep(page, 'Verified presence of "Employee Distribution by Location" widget');
  await playwrightFactoryMethods.VerifyFieldPresence(dashboard.Timesheet);
  await logger.logStep(page, 'Verified presence of "Timesheet" widget');
  await playwrightFactoryMethods.VerifyValueExists(dashboard.TimesheetWeek, 'Apr 28 - May 04');
  await logger.logStep(page, 'Verified presence of "Timesheet" widget');
  await generatePdf(logger.getSteps(), 'TC6_Reg_VerifyDashboardWidgetsFunctionality');
});
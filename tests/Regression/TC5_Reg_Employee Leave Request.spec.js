import { test } from "../../Fixture/PageFixture"; 
import fs from 'fs';
const { StepLogger } = require('../../utils/stepLogger');
const { generatePdf } = require('../../utils/pdfGenerator');
import { join } from 'path';
const LoginPageData = JSON.parse(
  fs.readFileSync(join('JsonFiles', 'LoginPageData.json'), 'utf-8')
);
const AddLeaveData = JSON.parse(
    fs.readFileSync(join('JsonFiles', 'AddLeaveData.json'), 'utf-8')
  );
test('TC5_Reg_Employee Leave Request.spec', async ({ playwrightFactoryMethods, page,  loginPage, dashboard, addLeave}) => {  
  const logger = new StepLogger('TC5_Reg_Employee Leave Request.spec');

  await playwrightFactoryMethods.GoToPage();
  await logger.logStep(page, 'Navigated to login page');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Username, LoginPageData.Username);
  await logger.logStep(page, 'Entered Username');
  await playwrightFactoryMethods.InputValuesinTB(loginPage.Password, LoginPageData.Password);
  await logger.logStep(page, 'Entered Password');
  await playwrightFactoryMethods.ClickOnButton(loginPage.LoginButton);
  await logger.logStep(page, 'Clicked Login button');
  await playwrightFactoryMethods.ClickOnButton(dashboard.Leave);
  await logger.logStep(page, 'Clicked Leave');
  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignLeave);
  await logger.logStep(page, 'Clicked AssignLeaveButton');
  await playwrightFactoryMethods.selectFromAutocompleteField(addLeave.EmpolyeeName,'John',  AddLeaveData.EmpolyeeName);
  await logger.logStep(page, 'Choose EmpolyeeName');
  await playwrightFactoryMethods.SelectOptionFromDDL(addLeave.LeaveType, AddLeaveData.LeaveType);
  await logger.logStep(page, 'Choose LeaveType');
  await playwrightFactoryMethods.InputValuesinTB(addLeave.FromDate, "2025-29-04");
  await logger.logStep(page, 'Entered Date');
  await page.waitForTimeout(5000); 
  await logger.logStep(page, 'Entered Date');
  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignButton);
  await logger.logStep(page, 'Clicked AssignButton');
  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignButton);
  await logger.logStep(page, 'Clicked AssignButton');
  await playwrightFactoryMethods.ClickOnButton(addLeave.ConfirmButton);
  await logger.logStep(page, 'Clicked ConfirmButton');
  await playwrightFactoryMethods.ClickOnButton(addLeave.LeaveList);
  await logger.logStep(page, 'Clicked LeaveList');
  await playwrightFactoryMethods.SelectOptionFromDDL(addLeave.LeaveType, AddLeaveData.LeaveStatus);
  await page.waitForTimeout(5000); 
  await logger.logStep(page, 'Choose LeaveType');
  await playwrightFactoryMethods.ClickOnButton(addLeave.AssignButton);
  await logger.logStep(page, 'Clicked SearchButton');
  await playwrightFactoryMethods.VerifyValueExists(addLeave.Cell1, '2025-29-04');
  await logger.logStep(page, 'Verify Date');
  await playwrightFactoryMethods.VerifyValueExists(addLeave.Cell3, AddLeaveData.LeaveType);
  await logger.logStep(page, 'Verify LeaveType');
  await generatePdf(logger.getSteps(), 'TC5_Reg_Employee Leave Request.spec');




});
import dotenv from 'dotenv';  
dotenv.config({ path: './Environment/.env.test' });  
const { test, expect } = require('@playwright/test');

class PlaywrightFactoryMethodS {
    constructor(page) {
        this.page = page;    
    }

    async GoToPage() {
        const baseURL = process.env.BASE_URL;  // Assume BASE_URL is set
        console.log('Navigating to:', baseURL);  // Optional: Log the URL for debugging
        await this.page.goto(baseURL);
    }

    async VerifyFieldExists(locator) {
        await expect(locator).toBeVisible(); 
    }

    async InputValuesinTB(locator, value) {
        await locator.fill(value); 
        
        // Fill the input field with the provided value
    }
    async VerifyFieldPresence(locator) {
        // Check if the locator exists in the DOM (does not need to be visible)
        await expect(locator).toBeAttached();
    }

    async ClickOnButton(locator) {
    await locator.click(); 
    }
    async VerifyValueExists(locator, value) {
        await expect(locator).toContainText(value); 
    }
         
    async SelectOptionFromDDL(locator, value) {
        await locator.click(); // Open dropdown
        await this.page.getByRole('option', { name: value, exact: true }).click();
}


async  selectFromAutocompleteField(locator, partialText, value) {
    await locator.fill(partialText);
    await this.page.waitForSelector('div[role="option"]');
    await this.page.locator('div[role="option"]')
        .filter({ hasText: value })
        .first()
        .click();

}
async VerifyValueExists1(locator, value) {
    await expect(locator).toHaveText(value)
}
}
export default PlaywrightFactoryMethodS;
class AddEmpolyee {
    constructor(page) {
        this.page = page; 
        this.AddButton = this.page.locator('.oxd-topbar-body-nav-tab-item').nth(2); 
        this.FirstName = this.page.locator('[name="firstName"]'); 
        this.LastName = this.page.locator('[name="lastName"]'); 
        this.EmpolyeeId = this.page.locator('.oxd-input-field-bottom-space:has-text("Employee Id") input.oxd-input')
        this.EmpolyeeId1 = this.page.locator('[class="oxd-input oxd-input--focus"]')
        this.AddPhoto = page.locator('.employee-image-wrapper');
        this.SaveButton =   page.locator('[type="submit"]');
        this.SearchButton = page.locator('[type="submit"]');
        this.Cell1 = page.locator("div[class='oxd-table-card'] div:nth-child(2)"); 
        this.Cell2 = page.locator("div[class='oxd-table-card'] div:nth-child(3)"); 
        this.Cell3 = page.locator("div[class='oxd-table-card'] div:nth-child(4)"); 

        this.Cell0 = page.locator("div[class='oxd-table-card-cell-checkbox']"); 
        this.DeleteButton = page.locator('text="Delete Selected"'); 
        this.ConfirmDeletation = page.locator('text="Yes, Delete"'); 
        this.Records = page.locator('text="No Records Found"')
    }
}

export default AddEmpolyee;
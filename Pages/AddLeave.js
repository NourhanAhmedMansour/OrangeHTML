class addLeave {
    constructor(page) {
        this.page = page; 
        this.AssignLeave = this.page.locator('text="Assign Leave"')
        this.EmpolyeeName = this.page.locator('input[placeholder="Type for hints..."]')
        this.LeaveType = this.page.locator('.oxd-select-text-input').first();
        this.FromDate = this.page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]'); 
        this.ToDate = this.page.locator('(//input[@placeholder="yyyy-dd-mm"])[2]'); 
        this.AssignButton=   this.page.locator('[type="submit"]');
        this.ConfirmButton = page.locator('text="Ok"'); 
        this.LeaveList = page.locator('text="Leave List"'); 
        this.Cell1 = page.locator("div[class='oxd-table-card'] div:nth-child(2)"); 
        this.Cell2 = page.locator("div[class='oxd-table-card'] div:nth-child(3)"); 
        this.Cell3 = page.locator("div[class='oxd-table-card'] div:nth-child(4)"); 
    }
}

export default addLeave;
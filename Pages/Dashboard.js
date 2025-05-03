class Dashboard {
    constructor(page) {
        this.page = page; 
        this.SideBar = this.page.locator('.oxd-sidepanel'); 
        this.UserDDL = this.page.locator('.oxd-userdropdown'); 
        this.LogOutButton = this.page.locator('text="Logout"'); 
        this.Empolyee = this.page.locator("a[href*='viewPimModule']"); 
        this.Recruitment = this.page.locator("a[href*='viewRecruitmentModule']"); 
        this.Leave = this.page.locator("a[href*='viewLeaveModule']"); 
        this.EmployeeDistributionSub = this.page.locator(".emp-distrib-chart").first()  
        this.EmployeeDistributionLoc = this.page.locator(".emp-distrib-chart").last();  
        this.Timesheet = this.page.locator(".orangehrm-dashboard-widget-body").nth(1);  
        this.TimesheetWeek = this.page.locator("p.oxd-text--p", { hasText: " - " }).first();

    }
}

export default Dashboard;
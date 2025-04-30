class AddRecruitment {
    constructor(page) {
        this.page = page; 
        this.Vacancies = this.page.locator('text="Vacancies"');
        this.AddButton = this.page.locator('text="Add"');
        this.VacancyName = this.page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.JobTitle = this.page.locator('.oxd-select-text-input').first();
        this.HiringManager = this.page.locator('input[placeholder="Type for hints..."]')
        this.SaveButton = page.locator('text="Save"'); 
        this.SearchButton =   page.locator('[type="submit"]');
        this.JobTitleCellTable =   page.locator("//div[@role='cell' and contains(.,'Software Engineer')]")
    }
}

export default AddRecruitment;
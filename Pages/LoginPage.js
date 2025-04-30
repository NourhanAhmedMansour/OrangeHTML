class LoginPage {
    constructor(page) {
        this.page = page; 
        this.Username = this.page.locator('[name="username"]');  
        this.Password = this.page.locator('[name="password"]'); 
        this.LoginButton = this.page.locator('[type="submit"]'); 
        this.ForgetPassword = this.page.locator('.orangehrm-login-forgot');
    }
}

export default LoginPage;
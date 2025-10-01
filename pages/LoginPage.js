const { expect } = require('@playwright/test');

exports.LoginPage=
class LoginPage {

    constructor(page) {
        this.page = page;
        this.namaperusahaanInput = "//input[@name='idperusahaan']";
        this.namaperusahaanError = "//span[.='Nama Perusahaan tidak terdaftar.']"
        this.usernameInput = "//input[@name='username']";
        this.usernameError = "//span[.='Username tidak terdaftar.']";
        this.passwordInput = "//input[@id='input-password']";
        this.passwordError = "//span[.='Password salah.']";
        this.loginButton = "//button[@class='btn']";
        
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.nutacloud.com/authentication/loginv2');
    }

    async login(namaperusahaan, username, password){
        await this.page.locator(this.namaperusahaanInput).fill(namaperusahaan);
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async VerifyLogin(namaperusahaan, username, password) {
        await this.login(namaperusahaan, username, password);
        await this.page.waitForTimeout(3000);
        
        if (await this.page.locator(this.namaperusahaanError).isVisible()) {
            throw new Error("Nama Perusahaan tidak terdaftar");
        }
        if (await this.page.locator(this.usernameError).isVisible()) {
            throw new Error("Username tidak terdaftar");
        }
        if (await this.page.locator(this.passwordError).isVisible()) {
            throw new Error("Password salah");
        }
        try {
            await expect(this.page).toHaveURL('https://www.nutacloud.com/cloud/main');
            console.log('Test Login Berhasil');
        } catch (error) {
            console.log('Test Login gagal');
            throw error;
        }
    }
}

        
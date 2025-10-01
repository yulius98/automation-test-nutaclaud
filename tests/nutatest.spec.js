import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('Test Login dengan data valid', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.VerifyLogin('mowkscoffee','yulius kurniawan wijaya','juvita98');  
    
});

test('Test Login dengan invalid nama perusahaan', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.VerifyLogin('mowkscoffe','yulius kurniawan wijaya','juvita98');  
    
});

test('Test Login dengan invalid username', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.VerifyLogin('mowkscoffee','yulius kurniawan w','juvita98');  
    
});

test('Test Login dengan invalid password', async ({ page }) => {

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.VerifyLogin('mowkscoffee','yulius kurniawan wijaya','juvita9');  
    
});
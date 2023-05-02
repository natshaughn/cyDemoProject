import Login from "../pageObjects/loginPage";

const login = new Login();

describe('Login tests', () => {
    it('standard User', () => {
        cy.visit('https://www.saucedemo.com/');
        login.setUserName('standard_user');
        login.setPassword('secret_sauce');
        login.clickSubmit();
        login.verifyLogin();
    })

    it('locked out user', () => {
        cy.visit('https://www.saucedemo.com/');
        login.setUserName('locked_out_user');
        login.setPassword('secret_sauce');
        login.clickSubmit();
        login.verifyLogin();
    })

    it('problem user', () => {
        cy.visit('https://www.saucedemo.com/');
        login.setUserName('problem_user');
        login.setPassword('secret_sauce');
        login.clickSubmit();
        login.verifyLogin();  
    })

    it('performance glitch user', () => {
        cy.visit('https://www.saucedemo.com/');
        login.setUserName('performance_glitch_user');
        login.setPassword('secret_sauce');
        login.clickSubmit();
        login.verifyLogin();      
    })
})
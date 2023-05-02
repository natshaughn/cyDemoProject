class Login 
{
    userInput = '#user-name';
    pwInput = '#password';
    submitClick = '#login-button';
    verifyURL = 'https://www.saucedemo.com/inventory.html';
    verifyTitle = 'Products';

    setUserName(username)
    {
        cy.get(this.userInput).type(username);
    }
    setPassword(password)
    {
        cy.get(this.pwInput).type(password);
    }
    clickSubmit()
    {
        cy.get(this.submitClick).click();
    }
    verifyLogin()
    {
        cy.url().should('eq', this.verifyURL);
        cy.get('.title').should('have.text', this.verifyTitle)
        .and('exist');
    }
}

export default Login;
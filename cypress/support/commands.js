Cypress.Commands.add('Login', (email, password) => {
    /*
    cy.session(`user-${email}`, () => {
        cy.visit('/');
        cy.get('title').should('have.text', 'Swag Labs');
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('#login_credentials').should('be.visible')
        .and('exist')
        cy.get('#user-name').type(email);
        cy.get('#user-name').should('have.value', email)
        cy.get('#password').type(password);
        cy.get('#password').should('have.value', password)
        cy.get('#login-button').click();
    })
    cy.get('.title').should('have.text', 'Products')
    cy.visit('https://www.saucedemo.com/inventory.html')
    */
    
    cy.visit('/');
        cy.get('title').should('have.text', 'Swag Labs');
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('#login_credentials').should('be.visible')
        .and('exist')
        cy.get('#user-name').type(email);
        cy.get('#user-name').should('have.value', email)
        cy.get('#password').type(password);
        cy.get('#password').should('have.value', password)
        cy.get('#login-button').click();
        
})

Cypress.Commands.add('clickItem', (label)=>{
    cy.get('a').contains(label).click();
})

Cypress.Commands.add('clickHamburger', () => {
    cy.get('#react-burger-menu-btn').click()
})

Cypress.Commands.add('dropDownFilter', ([val]) => {
    cy.get('.product_sort_container').select([val])
}) 


// Cypress.Commands.add('Login', (username, password) => {
//     cy.session(`${standard_user}`, () => {
//         cy.visit('https://www.saucedemo.com/');
//         cy.get('title').should('have.text', 'Swag Labs');
//         cy.get('#user-name').type(username);
//         cy.get('#password').type(`${password}{enter}`);
//       })
//       // cy.get('#logout_sidebar_link').contains('Logout')
//       cy.get('span.title').should('have.text', 'Products')  
// })
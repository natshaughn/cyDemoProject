class CheckoutStepOne 
{
    username = 'standard_user';
    password = 'secret_sauce';
    cartLink = '.shopping_cart_link';
    checkout = '#checkout';
    FNameInput = '#first-name';
    LNameInput = '#last-name';
    pCodeInput = '#postal-code';
    custFixture = 'customerDetails';
    cancel = '#cancel';
    title = '.title';
    cartTitle = 'Your Cart';
    continue = '#continue'
    checkoutTitle = 'Checkout: Overview';
    getToStepOne()
    {
      cy.Login(this.username, this.password);
      cy.get(this.cartLink).click();
      cy.get(this.checkout).click();
    }

    addUserdata()
    {
        cy.fixture(this.custFixture).then((data) => {
            cy.get(this.FNameInput).type(data.firstName);
            cy.get(this.LNameInput).type(data.lastName);
            cy.get(this.pCodeInput).type(data.postcode);
          });
    }

    custExist()
    {
      cy.fixture(this.custFixture).then((data) => {
       cy.get(`input[value="${data.firstName}"]`).should('exist');
       cy.get(`input[value="${data.lastName}"]`).should('exist');
       cy.get(`input[value="${data.postcode}"]`).should('exist');
      })
    }

    cancelCheckout()
    {
      cy.get(this.cancel).click();
    }

    cartPage()
    {
      cy.get(this.title).should('have.text', this.cartTitle)
    }

    continueCheckout()
    {
      cy.get(this.continue).click();
    }

    checkoutPageTwo()
    {
      cy.get(this.title).should('have.text', this.checkoutTitle);
    }
}

export default CheckoutStepOne;
class CheckoutStepTwo 
{
    user = 'standard_user';
    pw = 'secret_sauce';
    pricebarBtn = '.pricebar > button';
    cartBadge = '.shopping_cart_badge';
    carLink = '.shopping_cart_link';
    checkout = '#checkout';
    FNameInput = '#first-name';
    LNameInput = '#last-name';
    pCodeInput = '#postal-code';
    custFixture = 'customerDetails';
    continue = '#continue';
    title = '.title';
    checkoutTitle = 'Checkout: Overview';
    cartItem = '.cart_item'
    cancelBtn = '#cancel';
    inventoryUrl = 'https://www.saucedemo.com/inventory.html';
    finishBtn = '#finish';
    completeHeader = '.complete-header';
    finHeaderTxt = 'Thank you for your order!';
    prodTxt = 'Products';


    getToStepTwo()
    {
      cy.Login(this.user, this.pw);
      cy.get(this.pricebarBtn).click({multiple: true});
      cy.get(this.cartBadge).should('have.text', 6);
      cy.get(this.carLink).click();
      cy.get(this.checkout).click();
      cy.fixture(this.custFixture).then((data) => {
        cy.get(this.FNameInput).type(data.firstName);
        cy.get(this.LNameInput).type(data.lastName);
        cy.get(this.pCodeInput).type(data.postcode);
        cy.get(`input[value="${data.firstName}"]`).should('exist');
        cy.get(`input[value="${data.lastName}"]`).should('exist');
        cy.get(`input[value="${data.postcode}"]`).should('exist');
      });
      cy.get(this.continue).click();
      cy.get(this.title).should('have.text', this.checkoutTitle);
    }

    correctNumberOfItem(val)
    {
      cy.get(this.cartItem).its('length').should('eq', val)
    }

    clickCancel() 
    {
        cy.get(this.cancelBtn).click();
        cy.url().should('eq', this.inventoryUrl);
        cy.get(this.title).should('have.text', this.prodTxt);
    }
    
    clickFinish()
    {
      cy.get(this.finishBtn).click();
      cy.get(this.completeHeader).should('have.text', this.finHeaderTxt);
    }
}

export default CheckoutStepTwo;
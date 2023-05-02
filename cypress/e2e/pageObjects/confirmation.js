class Confirmation
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
    finishBtn = '#finish';
    header = '.complete-header';
    completeHeading = 'Thank you for your order!';
    homeBtn = '#back-to-products';
    inventoryUrl = 'https://www.saucedemo.com/inventory.html';
    homeTitle = 'Products';

    getToConfirmation()
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
      cy.get(this.finishBtn).click();
    }

    correctPage()
    {
      cy.get(this.header).should('have.text', this.completeHeading);
    }

    clickHome()
    {
      cy.get(this.homeBtn).click();
      cy.url().should('eq', this.inventoryUrl);
      cy.get(this.title).should('have.text', this.homeTitle);
    }
}

export default Confirmation;
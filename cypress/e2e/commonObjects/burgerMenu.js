class BurgerMenu 
{
    cartLink = '.shopping_cart_link';
    title = '.title';
    cartUrl = 'https://www.saucedemo.com/cart.html';
    cartTitle = 'Your Cart';
    menuAllItems = 'All Items';
    inventoryUrl = 'https://www.saucedemo.com/inventory.html';
    productTitle = 'Products';
    menuAbout = 'About';
    sauceUrl = 'https://saucelabs.com/';
    sauceVisible = 'button#onetrust-accept-btn-handler';
    menuLogout = 'Logout';
    loginPageUrl = 'https://www.saucedemo.com/';
    loginBtn = '#login-button';
    addProdToCart = '#add-to-cart-sauce-labs-';
    backpack = 'backpack';
    bikeLight = 'bike-light';
    cartBadge = '.shopping_cart_badge';
    menuReset = 'Reset App State';

    clickAllItems()
    {
        cy.get(this.cartLink).click();
        cy.url().should('eq', this.cartUrl);
        cy.get(this.title).should('have.text', this.cartTitle);
        cy.clickHamburger();
        cy.clickItem(this.menuAllItems);
        cy.url().should('eq', this.inventoryUrl);
        cy.get(this.title).should('have.text', this.productTitle);
    }

    clickAbout()
    {
        cy.clickHamburger();
        cy.clickItem(this.menuAbout);
        cy.url().should('eq', this.sauceUrl);
        cy.get(this.sauceVisible).should('be.visible');
    }

    clickLogout()
    {
        cy.clickHamburger();
        cy.clickItem(this.menuLogout);
        cy.url().should('eq', this.loginPageUrl);
        cy.get(this.loginBtn).should('be.visible');
    }

    clickReset()
    {
        cy.get(`${this.addProdToCart}${this.backpack}`).click();
        cy.get(`${this.addProdToCart}${this.bikeLight}`).click();
        cy.get(this.cartBadge).should('have.text', 2);
        cy.clickHamburger();
        cy.clickItem(this.menuReset);
        cy.get(this.cartBadge).should('not.exist');
        cy.get(`${this.addProdToCart}${this.backpack}`).should('exist');
    }
}

export default BurgerMenu;
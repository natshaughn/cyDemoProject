class Inventory
{
    activeFilter = 'span.active_option';
    firstProduct = '.inventory_list > .inventory_item:nth-child(1) > div > div > a > div';
    productContainer = '#inventory_item_container';
    productName = '.inventory_details_name.large_size';
    clickBack = '#back-to-products';
    cart = '.shopping_cart_badge';
    pricebarButton = '.pricebar > button';

    verifyInventoryPage()
    {
        cy.get('span.title').should('have.text', 'Products');
        let expName = 'Add to cart';
        cy.get('#add-to-cart-sauce-labs-backpack').then( (x) => {
            let actName = x.text()
            expect(actName).to.equal(expName)
      });
    }

    dropdownFilter([val], filterName, product)
    {
        cy.get('.product_sort_container').select([val]);
        cy.get(this.activeFilter).should('have.text', filterName);
        cy.get(this.firstProduct).should('have.text', product);
    }

    clickOnProduct(item)
    {
        cy.clickItem(item);
        cy.url().should('include', 'https://www.saucedemo.com/inventory-item.html?id=');
        cy.get(this.productContainer).should('exist');
        cy.get(this.productName).should('have.text', item);
        cy.get(this.clickBack).click();
        this.verifyInventoryPage()
    }

    clickOnProductAddToCart(item)
    {
        cy.clickItem(item);
        cy.url().should('include', 'https://www.saucedemo.com/inventory-item.html?id=');
        cy.get(this.productContainer).should('exist');
        cy.get(this.productName).should('have.text', item);
        cy.get('button').contains('Add to cart').click();
        cy.get(this.cart).should('have.text', 1);
        cy.get('[data-test="back-to-products"]').click();
    }

    clickOnProductRemove(item)
    {
        cy.clickItem(item);
        cy.url().should('include', 'https://www.saucedemo.com/inventory-item.html?id=');
        cy.get(this.productContainer).should('exist');
        cy.get(this.productName).should('have.text', item);
        cy.get('button').contains('Remove').click();
        cy.get(this.cart).should('not.exist');
    }

    addAllItemsToCart()
    {
        cy.get(this.cart).should('not.exist');
        cy.get(this.pricebarButton).contains('Add to cart');
        cy.get(this.pricebarButton).click({multiple: true});
        cy.get(this.cart).should('have.text', 6);
    }

    removeAllItemsFromCart()
    {
        cy.get(this.cart).should('exist');
        cy.get(this.pricebarButton).contains('Remove');
        cy.get(this.pricebarButton).click({multiple: true});
        cy.get(this.cart).should('not.exist');
    }
}

export default Inventory;
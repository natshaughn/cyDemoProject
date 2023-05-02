class Cart 
{
    cartLink = '.shopping_cart_link';
    removeBackpack = '#remove-sauce-labs-backpack';

    itemsInCartValue(val)
    {
        cy.get('.cart_item').its('length').should('eq', val);
    }

    removeItem(item)
    {
        cy.get(item).click();
    }
}

export default Cart;
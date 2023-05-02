import Inventory from "../pageObjects/inventoryPage"
import Cart from "../pageObjects/cart";

const inventory = new Inventory();
const cart = new Cart();

describe('Cart tests', {testIsolation: false}, () => {
    beforeEach(() => {
        cy.session('Single login session for cart tests', () => {
            cy.Login('standard_user', 'secret_sauce');
            inventory.addAllItemsToCart();
            cy.get(cart.cartLink).click();
        })
    })

    it('Has the correct number of items in cart', () => {
        cart.itemsInCartValue(6);
    })

    it('removes an item', () => {
        cart.removeItem(cart.removeBackpack);
        cart.itemsInCartValue(5);
    })
})
import Inventory from "../pageObjects/inventoryPage";

const inventory = new Inventory();

describe('Inventory page tests', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.Login('standard_user', 'secret_sauce');
    })
 
    // Check you're on the right page after log in
    it('is on the products page', () => {
     inventory.verifyInventoryPage();
  
    })

    it('is on the product page', () => {
      cy.get('span.title').should('not.have.text', 'Your Cart');
    })

    // Dropdown filter 
    it('Clicks on Name (A to Z) in the dropdown menu', () => {
     inventory.dropdownFilter([0], 'Name (A to Z)', 'Sauce Labs Backpack');
    })

    it('Clicks on Name (Z to A) in the dropdown menu', () => {
      inventory.dropdownFilter([1], 'Name (Z to A)', 'Test.allTheThings() T-Shirt (Red)');
    })

    it('Clicks on Price (low to high) in the dropdown menu', () => {
      inventory.dropdownFilter([2], 'Price (low to high)', 'Sauce Labs Onesie');
    })

    it('Clicks on Price (high to low) in the dropdown menu', () => {
      inventory.dropdownFilter([3], 'Price (high to low)', 'Sauce Labs Fleece Jacket');
    })


    // Click on products 
    it('Clicks on Sauce Labs Backpack link', () => {
      inventory.clickOnProduct('Sauce Labs Backpack');
    })

    it('Clicks on Sauce Labs Bike Light link', () => {
      inventory.clickOnProduct('Sauce Labs Bike Light');
    })

    it('Clicks on Sauce Labs Bolt T-Shirt link', () => {
      inventory.clickOnProduct('Sauce Labs Bolt T-Shirt');
    })

    it('Clicks on Sauce Labs Fleece Jacket link', () => {
      inventory.clickOnProduct('Sauce Labs Fleece Jacket');
    })

    it('Clicks on Sauce Labs Onesie link', () => {
      inventory.clickOnProduct('Sauce Labs Onesie');
    })

    it('Clicks on Test.allTheThings() T-Shirt (Red) link', () => {
      inventory.clickOnProduct('Test.allTheThings() T-Shirt (Red)') ;
    })

    it('adds Test.allTheThings() T-Shirt (Red) to the cart from the product link', () => {
      inventory.clickOnProductAddToCart('Test.allTheThings() T-Shirt (Red)');
      inventory.clickOnProductRemove('Test.allTheThings() T-Shirt (Red)');
      
    })

    it('adds all the items to cart', () => {
     inventory.addAllItemsToCart();
    })

    it('removes items from cart', () => {
      inventory.removeAllItemsFromCart();
    })
})

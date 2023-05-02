import BurgerMenu from "../commonObjects/burgerMenu"

const burgerMenu = new BurgerMenu();

describe('Hamburger Menu tests', () => {
    beforeEach(() => {
        cy.Login('standard_user', 'secret_sauce')
    })
    
    it('Clicks All items', () => {
        burgerMenu.clickAllItems()
    })

    it('Clicks About', () => {
       burgerMenu.clickAbout();
    })

    it('Clicks Logout', () => {
       burgerMenu.clickLogout();
    })

    it('Clicks Reset App State', () => {
       burgerMenu.clickReset();
    })
})
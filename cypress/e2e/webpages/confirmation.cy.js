import Confirmation from "../pageObjects/confirmation"

const confirmation = new Confirmation;

describe('Confirmation tests', () => {
    beforeEach(() => {
     confirmation.getToConfirmation();
    })

    it('is on the correct page', () => {
        confirmation.correctPage();
    })

    it('goes back home', () => {
        confirmation.clickHome();
    })
})
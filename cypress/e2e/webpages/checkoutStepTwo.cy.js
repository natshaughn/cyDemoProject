import CheckoutStepTwo from "../pageObjects/checkoutStepTwo";

const checkoutTwo = new CheckoutStepTwo();

describe('Checkout step 2 tests', () => {
    beforeEach(() => {
     checkoutTwo.getToStepTwo();
    })
    
    it('has correct number of items in cart', () => {
        checkoutTwo.correctNumberOfItem(6);
    })

    it('clicks cancel', () => {
        checkoutTwo.clickCancel();
    })

    it('click finish', () => {
       checkoutTwo.clickFinish();
    })
})
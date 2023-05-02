import CheckoutStepOne from "../pageObjects/checkoutStepOne";

const checkout = new CheckoutStepOne();

describe('Checkout Step One tests', () => {
    beforeEach(() => {
      checkout.getToStepOne();
    })
    
    it('adds the customers details', () => {
       checkout.addUserdata();
       checkout.custExist();
    })

    it('cancels checkout', () => {
      checkout.addUserdata();
      checkout.custExist();
      checkout.cancelCheckout();
      checkout.cartPage();
    })

    it('continues checkout', () => {
      checkout.addUserdata();
      checkout.custExist();
      checkout.continueCheckout();
      checkout.checkoutPageTwo();
    })
})

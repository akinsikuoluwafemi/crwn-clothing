import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_VQzFISIs6wyNbWTpoPTTR92c005CZWTDAC';
    return (
        <StripeCheckout
            label="Pay Now"
            name="Nika Alpha Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i"
        
        
        />
    )
}
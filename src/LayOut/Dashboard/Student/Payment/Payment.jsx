import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const location = useLocation()
    const  enrolledClass = location.state.enrolledClass;
    const price = enrolledClass.price
    const amount = parseFloat(price)

    return (
        <div className='w-full p-10'>
            <h3 className='text-3xl font-semibold text-center'>Please Confirm Your Payment </h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={amount} enrolledClass={enrolledClass}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
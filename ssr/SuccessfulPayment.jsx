const React = require('react');

const SuccessfulPayment = ({session}) => {
    const {customer_name, customer_email, address} = session;
    return (
        <div>
            <h1>Thank you {customer_name} for your order!</h1>
            <div>
                <p>{customer_email}</p>
            </div>
            <div>
                <p> Shipping To </p>
                <p>{address && address.city + " " + address.country +  " " + address.state}</p>
            </div>
        </div>
    );
};

export default SuccessfulPayment;
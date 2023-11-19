const React = require('react');

const SuccessfulPayment = ({session}) => {
    const {customer_name, customer_email} = session;
    return (
        <div>
            <h1>Thank you {customer_name} for your order!</h1>
            <div>
                <p>{customer_email}</p>
            </div>
            <div>
                <p>{JSON.stringify({session})}</p>
            </div>
        </div>
    );
};

export default SuccessfulPayment;
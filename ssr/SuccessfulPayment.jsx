const React = require('react');

const SuccessfulPayment = ({session}) => {
    const {customer_name, customer_email, address} = session;
    return (
        <div className="center font">
            <div>
                <h1 className="thankYouMsg">Thank you Bobby Name</h1>
                <p>Your order was completed successfully.</p>
                <p>Please allow sometime to fulfill your order.</p>
            </div>
             <div>
                <a href="https://paixamour.netlify.app/Shop">Continue Shopping</a>
             </div>
            {/*<h1>Thank you {customer_name} for your order!</h1>
            <div>
                <p>{customer_email}</p>
            </div>
            <div>
                <p> Shipping To </p>
                <p>{address && address.city + " " + address.country +  " " + address.state}</p>
             </div>*/}
        </div>
    );
};

export default SuccessfulPayment;
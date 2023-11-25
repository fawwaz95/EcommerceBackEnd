const React = require('react');

const SuccessfulPayment = ({session}) => {
    const {customer_name} = session;
    return (
        <div className="center font">
            <div>
                <h1 className="thankYouMsg">Thank you {customer_name ? customer_name : ""}</h1>
                <div className="content">
                    <p>Your order was completed successfully.</p>
                    <p>Please allow sometime to fulfill your order.</p>
                </div>
            </div>
             <div className="link">
                <a href="https://paixamour.netlify.app/Shop">Continue Shopping</a>
             </div>
            {/*<div>
                <h1 className="thankYouMsg">Thank you {customer_name} for your order!</h1>
                <p>Your order was completed successfully.</p>
                <p>Please allow sometime to fulfill your order.</p>
            </div>
            <div>
                <a href="https://paixamour.netlify.app/Shop">Continue Shopping</a>
             </div>
            */}
        </div>
    );
};

export default SuccessfulPayment;
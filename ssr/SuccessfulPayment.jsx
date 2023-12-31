const React = require('react');

const SuccessfulPayment = ({session}) => {
    const {customer_name: customerName = "" } = session || {};
    return (
        <div className="center font">
            <div>
                <p className="thankYouMsg oneLine">Thank you <span className="cursive"> {customerName}</span></p>
                <div className="content">
                    <p className="oneLine">Your order was completed successfully.</p>
                    <p className="oneLine">Please allow sometime to fulfill your order.</p>
                </div>
            </div>
             <div className="link">
                <a href="https://paixamour.netlify.app/Shop">Continue Shopping</a>
             </div>
             <div>
                <img fetchpriority="high" width="150" height="150" src="https://svoenterprises.com/wp-content/uploads/2021/04/Running.gif" alt="Order gif"/>
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
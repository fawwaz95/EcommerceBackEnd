const React = require('react');

const SuccessfulPayment = ({session}) => {
    return (
        <div>
            <h1>Tahnk you for your order!</h1>
            <div>
                <p>{JSON.stringify(session)}</p>
            </div>
        </div>
    );
};

export default SuccessfulPayment;
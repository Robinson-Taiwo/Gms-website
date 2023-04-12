import React from 'react';
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpFormContainer = props => {
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe />
        </div>
    );
};

export default MailchimpFormContainer;
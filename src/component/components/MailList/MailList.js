import React from 'react';
import './MailList.scss';

const MailList = () => {
    return (
        <div className='mail'>
            <h3>Save time, save money!</h3>
            <p>Sign up and we'll seend the best deals to you.</p>
            <div className="mailInput">
                <input type="text" placeholder='Your Email' />
                <button className='brand-btn'>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;
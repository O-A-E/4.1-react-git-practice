import React from "react";

class Contact extends React.Component
{
    render ()
    {
        return(
            <>
                <h2>Contact Us</h2>
                <p>Please reach out to work with us if you have any questions. You can reach us through...</p>
                <dl>
                    <dt>Phone</dt>
                    <dd>+1 (780) 123-4567</dd>
                    <dt>E-Mail</dt>
                    <dd>hello@example.com</dd>
                </dl>
            </>
        
        );
    }
}

export default Contact;
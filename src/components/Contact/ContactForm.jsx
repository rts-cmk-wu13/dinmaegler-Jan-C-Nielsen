
import { Form, useActionData } from "react-router";
import { useState } from 'react';

export default function ContactForm({classes ="contactform"}) {
    const errors = useActionData();
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

console.log('Form data:', data);

        const response = await fetch('http://localhost:4000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
            // Handle error, e.g., show a message to the user
            //throw new Error('Login failed');
            setError(result.message || 'Submit failed');
            console.error('Submit failed:', result);
            return;
        }
    }


    return (
        <>
        
        <Form onSubmit={handleSubmit} className={classes}>
            <div className="form-group name">
                <label htmlFor="name" >Full name</label>
                <p>{errors && errors?.name?.errors[0]}</p>

                <input type="text" name="name" placeholder="Name" className="contactform__input"/>
            </div>

            <div className="form-group email">
                <label htmlFor="email">Email</label>
                <p>{errors && errors?.email?.errors[0]}</p>

                <input type="email" name="email" placeholder="Email" className="contactform__input" />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <p>{errors && errors?.subject?.errors[0]}</p>

                <input type="text" name="subject" placeholder="Subject" className="contactform__input"/>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <p>{errors && errors?.message?.errors[0]}</p>
                <textarea type="message" name="message" placeholder="Message" className="contactform__message"/>
            </div>
            <button type="submit">Submit</button>
        </Form>
        </>
    )
}
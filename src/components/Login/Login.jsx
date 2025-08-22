import { Form } from 'react-router';
import { useAuth } from '../../AutoContext.jsx';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { useActionData } from 'react-router';
import { redirect } from "react-router";


export default function LoginToAccount() {

    const errors = useActionData();

    return (
        <>
            <div className="signupcontainer">
                <h2>Registered Customers</h2>
                <p>If you have an account, sign in with your email address.</p>
                <Form method="post" className="signupcontainer__form">
                    <div className="signupcontainer__form-group">
                        <label htmlFor="identifier">Email</label>
                        <p>{errors && errors?.email?.errors[0]}</p>
                        <input type="text" id="identifier" name="identifier" required />
                    </div>
                    <div className="signupcontainer__form-group">
                        <label htmlFor="password">Password</label>
                        <p>{errors && errors?.password?.errors[0]}</p>
                        <input type="text" id="password" name="password" required />
                    </div>
                    <div className="signupcontainer__form-group--checkbox">
                        <input type="checkbox" id="rememberme" name="rememberme" />
                        <label htmlFor="rememberme">Remember me</label>
                    </div>

                    <button type="submit">Sign in</button>
                </Form>
                <p>Forgot your password?</p>
            </div>
            <div className="newcustomer">
                <h2>New Customers</h2>
                <p>Creating an account has many benefits: check out faster, track orders and more.</p>
                <button onClick={() => window.location.href="/signup"}>Create an account</button>
            </div>
        </>
    )
}

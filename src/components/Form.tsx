import { Form, Formik, Field, FormikHelpers } from "formik";
import React from "react";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYup = () => {
    return (
        <div className='centering-form'>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                }}
                onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}>
                <Form>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name='firstName' placeholder='John' />

                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lastName' placeholder='Doe' />

                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' placeholder='john@acme.com' type='email' />

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

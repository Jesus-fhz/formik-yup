import { Form, Formik, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormikInput } from "./FormikInput";
import { FormikSelect } from "./FormikSelect";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    options: string;
}
const options: object[] = [
    { index: 1, value: "One" },
    { index: 2, value: "Two" },
    { index: 3, value: "Three" },
];

const validate = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});
export const FormikYup = () => {
    return (
        <div className='centering-form'>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    options: "",
                }}
                validationSchema={validate}
                onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                    console.log(values);
                }}>
                <Form>
                    <FormikInput type='text' id='firstName' name='firstName' placeholder='John' label='First Name' />
                    <FormikInput type='text' id='lastName' name='lastName' placeholder='Doe' label='Last Name' />
                    <FormikInput id='email' name='email' placeholder='john@acme.com' type='email' label='Email' />
                    <FormikSelect id='options' name='options' label='Select an option' options={options} />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

import { useField } from "formik";

export const FormikInput = ({ ...props }: any) => {
    const [field, meta, helpers] = useField(props);

    return (
        <>
            {props.label}
            <input {...field} {...props} />
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </>
    );
};

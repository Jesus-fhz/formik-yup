import { useField } from "formik";

export const FormikSelect = ({ options, ...props }: any) => {
    const [field, meta, helpers] = useField(props);

    return (
        <>
            {props.label}
            <select {...field} {...props}>
                {options.map((el: any) => (
                    <option key={el.index} value={el.index}>
                        {el.value}
                    </option>
                ))}
            </select>
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </>
    );
};

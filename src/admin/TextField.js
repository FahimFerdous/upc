import React from 'react'

import { ErrorMessage, useField } from 'formik'

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="form-group">
            {/* <label htmlFor={field.name}>{label}</label> */}
            <input {...field} {...props} className={`form-control form-control-lg ${meta.touched && meta.error && 'is-invalid'}`} />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>

    )
}

export default TextField
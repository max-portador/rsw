import React from "react";
import css from './FormControl.module.css'

export const TextArea = ({field, form, ...props}) => {
    let name = field.name
    const hasError = form.errors[name] && form.touched[name];
    return <div className={css.form_control + " " + (hasError && css.error)}>
        <div>
            <textarea {...{...props, ...field}} />
        </div>
        {hasError && <span className={css.error_message}>{form.errors[name]}</span>}
    </div>
}

export const Input = ({field, form, ...props}) => {
    let name = field.name
    const hasError = form.errors[name] && form.touched[name];
    return <div className={css.form_control + " " + (hasError && css.error)}>
        <div>
            <input {...{...props, ...field}} />
        </div>
        {hasError && <span className={css.error_message}>{form.errors[name]}</span>}
    </div>
}

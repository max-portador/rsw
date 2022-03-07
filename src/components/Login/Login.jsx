import React from "react";
import {Form, Field, Formik} from 'formik';
import {connect} from "react-redux";
import {authUserLogin} from "../../redux/jsauthReducer";
import {validateEmail, validatePassword} from "../../utils/validators";
import css from "./Login.module.css"
import {Input} from "../common/FormControls/FormControls";

const LoginForm = (props) => {
    const loginSubmit = (values, { setSubmitting, setFieldValue, setTouched }) => {
        console.table(values)
        props.authUserLogin(values.email, values.password)
        setFieldValue("email", "")
        setTouched("email", false)
        setFieldValue("password", "")
        setTouched("password", false)
        setSubmitting(true)
    }

    const loginValidate = ({email, password}) => {
        let errors = {}

        let emailError = validateEmail(email);
        if (emailError) {
            errors.email = emailError;
        }

        let passwordError = validatePassword(password);
        if (passwordError) {
            errors.password = passwordError;
        }
        return errors
    }

    return <div>
            <Formik  initialValues= {{
                email: props.email,
                password: props.password
            }}
            onSubmit={loginSubmit}
            validate={loginValidate}
            >

                {({ errors, touched, isValidating }) => (
                    <Form className={css.form}>
                        <h1>Login</h1>
                        <Field name="email" id={"email"} component={Input} type="email"
                               className={css.field} placeholder={"email"} />
                        <Field name="password" component={Input} type="password"  placeholder={"password"}
                               className={css.field}/>
                        <div className={css.checkBoxSection}>
                            <Field name="isRemebered" component={Input} type="checkbox" />
                            <label>Remember</label>
                        </div>
                        <button type="submit" className={css.btn}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
}

const mapStateToProps = state => ({
    email: state.auth.email || "",
    password: state.auth.password || "",
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {authUserLogin})(LoginForm)
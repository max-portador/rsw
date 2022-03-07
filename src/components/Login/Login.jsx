import React from "react";
import {Form, Field, Formik} from 'formik';
import {connect} from "react-redux";
import {authUserLogin} from "../../redux/jsauthReducer";
import {validateEmail, validatePassword} from "../../utils/validators";
import {Input} from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";
import css from "./Login.module.css"

const LoginForm = (props) => {
    const loginSubmit = (values, { setSubmitting }) => {
        debugger
        props.authUserLogin(values.email, values.password, values.rememberMe)
        setSubmitting(true)
    }

    const loginValidate = ({email, password, rememberMe}) => {
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
                password: props.password,
                rememberMe: false,
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
                            <Field name="rememberMe" component={"input"} type="checkbox" />
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

const Login = (props) => {
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <LoginForm {...props} authUserLogin={props.authUserLogin} />
}


export default connect(mapStateToProps, {authUserLogin})(Login)
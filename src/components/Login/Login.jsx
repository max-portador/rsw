import React from "react";
import {Form, Field, Formik} from 'formik';
import {connect} from "react-redux";
import {authUserLogin} from "../../redux/jsauthReducer";
import {validateEmail, validatePassword} from "../../utils/validators";
import {Input} from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";
import css from "./Login.module.css"

const LoginForm = ({authUserLogin, email, password}) => {
    const loginSubmit = (values, { setFieldValue}) => {
        authUserLogin(values.email, values.password, values.rememberMe, setFieldValue)

    }

    const loginValidate = ({email, password}) => {
        let errors = {};
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
                email: email,
                password: password,
                rememberMe: false,
            }}
            onSubmit={loginSubmit}
            validate={loginValidate}
            >

                {({ values }) => (

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
                        <div className={css.errorContainer}>
                            {values.general ? <span  className={css.error}>{values.general}</span>: null}
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

const Login = ({isAuth, ...props }) => {
    if (isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <LoginForm {...props} />
}


export default connect(mapStateToProps, {authUserLogin})(Login)
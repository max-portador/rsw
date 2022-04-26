import React, {FC} from "react";
import {Form, Field, Formik} from 'formik';
import {connect, ConnectedProps} from "react-redux";
import {authUserLogin} from "../../redux/authReducer";
import {validateEmail, validatePassword, validateRequired} from "../../utils/validators";
import {Input} from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";
import css from "./Login.module.css"
import {RootState} from "../../redux/reduxStore";

const LoginForm: FC<FormPropsType> = ({authUserLogin, email, password, captchaUrl}) => {

    const loginSubmit = (values, { setFieldValue}) => {
        authUserLogin(setFieldValue, values.email, values.password, values.rememberMe, values.captcha)

    }

    const loginValidate = ({email, password, captcha}) => {
        let errors: any = {} ;
        let emailError = validateEmail(email);
        if (emailError) {
            errors.email = emailError;
        }

        if (captchaUrl){
            let captchaError = validateRequired(captcha)
            if (captchaError) {
                errors.captcha = captchaError
            }
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
                        {captchaUrl && <img src={captchaUrl} alt='captcha' />}
                        {captchaUrl && <Field name="captcha" component={Input}
                                              type="text"
                                              placeholder="Symbols from image"
                                              className={css.field}/>}
                        <button type="submit" className={css.btn}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
}

const mapStateToProps = (state: RootState) => ({
    captchaUrl: state.auth.captchaUrl,
    email: state.auth.email || "",
    password: state.auth.password || "",
    isAuth: state.auth.isAuth,
})

const Login: FC<ConnectedType> = ({isAuth, ...props }) => {
    debugger
    if (isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <LoginForm {...props} />
}

const connector = connect(mapStateToProps, {authUserLogin})

export default connector(Login)

type ConnectedType = ConnectedProps<typeof connector>
type FormPropsType = Omit<ConnectedType, 'isAuth'>
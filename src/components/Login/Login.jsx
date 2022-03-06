import React from "react";
import {Form, Field, Formik} from 'formik';
import css from "./Login.module.css"
import {connect} from "react-redux";
import {authUserLogin} from "../../redux/jsauthReducer";

const LoginForm = (props) => {
    const submit = (values, { setSubmitting }) => {
        props.authUserLogin(values.email, values.password)
        setSubmitting(false)
    }

    const validate = (values) => {
        let errors = {};
        return errors;
    }

    return <div>
            <Formik  initialValues= {{
                email: props.email,
                password: props.password
            }}
            validate={validate}
            onSubmit={submit}>
                <>
                    <Form className={css.form}>
                        <h1>Login</h1>
                        <Field name="email" component={"input"} type="text"  placeholder={"email"}/>
                        <Field name="password" component={"input"} type="text"  placeholder={"password"}/>
                        <Field name="isRemebered" component={"input"} type="checkbox" />
                        <button type="submit">Login</button>
                    </Form>
                </>

            </Formik>

        </div>
}

const mapStateToProps = state => ({
    email: state.auth.email || "",
    password: state.auth.password || "",
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {authUserLogin})(LoginForm)
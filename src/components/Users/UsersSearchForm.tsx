import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/usersReducer";

const UsersSearchForm = React.memo<UsersSearchFormPropsType>( ({onFilterChanged}) => {
    const submit = (values, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setTimeout(() => {
            let friend = eval(values.friend)
            onFilterChanged({term: values.term, friend})
            setSubmitting(false)
        }, 10)
    }

    return (
        <Formik
            initialValues={{term: '', friend: null}}
            validate={() => {
            }}
            onSubmit={submit}>
            {({isSubmitting}) => (
                <Form>
                    <Field type='text' name='term'/>
                    <Field name='friend' as='select' style={{margin: "0 10px"}}>
                        <option value='null'>All</option>
                        <option value='true'>Only friends</option>
                        <option value='false'>Not friends</option>

                    </Field>
                    <button type='submit' disabled={isSubmitting}>Find</button>
                </Form>
            )}
        </Formik>
    );
});

export default UsersSearchForm;


export type UsersSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}
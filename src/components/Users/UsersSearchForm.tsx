import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType, requestUsers, UserActionType} from "../../redux/usersReducer";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../../redux/reduxStore";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const UsersSearchForm = React.memo( () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, UserActionType>>()
    const { pageSize } = useTypedSelector( state =>
        state.usersPage)

    const onFilterChanged = async (filter: FilterType) => {
        await dispatch(requestUsers(1, pageSize, filter))
    }


    const submit = (values, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setTimeout(async () => {
            let friend = eval(values.friend)
            await onFilterChanged({term: values.term, friend})
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

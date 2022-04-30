import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType, requestUsers, UserActionType} from "../../redux/usersReducer";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../../redux/reduxStore";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FilterFriendEnum} from "../../redux/usersReducer/types";

const UsersSearchForm = React.memo( () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, UserActionType>>()
    const { pageSize, filter } = useTypedSelector( state =>
        state.usersPage)

    const onFilterChanged = async (filter: FilterType) => {
        await dispatch(requestUsers(1, pageSize, filter))
    }


    const submit = (values, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setTimeout(async () => {
            await onFilterChanged({term: values.term, friend: values.friend})
            setSubmitting(false)
        }, 10)
    }

    return (
        <Formik
            initialValues={{term: filter.term, friend: filter.friend}}
            enableReinitialize={true}
            validate={() => {
            }}
            onSubmit={submit}>
            {({isSubmitting}) => (
                <Form>
                    <Field type='text' name='term'/>
                    <Field name='friend'
                           as='select'
                           style={{margin: "0 10px"}}>
                        <option value={FilterFriendEnum.ALL}>All</option>
                        <option value={FilterFriendEnum.ONLY_FRIENDS}>Only friends</option>
                        <option value={FilterFriendEnum.NOT_FRIENDS}>Not friends</option>

                    </Field>
                    <button type='submit' disabled={isSubmitting}>Find</button>
                </Form>
            )}
        </Formik>
    );
});

export default UsersSearchForm;

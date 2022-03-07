
export const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}


export const validateRequired = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

export const validatePassword = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    }
    else if (
        !/[0-9]{2,4}$/i.test(value)
        ) {
        error = 'Password should contain 2 digits';
    }
    else if (value.length < 8) {
        error = 'Password is too short. Minimum 8 characters required';
    }
    return error;
}
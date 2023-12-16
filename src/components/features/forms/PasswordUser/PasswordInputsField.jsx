//PasswordInputsField.jsx
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import '../PasswordUser/Password.scss';
import '@components/styles/Star.scss';
import '@components/styles/Validation.scss';
import InputField from '@components/InputField/InputField';

const CombinedPasswordFields = ({
    validatePassword,
    onChange
}) => {

    const [passwordd, setPasswordd] = useState({ password: '', repeatPassword: '' })
    const valid = validatePassword(passwordd.password, passwordd.repeatPassword);

    useEffect(() => {
        onChange(passwordd)
    }, [passwordd])

    const passwordInputClasses = clsx('password__row-input', {
        'valid-input': valid.isPasswordValid,
        'invalid-input': !valid.isPasswordValid
    });

    const repeatPasswordInputClasses = clsx('password__row-input', {
        'valid-input': valid.isRepeatPasswordValid,
        'invalid-input': !valid.isRepeatPasswordValid
    });

    return (
        <>
            <InputField
                label='Пароль'
                id='passwordUser'
                type='password'
                description='Должен содержать не менее 6 символов и только латинские буквы.'
                rowClasses='password__row row'
                titleClasses='password__row-title'
                labelClasses='password__row-label'
                inputClasses={passwordInputClasses}
                descriptionClasses='password__row-descr'
                required={true}
                onChange={(event) => {
                    setPasswordd({ ...passwordd, password: event.target.value })
                }}
            />
            <InputField
                label='Пароль еще раз'
                id='repeatpasswordUser'
                type='password'
                placeholder='Повторите Пароль'
                description='Проверка на совпадение с паролем.'
                rowClasses='password__row row'
                titleClasses='password__row-title'
                labelClasses='password__row-label'
                inputClasses={repeatPasswordInputClasses}
                descriptionClasses='password__row-descr'
                required={true}
                onChange={(event) => {
                    setPasswordd({ ...passwordd, repeatPassword: event.target.value })
                }}
            />
        </>
    );
};

export default CombinedPasswordFields;

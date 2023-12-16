//Password.jsx
import { useState } from 'react';
import PasswordInputsField from './PasswordInputsField';
import { validatePassword } from '@utility/Validation/PasswordInputValidation/PasswordValidation';
import { handlePasswordChange } from '@utility/handleFields/passwordChange/passwordChange';
import { handleRepeatPasswordChange } from '@utility/handleFields/passwordChange/passwordRepeatChange';
import clsx from 'clsx';
import '../PasswordUser/Password.scss';
import '@components/styles/Star.scss';
import '@components/styles/Validation.scss';


export default function Password({ onChange }) {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const { isPasswordValid, isRepeatPasswordValid } = validatePassword(password, repeatPassword);


    const passwordInputClasses = clsx('password__row-input', {
        'valid-input': isPasswordValid,
        'invalid-input': !isPasswordValid
    });

    const repeatPasswordInputClasses = clsx('password__row-input', {
        'valid-input': isRepeatPasswordValid,
        'invalid-input': !isRepeatPasswordValid
    });

    return (
        <div className='password block-padding'>
            <PasswordInputsField
                passwordInputClasses={passwordInputClasses}
                handlePasswordChange={handlePasswordChange}
                setPassword={setPassword}
                validatePassword={validatePassword}
                repeatPassword={repeatPassword}
                repeatPasswordInputClasses={repeatPasswordInputClasses}
                handleRepeatPasswordChange={handleRepeatPasswordChange}
                setRepeatPassword={setRepeatPassword}
                isPasswordValid={isPasswordValid}
                isRepeatPasswordValid={isRepeatPasswordValid}
                onChange={onChange}
            />
        </div>
    );
}

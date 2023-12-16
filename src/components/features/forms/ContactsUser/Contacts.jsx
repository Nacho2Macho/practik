// Contacts.jsx
import { useState, useEffect } from 'react';
import { validatePhoneNumber, validateEmail } from '@utility/Validation/ContactsInputValidation/ContactsValidation';
import { handleCheckboxChange } from "@utility/handleFields/checkboxChange/checkboxInputChange";
import { handlePhoneInputChange } from "@utility/handleFields/phoneChange/phoneInputChange";
import { handleEmailInputChange } from "@utility/handleFields/emailChange/emailInputChange";
import ContactsInputsField from "./contactsInputsField"
import clsx from 'clsx';
import '../ContactsUser/Contacts.scss';
import '@components/styles/Star.scss';
import '@components/styles/Validation.scss';
import '@components/styles/CheckBox.scss';

export default function Contacts({ onChange }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    useEffect(() => {
        setPhoneNumberError(validatePhoneNumber(phoneNumber));
    }, [phoneNumber]);

    useEffect(() => {
        setEmailError(validateEmail(email, isCheckboxChecked));
    }, [email, isCheckboxChecked]);


    const isPhoneNumberValid = phoneNumberError === '';
    const isEmailValid = emailError === '';

    const handleCheckbox = (e) => handleCheckboxChange(e, setIsCheckboxChecked, onChange, phoneNumber, email, isEmailValid, isCheckboxChecked);
    const handlePhoneInput = (e) => handlePhoneInputChange(e, e.target.value, validatePhoneNumber, setPhoneNumber, setPhoneNumberError, onChange, phoneNumber, email, isEmailValid, isCheckboxChecked);
    const handleEmailInput = (e) => handleEmailInputChange(e, e.target.value, validateEmail, setEmail, setEmailError, isCheckboxChecked, onChange, phoneNumber, email);


    const checkboxClasses = clsx('checkbox__input', { 'invalid-input': isCheckboxChecked });
    const emailInputClasses = clsx('contacts__row-input', {
        'valid-input': isEmailValid,
        'invalid-input': !isEmailValid && emailError,
    });

    const phoneInputClasses = clsx('contacts__row-input', {
        'valid-input': isPhoneNumberValid,
        'invalid-input': !isPhoneNumberValid,
    });

    return (
        <div className='contacts block-padding'>
            <ContactsInputsField
                phoneNumber={phoneNumber}
                handlePhoneInput={handlePhoneInput}
                phoneInputClasses={phoneInputClasses}
                email={email}
                handleEmailInput={handleEmailInput}
                emailInputClasses={emailInputClasses}
                isCheckboxChecked={isCheckboxChecked}
            />
            <div className='contacts__row row row-consent'>
                <p className='contacts__row-title title'>Я согласен</p>
                <label htmlFor='checkboxChange' className='checkbox'>
                    <input
                        className={checkboxClasses}
                        type='checkbox'
                        id='checkboxChange'
                        checked={isCheckboxChecked}
                        onChange={handleCheckbox}
                    />
                    <svg className='checkbox__icon' viewBox='0 0 22 22'>
                        <rect width='21' height='21' x='.5' y='.5' fill='#FFF' stroke='#7E7E7E' />
                        <path
                            className='tick'
                            stroke='#037BB8'
                            fill='none'
                            strokeLinecap='round'
                            strokeWidth='4'
                            d='M4 10l5 5 9-9'
                        />
                    </svg>
                    <span className='checkbox__label'>принимать актуальную информацию на емейл</span>
                </label>
            </div>
        </div>
    );
}

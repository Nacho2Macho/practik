//emailInputChange.jsx
export function handleEmailInputChange(e, inputEmail, validateEmail, setEmail, setEmailError, isCheckboxChecked, onChange, phoneNumber, email) {
    const emailValidationResult = validateEmail(inputEmail, isCheckboxChecked);
    setEmail(inputEmail);
    setEmailError(emailValidationResult);
    onChange({ phoneNumber, email: inputEmail, isEmailValid: emailValidationResult === '', checkboxChecked: isCheckboxChecked });
    // if (isCheckboxChecked && emailValidationResult === '') {
    //     onChange({ phoneNumber, email: inputEmail, isEmailValid: true, checkboxChecked: isCheckboxChecked });
    // } else if (!isCheckboxChecked) {
    //     onChange({ phoneNumber, email: inputEmail, isEmailValid: emailValidationResult === '', checkboxChecked: isCheckboxChecked });
    // }
}
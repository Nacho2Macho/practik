//phoneInputChange.jsx
export function handlePhoneInputChange(e, inputPhoneNumber, validatePhoneNumber, setPhoneNumber, setPhoneNumberError, onChange, phoneNumber, email, isEmailValid, isCheckboxChecked) {
    const phoneValidationResult = validatePhoneNumber(inputPhoneNumber);
    setPhoneNumber(inputPhoneNumber);
    setPhoneNumberError(phoneValidationResult);
    onChange({ phoneNumber: inputPhoneNumber, email, isEmailValid, checkboxChecked: isCheckboxChecked });
}
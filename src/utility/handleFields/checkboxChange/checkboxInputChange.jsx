//checkboxInputChange.jsx

export function handleCheckboxChange(e, setIsCheckboxChecked, onChange, phoneNumber, email, isEmailValid, isCheckboxChecked) {
    setIsCheckboxChecked(e.target.checked);
    onChange({ phoneNumber, email, isEmailValid, checkboxChecked: e.target.checked });
}
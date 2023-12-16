//handlePasswordChange.jsx
export function handlePasswordChange(event, value, setPassword, validatePassword, repeatPassword, onChange) {
    setPassword(value);
    const { isPasswordValid, isRepeatPasswordValid } = validatePassword(value, repeatPassword);
    onChange({ password: value, repeatPassword, isPasswordValid, isRepeatPasswordValid });
}

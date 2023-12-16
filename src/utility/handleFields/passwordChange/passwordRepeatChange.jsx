//handleRepeatPasswordChange.jsx
export function handleRepeatPasswordChange(event, value, setRepeatPassword, validatePassword, password, onChange) {
  setRepeatPassword(value);
  console.log(value, password)
  const { isPasswordValid, isRepeatPasswordValid } = validatePassword(password, value);
  onChange({ password, repeatPassword: value, isPasswordValid, isRepeatPasswordValid });
}

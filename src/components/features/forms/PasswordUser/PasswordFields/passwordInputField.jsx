//passwordInputField.jsx
import InputField from '@components/InputField/InputField';

const PasswordInputField = ({
  passwordInputClasses,
  handlePasswordChange,
  setPassword,
  validatePassword,
  repeatPassword,
  onChange,
  isPasswordValid
}) => {
  return (
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
      onChange={(event) => handlePasswordChange(event, event.target.value, setPassword, validatePassword, repeatPassword, onChange)}
      data-isvalid={isPasswordValid}
    />
  );
};

export default PasswordInputField;

//repeatPasswordInputField
import InputField from '@components/InputField/InputField';

const RepeatPasswordInputField = ({
  repeatPasswordInputClasses,
  handleRepeatPasswordChange,
  setRepeatPassword,
  validatePassword,
  password,
  onChange,
  isRepeatPasswordValid
}) => {
  return (
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
      onChange={(event) => handleRepeatPasswordChange(event, event.target.value, setRepeatPassword, validatePassword, password, onChange)}
      data-isvalid={isRepeatPasswordValid}
    />
  );
};

export default RepeatPasswordInputField;

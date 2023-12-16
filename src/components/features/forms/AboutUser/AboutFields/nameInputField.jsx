// NameInputField.jsx
import InputField from '@components/InputField/InputField';

const NameInputField = ({
    name,
    setName,
    isNameValid,
    handleNameChange,
    nameInputClasses,
    validateFields,
    onChange,
    family,
    city,
    setErrorMessage
}) => {
    return (
        <InputField
            label='Имя'
            id='namePerson'
            type='text'
            placeholder='Введите имя'
            description='Должен содержать не менее 2 символов и только кириллица.'
            rowClasses='about__row row'
            titleClasses='about__row-title'
            labelClasses='about__row-label'
            inputClasses={nameInputClasses}
            descriptionClasses='about__row-descr'
            required={true}
            value={name}
            onChange={(event) => handleNameChange(event, setName, validateFields, onChange, name, family, city, setErrorMessage, isNameValid)}
            data-isvalid={isNameValid}
        />
    );
};

export default NameInputField;

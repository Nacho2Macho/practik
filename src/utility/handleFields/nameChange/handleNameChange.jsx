//handleNameChange.jsx
export const handleNameChange = (event, setName, validateFields, onChange, name, family, city, setErrorMessage, isNameValid, isFamilyValid) => {
    const value = event.target.value;
    setName(value);
    validateFields(value, family, city, setErrorMessage);
    onChange({ name: value, family, isNameValid, isFamilyValid, city });
};
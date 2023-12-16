// handleFamilyChange.jsx
export const handleFamilyChange = (event, setFamily, validateFields, onChange, name, family, city, setErrorMessage, isFamilyValid) => {
  const value = event.target.value;
  setFamily(value);
  validateFields(name, value, city);
  onChange({ name, family: value, isNameValid: true, isFamilyValid, city });
};

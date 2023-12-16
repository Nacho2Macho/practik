// handleCityChange.jsx
export const handleCityChange = (data, setCity, validateFields, onChange, name, family, setErrorMessage, isNameValid, isFamilyValid) => {
  setCity(data.city);
  validateFields(name, family, data.city);
  onChange({ name, family, isNameValid, isFamilyValid, city: data.city });
};

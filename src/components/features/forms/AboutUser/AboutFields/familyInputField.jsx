// FamilyInputField.jsx
import React from 'react';
import InputField from '@components/InputField/InputField';

const FamilyInputField = ({
    family,
    setFamily,
    isFamilyValid,
    handleFamilyChange,
    familyInputClasses,
    validateFields,
    onChange,
    name,
    city,
    setErrorMessage
}) => {
    return (
        <InputField
            label='Фамилия'
            id='familyPerson'
            type='text'
            placeholder='Иваньков'
            description='Должен содержать не менее 2 символов и только кириллица.'
            rowClasses='about__row row'
            titleClasses='about__row-title'
            labelClasses='about__row-label'
            inputClasses={familyInputClasses}
            descriptionClasses='about__row-descr'
            required={true}
            value={family}
            onChange={(event) => handleFamilyChange(event, setFamily, validateFields, onChange, name, family, city, setErrorMessage, isFamilyValid)}
            data-isvalid={isFamilyValid}
        />
    );
};

export default FamilyInputField;

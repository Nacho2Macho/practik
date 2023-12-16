// AboutInputFields.jsx
import React from 'react';
import NameInputField from './AboutFields/nameInputField';
import FamilyInputField from './AboutFields/familyInputField';

const AboutInputFields = ({
    name,
    setName,
    isNameValid,
    handleNameChange,
    nameInputClasses,
    family,
    setFamily,
    isFamilyValid,
    handleFamilyChange,
    familyInputClasses,
    validateFields,
    onChange,
    city,
    setErrorMessage
}) => {
    return (
        <>
            <NameInputField
                name={name}
                setName={setName}
                isNameValid={isNameValid}
                handleNameChange={handleNameChange}
                nameInputClasses={nameInputClasses}
                validateFields={validateFields}
                onChange={onChange}
                family={family}
                city={city}
                setErrorMessage={setErrorMessage}
            />
            <FamilyInputField
                family={family}
                setFamily={setFamily}
                isFamilyValid={isFamilyValid}
                handleFamilyChange={handleFamilyChange}
                familyInputClasses={familyInputClasses}
                validateFields={validateFields}
                onChange={onChange}
                name={name}
                city={city}
                setErrorMessage={setErrorMessage}
            />
        </>
    );
};

export default AboutInputFields;

//About.jsx
import { useState } from 'react';
import clsx from 'clsx';
import CitySelector from './CitySelector';
import { handleNameChange } from '@utility/handleFields/nameChange/handleNameChange';
import { handleFamilyChange } from '@utility/handleFields/familyChange/handleFamilyChange';
import { handleCityChange } from '@utility/handleFields/cityChange/handleCityChange';
import { useNameValidation, useFamilyValidation } from '@utility/Validation/AboutInputValidation/AboutValidation';
import '@components/styles/Validation.scss'
import '@components/styles/Star.scss';
import '@components/styles/Select.scss'
import '../AboutUser/About.scss';
import AboutInputFields from './AboutInputsField';

export default function About({ onChange }) {
  const { name, setName, isNameValid, isNameEmpty } = useNameValidation();
  const { family, setFamily, isFamilyValid, isFamilyEmpty } = useFamilyValidation();
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const validateFields = (name, family, city) => {
    if (!name || !family || !city) {
      setErrorMessage('Необходимо заполнить все обязательные поля');
    } else {
      setErrorMessage('');
    }
  };

  const nameInputClasses = clsx('about__row-input', {
    'valid-input': isNameValid && !isNameEmpty,
    'invalid-input': !isNameValid || isNameEmpty
  });

  const familyInputClasses = clsx('about__row-input', {
    'valid-input': isFamilyValid && !isFamilyEmpty,
    'invalid-input': !isFamilyValid || isFamilyEmpty
  });

  return (
    <div className='about block-padding'>
      <AboutInputFields
        name={name}
        setName={setName}
        isNameValid={isNameValid}
        handleNameChange={handleNameChange}
        nameInputClasses={nameInputClasses}
        family={family}
        setFamily={setFamily}
        isFamilyValid={isFamilyValid}
        handleFamilyChange={handleFamilyChange}
        familyInputClasses={familyInputClasses}
        validateFields={validateFields}
        onChange={onChange}
        city={city}
        setErrorMessage={setErrorMessage}
      />
      <div className='about__row row'>
        <p className='title'>Ваш город<span className='star'>*</span></p>
        <CitySelector onChange={(data) => handleCityChange(data, setCity, validateFields, onChange, name, family, setErrorMessage, isNameValid, isFamilyValid)} />
      </div>
      {errorMessage && <p className='error-message'>{errorMessage }</p>}
    </div>
  );
}

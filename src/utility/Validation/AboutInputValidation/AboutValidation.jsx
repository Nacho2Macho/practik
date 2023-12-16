// AboutValidation.jsx
import React, { useEffect } from 'react';

export const useNameValidation = () => {
  const [name, setName] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(true);

  const isNameEmpty = name.trim().length === 0;

  useEffect(() => {
    setIsNameValid(name.length >= 2 && /^[А-Яа-я]+$/.test(name));
  }, [name]);

  return { name, setName, isNameValid, isNameEmpty };
};

export const useFamilyValidation = () => {
  const [family, setFamily] = React.useState('');
  const [isFamilyValid, setIsFamilyValid] = React.useState(true);

  const isFamilyEmpty = family.trim().length === 0;

  useEffect(() => {
    setIsFamilyValid(family.length >= 2 && /^[А-Яа-я]+$/.test(family));
  }, [family]);

  return { family, setFamily, isFamilyValid, isFamilyEmpty };
};

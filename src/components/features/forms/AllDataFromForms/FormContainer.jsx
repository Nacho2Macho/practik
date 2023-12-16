// FormContainer.jsx
import { useState } from 'react';
import Hello from '../HelloUser/Hello'
import About from '../AboutUser/About';
import { validatePassword } from '@utility/Validation/PasswordInputValidation/PasswordValidation';
import Contacts from '../ContactsUser/Contacts';
import Password from '../PasswordUser/Password';
import Change from '../ChangeForm/Change';
import { validatePhoneNumber } from '@utility/Validation/ContactsInputValidation/ContactsValidation';

export default function FormContainer() {
    const [formData, setFormData] = useState({
        about: { name: '', family: '', city: '' },
        password: { password: '', repeatPassword: '' },
        contacts: { phoneNumber: '', email: '', checkboxChecked: false },
    });

    const [password, setPassword] = useState({ password: '', repeatPassword: '' })
    const handleFormChange = (section, data) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [section]: data,
        }));
    };

    const handleFormSubmit = (data) => {
        const { about, contacts } = data;
        const requiredFieldsMessage = 'Необходимо заполнить все обязательные поля';
        const invalidDataMessage = 'Введите корректные данные';
        const isFamilyValid = about.family.length >= 2 && /^[А-Яа-я]+$/.test(about.family)

        const isChecked = (contacts.checkboxChecked && !contacts.email)

        if (!about.name || !about.family || !about.city || !password.password || !password.repeatPassword || isChecked) {
            alert(requiredFieldsMessage);
            return;
        }

        const aboutValid = about.isNameValid && about.city;
        const passwordValid = password.isPasswordValid && password.isRepeatPasswordValid
        const phoneVaild = validatePhoneNumber(contacts.phoneNumber) === '' || contacts.phoneNumber === ''
        let emali = true

        if (contacts.checkboxChecked || contacts.email !== '') {
            emali = contacts.isEmailValid
        }

        if (
            aboutValid && passwordValid && isFamilyValid
            && emali
            && phoneVaild
        ) {
            const { isNameValid, isFamilyValid, ...aboutDataWithoutValidation } = about;
            const { isPasswordValid, isRepeatPasswordValid, ...passwordDataWithoutValidation } = password;
            const formJson = JSON.stringify({ ...aboutDataWithoutValidation, ...passwordDataWithoutValidation, ...contacts });
            console.log(formJson);
        } else {
            alert(invalidDataMessage);
        }
    };

    return (
        <div>
            <Hello />
            <About onChange={(data) => handleFormChange('about', data)} />
            <Password onChange={(data) => {
                setPassword({
                    ...data,
                    ...validatePassword(data.password, data.repeatPassword)
                })
            }} />
            <Contacts onChange={(data) => handleFormChange('contacts', data)} />
            <Change formData={formData} onChange={handleFormChange} onSubmit={() => handleFormSubmit(formData)} />
        </div>
    );
}

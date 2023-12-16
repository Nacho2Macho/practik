// InputFieldsComponent.jsx
import InputField from '@components/InputField/InputField';

export default function ContactsInputsField({
    phoneNumber,
    handlePhoneInput,
    phoneInputClasses,
    email,
    handleEmailInput,
    emailInputClasses,
    isCheckboxChecked
}) {
    return (
        <>
            <InputField
                label='Номер телефона'
                id='telepUser'
                type='tel'
                description='Маска с международным форматом “+ 7 (999) 999-99-99”.'
                placeholder='+7 (***) ***-**-**'
                value={phoneNumber}
                onChange={handlePhoneInput}
                rowClasses='contacts__row row'
                titleClasses='contacts__row-title'
                labelClasses='contacts__row-label'
                inputClasses={phoneInputClasses}
                descriptionClasses='contacts__row-descr'
                required={false}
            />
            <InputField
                label='Электронная почта'
                id='emailUser'
                type='email'
                description='Проверка на валидность email.'
                value={email}
                onChange={handleEmailInput}
                rowClasses='contacts__row row'
                titleClasses='contacts__row-title'
                labelClasses='contacts__row-label'
                inputClasses={emailInputClasses}
                descriptionClasses='contacts__row-descr'
                required={isCheckboxChecked}
            />
        </>
    );
}

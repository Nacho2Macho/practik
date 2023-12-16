// ContactsValidation.jsx

export const validatePhoneNumber = (value) => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(value) ? '' : 'Введите номер в формате +7 (999) 999-99-99';
};

export const validateEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value) ? '' : 'Введите корректный email';
};

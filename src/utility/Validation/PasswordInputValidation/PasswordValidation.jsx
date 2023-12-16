// PasswordValidation.js
export const isLatinLetters = (input) => /^[a-zA-Z]+$/.test(input);

export const validatePassword = (password, repeatPassword) => {
    const isPasswordValid = password.length >= 6 && isLatinLetters(password);
    const isRepeatPasswordValid = repeatPassword === password;

    return {
        isPasswordValid,
        isRepeatPasswordValid,
    };
};

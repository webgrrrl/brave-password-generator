// This file contains the TypeScript code for the popup functionality. It handles user interactions, generates passwords, and updates the UI.

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button') as HTMLButtonElement;
    const passwordDisplay = document.getElementById('password-display') as HTMLInputElement;
    const lengthInput = document.getElementById('length-input') as HTMLInputElement;

    generateButton.addEventListener('click', () => {
        const length = parseInt(lengthInput.value) || 12; // Default length is 12
        const password = generatePassword(length);
        passwordDisplay.value = password;
    });
});

function generatePassword(length: number): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
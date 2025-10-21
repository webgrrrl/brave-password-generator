// This file contains the TypeScript code for the options page, allowing users to customize settings for the password generator.

document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-settings') as HTMLButtonElement;
    const lengthInput = document.getElementById('password-length') as HTMLInputElement;
    const includeNumbersInput = document.getElementById('include-numbers') as HTMLInputElement;
    const includeSymbolsInput = document.getElementById('include-symbols') as HTMLInputElement;

    // Load saved settings
    chrome.storage.sync.get(['passwordLength', 'includeNumbers', 'includeSymbols'], (data) => {
        if (data.passwordLength) {
            lengthInput.value = data.passwordLength.toString();
        }
        includeNumbersInput.checked = data.includeNumbers || false;
        includeSymbolsInput.checked = data.includeSymbols || false;
    });

    // Save settings on button click
    saveButton.addEventListener('click', () => {
        const passwordLength = parseInt(lengthInput.value, 10);
        const includeNumbers = includeNumbersInput.checked;
        const includeSymbols = includeSymbolsInput.checked;

        chrome.storage.sync.set({
            passwordLength,
            includeNumbers,
            includeSymbols
        }, () => {
            alert('Settings saved!');
        });
    });
});
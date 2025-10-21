// This file contains the background script for the extension. It manages events and handles communication between different parts of the extension.

chrome.runtime.onInstalled.addListener(() => {
    console.log("Password Generator Extension Installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generatePassword") {
        const password = generatePassword(request.length);
        sendResponse({ password: password });
    }
});

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
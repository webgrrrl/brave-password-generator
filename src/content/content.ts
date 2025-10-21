// This file contains the content script that interacts with web pages. 
// It can manipulate the DOM or access page data as needed.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Content script loaded');

    // Example: Change the background color of the page
    document.body.style.backgroundColor = '#f0f0f0';

    // You can add more functionality here to interact with the web page
});
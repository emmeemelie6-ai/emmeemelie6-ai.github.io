// script.js - Tracking button clicks, form submissions, and custom events using Google Tag Manager dataLayer

// Track button clicks
function trackButtonClick(buttonName) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'buttonClick',
        'buttonName': buttonName
    });
}

// Track form submissions
function trackFormSubmission(formId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'formSubmission',
        'formId': formId
    });
}

// Track custom events
function trackCustomEvent(eventName, eventDetails) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': eventName,
        ...eventDetails
    });
}

// Example usage:
// document.getElementById('myButton').addEventListener('click', function() {
//     trackButtonClick('myButton');
// });

// document.getElementById('myForm').addEventListener('submit', function() {
//     trackFormSubmission('myForm');
// });
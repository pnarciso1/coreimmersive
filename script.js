// Firebase Configuration
// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcD7PTigv7FwNrVCmdA8BN534ok1XjIb4",
    authDomain: "coreimmersiveacademy.firebaseapp.com",
    projectId: "coreimmersiveacademy",
    storageBucket: "coreimmersiveacademy.firebasestorage.app",
    messagingSenderId: "1064567400780",
    appId: "1:1064567400780:web:42a57497a2f21ab50207e9",
    measurementId: "G-QQMJ8MMYSV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Initialize EmailJS
(function() {
    emailjs.init("nzC9LnQ4SH2WWK2PH");
})();

// Form Selection
const joinForm = document.getElementById('join-form');
const mentorForm = document.getElementById('mentor-form');
const donateForm = document.getElementById('donate-form');

// --- Helper Functions ---

// Show success message
function showSuccess(formElement, message) {
    const originalContent = formElement.innerHTML;
    formElement.innerHTML = `<div class="success-message">
        <h3>Thank You!</h3>
        <p>${message}</p>
        <button class="btn btn-secondary btn-sm" onclick="location.reload()">Submit Another</button>
    </div>`;
}

// Show error message
function showError(error) {
    console.error("Error writing document: ", error);
    alert("Something went wrong. Please check the console or try again later.");
}

// Toggle Grade Field
function toggleGradeField() {
    const role = document.getElementById('join-role').value;
    const gradeGroup = document.getElementById('grade-field-group');
    if (role === 'student') {
        gradeGroup.style.display = 'block';
    } else {
        gradeGroup.style.display = 'none';
    }
}

// Character Count for Join Notes
const joinNotes = document.getElementById('join-notes');
if (joinNotes) {
    joinNotes.addEventListener('input', function() {
        const count = this.value.length;
        const counterDisplay = this.nextElementSibling;
        counterDisplay.textContent = `${count}/250`;
    });
}

// --- Event Listeners ---

// Helper to send auto-reply email
function sendAutoReply(email, name, formType) {
    // You need to create an EmailJS template with these variable names:
    // to_name, to_email, form_type
    const templateParams = {
        to_name: name,
        to_email: email,
        form_type: formType, // e.g., "Join Academy Application"
        message_html: "We are out building great things and will get back to you soon."
    };

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual EmailJS IDs
    emailjs.send('service_uzjzqeh', 'template_bb3fxb2', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}

// 1. Join Academy Form
if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const role = document.getElementById('join-role').value;
        const name = document.getElementById('join-name').value;
        const email = document.getElementById('join-email').value;
        
        const data = {
            name: name,
            email: email,
            role: role,
            school_org: document.getElementById('join-school').value,
            notes: document.getElementById('join-notes').value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        if (role === 'student') {
            data.grade = document.getElementById('join-grade').value;
        }

        db.collection("join_requests").add(data)
            .then(() => {
                sendAutoReply(email, name, "joining the Academy");
                showSuccess(joinForm, "Your application has been received. We will contact you shortly.");
            })
            .catch((error) => {
                showError(error);
            });
    });
}

// 2. Mentor Form
if (mentorForm) {
    mentorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('mentor-name').value;
        const email = document.getElementById('mentor-email').value;

        const data = {
            name: name,
            email: email,
            expertise: document.getElementById('mentor-expertise').value,
            reason: document.getElementById('mentor-reason').value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        db.collection("mentor_applications").add(data)
            .then(() => {
                sendAutoReply(email, name, "becoming a Mentor");
                showSuccess(mentorForm, "Thank you for your interest in mentoring! We will be in touch.");
            })
            .catch((error) => {
                showError(error);
            });
    });
}

// 3. Donate Form
if (donateForm) {
    donateForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('donate-name').value;
        const email = document.getElementById('donate-email').value;

        const data = {
            name: name,
            email: email,
            type: document.getElementById('donate-type').value,
            message: document.getElementById('donate-message').value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        db.collection("donations").add(data)
            .then(() => {
                sendAutoReply(email, name, "supporting our mission");
                showSuccess(donateForm, "Thank you for your support! We will contact you to finalize your contribution.");
            })
            .catch((error) => {
                showError(error);
            });
    });
}


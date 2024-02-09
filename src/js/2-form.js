const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");

function readFormData(form) {
    const email = form.email.value;
    const message = form.message.value;

    return {
        email,
        message
    }
}

const userData = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { elements: { email, message }, } = event.currentTarget;

    if (email.value === '' || message.value === '') {
        alert('All form fields must be filled in');
    } else {
        userData['email'] = email.value;
        userData['message'] = message.value;
        console.log(userData);
    }
    localStorage.removeItem(STORAGE_KEY)
    form.reset()
})



form.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
})



const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData) {
    const data = JSON.parse(rawData);
    form.email.value = data.email;
    form.message.value = data.message;
}
import { signInUser, redirectIfLoggedIn } from '../fetch-utils.js';

//import forms to take sign in data
const signInForm = document.getElementById('sign-in-form');

redirectIfLoggedIn();

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);

    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('/');
    }
});
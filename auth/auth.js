import { signInUser, signUpUser, redirectIfLoggedIn } from '../fetch-utils.js';

//import forms to take sign in data
const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');

redirectIfLoggedIn();

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);

    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('/');
    }
    signInForm.reset();
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);

    const user = await signUpUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('/');
    }
    signUpForm.reset();
});

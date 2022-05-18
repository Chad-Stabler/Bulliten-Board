import { logOutUser, createPost, checkAuth } from '../fetch-utils.js';

const logOut = document.getElementById('logout');
const goHome = document.getElementById('home-btn');
const createForm = document.getElementById('create-form');

async function checkLogin() {
    await checkAuth();
}

checkLogin();

logOut.addEventListener('click', async () => {
    await logOutUser();
});

goHome.addEventListener('click', () => {
    location.replace('/');
});

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(createForm);

    const newPost = {
        title: data.get('title'),
        content: data.get('post'),
        contact: data.get('contact')
    };

    await createPost(newPost);
    location.replace('/');
});

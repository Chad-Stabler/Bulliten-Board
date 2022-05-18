import { checkAuth, logOutUser } from '../fetch-utils.js';

const logOut = document.getElementById('logout');

checkAuth();

logOut.addEventListener('click', async () => {
    await logOutUser();
});



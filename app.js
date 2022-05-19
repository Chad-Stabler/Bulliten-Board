import { fetchPosts, getUser, logOutUser } from './fetch-utils.js';
import { renderData } from './render-utils.js';
// import functions and grab DOM elements
const dataEl = document.getElementById('load');
const authButton = document.getElementById('auth');

// let state

async function loadTable() {
    const dataArr = await fetchPosts();

    for (let post of dataArr) {
        const newDiv = renderData(post);
        dataEl.append(newDiv);
    }
    const user = getUser();

    if (user) {
        authButton.textContent = 'Logout';
        authButton.href = '/';
        authButton.addEventListener('click', async () => {
            await logOutUser();
        });
    }
}
loadTable();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

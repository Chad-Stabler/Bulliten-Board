import { fetchPosts } from './fetch-utils.js';
import { renderData } from './render-utils.js';
// import functions and grab DOM elements
const dataEl = document.getElementById('load');

// let state

async function loadTable() {
    const dataArr = await fetchPosts();

    for (let post of dataArr) {
        const newDiv = renderData(post.id);
        dataEl.append(newDiv);
    }

}
loadTable();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

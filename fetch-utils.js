const SUPABASE_URL = 'https://pkhqeamibgddnonpbkxj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraHFlYW1pYmdkZG5vbnBia3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTg0OTAsImV4cCI6MTk2Nzg3NDQ5MH0.1eWFqsiEyUcJk0zKbtjDhgy3edUHWCLvimGYjE0WG-M';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let signInErrorMsg = document.getElementById('sign-in-error');
let signUpErrorMsg = document.getElementById('sign-up-error');

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}
export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}

export async function checkAuth() {
    const user = getUser();

    if (!user) {
        location.replace('./auth');
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    if (response.user) {
        return response.user;
    } else signInErrorMsg.textContent = response.error.message;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    if (response.user) {
        return response.user;
    } else signUpErrorMsg.textContent = response.error.message;
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}

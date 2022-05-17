const SUPABASE_URL = 'https://pkhqeamibgddnonpbkxj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraHFlYW1pYmdkZG5vbnBia3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTg0OTAsImV4cCI6MTk2Nzg3NDQ5MH0.1eWFqsiEyUcJk0zKbtjDhgy3edUHWCLvimGYjE0WG-M';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}
export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}

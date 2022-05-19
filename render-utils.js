export function renderData(id) {
    const newDiv = document.createElement('div');
    const title = document.createElement('h2');
    const content = document.createElement('p');
    const contact = document.createElement('h3');
    newDiv.classList.add('sticky');

    title.textContent = id.title;
    content.textContent = id.content;
    contact.textContent = id.contact;

    newDiv.append(title, content, contact);

    return newDiv;
}
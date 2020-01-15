function createToDoListItem(){
    const input = document.querySelector('input[type=text]');
    const li = document.createElement("li")
    li.textContent = input.value
    const ul = document.querySelector('ul')
    ul.appendChild(li)
input.value= '';
}
// add button
const addButton = document.querySelector("button")
// add text into into the ul when add button is clicked
addButton.addEventListener('click', createToDoListItem);
// adButton.addEventListener('');

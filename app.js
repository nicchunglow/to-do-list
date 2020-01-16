const url ="https://giphy.com/gifs/smile-done-https://media.giphy.com/media/Mp4hQy51LjY6A/source.gif"
// function convertToJson(res){
//     return res.json()
//   }
//   async function img(){
//     const picJson = await fetch(api)
//     }

function toggleItemComplete(event) {
    const paragraph = event.target.nextSibling;
    paragraph.classList.toggle("todo");
    paragraph.classList.toggle("done")
    paragraph.addEventListener("click", function(){
    img.src =url;
  })}

function createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", toggleItemComplete);
    return checkbox;
//   })
}
  
  function createContent(text) {
    const content = document.createElement("p");
    content.classList.add("todo");
    content.textContent = "👉 " + text;
    content.addEventListener('click',function(event){
        event.target.setAttribute('contenteditable', true)
    })
    return content;
  }

function removeItem(){
    event.target.parentElement.remove()
}
function createToDoListItem(){
    const textbox = document.querySelector('input[type=text]');
    const enterKeyPressed = event.type === "keypress" || event.key === "enter"
const mouseclicked = event.type === 'click';
if (!enterKeyPressed && !mouseclicked ){
return;
}

const item = document.createElement("li")

const ul = document.querySelector('ul')
ul.appendChild(item)

const checkbox = createCheckbox();
item.appendChild(checkbox);

const content = createContent(textbox.value);
item.appendChild(content);

const deleteButton = document.createElement("button")
    deleteButton.textContent = "DELETE"
    deleteButton.addEventListener("click",removeItem)
item.append(deleteButton)

// li.setAttribute("contentEditable",true)
textbox.value = "";

}

const addButton = document.querySelector("button")
addButton.addEventListener('click', createToDoListItem);
const addEnter = document.querySelector("button")



const items = document.querySelector('ul')




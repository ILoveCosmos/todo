const jsTodoForm = document.querySelector(".todo-form");
const jsTodoFormInput = document.querySelector(".todo-form__input");
const jsTodoListsItem = document.querySelector(".todo-lists__item");

const TODOLISTS = "TODOLISTS";
let todoLists = [];

function handleDelBtnClick(event) {
  //   console.log(event.target.parentNode);

  updateTodoLists = todoLists.filter((item) => {
    return item.id !== parseInt(event.target.parentNode.parentNode.id);
  });

  //   console.log(updateTodoLists);
  todoLists = updateTodoLists;
  jsTodoListsItem.removeChild(event.target.parentNode.parentNode);

  setTodoItem();
}

function getTodoItem() {
  return localStorage.getItem(TODOLISTS);
}
function setTodoItem() {
  localStorage.setItem(TODOLISTS, JSON.stringify(todoLists));
}

function addTodoItem(item) {
  const li = document.createElement("li");
  const delBtnContainer = document.createElement("span");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const todoText = jsTodoFormInput.value;

  li.id = item.id;
  delBtn.innerText = "X";
  span.innerText = item.todoText;

  delBtnContainer.addEventListener("click", handleDelBtnClick);
  delBtnContainer.appendChild(delBtn);
  li.appendChild(delBtnContainer);
  li.appendChild(span);
  jsTodoListsItem.appendChild(li);

  //   console.log(item);
  todoLists.push(item);
  setTodoItem();
}
function handleTodoFormSubmit(event) {
  event.preventDefault();
  const id = todoLists.length;
  const todoText = jsTodoFormInput.value;

  const item = {
    id,
    todoText,
  };

  addTodoItem(item);
}

function showTodoLists() {
  //   console.log("showUerLists");
  JSON.parse(localStorage.getItem(TODOLISTS)).forEach((item, index) => {
    const refreshItem = {
      id: index,
      todoText: item.todoText,
    };
    addTodoItem(refreshItem);
  });
}
function init() {
  jsTodoForm.addEventListener("submit", handleTodoFormSubmit);

  if (getTodoItem() !== null) {
    showTodoLists();
  }
}

init();

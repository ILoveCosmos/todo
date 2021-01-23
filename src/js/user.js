const jsUserForm = document.querySelector(".user-form");
const jsUserFormInput = document.querySelector(".user-form__input");
const jsUserContainerTitle = document.querySelector(".user-container__title");
const USERNAME = "USERNAME";

function setUserName(userName) {
  localStorage.setItem(USERNAME, userName);
}
function getUserName() {
  //   const userName = localStorage.getItem(USERNAME);
  //   console.log(userName);
  return localStorage.getItem(USERNAME);
}
function hideUserForm() {
  // console.log("user-form hide");
  jsUserForm.classList.add("user-form__hide");
  //   console.dir(jsUserForm);
}
function hiUser(userName) {
  jsUserContainerTitle.classList.remove("user-container__title--hide");
  jsUserContainerTitle.innerText = `😊 Hi. ${userName}`;
}
function handleUserFormSubmit(event) {
  event.preventDefault();
  const userName = jsUserFormInput.value;
  setUserName(userName);
  showUser(userName);
}

function showUser(userName) {
  hideUserForm();
  hiUser(userName);
}

function init() {
  const userName = getUserName();
  jsUserContainerTitle.classList.add("user-container__title--hide");
  jsUserForm.addEventListener("submit", handleUserFormSubmit);

  if (userName !== null) {
    showUser(userName);
  }
}

init();

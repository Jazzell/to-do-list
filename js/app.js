//Selector
const toDoInput = document.querySelector(".to-do-input");
const toDoButton = document.querySelector(".to-do-button");
const toDoList = document.querySelector(".to-do-list");
const filterOption = document.querySelector(".filter-select");

//Event Listener
document.addEventListener("DOMContentLoaded", getSavedToDo);
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", completeAndDeleteToDo);
filterOption.addEventListener("click", filterSelect);

//Function - add to do
function addToDo(e) {
  e.preventDefault();
  //Create a div
  const createDiv = document.createElement("div");
  createDiv.classList.add("create-div");
  //Create LI
  const createLi = document.createElement("li");
  createLi.innerText = toDoInput.value;
  createLi.classList.add("create-li");
  createDiv.appendChild(createLi);
  saveToDo(toDoInput.value);
  //Complete Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-button", "btn", "btn-success");
  createDiv.appendChild(completedButton);
  //Delete Mark Button
  const deletedButton = document.createElement("button");
  deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
  deletedButton.classList.add("delete-button", "btn", "btn-danger");
  createDiv.appendChild(deletedButton);
  //Append to do list
  toDoList.appendChild(createDiv);
  //Clear To Do Input
  toDoInput.value = "";
}

//Function - Complete And Delete button
function completeAndDeleteToDo(e) {
  const item = e.target;
  //Delete To Do
  if (item.classList[0] === "delete-button") {
    const deleteToDo = item.parentElement;
    deleteToDo.classList.add("delete-animate");
    deleteSaveTodo(deleteToDo);
    deleteToDo.addEventListener("transitionend", function () {
      deleteToDo.remove();
    });
  } //Complete To Do
  else if (item.classList[0] === "completed-button") {
    const completedToDo = item.parentElement;
    completedToDo.classList.toggle("completed-to-do");

    saveCompletedToDo(completedToDo);
  }
}

//Function - Filter Select
function filterSelect(e) {
  const filterToDo = toDoList.childNodes;
  filterToDo.forEach(function (toDo) {
    switch (e.target.value) {
      case "All":
        toDo.style.display = "flex";
        break;
      case "Completed":
        if (toDo.classList.contains("completed-to-do")) {
          toDo.style.display = "flex";
        } else {
          toDo.style.display = "none";
        }
        break;
      case "Uncompleted":
        if (!toDo.classList.contains("completed-to-do")) {
          toDo.style.display = "flex";
        } else {
          toDo.style.display = "none";
        }
        break;
    }
  });
}

//Function - Save To Do In Local Storate
function saveToDo(toDos) {
  //Check if to do has already save
  let saveToDos;
  if (localStorage.getItem("saveToDos") === null) {
    saveToDos = [];
  } else {
    saveToDos = JSON.parse(localStorage.getItem("saveToDos"));
  }
  saveToDos.push(toDos);
  localStorage.setItem("saveToDos", JSON.stringify(saveToDos));
}

//Function - Get Saved To Do
function getSavedToDo() {
  //Check if to do has already save
  let saveToDos;
  if (localStorage.getItem("saveToDos") === null) {
    saveToDos = [];
  } else {
    saveToDos = JSON.parse(localStorage.getItem("saveToDos"));
  }
  saveToDos.forEach(function (toDo) {
    //Create a div
    const createDiv = document.createElement("div");
    createDiv.classList.add("create-div");
    //Create LI
    const createLi = document.createElement("li");
    createLi.innerText = toDo;
    createLi.classList.add("create-li");
    createDiv.appendChild(createLi);
    //Complete Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-button", "btn", "btn-success");
    createDiv.appendChild(completedButton);
    //Delete Mark Button
    const deletedButton = document.createElement("button");
    deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
    deletedButton.classList.add("delete-button", "btn", "btn-danger");
    createDiv.appendChild(deletedButton);
    //Append to do list
    toDoList.appendChild(createDiv);
  });
}

//Delete Save To Dos in Local Storage
function deleteSaveTodo(toDo) {
  //Check if to do has already save
  let saveToDos;
  if (localStorage.getItem("saveToDos") === null) {
    saveToDos = [];
  } else {
    saveToDos = JSON.parse(localStorage.getItem("saveToDos"));
  }
  const saveToDosIndex = toDo.children[0].innerText;
  saveToDos.splice(saveToDos.indexOf(saveToDosIndex), 1);
  localStorage.setItem("saveToDos", JSON.stringify(saveToDos));
}

function saveCompletedToDo(toDo) {
  //Check if to do has already save
  let completedToDos;
  if (localStorage.getItem("completedToDos") === null) {
    completedToDos = [];
  } else {
    completedToDos = JSON.parse(localStorage.getItem("completedToDos"));
    // completedToDos = JSON.parse(localStorage.getItem("completedToDos"));
    // checkCompleteToDoValue = toDo.children[0].innerText;
    // checkIfAlreadyCompleted =
    //   completedToDos.indexOf(checkCompleteToDoValue) > -1;
    // if (checkIfAlreadyCompleted === true) {
    //   // completedToDos.splice(completedToDos.indexOf(checkIfAlreadyCompleted), 1);
    //   completedToDos.pop(checkCompleteToDoValue);
    //   localStorage.setItem("completedToDos", JSON.stringify(completedToDos));
    // } else console.log("Nah");
    // completedToDos = JSON.parse(localStorage.getItem("completedToDos"));
    // const saveToDosIndex = toDo.children[0].innerText;
    // completedToDos.splice(completedToDos.indexOf(saveToDosIndex), 1);
    // console.log(completedToDos);
    // localStorage.setItem("completedToDos", JSON.stringify(completedToDos));
  }
  const saveCompletedToDo = toDo.children[0].innerText;
  completedToDos.push(saveCompletedToDo);

  localStorage.setItem("completedToDos", JSON.stringify(completedToDos));
}

const newYearsEve = '1 Jan 2021';

Console.log(newYearsEve);
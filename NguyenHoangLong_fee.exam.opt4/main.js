//Get DOM input

let domInput = document.querySelector("input");
let domBtn = document.querySelector("#btnAdd");
let inputContainer = document.querySelector("#inputContainer");
let divContainer = document.getElementsByClassName("divCon")[0];
let arrInput = [];

//Lấy giá trị trong ô input thêm vào mảng

domInput.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    addInput();
    domInput.value = "";
    showToDoList(arrInput);
  }
});
domBtn.addEventListener("click", function () {
  // If the user "Click" button add
  addInput();
  domInput.value = "";
  showToDoList(arrInput);
});

//Xử lý các hàm
//Hàm thêm input
function addInput() {
  arrInput.push(domInput.value);
}

function showToDoList(array) {
  let index = -1;
  divContainer.innerHTML = "";
  array.forEach((element) => {
    index++;
    let divContain = document.createElement("div");
    let textToDo = document.createElement("p");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<i onclick=deleted(${index}) class="fa-solid fa-xmark"></i>`;

    textToDo.textContent = element;

    divContain.appendChild(textToDo);
    divContain.appendChild(delBtn);
    divContain.className = "toDo";
    delBtn.classList = "delToDo";
    divContainer.appendChild(divContain);
  });
}
function deleted(indexa) {
  arrInput.splice(indexa, 1);
  showToDoList(arrInput);
}
//Hàm hiển thị todo
// function showToDo() {
//   let index = -1;
//   let divContain = document.createElement("div");
//   let textToDo = document.createElement("p");
//   let delBtn = document.createElement("button");
//   delBtn.innerHTML = `<i onclick=delete{${index}} class="fa-solid fa-xmark"></i>`;

//   textToDo.innerHTML = arrInput[arrInput.length - 1];

//   divContain.appendChild(textToDo);
//   divContain.appendChild(delBtn);
//   divContain.classList = "toDo";
//   delBtn.classList = "delToDo";
//   inputContainer.appendChild(divContain);
// }

//hàm delete todo

//Complete todo
// let completeToDo = document.getElementsByClassName(".toDo");
// console.log(completeToDo);
// for (let i = 0; i < completeToDo.length; i++) {
//   console.log("hello");
//   completeToDo[i].addEventListener("click", () => {
//     completeToDo[i].style.background = "green";
//   });
// }

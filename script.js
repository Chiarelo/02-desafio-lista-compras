const form = document.querySelector("form");
const inputItem = document.getElementById("item");
const ul = document.querySelector("ul");
let idCount = 0; // contador global para gerar IDs únicos

item.addEventListener("keydown", function (event) {
  const invalidChars = /[^A-Za-zÀ-ÿ0-9 .,;:!?()\-\n]|[0-9]{3,}/;

  //remove qualquer coisa que não seja letras, números ou espaços
  inputItem.value = inputItem.value.replace(invalidChars, "");
  console.log(inputItem.value);
});

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("button clicked");

  createItem(inputItem.value);
};

function createItem(item) {
  const li = document.createElement("li");
  const label = document.createElement("label");
  const span = document.createElement("span");
  const deleteImg = document.createElement("img");
  const inputCheck = document.createElement("input");
  const ul = document.querySelector("ul");

  const uniqueId = `check-${idCount}`;
  idCount++;
  inputCheck.type = "checkbox";
  inputCheck.classList.add(uniqueId);
  inputCheck.id = uniqueId;
  label.classList.add("check-image");
  label.setAttribute("for", uniqueId);

  span.innerText = item;

  deleteImg.src = "./assets/delete.svg";
  deleteImg.classList.add("delete");


  li.appendChild(inputCheck);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(deleteImg);

  ul.append(li);
  inputItem.value = "";
}

function showAlert() {
  const alert = document.querySelector(".alert-input");

  alert.style.display = "flex";
}

function hideAlert() {
  const alert = document.querySelector(".alert-input");

  alert.style.display = "none";
}

ul.addEventListener("click", function (event){
  if (event.target.classList.contains("delete")){
    event.target.parentElement.remove();
    showAlert();
  }
})

const closeAlert = document.querySelector(".close-alert");
if (closeAlert) {
  closeAlert.addEventListener("click", hideAlert);
}

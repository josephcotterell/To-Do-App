const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addJob() {
  if (inputBox.value === "") {
    alert("please write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}

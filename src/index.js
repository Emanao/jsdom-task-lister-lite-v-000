document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", (event) => {
    getFormData();
    event.preventDefault();
  }, false);
});

function getFormData(){
  let taskText = document.getElementById("new-task-description").value.trim();
  if (checkInputText(taskText, "Task needs a name")) return;
  addTask(taskText);
}

function checkInputText (taskText, msg){
  if (taskText== ""){
    alert(msg);
    return true;
  } else {
    false;
  }
}

function addTask(taskText) {
  let tasks = document.getElementById("tasks");
  tasks.appendChild(createLi(taskText));
}

function createLi(taskText){
  let li = document.createElement("li");
  li.innerText = `${taskText}`;
  li.appendChild(createDeleteButton());
  return li;

}

function createDeleteButton(){
  let button =  document.createElement("button");
  button.innerText="X";
  button.addEventListener("click",(event) => {
    tasks.removeChild(event.currentTarget.parentElement);
  });
  return button;
}

function createDropDown(){
  let dropDownList = document.createElement("select");
  dropDownList.setAttribute("id", "priority");
  let option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option1.innerText="High";
  dropDownList.appendChild(option1);
  let option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  option2.innerText="Medium";
  dropDownList.appendChild(option2);
  let option3 = document.createElement("option");
  option3.setAttribute("value", "3");
  option3.innerText="Low"
  dropDownList.appendChild(option3);




}

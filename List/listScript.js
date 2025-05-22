const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.getElementById('button');

function addTask(){
    if (inputBox.value === '') {
        alert('UwU you made an oopsie woopsie')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';

        listContainer.appendChild(li);
        li.appendChild(span);
        
    }
    inputBox.value = '';
    saveData();
}

function checkKey(event){
    if(event.key === "Enter"){
        addTask();
    }
}
button.addEventListener('click', addTask); 
inputBox.addEventListener('keydown', checkKey);

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("task-check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

});
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};
function showSaved(){
    listContainer.innerHTML = localStorage.getItem("data")
};
showSaved();
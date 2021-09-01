//Storage Logic
function saveState() {
  localStorage.setItem("data", JSON.stringify(state));
}
function loadState () {
  let retrievedData = localStorage.getItem("data")
  if (!retrievedData) {
    saveState();
    location.reload();
  }
  state = JSON.parse(retrievedData);
}

//Intro Question
function submit() {
  document.getElementById("input").submit();
}
let input = document.getElementById("input");
input.addEventListener('submit',(event) => {
  event.preventDefault();
});
let inputName = document.querySelector("#user");

//Hide Intro Div and Show Core Div
function changeDiv() {
  var x = document.querySelector(".intro");
  var y = document.querySelector(".core-container");

  if (x.getAttribute("display") === null){
      x.style.display = "none";
  if (y.getAttribute("display") === null) {
      y.style.display = "block";
  }
}

//Time
var dt = new Date();
document.getElementById("time").innerHTML = (("0"+dt.getHours()%12 || 12).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

//Greeting
var greeting;   
var hour = dt.getHours();    
  if (hour < 12) {  
    greeting = "Beautiful morning, ";  
  } else if (hour < 17) {  
    greeting = "Beautiful afternoon, ";  
  } else {  
    greeting = "Beautiful evening, ";  
  }  
  document.getElementById("greeting")
  .innerHTML = "<span>" + greeting + inputName.value + "." + "</span>"
}

//Focus
let focusForm = document.getElementById("focusForm");
focusForm.addEventListener('submit',(event) => {
  event.preventDefault();
});
//Transforms focus item into a checkbox and edits the headline
function checkbox() {
var a = document.querySelector("#focusForm");
var b = document.querySelector("#today");

if (a.getAttribute("display") === null){
  a.style.display = "none";
if (b.getAttribute("display") === null) {
  b.style.display = "block";
}
}

let inputFocus = document.querySelector("#focusName")
document.getElementById("today")
  .innerHTML = "<span id='todayheader'>" + "Today" + "</span>" + "<form id='checkbox' contenteditable='true'>" + "&nbsp;" + inputFocus.value +"</form>"
}
let box = document.querySelector(".checkbox-custom")
let focusItem = document.querySelectorAll("#text")
let form = document.querySelectorAll("#checkbox")

focusItem.onclick = function(){
  form.innerHTML = "<input type='text' id='newfocus'>"
}

//Quotes
let button = document.querySelector(".generateQuote")
let addButton = document.querySelector(".createQuote")
let quote = document.querySelector("#quoteline")

button.onclick = function(){
    quote.innerHTML ="Muddy water is best cleared by leaving it alone.";
}
addButton.onclick = function(){
  quote.innerHTML = "<input type='text' id='newquoteline'>"
}

//To-Do
let inputField = document.getElementById('inputField')
let todoList = document.querySelector(".todoList")

let addToDo = (e) => {
  if (e.which === 13){
    let item = document.createElement('li')
    let close = document.createElement('span')
    let spanText = document.createElement('span')
    spanText.innerHTML = e.target.value

    close.innerHTML = "&#x2715"
    close.classList.add('remove')

    item.appendChild(spanText)
    item.appendChild(close)
    todoList.appendChild(item)
    
    let removeItems = document.querySelectorAll('.remove')
    let list = document.querySelectorAll('li span:nth-child(1)')

    removeItems[removeItems.length-1].addEventListener('click',function(){
      this.parentNode.remove()
    })
    list[list.length-1].addEventListener('click',function(){
      this.classList.toggle('selected')
    })
  }
}
inputField.addEventListener('keypress',addToDo)

let toggle = document.getElementById('toggle')
let todo = document.querySelector('.todoContainer')
let showToggle = () => {
  todo.classList.toggle('hidden')
}

toggle.addEventListener('click',showToggle)





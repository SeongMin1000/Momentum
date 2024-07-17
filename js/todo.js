const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
let toDos = []

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)) // 객체나 배열을 json 문자열로 변환
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove()
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = "" // 엔터 누르면 입력값 삭제
    toDos.push(newTodo)
    paintToDo(newTodo)
    saveToDo()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const saveToDos = localStorage.getItem(TODOS_KEY)
if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos) // json 문자열을 기본 문자열로 파싱
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}


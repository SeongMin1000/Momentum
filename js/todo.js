const todoBtn = document.getElementById('todoBtn');
const todoPopover = document.getElementById('todoPopover');
const newTodoInput = document.getElementById('newTodo');
const toDoForm = document.getElementById('todoForm')
const todoList = document.getElementById('todoList');

let todos=[]

// 팝오버 표시/숨기기
todoBtn.addEventListener('click', () => {
    todoPopover.style.visibility = todoPopover.style.visibility === 'hidden' ? 'visible' : 'hidden';
});

function saveToDo(){
    localStorage.setItem("todos",JSON.stringify(todos))
}

function deleteToDo(event){
    event.stopPropagation()
    const diving = event.target.parentElement
    todos = todos.filter((toDo) => toDo.id !== parseInt(diving.id))
    console.log(todos)
    diving.remove()
    saveToDo()
}

function completeTodo(){
    if(checkBox.checked){
        text.style.textDecorationLine = "line-through"
    }else{
        text.style.textDecorationLine = "none"
    }
}

function paintToDo(toObj){
    const div = document.createElement("div")
    div.id = toObj.id
    div.className = "one-list"

    const checkBox = document.createElement("input")
    checkBox.setAttribute('type','checkbox')
    checkBox.className = "checkBox"
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "❌"
    deleteBtn.className = "deleteBtn"

    
    const span = document.createElement("span")
    span.innerText = toObj.text
    span.className = "listText"
    if(toObj.isChecked === true){
        span.style.textDecorationLine = "line-through"
        span.style.color = "rgba(255,255,255,0.5)"
    }
    checkBox.checked = toObj.isChecked

    deleteBtn.addEventListener("click", deleteToDo)
    checkBox.addEventListener("click", () => {
        if(checkBox.checked){
            toObj.isChecked = true
            span.style.textDecorationLine = "line-through"
            span.style.color = "rgba(255,255,255,0.5)"
        }else{
            toObj.isChecked = false
            span.style.textDecorationLine = "none"
            span.style.color = "rgba(255,255,255,1)"
        }
        saveToDo()
    })

    div.appendChild(checkBox)
    div.appendChild(span)
    div.appendChild(deleteBtn)
    todoList.appendChild(div)
}

// 새로운 ToDo 항목 추가
function handleToDoSubmit(event){
    event.preventDefault()
    const inputValue = newTodoInput.value
    if (inputValue.trim() === "") return;
    newTodoInput.value=""
    const toObj = {
        id: Date.now(),
        text: inputValue,
        isChecked: false
    }
    todos.push(toObj)
    paintToDo(toObj)
    saveToDo()
}

toDoForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleToDoSubmit(event); // 엔터키 입력 시만 폼 제출 처리
    }
})

const saveToDos = localStorage.getItem("todos")
if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos) // json 문자열을 기본 문자열로 파싱
    todos = parsedToDos
    parsedToDos.forEach(paintToDo)
}


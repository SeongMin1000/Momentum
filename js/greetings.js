const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){ // 브라우저 동작에 관한 정보 기록 인자 객체
    event.preventDefault() // form 제출 시 새로고침 방지(브라우저 기본 동작)
    loginForm.classList.add(HIDDEN_CLASSNAME) // 제출 뒤 form 숨기기
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username) // h1 나타나기
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName === null){ // 유저 정보가 없으면 form 
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}
else{ // 있으면 인사
    paintGreeting(savedUserName) 
}
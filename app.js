const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){ // 브라우저 동작에 관한 정보 기록 인자 객체
    event.preventDefault() // form 제출 시 새로고침 방지(브라우저 기본 동작)
    loginForm.classList.add(HIDDEN_CLASSNAME) // 제출 뒤 form 숨기기
    const username = loginInput.value
    localStorage.setItem("username", username)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME) // h1 나타나기
}

loginForm.addEventListener("submit", onLoginSubmit)
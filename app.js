const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input")

function onLoginSubmit(event){
    event.preventDefault() // form 제출 시 새로고침 방지(브라우저 기본 동작)
    const username = loginInput.value
    console.log(username)
}

loginForm.addEventListener("submit", onLoginSubmit)

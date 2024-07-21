const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

// const greeting_container = document.querySelector("#greeting_container")
const greeting = document.querySelector("#greeting")
const editBtn = document.querySelector("#edit-btn")
const menu = document.querySelector("#dropdown-menu")
const logout = document.querySelector("#log-out")
const rename = document.querySelector("#rename")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const hour = new Date().getHours

function onLoginSubmit(event){ // 브라우저 동작에 관한 정보 기록 인자 객체
    event.preventDefault() // form 제출 시 새로고침 방지(브라우저 기본 동작)
    loginForm.classList.add(HIDDEN_CLASSNAME) // 제출 뒤 form 숨기기
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username) // h1 나타나기
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    editBtn.classList.remove(HIDDEN_CLASSNAME)
    if (hour >= 6 && hour < 12) {
    greeting.innerText = `Good morning, ${username}`;
    } else if (hour >= 12 && hour < 17) {
    greeting.innerText = `Good afternoon, ${username}`;
    } else if (hour >= 17 && hour < 20) {
    greeting.innerText = `Good evening, ${username}`;
    } else {
    greeting.innerText = `Good night, ${username}`;
    }

    logout.addEventListener("click", () => {
        localStorage.removeItem('username');
        editBtn.classList.add(HIDDEN_CLASSNAME)
    })
    
    rename.addEventListener("click", (event) => {
        event.preventDefault()
        greeting.classList.add(HIDDEN_CLASSNAME)
        loginForm.classList.remove(HIDDEN_CLASSNAME)
        loginForm.addEventListener("submit", onLoginSubmit)
        editBtn.classList.add(HIDDEN_CLASSNAME)
    })
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName === null){ // 유저 정보가 없으면 form 
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}
else{ // 있으면 인사
    paintGreeting(savedUserName) 
}

editBtn.addEventListener("click", () => {
    editBtn.classList.toggle('rotate')
    menu.classList.toggle(HIDDEN_CLASSNAME)
})

 // 드롭다운 메뉴 외부 클릭 시 메뉴를 숨김
window.addEventListener('click', function(event) {
    if (!event.target.matches('#edit-btn')) {
        if (!menu.classList.contains(HIDDEN_CLASSNAME)) {
            menu.classList.add(HIDDEN_CLASSNAME);
            editBtn.classList.remove('rotate');
        }
    }
})


const clock = document.querySelector("h1#clock")

function getClock(){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock() // 즉시 시계 표시
setInterval(getClock, 1000)


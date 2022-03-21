const getName=prompt("ADINIZ:")
document.querySelector("#myName").textContent=getName
let time = new Date()
let currentTime=`${time.getFullYear()}\\ ${time.getMonth()}\\ ${time.getDay()}   ${time.getHours()}.${time.getMinutes()}.${time.getSeconds()}`
document.querySelector("#myClock").textContent=currentTime;
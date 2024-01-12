let elHour = document.querySelector('.hour');
let elMinute = document.querySelector('.minute');
let elSeconds = document.querySelector('.seconds');
let elLoading = document.querySelector('.loading-box');


function clock() {
    let date = new Date()

    elHour.textContent = date.getHours()
    elMinute.textContent = date.getMinutes()
    elSeconds.textContent = date.getSeconds()

}
setInterval(clock , 1000)

setTimeout(() => {
    elLoading.style.opacity = 0
},3000)
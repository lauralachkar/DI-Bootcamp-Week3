let elem = document.getElementById("box")

elem.addEventListener("dragend",function(event){
let x = event.clientX
    let y = event.clientY
    elem.style.left = x + "px"
    elem.style.top= y + "px"
})
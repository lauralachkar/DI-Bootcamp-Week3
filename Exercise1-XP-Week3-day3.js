const button = document.getElementById("clear")
button.onclick = function(e) {
    _setTimeout()
    _addElement()
    _clearInterval()
    e.preventDefault();
}


 function _setTimeout(){
       const myInterval = alert("Hello World")
       myInterval
     5000}

function _addElement(){
    let div = document.getElementById("container");
    let newP = document.createElement("p")
    let textNode = document.createTextNode("Hello word")
    newP.appendChild(textNode)
    div.appendChild(newP)
}

function _clearInterval(){
    const  clearTime = _setTimeout()
    clearInterval(clearTime);
}


function clearInterval(){
    let div = document.getElementById("container");
    const firstP = document.createElement("p");
    const secondP = document.createElement("p");
    const thirdP = document.createElement("p");
    const fourthP = document.createElement("p");
    const lastP = document.createElement("p");
    div.appendChild(firstP)
    div.appendChild(secondP)
    div.appendChild(thirdP)
    div.appendChild(fourthP)
    div.appendChild(lastP)
    console.log(firstP)
    console.log(secondP)
    console.log(thirdP)
    console.log(fourthP)
    console.log(lastP)
}

clearInterval()
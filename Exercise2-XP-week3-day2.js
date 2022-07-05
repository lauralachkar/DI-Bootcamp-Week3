let getForm = document.getElementsByTagName("form")
for (i=0 ; i<getForm.length; i++){
    console.log(getForm[i])
}

let getFirstInputById = document.getElementById("fname");
console.log(getFirstInputById)
let getSecondInputById = document.getElementById("lname");
console.log(getSecondInputById)
let getLastInputById = document.getElementById("submit");
console.log(getLastInputById)


const getFirstInputByName = document.querySelector('[name="fname"]');
console.log(getFirstInputByName)
const getSecondInputByName = document.querySelector('[name="lname"]');
console.log(getSecondInputByName)


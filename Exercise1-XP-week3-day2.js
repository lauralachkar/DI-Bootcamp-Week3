let getFirstHeader = document.getElementsByTagName("h1")[0]
console.log(getFirstHeader)

let lastParagraph = document.getElementsByTagName("p")[3]
lastParagraph.remove()


function changeBackgroundColor(){
    let getSecondHeader = document.getElementsByTagName("h2")[0]
    getSecondHeader.setAttribute("style", "background-color: red;")
}

document.getElementById("myBtn").addEventListener("click", changeBackgroundColor);



// The display property sets or returns the element's display type.
//Elements in HTML are mostly "inline" or "block" elements: An inline element has floating content on its left and
// right side. A block element fills the entire line, and nothing can be displayed on its left or right side.
//The display property also allows the author to show or hide an element. It is similar to the visibility property.
// However, if you set display:none, it hides the entire element, while visibility:hidden means that the contents of
// the element will be invisible, but the element stays in its original position and size.Tip: If an element is a
// block element, its display type can also be changed with the float property.

function hideElement(){
    let thirdHeader = document.getElementsByTagName("h3")[0]
    thirdHeader.style.display = "none";
}

function setFontWeight(){
    let bold_Items = document.getElementsByTagName("p");
    for (i=0 ; i<bold_Items.length; i++){
        bold_Items[i].style.fontWeight = "900";
    }
}
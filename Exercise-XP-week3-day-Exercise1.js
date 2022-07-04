//Exercise 1

console.log(document.getElementsByTagName("div"))

 let listItems = document.querySelectorAll("li");
 for(i=0; i<listItems.length; i++){
  if(listItems[i].innerHTML == "Pete"){
   listItems[i].innerHTML = "Richard";
  }
 }


 let listOfItems = document.querySelectorAll(".list");
 for(i=0; i<listOfItems.length; i++){
  listOfItems[i].firstElementChild.innerHTML = "laura";
 }


 let listElements = document.querySelectorAll(".list li");
  for (let i = 0; (li = listElements[i]); i++) {
   if(listElements[i].innerHTML == "Sarah")
   li.parentNode.removeChild(li);
  }

  
// //Exercise 3
//
//
// let changeId = document.getElementById("navBar");
// changeId.id = "socialNetworkNavigation"
//
//
//
// let newLI = document.createElement("li");
// let newLiText = "Logout";
// newLI.innerHTML = newLiText;
// document.getElementsByTagName("ul")[3].appendChild(newLI);
//
//

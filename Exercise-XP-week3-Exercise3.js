let changeId = document.getElementById("navBar");
changeId.id = "socialNetworkNavigation"

 let newLI = document.createElement("li");
 let newLiText = "Logout";
 newLI.innerHTML = newLiText;
 document.getElementsByTagName("ul")[0].appendChild(newLI);


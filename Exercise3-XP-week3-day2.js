let allBoldItems;


function getBold_items(){
    allBoldItems = document.getElementsByTagName("strong");
}

getBold_items()

function highlight() {
    for (i = 0; i <allBoldItems.length; i++){
        if(allBoldItems[i]){
            let setBoldColor =  document.getElementsByTagName("strong")[i].
            setAttribute("style","color:blue")
            setBoldColor
        }
    }
}

highlight()

 function return_normal(){
     for (j = 0; j <allBoldItems.length; j++){
        if(allBoldItems[j]){
            let setColorBack =  document.getElementsByTagName("strong")[j].
            setAttribute("style","color:black")
             setColorBack
         }
     }
 }

 return_normal()
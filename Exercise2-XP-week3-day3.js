function  myMove(){
    let box = document.getElementById('animate');
    let pos = 0;
    let id = setInterval(function(){
        if(pos == 350){
            clearInterval(id)
        }
        else{
            pos++
            box.style.left = pos + "px";
        }
    },1)
}
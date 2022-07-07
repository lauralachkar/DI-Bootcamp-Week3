let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});


/*I have set the value of head and tail to zero, which means that when the game is launched under normal conditions,
the value of these two will be zero.
/*Now I have implemented it using the if function. I set a random value in i using Math.random and set a time using
setTimeout. Here I have used 3000 milliseconds which means this coin will continue to rotate up to 3000 milliseconds.

/*Now I have used the following codes to show the result of the game in the display. This will help you to count
live the value of the head and tail.
 */
/*In fact, the 'flip button' will go into full decibel mode when the coin continues to rotate. As a result,
you will not be able to click this button within those three seconds. This is mainly done to maintain the balance
of the game.

 */
/*Now I have activated the reset button. When you click on the reset button, the value of the head and tail
will be zero. No animation can be seen with it, meaning the coin will remain stationary. */
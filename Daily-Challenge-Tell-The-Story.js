const ccForm = document.forms["libform"];
ccForm.onclick = function(e) {

    // access the desired input through the var we setup
    let getFirstInputValue = document.getElementById("noun").value;
    let getSecondInputValue = document.getElementById("adjective").value;
    let getThirdInputValue = document.getElementById("person").value;
    let getFourthInputValue = document.getElementById("verb").value;
    let getLastInputValue = document.getElementById("place").value;
    if (getFirstInputValue === "" && getSecondInputValue === "" && getThirdInputValue === "" &&
        getFourthInputValue === "" && getLastInputValue === ""){
        getFirstInputValue = "Once upon a time,in the most beautiful castle of the village,"
        getSecondInputValue = "a princess named Reponse with beautiful and long blond hair "
        getThirdInputValue = "couldn't go out of her tour to discover the people and the beauty of the nature"
        getLastInputValue = "until a prince came to deliver her and escaped together "
        console.log(getFirstInputValue,getSecondInputValue,getThirdInputValue,getLastInputValue)
    }
    e.preventDefault();
}

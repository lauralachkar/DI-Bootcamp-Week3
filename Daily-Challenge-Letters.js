function lettersOnly(input){
    let regex=/[^a-z]/gi;
    input.value = input.value.replace(regex,"")
}
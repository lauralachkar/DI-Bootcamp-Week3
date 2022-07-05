function calculateVolume(){

    let radius = document.getElementById("radius").value;
    let volume = document.getElementById("volume").value;
    volume = (4/3)* Math.PI * Math.pow(radius, 3);
    alert("The volume of a sphere: "+volume.toFixed(2));
}


let button=document.getElementById("submit");
button.onclick=calculateVolume;



// Below formula is used to find the volume of a sphere:
//Volume = 4/3 * πr^3
// Where, r is the radius of the sphere. π or PI is a mathematical constant.Now, to calculate the volume, we need just
// the radius of the sphere. We can then use this formula to find the volume.
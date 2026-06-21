function enterUniverse(){

document.getElementById("home").style.display="none";

document.getElementById("menu").style.display="block";

document.querySelector(".tulipan").style.display="block";

}



function showBox(id){

let boxes=document.querySelectorAll(".box");


boxes.forEach(box=>{

box.style.display="none";

});


document.getElementById(id).style.display="block";


document.querySelector(".tulipan").style.display="none";

}



function MostrarRecuerdos(){

let boxes=document.querySelectorAll(".box");


boxes.forEach(box=>{

box.style.display="none";

});


let recuerdo =
document.getElementById("recuerdo");


recuerdo.style.display="block";


document.querySelector(".tulipan").style.display="none";

}


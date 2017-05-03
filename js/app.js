/*
 * Archivo principal de funcionalidad de JS
 */
 var modal= document.getElementById("imgModal");


var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
var img=[];
var span=[];

for (var i = 0; i < 11; i++){
	img[i]= document.getElementsByClassName("showImg")[i];
	img[i].addEventListener('click', show);
}

function show(){
	modal.style.display= "block";
	modalImg.src= this.src;
	captionText.innerHTML= this.alt;
}


for (var i = 0; i < 11; i++){
	span[i]= document.getElementsByClassName("closeImg")[i];
	span[i].addEventListener("click", close);
}

function close(){
	modal.style.display= "none";
}




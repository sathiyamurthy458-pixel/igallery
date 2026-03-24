let images = ["luffy.jpg","sanji.jpg","zoro.jpg","brook.jpg","robin.jpg"];
var captions=["Luffy","Sanji","Zoro","Brook","Robin"]
var index = 0;
function nextImage(){
index++;
if(index >= images.length){
index = 0;
}
document.getElementById("galleryImage").src = images[index];
document.getElementById("caption").innerHTML = captions[index];
}
function prevImage(){
index--;
if(index < 0){
index = images.length - 1;
}
document.getElementById("galleryImage").src = images[index];
document.getElementById("caption").innerHTML = captions[index];
}
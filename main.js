canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
bgimage="https://i.postimg.cc/bv5d35nK/racing.jpg";
car1img="https://i.postimg.cc/YqdnnNX1/car1.png";
car2img="https://1001freedownloads.s3.amazonaws.com/vector/thumb/66432/SimpleDarkBlueCarTopView.png";
car1width=120;
car1height=70;
car1x=10;
car1y=10;
car2width=120;
car2height=70;
car2x=10;
car2y=100;
function add() {
bgimagetag=new Image();
bgimagetag.onload=uploadBackground;
bgimagetag.src=bgimage;
  
car1imgtag=new Image();
car1imgtag.onload=uploadCar1;
car1imgtag.src=car1img;

car2imgtag=new Image();
car2imgtag.onload=uploadCar2;
car2imgtag.src=car2img;
}
function uploadBackground() {
ctx.drawImage(bgimagetag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1imgtag,car1x,car1y,car1width,car1height);
    }
    function uploadCar2() {
        ctx.drawImage(car2imgtag,car2x,car2y,car2width,car2height);
        }
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keyPressed=e.keyCode;
console.log(keyPressed); 
if (keyPressed=='37') {
console.log("left");    
}   
if (keyPressed==38) {
console.log("up");    
}
if (keyPressed==39) {
console.log("right");
}
if (keyPressed==40) {
console.log("Down");
}
}
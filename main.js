canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="download.jpg";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="download.jpg";
car2_x=10;
car2_y=10;

background_image="maxresddefault.jpg";

function add() {
    backgroun_imgTag= new Image();
    backgroun_imgTag.onload= uploadBadckground;
    backgroun_imgTag.src=background_image;

    car1_imgTag= new Image();
    car1_imgTag.omload=uploadcar1;
    car1_imgTag.src= car1_image;
    

    car2_imgTag= new Image();
    car2_imgTag.omload=uploadcar2;
    car2_imgTag.src= car2_image;
}

function uploadBadckground(){
    ctx.drawImage(backgroun_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1__imgTag, car1_x, car1_y, car1_width, car1_height);

}
function uploadcar2(){
    ctx.drawImage(car2__imgTag, car2_x, car2_y, car2_width, car2_height);

}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed=='37'){
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed=='39'){
        car1_right();
        console.log("rightr arrow key");
    }
    if(keyPressed=='87'){
        car2_up();
        console.log("w key");
    }
    if(keyPressed=='83'){
        car2_down();
        console.log("s key");
    }
    if(keyPressed=='65'){
        car2_left();
        console.log("a key");
    }
    if(keyPressed=='68'){
        car2_right();
        console.log("d key");
    }

}
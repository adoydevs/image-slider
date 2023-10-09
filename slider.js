let photos = ["./img/img 1.jpg", "./img/img 2.png" , "./img/img 3.jpg"];
let images = document.querySelector("img");


let x = 0;
function next() {
    x++;

    if(x>=photos.length){
        x=0;
        images.src = photos[x];
    }
    else{
        images.src = photos[x];
    }
}


function prev() {
    x--;

    if(x<0){
        x= photos.length - 1;
        images.src = photos[x];
    }
    else{
        images.src = photos[x];
    }
}
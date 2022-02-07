video="";

status="";
function preload(){
    video=createVideo('video.mp4');
}

function setup(){
    canvas=createCanvas(640,450);
    canvas.center();
video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting object";
}
function modelLoaded(){
    console.log("cocossd model is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
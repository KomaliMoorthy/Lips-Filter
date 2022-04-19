noseX=0
noseY=0

function preload() {
 clown_nose = loadImage('https://i.postimg.cc/fRmYmTM4/images-5-ccexpress.png')
}
function setup() {
canvas = createCanvas(500, 400);
canvas.center();
video = createCapture(VIDEO);
video.size(500, 400);
video.hide();


poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
image(video, 0, 0, 500, 400);
image(clown_nose, noseX, noseY, 60, 40);
}

function take_snapshot() {
    save('myFilterImage.png')
}

function gotPoses(results) {
if(results.length>0) {

    console.log(results);
    noseX = results[0].pose.nose.x-31;
    noseY = results[0].pose.nose.y+16;
    console.log("nose x = " + noseX);
    console.log("nose x = " + noseY);
}
}
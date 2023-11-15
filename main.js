noseX = 0;
noseY = 0;

rightEyeX = 0;
rightEyeY = 0;

function preload() {
  nose_img = loadImage("clownnose.png");
  rightEye_img = loadImage("Lentes.png")
}


function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();


  poseNet = ml5.poseNet(video, ModelLoaded);
  poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
  console.log("Modelo cargado :)");

}

function gotPoses(results){
  if(results.length > 0){
    noseX = results[0].pose.nose.x-220;
    noseY = results[0].pose.nose.y-120;
    rightEyeX = results[0].pose.rightEye.x-200;    
    rightEyeY = results[0].pose.rightEye.y-130; 
  }

  console.log(results)
}


function draw() {
  image(video, 0, 0, 300, 300);
  image(nose_img, noseX, noseY, 40, 30);
  image(rightEye_img, rightEyeX, rightEyeY, 80, 50);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",modelLoaded)
}

function modelLoaded() {
  console.log("Model Loaded")
}

function draw() {
  image(video , 0 , 0 , 300, 300)
  classifier.classify(video,gotResults)
}

function gotResults(error,result) {
  if(error) {
    console.error(error)
  }else{
    console.log(result)
    document.getElementById("result_name").innerHTML=result[0].label
    percentage=result[0].confidence*100
    document.getElementById("result_accuracy").innerHTML = Math.round(percentage) + "%"
  }
}
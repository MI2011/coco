img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(650, 430);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function draw() {
    image(img, 0, 0, 650, 430);
    fill('#FF0000');
    text("dog", 45, 75);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 480, 350);

    fill('#FF0000');
    text("cat",320,120)
    noFill();
    stroke('#FF0000')
    rect(300, 90, 270, 320);
}
function modelLoaded() {
    console.log("model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
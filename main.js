//https://teachablemachine.withgoogle.com/models/4PhYLUL8x/
prediction_1 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_url + '">';
    });
}
console.log('ml5 version : ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4PhYLUL8x/model.json', modalloaded);

function modalloaded() {
    console.log("modelloaded");
}



function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("hand_gesture_name1").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if (results[0].label == "Victory") {
            document.getElementById("hand_gesture1").innerHTML = "&#9996;";
        }
        if (results[0].label == "Best") {
            document.getElementById("hand_gesture1").innerHTML = " &#128076;";
        }
        if (results[0].label == "Amazing") {
            document.getElementById("hand_gesture1").innerHTML = "&#128077;";
        }

    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_1 = "The prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_1);
    synth.speak(utterThis);
    
}
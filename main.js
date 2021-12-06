var Speechrecogntion = window.webkitSpeechRecognition;
var recognition = new Speechrecogntion;

function start(){
document.getElementById("textbox").innerHTML="";

recognition.start();
}
function speak(){
    var speak_data="taking your selfie in five seconds";
    var synth = window.speechSynthesis;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

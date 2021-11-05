function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true}) ;
    classifier= ml5.soundClasssifier('');
}
function modelReady() {
    classifier.classfy( gotResult) ;
}
function gotResult(error, result) {
    if (error)  {
      console.error(error); 
    }else{ 
     console.log(result);   
    }
}
random_number_r = math.floor(Math.random() * 255) +1;
random_number_g = math.floor(Math.random() * 255) +1;
random_number_b = math.floor(Math.random() * 255) +1;

document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
document.getElementById("result_confidence").innerrHTML = 'Accuracy -'+
(result [0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color =
"rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color =
rgb("+random_number_r+","+random_number_g+","+random_number_r+")
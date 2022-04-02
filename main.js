function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;
function gotResults(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1; 
        random_number_g = Math.floor(Math.random() * 255) + 1; 
        random_number_b = Math.floor(Math.random() * 255) + 1; 

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img=document.getElementById('animal_img');

        if (results[0].label == "Barking") {
            img.src = 'dog2.gif';

        } else if (results[0].label == "Meowing") {
            img.src = 'cat2.gif';

        } else if (results[0].label == "Mooing") {
            img.src = 'cow.gif';
        } else if (results[0].label == "Roaring") {
            img.src = 'lion2.gif';

    }
    else{
        img.src=animal_img
    }
  }
}
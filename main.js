
function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BwMcvIoMY/model.json', modelReady);

}
function modelReady() {
    classifier.classify(goResults);
}
function goResults(error, results) {
    console.log('Got Result');

    if (error) {
        console.error(error);
    } else {
        console.log(results);

        red = Math.floor(Math.random() * 255 + 1);
        green = Math.floor(Math.random() * 255 + 1);
        blue = Math.floor(Math.random() * 255 + 1);

        document.getElementById("result_label").innerHTML = 'Escucho: ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presicion: ' + (results[0].confidence * 100).toFixed(2) + '%';

        document.getElementById("result_label").style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.getElementById("result_confidence").style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';

        var a1 = document.getElementById("alien1");
        if (results[0].label == "Gato") {
           a1.src="Timba.png";
        }
        if (results[0].label == "Perro") {
            a1.src = "Nana.jpg";
           
        }
        
        if (results[0].label == "Ruido de fondo") {
            a1.src = "featuredimage-4-1.jpg";
           

        }


    }

}


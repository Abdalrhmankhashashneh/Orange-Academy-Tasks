function change() {
    var x = document.getElementById('selc').value;
    if (x == "not selected") {
        document.getElementById('img').src = "img/noimg.jpg";
    }
    if (x == "jordan") {
        document.getElementById('img').src = "img/jordan.png";
    }

    if (x == "syria") {
        document.getElementById('img').src = "img/soria.jpg";
    }
    if (x == "france") {
        document.getElementById('img').src = "img/france.jpg";
    }
}
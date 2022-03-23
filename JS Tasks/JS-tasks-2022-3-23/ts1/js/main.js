i = 0;
function change() {

    if (i % 2 == 0) {
        document.getElementById('main').style.backgroundColor = 'red'
        document.getElementById('main').style.color = 'white';
    }
    else {
        document.getElementById('main').style.backgroundColor = 'black'
        document.getElementById('main').style.color = 'white';
    }
    i++;
}

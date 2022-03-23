function change() {
    let x = document.getElementById("fontfamily").value;
    document.getElementById("main").style.fontFamily = x;
}
function sizef() {
    let x = String(document.getElementById("si").value) + "pt";
    document.getElementById("main").style.fontSize = x;

}
function fontstyle1() {
    var x = document.getElementById("italic").checked;
    if (x) {
        document.getElementById("main").style.fontStyle = "italic";
    }
    else {
        document.getElementById("main").style.fontStyle = "normal";
    }

}
function fontstyle2() {

    var x = document.getElementById("bold").checked;
    if (x) {
        document.getElementById("main").style.fontWeight = " bold";
    }
    else {
        document.getElementById("main").style.fontWeight = " normal";
    }
}
function fontstyle3() {
    var x = document.getElementById("underline").checked;
    if (x) {
        document.getElementById("main").style.textDecoration = "underline";
    }
    else {
        document.getElementById("main").style.textDecoration = "none";
    }

}
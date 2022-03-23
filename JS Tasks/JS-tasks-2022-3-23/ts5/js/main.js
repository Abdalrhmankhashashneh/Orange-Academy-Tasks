let psd1;
let psd2;
let btn;
function check() {
    psd1 = document.getElementById("password1").value;
    psd2 = document.getElementById("password2").value;
    btn = document.getElementById("button")
    err = document.getElementsByClassName("err");

    if (psd1.length < 6) {
        err[0].innerHTML = "the password is too short"

    }
    else {
        err[0].innerHTML = ""

    }
    if (psd2.length < 6) {

        err[1].innerHTML = "the password is too short"
    }
    else {

        err[1].innerHTML = ""
    }

    if (psd1 !== psd2) {
        err[1].innerHTML = "the two passwords dont match";
    } else {
        err[1].innerHTML = "";
        btn.style.display = "block"
    }
}


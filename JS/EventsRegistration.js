function displayDiv() {
    document.getElementById("reg1").style.display = "block";
}

function displayDiv2() {
    document.getElementById("reg2").style.display = "block";
}

function displayDiv3() {
    document.getElementById("reg3").style.display = "block";
}

function hideDiv() {
    document.getElementById("reg1").style.display = "none";
}
function hideDiv2() {
    document.getElementById("reg2").style.display = "none";
}
function hideDiv3() {
    document.getElementById("reg3").style.display = "none";
}

function newF() {
    var e = document.getElementById("f_email").value;
    if (e.length >= 4) {
        dbox("Success! Please check e-mail for booking confirmation. ");
        hideDiv();
    } else {
        dbox("Please enter correct email");
    }
}
function newF2() {
    var e = document.getElementById("f_email2").value;
    if (e.length >= 4) {
        dbox("Success! Please check e-mail for booking confirmation. ");
        hideDiv2();
    } else {
        dbox("Please enter correct email");
    }
}
function newF3() {
    var e = document.getElementById("f_email3").value;
    if (e.length >= 4) {
        dbox("Success! Please check e-mail for booking confirmation. ");
        hideDiv3();
    } else {
        dbox("Please enter correct email");
    }
}


function dbox(msg) {
    var box = document.getElementById("dbox"),
        boxm = document.getElementById("dboxm");

    boxm.innerHTML = (msg === undefined) ? "" : msg;
    box.style.display = (msg === undefined) ? "none" : "block";
}
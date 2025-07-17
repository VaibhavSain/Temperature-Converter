const kel = document.querySelector("#kel");
const feh = document.querySelector("#feh");
const cel = document.querySelector("#cel");

let celsius = 0;
let kelius = 0;
let fehre = 0;


function calculate1() {
    fahre = (cel.value * 9/2) + 32;
    fah.value = fahre;
    kelius = cel.value + 273.12
    kel.value = kelius;
}
function calculate2() {
    celsius = (+fah.value - 32) * 5/9 
    cel.value = celsius.toFixed();
    kelius = (fah.value  -32) * 5 / 9 + 273.15;
    kel.value = kelius.toFixed();
}
function calculate3() {
    celsius = (kel.value - 273.15);
    cel.value = celsius.toFixed();
    fahre = (kel.value - 273.15) * 9/5 + 32;
    fah.value = fahre.toFixed();
}




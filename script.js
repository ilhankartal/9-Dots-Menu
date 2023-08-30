let navigation = document.getElementById("na");
let clos = document.getElementById("cl");
let xicon = document.getElementById("x");

navigation.onclick=function() {
    navigation.classList.add("active");
    xicon.id="xactived";
    clos.classList.add("Before")
};

clos.onclick = function() {
    navigation.classList.remove("active");
    clos.classList.remove("Before")
    xicon.id="x";
    
};
//-----------------------------------------------

let card = document.getElementById("crdimg");
let kapa = document.getElementById("xxkapa");
let p = document.getElementById("pp");
card.onclick = function() {
    card.id="crdimgActive";
    p.id="ppactive";
};
card.ondblclick = function() {
    card.id="crdimg";
    p.id="pp";
};
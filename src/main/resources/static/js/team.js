var slideIndex = 1;
var fotos1 = 
[
["assets/img/team/ruben.jpg", ""],
["assets/img/team/Nuno.png",""],
["assets/img/team/albano.jpg",""],
["assets/img/team/vasco.jpg",""],
["assets/img/team/Joao.jpg", ""],
["assets/img/team/AnaCatarina.jpeg",""],
["assets/img/team/carol.jpg",""],
["assets/img/team/catarinasilva.jpg",""],
["assets/img/team/MarianaCancela.jpg",""],
["assets/img/team/MarianaPeixoto.jpg", ""],
["assets/img/team/Almeida.jpeg", ""],
["assets/img/team/Dino.png", ""],
];
var slides = fotos1.length;
showSlides(slideIndex);
console.log(fotos1.length);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    var i;
    let dots = "";
    if (n > slides) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides }
    for (i = 0; i < fotos1.length; i++) {
        if (slideIndex == i + 1) {
            dots = dots + `<span class="dot active" onclick="currentSlide(${i + 1})"></span>`;
        }
        else {
            dots = dots + `<span class="dot" onclick="currentSlide(${i + 1})"></span>`;
        }
    }
    document.getElementById("rights-texts").innerHTML = dots;

    document.getElementById("teamSlides").innerHTML = `<div class="numbertext">${slideIndex} / ${fotos1.length}</div><br> <br><div><img  class="responsive rounded-circle" src='${fotos1[slideIndex - 1][0]}' style="display: block;  margin-left: auto; margin-right: auto;"/></div> <br> <br> <div class="text responsive">${fotos1[slideIndex - 1][1]}</p>`;
    
}
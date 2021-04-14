/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict


//-------------------------------------------NOVO----------------------------------------------------//

function chooseTypeChild() {
    localStorage.setItem("type", "Child");
    window.location.href = "./MenuEscolherIdade.html";
}

function chooseTypeFamily() {
    localStorage.setItem("type", "Family");
    window.location.href = "./LoginFamilias.html";
}

function chooseTypeInstitution() {
    localStorage.setItem("type", "Institution");
    window.location.href = "./LoginInstituicoes.html";
}

function chooseTypeInstitution() {
    localStorage.setItem("type", "Admin");
    window.location.href = "./LoginAdmin.html";
}

function moveOn() {
    if (localStorage.getItem("age") !== null && localStorage.getItem("gender") !== null) {
        window.location.href = "./MenuPrincipal.html";
    }
}

function chooseGenderMale() {
    localStorage.setItem("gender", "male");
    document.getElementById("male-btn").style.backgroundColor = "rgba(249, 210, 77, 1)";
    document.getElementById("female-btn").style.backgroundColor = "rgba(255, 255, 255, 0)";
}
function chooseGenderFemale() {
    localStorage.setItem("gender", "female");
    document.getElementById("male-btn").style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.getElementById("female-btn").style.backgroundColor = "rgba(249, 210, 77, 1)";
}

function chooseAge(faixa) {
    localStorage.setItem("age", faixa);
    for (i = 1; i < 5; i++) {
        if (faixa == i) {
            document.getElementById(i + "btn").style.backgroundColor = "rgba(249, 210, 77, 1)";
        }
        else {
            document.getElementById(i + "btn").style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

function changeMainMenu() {
    if (localStorage.getItem("type") == "Child") {
        if (localStorage.getItem("age") === "1" || localStorage.getItem("age") === "2" || localStorage.getItem("age") === "3") {
            if(localStorage.getItem("age") === "1" || localStorage.getItem("age") === "2"){
            document.getElementById("forumbtn").remove();
            }
            document.getElementById("direitosbtn").setAttribute("href", "MenuDireitosCriancas.html");
        }
        document.getElementById("perfilbtn").remove();
        document.getElementById("apoiosplace").innerHTML = '<a class="nav-link js-scroll-trigger" href="MenuSelecaoTipoInformacao.html"><i class="far fa-question-circle"></i> Ajudas</a>';
    }
    else if (localStorage.getItem("function") == "security") {
        document.getElementById("apoiosplace").innerHTML = '<a class="nav-link js-scroll-trigger" href="MenuVerDenuncias.html"><i class="fas fa-shield-alt"></i> Denuncias</a>';
    }
    else {
        document.getElementById("apoiosplace").innerHTML = '<a class="nav-link js-scroll-trigger" href="MenuSelecaoTipoInformacao.html"><i class="far fa-question-circle"></i> Ajudas</a>';
    }
}

function changeProfileMenu() {
    if (localStorage.getItem("type") == "Family") {
        document.getElementById("instituitiontype").remove();
    }
}

/*function changeLinhasApoio(){
    if(localStorage.getItem("type") !== "child"){
        document.getElementById("formComplaint").remove();
    }
}*/

/*-----------------------------------------------------------------------------------------------*/
function editAssets() {
    let btns = document.getElementsByName("editingbtn");
    for (n = 0; n < btns.length; n++) {
        btns[n].style.display = "";
    }
}

function activeEdit() {
    if (localStorage.getItem("type") == "Institution" || localStorage.getItem("type") == "Admin") {
        document.getElementById("btnEdit").style.display = "";
    }
}

function showAddForm() {
    document.getElementById("formAdd").style.display = "";
    window.location.href = "#formAdd";
}

function hideOption() {
    if (localStorage.getItem("type") != "Child") {
        document.getElementById("paraFamilias").style.display = "";
    }

}

function perfil() {
    if (localStorage.getItem("type") == "Family") {
        fetchFamilia();
        document.getElementById("editBTN").setAttribute("onclick", "editDataFamily()");
    }
    if (localStorage.getItem("type") == "institution") {
        fetchInstituicao();
        document.getElementById("editBTN").setAttribute("onclick", "editDataInstitution()");
    }
}


function editPass() {
    let btns = document.getElementsByName("pass");
    for (n = 0; n < btns.length; n++) {
        btns[n].style.display = "";
    }
}

function garbage() {
    let btns = document.getElementsByName("garbage");
    console.log("ola");
    for (n = 0; n < btns.length; n++) {
        if (localStorage.getItem("type") === "Admin" || localStorage.getItem("LoggedIn") == btns[n].getAttribute("id")) {
            btns[n].style.display = "";
            console.log(btns[n].getAttribute("id"));
        }
    }
}


function dashboardBtn() {
    if(localStorage.getItem("type") !== "Admin"){
        document.getElementById("btnGoDash").remove();
    }
}


function clearReloadDiscuss() {
    localStorage.removeItem("idMessage");
    localStorage.removeItem("titleMessage");
    localStorage.removeItem("descMessage");
}

//---------------------------------------Botão para ir para o topo da página------------------------------------------------------------------------
//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
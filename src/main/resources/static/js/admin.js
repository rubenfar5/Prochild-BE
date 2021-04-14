/*!
    * Start Bootstrap - SB Admin v6.0.2 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
(function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

//----------------------------------------------------------------------------------------------------------//


function fetchAllUsers() {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/users`);
        let users = await response.json()
            document.getElementById("totalUtilizadores").innerHTML = users.length;
            
        
    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}
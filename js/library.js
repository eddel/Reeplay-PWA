function close_watchlistpop() {
    $("#mywatchlistpo").modal("hide");
}
// Get all elements with the class "navbar-collapse"
var navbarCollapses = document.querySelectorAll('.navbar-collapse');

// Get all elements with the classes "signup_btn" and "for_sm"
var signInButtons = document.querySelectorAll('.smsigningonly');

// Add click event listener to each "Sign In" button
signInButtons.forEach(function(signInButton) {
  signInButton.addEventListener('click', function() {
    // Hide the corresponding navbar collapse
    var navbarCollapse = this.closest('.navbar').querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
});

window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  var websiteContent = document.getElementById("websiteContent");

  preloader.style.display = "none"; // Hide the preloader
  websiteContent.style.display = "block"; // Show the website content
});
(window.onload = function () {
         if (window.innerWidth > 425) {
        var e = !1;
        setTimeout(function () {
            !e && ($(document.getElementById("mydailogbtn")).trigger("click"), (e = !0));
        }, 2 * 60 * 1000 + 12 * 1000);
    }else{
   var e = !1;
        setTimeout(function () {
            !e && ($(document.getElementById("smdailogbtn")).trigger("click"), (e = !0));
        }, 2 * 60 * 1000 + 12 * 1000);      
    }
    });
var input = document.querySelector("#phon-number");
window.intlTelInput(input, {
    initialCountry: "auto",
    separateDialCode: !0,
    hiddenInput: "full_phone",
    geoIpLookup: function (t, n) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(function (n) {
            t(n && n.country ? n.country : "");
        });
    },
    utilsScript: "path/to/utils.js",
});
var valid = window.intlTelInput.isValidNumber();
valid || document.write("wrong Number"),
    $("#phon-number").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });





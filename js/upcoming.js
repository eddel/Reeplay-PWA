function show_search() {
    (document.getElementById("search_area").style.display = "block"), (document.getElementById("search_icon").style.display = "none"), document.addEventListener("click", hide_search);
}
function hide_search(e) {
    let o = document.getElementById("search_area"),
        l = document.getElementById("search_icon");
    o.contains(e.target) || e.target === l || ((o.style.display = "none"), (l.style.display = "block"), document.removeEventListener("click", hide_search));
}
window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  var websiteContent = document.getElementById("websiteContent");

  preloader.style.display = "none"; // Hide the preloader
  websiteContent.style.display = "block"; // Show the website content
});
function scrollFunction() {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? (document.getElementById("back-to-top-btn").style.display = "block") : (document.getElementById("back-to-top-btn").style.display = "none");
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

function close_signupa() {
    $("#mypopupsignup").modal("hide");
}
function close_signin() {
    $("#mypopupsignin").modal("hide");
}
function close_popupverifyphone() {
    $("#mypopupverifyphone").modal("hide");
}
function close_verifydone() {
    $("#mypopupverifdone").modal("hide");
}
function close_resetpop() {
    $("#mypopupreset").modal("hide");
}
function close_resetdone() {
    $("#resetdonepop").modal("hide");
}
function close_dailogpop() {
    $("#dailogpopup").modal("hide");
}
function close_premiumpop() {
    $("#premiumpopup").modal("hide");
}
function close_profilelock() {
    $("#profilelockpop").modal("hide");
}
function coloseVmodals() {
    let e = document.querySelector(".ac_video"),
        o = document.fullscreenElement || document.webkitFullscreenElement;
    o && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()), $(".modal").modal("hide"), e.pause();
}
(window.onscroll = function () {
    scrollFunction();
}),
    document.getElementById("back-to-top-btn").addEventListener("click", function () {
        (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
    });


// Check user agent to determine the device type
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  var buttonsand = document.getElementsByClassName("appbtn");
  for (var i = 0; i < buttonsand.length; i++) {
    var buttonad = buttonsand[i];

    if (/android/i.test(userAgent)) {
      // Android device
      var playStoreLink = "https://play.google.com/store/apps";
      buttonad.onclick = function() {
        window.location.href = playStoreLink;
      };
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device
      var appStoreLink = "https://itunes.apple.com/app";
      buttonad.onclick = function() {
        window.location.href = appStoreLink;
      };
    }
  }
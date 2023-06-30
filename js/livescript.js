var videoContainers = document.querySelectorAll(".liv_chennel_cols");
videoContainers.forEach(function (e) {
    if (window.innerWidth > 425) {
    var t = e.querySelector(".hovered_video"),
        o = e.querySelector(".moviep_vareaa"),
        l = e.querySelector(".posreraea"),
        n = e.querySelector(".cvarea"),
        s = t.parentElement.querySelector(".red_juice"),
        a = t.parentElement.querySelector("#play-pause");
    t.parentElement.querySelector(".vdeostop-close");
    var c = t.parentElement.querySelector(".volumebtnv");
    function r() {
        t.paused || ((a.className = "play"), t.pause());
    }
    (t.autoplay = !1),
        (t.muted = !0),
        (n.style.display = "none"),
        (l.style.display = "block"),
        o.addEventListener("mouseenter", function () {
            (n.style.display = "block"),
                (l.style.display = "none"),
                t.paused &&
                    t
                        .play()
                        .then(function () {
                            a.className = "pause";
                        })
                        .catch(function (e) {
                            console.log(e);
                        });
        }),
        o.addEventListener("mouseleave", function () {
            (n.style.display = "none"), (l.style.display = "block"), t.paused || (t.pause(), (a.className = "play"));
        }),
        t.addEventListener("click", function () {
            r();
        }),
        a.addEventListener("click", function () {
            t.paused ? t.paused && ((a.className = "pause"), t.play()) : r();
        }),
        t.addEventListener("timeupdate", function () {
            var e = t.currentTime / t.duration;
            (s.style.width = 100 * e + "%"), t.ended && (a.className = "play");
        }),
        (c.onclick = function () {
            t.muted ? ((t.muted = !1), (c.src = "img/volume.svg")) : ((t.muted = !0), (c.src = "img/mute.png"));
        });
    }
});
var live_event_cols = document.querySelectorAll(".live_event_cols");
function moveToNext(e, t) {
    1 === e.value.length &&
        (setTimeout(() => {
            e.value = "•";
        }, 500),
        document.getElementById(t).focus());
}
function moveToPrev(e, t, o) {
    8 === e.keyCode && 0 === e.target.value.length && document.getElementById(o).focus();
}
function close_watchlistpop() {
    $("#mywatchlistpo").modal("hide");
}
live_event_cols.forEach(function (e) {
    if (window.innerWidth > 425) {
    var t = e.querySelector(".hovered_video"),
        o = e.querySelector(".moviep_vareaa"),
        l = e.querySelector(".posreraea"),
        n = e.querySelector(".cvarea"),
        s = t.parentElement.querySelector(".red_juice"),
        a = t.parentElement.querySelector("#play-pause");
    t.parentElement.querySelector(".vdeostop-close");
    var c = t.parentElement.querySelector(".volumebtnv");
    function r() {
        t.paused || ((a.className = "play"), t.pause());
    }
    (t.autoplay = !1),
        (t.muted = !0),
        (n.style.display = "none"),
        (l.style.display = "block"),
        o.addEventListener("mouseenter", function () {
            (n.style.display = "block"),
                (l.style.display = "none"),
                t.paused &&
                    t
                        .play()
                        .then(function () {
                            a.className = "pause";
                        })
                        .catch(function (e) {
                            console.log(e);
                        });
        }),
        o.addEventListener("mouseleave", function () {
            (n.style.display = "none"), (l.style.display = "block"), t.paused || (t.pause(), (a.className = "play"));
        }),
        t.addEventListener("click", function () {
            r();
        }),
        a.addEventListener("click", function () {
            t.paused ? t.paused && ((a.className = "pause"), t.play()) : r();
        }),
        t.addEventListener("timeupdate", function () {
            var e = t.currentTime / t.duration;
            (s.style.width = 100 * e + "%"), t.ended && (a.className = "play");
        }),
        (c.onclick = function () {
            t.muted ? ((t.muted = !1), (c.src = "img/volume.svg")) : ((t.muted = !0), (c.src = "img/mute.png"));
        });
    }
}),
    window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  var websiteContent = document.getElementById("websiteContent");

  preloader.style.display = "none"; // Hide the preloader
  websiteContent.style.display = "block"; // Show the website content
        var e = document.querySelector(".navbar");
        window.scrollY > 50 ? e.classList.add("bg-dark") : e.classList.remove("bg-dark"),
            window.addEventListener("scroll", function () {
                window.scrollY > 50 ? e.classList.add("bg-dark") : e.classList.remove("bg-dark");
            });
    }),
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

function close_smallert() {
    $("#smalertlogin").modal("hide");
}
function close_smlogin() {
    $("#smlogin").modal("hide");
}
const watchNowBtns = document.querySelectorAll(".watch_now");
function colosefullVmodals() {
    document.querySelector(".main-fullvideo");
    let e = document.fullscreenElement || document.webkitFullscreenElement;
    e && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen());
}
function colosefullVmodals() {
    let e = document.querySelector(".main-fullvideo"),
        t = document.fullscreenElement || document.webkitFullscreenElement;
    t && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()), (document.getElementById("full_widthvideo").style.display = "none"), e.pause();
}
watchNowBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    if (window.innerWidth > 425) {
      let e = document.querySelector(".full_width_video");
      e.style.display = "block";
      let t = document.querySelector(".main-fullvideo");
      t.play();
    } else {
      const appContentBtn = document.querySelector("#viewapp_conntent_btn");
      appContentBtn.click();
    }
  });
});

var fullVideoSection = document.getElementById("full_widthvideo"),
    body = document.querySelector("body");
body.addEventListener("mousedown", function (e) {
    "block" !== fullVideoSection.style.display || e.target.closest("#full_widthvideo") || e.preventDefault();
}),
    $(document).ready(function () {
        $(".pm_options_area").hide(),
            $("#select_pms").click(function () {
                $(".continuepmliv").fadeOut("fast", function () {
                    $(".pm_options_area").fadeIn("slow");
                });
            }),
            $(".pm_method_options").click(function () {
                var e = $(this).find("p").text();
                $("#select_pms").html("Change \xa0 \xa0 "),
                    $("#ssted_pm").html(e),
                    $(".pm_options_area").fadeOut("slow", function () {
                        $(".continuepmliv").fadeIn("slow");
                    }),
                    (document.getElementById("select_pms").style.background = "none");
            });
    });
const buttons = document.querySelectorAll(".select_amount_btns_area button"),
    inputField = document.querySelector(".cm-pay-amoount");
buttons.forEach((e) => {
    e.addEventListener("click", () => {
        buttons.forEach((e) => {
            e.classList.remove("selected"), (e.style.backgroundColor = ""), (e.style.color = "");
        }),
            e.classList.add("selected"),
            (e.style.backgroundColor = "#FF1313"),
            (e.style.color = "white"),
            (inputField.value = e.textContent);
    });
}),
    inputField.addEventListener("input", () => {
        buttons.forEach((e) => {
            inputField.value === e.textContent ? (e.classList.add("selected"), (e.style.backgroundColor = "#FF1313"), (e.style.color = "white")) : (e.classList.remove("selected"), (e.style.backgroundColor = ""), (e.style.color = ""));
        });
    }),
    $(document).ready(function () {
        $(".sm_options_area").hide(),
            $("#select_smp").click(function () {
                $(".sm_options_area").fadeIn("slow");
            }),
            $(".sm_method_options").click(function () {
                var e = $(this).find("p").text();
                $("#select_smp option:selected").text(e), $(".sm_options_area").fadeOut("slow"), (document.getElementById("select_smp").style.background = "none"), (document.getElementById("word2").style.display = "none");
            });
    });
const liveAddWishlistImages = document.querySelectorAll(".live_addwlist"),
    originalImagePath = "img/playlist_sm.svg",
    newImagePath = "img/playlist_sm_new.svg";
liveAddWishlistImages.forEach((e) => {
    e.addEventListener("click", () => {
        e.src.endsWith(originalImagePath) ? (e.src = "img/playlist_sm_new.svg") : (e.src = originalImagePath);
    });
});
var container = document.querySelector(".liv_chennel_rows"),
    imageBoxWidth = document.querySelector(".liv_chennel_cols").offsetWidth,
    bulletsContainer = document.querySelector(".bulles_live"),
    bullets = bulletsContainer.querySelectorAll(".live_bulles_item");
bullets[0].classList.add("live_active_bulles"),
    container.addEventListener("scroll", function () {
        var e = container.scrollLeft;
        bullets.forEach(function (e) {
            e.classList.remove("live_active_bulles");
        }),
            bullets[Math.floor(e / imageBoxWidth)].classList.add("live_active_bulles");
    });
for (var chennelcards = document.querySelectorAll(".livep_cards"), eventsrowone = document.querySelector(".livep_events_area"), i = 0; i < 11; i++)
    chennelcards[i].addEventListener("mouseover", function () {
        eventsrowone.classList.add("minus_margin_for_lives");
    }),
        chennelcards[i].addEventListener("mouseout", function () {
            eventsrowone.classList.remove("minus_margin_for_lives");
        });
for (var eventcards = document.querySelectorAll(".livep_event1_card"), tvrowone = document.querySelector(".livep_tv_area"), i = 0; i < 8; i++)
    eventcards[i].addEventListener("mouseover", function () {
        tvrowone.classList.add("minus_margin_for_lives2");
    }),
        eventcards[i].addEventListener("mouseout", function () {
            tvrowone.classList.remove("minus_margin_for_lives2");
        });
let tvcardss = document.querySelectorAll(".livep_event2_card"),
    addrowones = document.querySelector(".live_add_area");
for (var j = 0; j < 8; j++)
    tvcardss[j].addEventListener("mouseover", function () {
        addrowones.classList.add("minus_margin_for_lives3");
    }),
        tvcardss[j].addEventListener("mouseout", function () {
            addrowones.classList.remove("minus_margin_for_lives3");
        });
function show_search() {
    (document.getElementById("search_area").style.display = "block"), (document.getElementById("search_icon").style.display = "none"), document.addEventListener("click", hide_search);
}
function hide_search(e) {
    let t = document.getElementById("search_area"),
        o = document.getElementById("search_icon");
    t.contains(e.target) || e.target === o || ((t.style.display = "none"), (o.style.display = "block"), document.removeEventListener("click", hide_search));
}
function scrollFunction() {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? (document.getElementById("back-to-top-btn").style.display = "block") : (document.getElementById("back-to-top-btn").style.display = "none");
}
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
function close_paymethods() {
    $("#mypaymethodpop").modal("hide");
}
function close_continemethods() {
    $("#mycpaypopup").modal("hide");
}
function close_topupdone() {
    $("#topupdonepop").modal("hide");
}
(window.onscroll = function () {
    scrollFunction();
}),
    document.getElementById("back-to-top-btn").addEventListener("click", function () {
        (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
    });
var input = document.querySelector("#phone-number");
window.intlTelInput(input, {
    initialCountry: "auto",
    separateDialCode: !0,
    hiddenInput: "full_phone",
    geoIpLookup: function (e, t) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(function (t) {
            e(t && t.country ? t.country : "");
        });
    },
    utilsScript: "path/to/utils.js",
});
var valid = window.intlTelInput.isValidNumber();
valid || document.write("wrong Number"),
    $("#phone-number").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
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
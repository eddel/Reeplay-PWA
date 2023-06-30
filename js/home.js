var scrollInterval,
    homeSectiondd = document.querySelector(".home_startup"),
    bgVideodd = document.querySelector("#bgVideo"),
    sub_heading_c = document.querySelector("#sub_heading_c"),
    sub_heading_p = document.querySelector("#sub_heading_p"),
    header_starts = document.querySelector(".header_starts"),
    rheader_icon = document.querySelector(".rheader_icon"),
    rheader_icon1 = document.querySelector(".rheader_icon1"),
    header_content_right1 = document.querySelector(".header_content_right1"),
    header_content_right = document.querySelector(".header_content_right");
function toggleVideoMute() {
    bgVideodd.muted
        ? ((bgVideodd.muted = !1), (bgVideodd.volume = 1), (rheader_icon.src = "img/volume.svg"), (rheader_icon.style.width = "18px"))
        : ((bgVideodd.muted = !0), (rheader_icon.src = "img/mute.png"), (rheader_icon.style.width = "18px"));
}
function toggleVideoMute1() {
    bgVideodd.muted
        ? ((bgVideodd.muted = !1), (bgVideodd.volume = 1), (rheader_icon1.src = "img/volume.svg"), (rheader_icon1.style.width = "18px"))
        : ((bgVideodd.muted = !0), (rheader_icon1.src = "img/mute.png"), (rheader_icon1.style.width = "18px"));
}
function runVideoFunction() {
 if (window.innerWidth > 425) {
    (sub_heading_c.style.display = "none"),
        (sub_heading_p.style.display = "none"),
        (header_starts.style.display = "none"),
        (header_content_right.style.display = "block"),
        (header_content_right1.style.display = "block"),
        (bgVideodd.style.display = "block"),
        homeSectiondd.childNodes[0] && (homeSectiondd.removeChild(homeSectiondd.childNodes[0]), homeSectiondd.appendChild(bgVideodd)),
       homeSectiondd.style.backgroundImage = "none",
        (bgVideodd.currentTime = 0),
        (bgVideodd.muted = !0),
        bgVideodd.play(),
        (rheader_icon.src = "img/mute.png"),
        (rheader_icon.style.width = "18px"),
         (rheader_icon1.src = "img/mute.png"),
        (rheader_icon1.style.width = "18px"),
        bgVideodd.addEventListener(
            "ended",
            function () {
                bgVideodd.pause(), (bgVideodd.style.display = "none"), (sub_heading_c.style.display = "block"), (sub_heading_p.style.display = "block"), (header_starts.style.display = "block"), (rheader_icon.src = "img/replay_icon.svg"), (rheader_icon1.src = "img/replay_icon.svg"), (homeSectiondd.style.backgroundImage = "linear-gradient(90.45deg, rgba(0, 0, 0, 0.427) 28.29%, rgba(0, 0, 0, 0) 98.74%), linear-gradient(180deg, transparent 50%, #000 100%), url(img/home_bg.jpg)");
            },
            !1
        );
        setTimeout(function () {
            bgVideodd.pause(), (bgVideodd.style.display = "none"), (sub_heading_c.style.display = "block"), (sub_heading_p.style.display = "block"), (header_starts.style.display = "block"), (rheader_icon.src = "img/replay_icon.svg"), (rheader_icon1.src = "img/replay_icon.svg"), (homeSectiondd.style.backgroundImage = "linear-gradient(90.45deg, rgba(0, 0, 0, 0.427) 28.29%, rgba(0, 0, 0, 0) 98.74%), linear-gradient(180deg, transparent 50%, #000 100%), url(img/home_bg.jpg)");
        }, 2 * 60 * 1000);
}}
(bgVideodd.style.display = "none"),
    window.addEventListener("load", function () {
        setTimeout(function () {
            runVideoFunction();
        }, 6e3);
    }),
    (rheader_icon.onclick = function () {
        bgVideodd.paused ? runVideoFunction() : toggleVideoMute();
    });
    (rheader_icon1.onclick = function () {
        bgVideodd.paused ? runVideoFunction() : toggleVideoMute1();
    });
var container = document.querySelector(".containr"),
    boxes = document.querySelectorAll(".boxx2"),
    totalWidth = 0;
boxes.forEach(function (e) {
    totalWidth += e.offsetWidth + parseInt(getComputedStyle(e).marginRight);
});
var scrolling = !1;
function startScrolling(e) {
    scrolling ||
        ((scrolling = !0),
        (scrollInterval = setInterval(function () {
            var t = container.scrollLeft;
            "left" === e && (t > 0 ? (container.scrollLeft -= 1) : (e = "right")), "right" === e && (t < totalWidth - container.offsetWidth ? (container.scrollLeft += 1) : (e = "left"));
        }, 10)));
}
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
boxes.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var t, o;
        e.getBoundingClientRect().right > container.getBoundingClientRect().right && startScrolling("right"), e.getBoundingClientRect().left < container.getBoundingClientRect().left && startScrolling("left");
    }),
        e.addEventListener("mouseleave", function () {
            (scrolling = !1), clearInterval(scrollInterval);
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
var videos = document.querySelectorAll(".upcoming_video");
videos.forEach(function (e) {
    var t = e.parentElement.querySelector(".red_juice"),
        o = e.parentElement.querySelector("#play-pause"),
        l = e.parentElement.querySelector(".vdeostop-close"),
        d = e.parentElement.querySelector(".volumebtnv");
    (o.onclick = function () {
        e.paused ? ((o.className = "pause"), e.play()) : ((o.className = "play"), e.pause());
    }),
        e.addEventListener("timeupdate", function () {
            var l = e.currentTime / e.duration;
            (t.style.width = 100 * l + "%"), e.ended && (o.className = "play");
        }),
        (l.onclick = function () {
            e.pause(), (o.className = "play"), $(".modal").modal("hide");
        }),
        (d.onclick = function () {
            e.volume > 0 ? ((e.volume = 0), (d.src = "img/mute.png"), (d.style.width = "30px"), (d.style.height = "30px"), (d.style.marginTop = "20px")) : ((e.volume = 1), (d.src = "img/volume.svg"));
        });
});
var downloading = document.getElementById("dowtow_arrow");
downloading.onclick = function () {
    downloading.src = "img/dawoloading.svg";
};
var downloadiing = document.getElementById("dowone_arrow");
downloadiing.onclick = function () {
    downloadiing.src = "img/dawoloading.svg";
};
var comtarea = document.getElementById("comment_area1"),
    dfpone = document.getElementById("default_preview1"),
    dfptwo = document.getElementById("default_preview2"),
    dfpthree = document.getElementById("default_preview3"),
    dfpfour = document.getElementById("default_preview4");
document.getElementById("show_comments1").onclick = function () {
    var e = window.getComputedStyle(comtarea);
    "none" === e.getPropertyValue("display")
        ? ((comtarea.style.display = "block"), (dfpone.style.display = "none"), (dfptwo.style.display = "none"), (dfpthree.style.display = "none"), (dfpfour.style.display = "none"))
        : "block" === e.getPropertyValue("display") && ((comtarea.style.display = "none"), (dfpone.style.display = "block"), (dfptwo.style.display = "block"), (dfpthree.style.display = "block"), (dfpfour.style.display = "block"));
};
var comtareaa = document.getElementById("comment_area2"),
    dfponee = document.getElementById("default_series1"),
    dfptwoo = document.getElementById("default_series2"),
    dfpthreee = document.getElementById("default_series3"),
    dfpfourr = document.getElementById("default_series4");
document.getElementById("show_comments2").onclick = function () {
    var e = window.getComputedStyle(comtareaa);
    "none" === e.getPropertyValue("display")
        ? ((comtareaa.style.display = "block"), (dfponee.style.display = "none"), (dfptwoo.style.display = "none"), (dfpthreee.style.display = "none"), (dfpfourr.style.display = "none"))
        : "block" === e.getPropertyValue("display") && ((comtareaa.style.display = "none"), (dfponee.style.display = "block"), (dfptwoo.style.display = "block"), (dfpthreee.style.display = "block"), (dfpfourr.style.display = "block"));
};
var comtareaae = document.getElementById("musiccomment_area"),
    dfponeea = document.getElementById("default_music1"),
    dfptwooa = document.getElementById("default_music4"),
    dfpthreeea = document.getElementById("default_music2"),
    dfpfourra = document.getElementById("default_music3");
function add_rating() {
    $(".giv_rating_area").toggle(), $(".hide_for_rate").toggle();
}
function cancel_rating() {
    $(".giv_rating_area").toggle(), $(".hide_for_rate").toggle();
}
document.getElementById("show_musiccomments1").onclick = function () {
    var e = window.getComputedStyle(comtareaae);
    "none" === e.getPropertyValue("display")
        ? ((comtareaae.style.display = "block"), (dfponeea.style.display = "none"), (dfptwooa.style.display = "none"), (dfpthreeea.style.display = "none"), (dfpfourra.style.display = "none"))
        : "block" === e.getPropertyValue("display") && ((comtareaae.style.display = "none"), (dfponeea.style.display = "block"), (dfptwooa.style.display = "block"), (dfpthreeea.style.display = "block"), (dfpfourra.style.display = "block"));
};
const watchNowBtn = document.querySelector(".watch_now_btn");
watchNowBtn.addEventListener("click", function () {
  if (window.innerWidth > 425) {
    let e = document.querySelector(".full_width_video");
    e.style.display = "block";
    let t = document.querySelector(".main-fullvideo");
    t.play();
    let o = document.querySelector(".fullscreen");
    o.click();
  }
});
for (let i = 1; i <= 10; i++) {
    let e = document.querySelector(`.bplets${i}`),
        t = document.querySelector(`.ssrol_${i}`);
    t.addEventListener("mouseleave", () => {
        e.style.opacity = 0;
    }),
        t.addEventListener("mouseenter", () => {
            e.style.opacity = 1;
        });
}


window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  var websiteContent = document.getElementById("websiteContent");

  preloader.style.display = "none"; // Hide the preloader
  websiteContent.style.display = "block"; // Show the website content
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



    let eyeicon2 = document.getElementById("eye-icon2"),
    password2 = document.getElementById("password2");
eyeicon2.onclick = function () {
    "password" == password2.type ? (password2.type = "text") : (password2.type = "password");
};
let eyeicon1 = document.getElementById("eye-icon1"),
    password1 = document.getElementById("password1");
eyeicon1.onclick = function () {
    "password" == password1.type ? (password1.type = "text") : (password1.type = "password");
};
let eyeicon3 = document.getElementById("eye-icon3"),
    password3 = document.getElementById("password3");
eyeicon3.onclick = function () {
    "password" == password3.type ? (password3.type = "text") : (password3.type = "password");
};


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
      var appStoreLink = "https://www.apple.com/app-store/";
      buttonad.onclick = function() {
        window.location.href = appStoreLink;
      };
    }
  }
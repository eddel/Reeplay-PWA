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
        },  2 * 60 * 1000);
}
}
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
(bgVideodd.style.display = "none"),
    window.addEventListener("load", function () {
        setTimeout(function () {
            runVideoFunction();
        }, 6e3);
    }),
    (rheader_icon.onclick = function () {
        bgVideodd.paused ? runVideoFunction() : toggleVideoMute();
    });
var videos = document.querySelectorAll(".upcoming_video");
videos.forEach(function (e) {
    var t = e.parentElement.querySelector(".red_juice"),
        o = e.parentElement.querySelector("#play-pause"),
        n = e.parentElement.querySelector(".vdeostop-close"),
        l = e.parentElement.querySelector(".volumebtnv");
    (o.onclick = function () {
        e.paused ? ((o.className = "pause"), e.play()) : ((o.className = "play"), e.pause());
    }),
        e.addEventListener("timeupdate", function () {
            var n = e.currentTime / e.duration;
            (t.style.width = 100 * n + "%"), e.ended && (o.className = "play");
        }),
        (n.onclick = function () {
            e.pause(), (o.className = "play"), $(".modal").modal("hide");
        }),
        (l.onclick = function () {
            e.volume > 0 ? ((e.volume = 0), (l.src = "img/mute.png"), (l.style.width = "30px"), (l.style.height = "30px"), (l.style.marginTop = "20px")) : ((e.volume = 1), (l.src = "img/volume.svg"));
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
document.getElementById("show_musiccomments1").onclick = function () {
    var e = window.getComputedStyle(comtareaae);
    "none" === e.getPropertyValue("display")
        ? ((comtareaae.style.display = "block"), (dfponeea.style.display = "none"), (dfptwooa.style.display = "none"), (dfpthreeea.style.display = "none"), (dfpfourra.style.display = "none"))
        : "block" === e.getPropertyValue("display") && ((comtareaae.style.display = "none"), (dfponeea.style.display = "block"), (dfptwooa.style.display = "block"), (dfpthreeea.style.display = "block"), (dfpfourra.style.display = "block"));
};
var showPfNavClicked = !1;
function showpfnav() {
  if (window.innerWidth > 425) {
    var e = document.getElementById("pfnvigation");
    var t = document.getElementById("showpfnavicon");
    
    if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    if (e.style.display === "block") {
      e.style.display = "none";
      t.src = "img/nvfarrow.svg";
    } else {
      e.style.display = "block";
      t.src = "img/pf_down_icon.svg";
      showPfNavClicked = true;
    }
  } else {
    var link = document.querySelector("#viewapp_account_btn");
    if (link) {
      link.click();
    }
  }
}

let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
    let e = window.pageYOffset,
        t = document.getElementById("pfnvigation"),
        o = document.getElementById("showpfnavicon"),
        n = document.getElementById("notifcaation_area"),
        l = document.getElementById("bell_icon");
    e > prevScrollpos && "block" === t.style.display && ((t.style.display = "none"), (o.src = "img/nvfarrow.svg")),
        e > prevScrollpos && "block" === n.style.display && ((n.style.display = "none"), (l.src = "img/bell_icon.svg")),
        (prevScrollpos = e);
});
var selectedInterests = [];
function selectInterest(e) {
    e.classList.contains("selected")
        ? (e.classList.remove("selected"), selectedInterests.splice(selectedInterests.indexOf(e.textContent), 1))
        : selectedInterests.length < 5
        ? (e.classList.add("selected"), selectedInterests.push(e.textContent))
        : alert("You can only select up to 5 interests.");
}
$(document).ready(function () {
    $(".pm_options_area").hide(),
        $("#pmethod22").click(function () {
            $(".continue_pmp3").fadeOut("fast", function () {
                $(".pm_options_area").fadeIn("slow");
            });
        }),
        $(".pm_method_options").click(function () {
            var e = $(this).find("p").text();
            $("#pmethod22").html("Change \xa0 \xa0 "),
                $("#pmethod21").html(e),
                $(".pm_options_area").fadeOut("slow"),
                $(".pm_options_area2").fadeOut("slow", function () {
                    $(".continue_pmp3").fadeIn("slow");
                }),
                (document.getElementById("pmethod22").style.background = "none");
        });
});
const buttons = document.querySelectorAll(".select_amount_btns_area button"),
    inputField = document.querySelector(".cm-pay-amoount");
function formatCardNumber() {
    let e = document.getElementById("cardNumber"),
        t = e.value.replace(/\D/g, ""),
        o = t.replace(/(\d{4})/g, "$1 ");
    (o = o.replace(/^(\d{4})(\d{4})(\d{4})(\d{0,4}).*/, "$1•••• •••• •••• $4")), (e.value = o);
}
function show_notif() {
    var e = document.getElementById("notifcaation_area");
    (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) && ((document.body.scrollTop = 0), (document.documentElement.scrollTop = 0)),
        "block" === e.style.display
            ? ((document.getElementById("notifcaation_area").style.cssText = "display:none;"), (document.getElementById("bell_icon").src = "img/bell_icon.svg"))
            : ((document.getElementById("notifcaation_area").style.cssText = "display:block;"), (document.getElementById("bell_icon").src = "img/d_red_bell.svg"));
}
function add_rating() {
    $(".giv_rating_area").toggle(), $(".hide_for_rate").toggle();
}
function cancel_rating() {
    $(".giv_rating_area").toggle(), $(".hide_for_rate").toggle();
}
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
            $("#pmethod32").click(function () {
                $(".moretocont").fadeOut("fast", function () {
                    $(".sm_options_area").fadeIn("slow");
                });
            }),
            $(".sm_method_options").click(function () {
                var e = $(this).find("p").text();
                $("#pmethod32").html("Change \xa0 \xa0 "),
                    $("#pmethod31").html(e),
                    $(".sm_options_area").fadeOut("slow", function () {
                        $(".moretocont").fadeIn("slow");
                    });
            });
    }),
    $(document).ready(function () {
        $(".pm_options_area2").hide(),
            $("#select_pms").click(function () {
                $(".continue_pmpp").fadeOut("fast", function () {
                    $(".pm_options_area2").fadeIn("slow");
                });
            }),
            $(".pm_method_optionsdd").click(function () {
                var e = $(this).find("p").text();
                $("#select_pms").html("Change \xa0 \xa0 "),
                    $("#ssted_pm").html(e),
                    $(".pm_options_area2").fadeOut("slow", function () {
                        $(".continue_pmpp").fadeIn("slow");
                    }),
                    (document.getElementById("select_pms").style.background = "none");
            });
    });
const selectPeriod = document.getElementById("select_subs_period"),
    subsPayment = document.querySelector(".subs_payment"),
    subsForMonths = document.querySelector(".subs_for_months");
selectPeriod.addEventListener("change", function () {
    let e = selectPeriod.options[selectPeriod.selectedIndex],
        t = e.value;
    e.text,
        "1" === t
            ? ((subsPayment.innerText = "₦500.00"), (subsForMonths.innerText = "1 Month"))
            : "3" === t
            ? ((subsPayment.innerText = "₦1500.00"), (subsForMonths.innerText = "3 Months"))
            : "12" === t && ((subsPayment.innerText = "₦6000.00"), (subsForMonths.innerText = "1 Year"));
});
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
const selecttopoption = document.getElementById("select_top_option"),
    selectedoptiond = document.querySelector(".stjka");
selecttopoption.addEventListener("change", function () {
    let e = selecttopoption.options[selecttopoption.selectedIndex],
        t = e.value;
    e.text, "Redeem Giftcard" === t ? (selectedoptiond.innerText = "Redeem Giftcard") : "Other Payment" === t && (selectedoptiond.innerText = "Other Payment");
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
const paragraphs = document.querySelectorAll(".paragraph"),
    editButtons = document.querySelectorAll(".edit-button");
for (let i = 0; i < paragraphs.length; i++) {
    let o = paragraphs[i],
        n = editButtons[i];
    n.addEventListener("click", () => {
        let e = document.createElement("input");
        e.setAttribute("type", "text"), e.setAttribute("value", o.textContent), e.setAttribute("class", "input-class"), o.replaceWith(e);
        let t = document.createElement("button");
        (t.textContent = "Save"),
            t.setAttribute("class", "save-button ac_pf_name_edit"),
            n.replaceWith(t),
            t.addEventListener("click", () => {
                (o.textContent = e.value), e.replaceWith(o), t.replaceWith(n), cancelButton.remove();
            });
    });
}
function fasterPreview(e) {
    e.files && e.files[0] && $("#profileImage").attr("src", window.URL.createObjectURL(e.files[0]));
}
$("#change_img").click(function (e) {
    $("#imageUpload").click();
}),
    $("#imageUpload").change(function () {
        fasterPreview(this);
    });
window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  var websiteContent = document.getElementById("websiteContent");

  preloader.style.display = "none"; // Hide the preloader
  websiteContent.style.display = "block"; // Show the website content
});


$('.smmoodd').on('show.bs.modal', function () {
  $('body').addClass('modal-open');
  $('body').css('overflow', 'hidden');
});

$('.smmoodd').on('hidden.bs.modal', function () {
  $('body').removeClass('modal-open');
  $('body').css('overflow', 'auto');
});


// Get all elements with the class "navbar-collapse"
var navbarCollapses = document.querySelectorAll('.navbar-collapse');

// Get all elements with the classes "signup_btn" and "for_sm"
var signInButtons = document.querySelectorAll('.smpfnav');

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
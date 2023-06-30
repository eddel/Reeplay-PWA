var container = document.querySelector(".container_area"),
    imageBoxWidth = document.querySelector(".boxx").offsetWidth,
    bulletsContainer = document.querySelector(".bulles"),
    bullets = bulletsContainer.querySelectorAll(".bulles_item");
function show_search() {
    (document.getElementById("search_area").style.display = "block"), (document.getElementById("search_icon").style.display = "none");
}
function hide_showes(e) {
    let o = document.getElementById("search_area"),
        t = document.getElementById("search_icon"),
        l = document.getElementById("notifcaation_area"),
        n = document.getElementById("bell_icon"),
        i = document.getElementById("pfnvigation"),
        s = document.getElementById("user_pf_icon"),
        c = document.querySelectorAll(".modal");
    o.contains(e.target) || e.target === t || ((o.style.display = "none"), (t.style.display = "block")),
        l.contains(e.target) || e.target === n || ((l.style.display = "none"), (n.style.display = "block"), (document.getElementById("bell_icon").src = "img/bell_icon.svg")),
        i.contains(e.target) || isDescendantOf(e.target, c) || e.target === s || ((i.style.display = "none"), (s.style.display = "block"), (document.getElementById("showpfnavicon").src = "img/nvfarrow.svg"));
}
function isDescendantOf(e, o) {
    for (let t = 0; t < o.length; t++) if (o[t].contains(e) || e.classList.contains("ac_pf_name_edit")) return !0;
    return !1;
}
function scrollFunction() {
    document.body.scrollTop > 760 || document.documentElement.scrollTop > 760 ? (document.getElementById("back-to-top-btn").style.display = "block") : (document.getElementById("back-to-top-btn").style.display = "none");
}
$('.smmoodd').on('show.bs.modal', function () {
  $('body').addClass('modal-open');
  $('body').css('overflow', 'hidden');
});

$('.smmoodd').on('hidden.bs.modal', function () {
  $('body').removeClass('modal-open');
  $('body').css('overflow', 'auto');
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
function close_accountpopup() {
    $("#myacpopup").modal("hide");
}
function close_daawoloadingpopup() {
    $("#mydawonloadingpopup").modal("hide");
}
function close_watchlistpop() {
    $("#mywatchlistpo").modal("hide");
}
function close_popuppsitting() {
    $("#mypopupksitting").modal("hide");
}
function close_popupnotifcation() {
    $("#mypopupknotfcation").modal("hide");
}
function close_popupinterest() {
    $("#mypopupkinterest").modal("hide");
}
function close_snotfound() {
    $("#mypopupksnotfound").modal("hide");
}
function close_emptywatchlist() {
    $("#mypopupkemptywtachlist").modal("hide");
}
function close_activeaccount() {
    $("#myactiveacpopup").modal("hide");
}
function close_paymethods() {
    $("#mypaymethodpop").modal("hide");
}
function close_paymentmethods() {
    $("#mypaymetahodpop").modal("hide");
}
function close_continuepmethods() {
    $("#mycpaymentpopup").modal("hide");
}
function close_pmethoddone() {
    $("#topuppmehtoddone").modal("hide");
}
function close_continemethods() {
    $("#mycpaypopup").modal("hide");
}
function close_topupdone() {
    $("#topupdonepop").modal("hide");
}
function close_langueges() {
    $("#languages").modal("hide");
}
function close_exclusiv_pro() {
    $("#exclusiv_pro").modal("hide");
}
function close_deletpop() {
    $("#deleetep_popup").modal("hide");
}
function close_pripolicy() {
    $("#privacypolicyPop").modal("hide");
}
function close_logoutpop() {
    $("#logout_popup").modal("hide");
}
function close_subscribe() {
    $("#subscribes").modal("hide");
}
function close_giftcard() {
    $("#gfcard_pop").modal("hide");
}
function close_gfc_done() {
    $("#gfc_done").modal("hide");
}
function close_subs_summary() {
    $("#subs_summary").modal("hide");
}
function close_subs_period() {
    $("#subs_period").modal("hide");
}
function close_topupoptions() {
    $("#topupoption").modal("hide");
}
function close_actor() {
    $("#actorpf").modal("hide");
}
function close_gifcard() {
    $("#mypopupkgiftcard").modal("hide");
}
function close_askwatchlist() {
    $("#mypopupaskwatch").modal("hide");
}
function close_videoquality() {
    $("#mypopupvqaulity").modal("hide");
}
function close_aboutus() {
    $("#aboutuspopup").modal("hide");
}
function close_smallert() {
    $("#smalertlogin").modal("hide");
}
function close_smlogin() {
    $("#smlogin").modal("hide");
}
function coloseVmodals() {
    let e = document.querySelector(".ac_video"),
        o = document.fullscreenElement || document.webkitFullscreenElement;
    o && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()),
        $(".modal").modal("hide"),
        e.pause(),
        $(".v_icons_h").removeClass("active2"),
        $(".wf_vicon").removeClass("active2");
}
function coloseVmodals1() {
    let e = document.querySelector(".main-video2"),
        o = document.fullscreenElement || document.webkitFullscreenElement;
    o && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()),
        $(".modal").modal("hide"),
        e.pause(),
        $(".v_icons_h").removeClass("active2"),
        $(".wf_vicon").removeClass("active2");
}
function coloseVmodals2() {
    let e = document.querySelector(".main-video3"),
        o = document.fullscreenElement || document.webkitFullscreenElement;
    o && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()),
        $(".modal").modal("hide"),
        e.pause(),
        $(".v_icons_h").removeClass("active2"),
        $(".wf_vicon").removeClass("active2");
}
function colosefullVmodals() {
    let e = document.querySelector(".main-fullvideo"),
        o = document.fullscreenElement || document.webkitFullscreenElement;
    o && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()),
        (document.getElementById("full_widthvideo").style.display = "none"),
        e.pause(),
        $(".v_icons_h").removeClass("active2"),
        $(".wf_vicon").removeClass("active2");
}
bullets[0].classList.add("active_bulles"),
    container.addEventListener("scroll", function () {
        var e = container.scrollLeft;
        bullets.forEach(function (e) {
            e.classList.remove("active_bulles");
        }),
            bullets[Math.floor(e / imageBoxWidth)].classList.add("active_bulles");
    }),
    document.getElementById("next_img").addEventListener("click", function () {
        container.scrollTo({ left: container.scrollLeft + 3.5 * imageBoxWidth, behavior: "smooth" });
    }),
    document.getElementById("pre_img").addEventListener("click", function () {
        let e = document.querySelector(".boxx").offsetWidth;
        container.scrollTo({ left: container.scrollLeft - 3 * e, behavior: "smooth" });
    }),
    container.addEventListener("scroll", function () {
        let e = document.getElementById("pre_img");
        container.scrollLeft > 0 ? (e.style.display = "block") : (e.style.display = "none");
    }),
    $(document).click(hide_showes),
    window.addEventListener("load", function () {
        var e = document.querySelector(".navbar");
        window.scrollY > 50 ? e.classList.add("bg-dark") : e.classList.remove("bg-dark"),
            window.addEventListener("scroll", function () {
                window.scrollY > 50 ? e.classList.add("bg-dark") : e.classList.remove("bg-dark");
            });
    }),
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
    geoIpLookup: function (e, o) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(function (o) {
            e(o && o.country ? o.country : "");
        });
    },
    utilsScript: "path/to/utils.js",
});
var valid = window.intlTelInput.isValidNumber();
valid || document.write("wrong Number"),
    $("#phone-number").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });




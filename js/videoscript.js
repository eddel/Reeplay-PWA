const video_players=document.querySelectorAll(".video_player");video_players.forEach(e=>{let t=`<div class="loader"></div>
  ${e.innerHTML}
 

  <div class="videocontrols">
  <div class="row">
<div class="col-lg-1 col-md-1 col-1 p-0 text-center">
<div class="videotimer">
          <span class="current">0:00</span> 
        </div>
</div>
<div class="col-lg-10 col-md-10 col-10">
 <p class="caption_text"></p>
  <!-- <div class="thumbnail"></div> -->
  <div class="progressAreaTime" >0:00</div>

<div class="video_progress-area">
      <canvas class="bufferedBar"></canvas>
      <div class="video_progress-bar">
        <span></span>
      </div>
    </div>

</div>
<div class="col-lg-1 col-md-1 col-1 p-0 text-center">
<div class="videotimer">
          <span class="duration">0:00</span>
        </div>
</div>
  </div>
   


    <div class="videocontrols-list">
      <div class="videocontrols-left">
        
<span class="icon live_icon">
<img src="img/live_dot.svg"> &nbsp;Live
</span>
        <span class="icon">
          <img class="material-icons volume" src="img/v_valoum.svg">
          <input type="range" min="0" max="100" class="volume_range" />
        </span>

      </div>

     
      <div class="videocontrols-right">
        <span class="icon">
          <i class="material-icons auto-play "></i>
        </span>

<span class="icon" id="not_for_live1">
          <img class="material-icons next_video" src="img/next_v.svg">
        </span>

        <span class="icon" id="not_for_live2">
          <img class="material-icons captionsBtn" id="captionsBtn" src="img/v_subtitle.svg">
        </span>

        <span class="icon">
          <i class="material-icons settingsBtn">settings</i>
        </span>

        <span class="icon">
          <i class="material-icons picture_in_picutre">picture_in_picture_alt</i>
        </span>
<span class="icon donate_vote" id="v_donatebtn" data-toggle="modal" data-target=".choose_pay_method">
        </span>

        <span class="icon">
          <img class="material-icons fullscreen" src="img/v_full_screen.svg">
        </span>
      </div>
    </div>
  </div>

  <div class="settings">
    <div data-label="settingHome">
      <ul>
        <li data-label="speed">
          <span> Speed </span>
          <span class="material-symbols-outlined icon">
            arrow_forward_ios
          </span>
        </li>
        <li data-label="quality">
          <span> Quality </span>
         <span class="material-symbols-outlined icon">
          arrow_forward_ios
        </span>
        </li>
      </ul>
    </div>
    <div class="playback" data-label="speed" hidden>
      <span>
        <i class="material-symbols-outlined icon back_arrow"  data-label="settingHome">
          arrow_back
        </i>
        <span>Playback Speed </span>
      </span>
      <ul>
        <li data-speed="0.25">0.25</li>

        <li data-speed="0.5">0.5</li>

        <li data-speed="0.75">0.75</li>

        <li data-speed="1" class="active">Normal</li>

        <li data-speed="1.25">1.25</li>

        <li data-speed="1.5">1.5</li>

        <li data-speed="1.75">1.75</li>

        <li data-speed="2">2</li>
      </ul>
    </div>
    <div data-label="quality" hidden>
      <span>
        <i class="material-symbols-outlined icon back_arrow" data-label="settingHome">
          arrow_back
        </i>
        <span>Playback Quality </span>
      </span>
      <ul>
        <li data-quality="auto" class="active">auto</li>
      </ul>
    </div>
  </div>
  <div class="captions" id="captions">
    <div class="caption">
      <span>Select Subtitle</span>
      <ul>
        
      </ul>
    </div>
  </div>
<div class="middle_control active">
<div class="videocontrols-mid">
<span class="icon">
          <img class="material-icons fast-rewind v_icons_h" src="img/vide_i1.svg">
        </span>

        <span class="icon">
          <img class="material-icons play_pause active3" src="img/v_pause.svg">
        </span>

        <span class="icon">
          <img class="material-icons fast-forward v_icons_h" src="img/vide_i2.svg">
        </span>
</div>
</div> 
  `;e.innerHTML=t;let a=e.querySelector(".main-video"),s=e.querySelector(".progressAreaTime"),i=e.querySelector(".videocontrols"),l=e.querySelector(".video_progress-area"),n=e.querySelector(".bufferedBar"),c=e.querySelector(".video_progress-bar"),r=e.querySelector(".fast-rewind"),o=e.querySelector(".play_pause"),d=e.querySelector(".fast-forward"),v=e.querySelector(".volume"),u=e.querySelector(".volume_range"),p=e.querySelector(".current"),g=e.querySelector(".duration"),m=e.querySelector(".auto-play"),y=e.querySelector(".settingsBtn"),f=e.querySelector(".captionsBtn"),b=e.querySelector(".picture_in_picutre"),L=e.querySelector(".fullscreen"),h=e.querySelector(".settings"),E=e.querySelectorAll(".settings [data-label='settingHome'] > ul > li"),w=e.querySelector(".captions"),S=e.querySelector(".captions ul"),q=e.querySelectorAll(".playback li"),k=e.querySelectorAll("track"),A=e.querySelector(".loader");if(0!=k.length){S.insertAdjacentHTML("afterbegin",'<li data-track="OFF" class="active">OFF</li>');for(let T=0;T<k.length;T++){let _=`<li data-track="${k[T].label}">${k[T].label}</li>`;S.insertAdjacentHTML("beforeend",_)}}let H=w.querySelectorAll("ul li");function M(){o.src="img/pause.png",o.title="pause",e.classList.add("paused"),a.play()}function C(){o.src="img/v_pause.svg",o.title="play",e.classList.remove("paused"),a.pause()}function R(e){let t=a.duration,s=l.clientWidth+2,i=e.offsetX;a.currentTime=i/s*t;let n=a.currentTime/t*100+.5;c.style.width=`${n}%`;let r=a.currentTime,o=Math.floor(r%60);o<10&&(o="0"+o),p.innerHTML=`${Math.floor(r/60)} : ${o}`}function x(e,t,a){let s=e.getContext("2d",{antialias:!1});s.fillStyle="#ffffffe6";let i=e.height,l=e.width;if(!i||!l)throw"Canva's width or height or not set.";s.clearRect(0,0,l,i);for(let n=0;n<t.length;n++){let c=t.start(n)/a*l,r=t.end(n)/a*l;s.fillRect(c,0,r-c,i)}}function B(){a.volume=u.value/100,0==u.value?v.src="img/mute.png":u.value<10?v.src="img/mute.png":v.src="img/volume.svg"}function I(){0==u.value?(u.value=80,a.volume=.8,v.src="img/volume.svg"):(u.value=0,a.volume=0,v.src="img/mute.png")}o.addEventListener("click",()=>{let t=e.classList.contains("paused");t?C():M()}),a.addEventListener("play",()=>{M()}),a.addEventListener("pause",()=>{C()}),r.addEventListener("click",()=>{a.currentTime-=10}),d.addEventListener("click",()=>{a.currentTime+=10}),a.addEventListener("loadeddata",e=>{let t=e.target.duration,a=Math.floor(t/60),s=Math.floor(t%60);s<10&&(s="0"+s),g.innerHTML=`${a} : ${s}`}),a.addEventListener("timeupdate",e=>{let t=e.target.currentTime,a=Math.floor(t/60),s=Math.floor(t%60);s<10&&(s="0"+s),p.innerHTML=`${a} : ${s}`;let i=t/e.target.duration*100+.5;c.style.width=`${i}%`}),l.addEventListener("pointerdown",e=>{l.setPointerCapture(e.pointerId),R(e),l.addEventListener("pointermove",R),l.addEventListener("pointerup",()=>{l.removeEventListener("pointermove",R)})}),a.addEventListener("progress",()=>{x(n,a.buffered,a.duration)}),a.addEventListener("waiting",()=>{A.style.display="block"}),a.addEventListener("canplay",()=>{A.style.display="none"}),u.addEventListener("change",()=>{B()}),v.addEventListener("click",()=>{I()}),l.addEventListener("mousemove",e=>{let t=l.clientWidth+2,i=e.offsetX,n=Math.floor(i/t*a.duration),c=Math.floor(n/60),r=Math.floor(n%60);s.style.setProperty("--x",`${i}px`),s.style.display="block",i=i>=t-80?t-80:i<=75?75:e.offsetX,r<10&&(r="0"+r),s.innerHTML=`${c} : ${r}`}),l.addEventListener("mouseleave",()=>{s.style.display="none"}),m.addEventListener("click",()=>{m.classList.toggle("active"),m.classList.contains("active")?m.title="Autoplay is on":m.title="Autoplay is off"}),a.addEventListener("ended",()=>{m.classList.contains("active")?M():(o.innerHTML="replay",o.title="Replay")}),b.addEventListener("click",()=>{a.requestPictureInPicture()}),L.addEventListener("click",()=>{e.classList.contains("openFullScreen")?(e.classList.remove("openFullScreen"),L.src="img/v_full_screen.svg",document.exitFullscreen()):(e.classList.add("openFullScreen"),L.src="img/sm_video.svg",e.requestFullscreen())}),y.addEventListener("click",()=>{h.classList.toggle("active"),y.classList.toggle("active"),(f.classList.contains("active")||w.classList.contains("active"))&&(w.classList.remove("active"),f.classList.remove("active"))}),f.addEventListener("click",()=>{w.classList.toggle("active"),f.classList.toggle("active"),(y.classList.contains("active")||h.classList.contains("active"))&&(h.classList.remove("active"),y.classList.remove("active"))}),document.addEventListener("click",e=>{w.contains(e.target)||e.target===f||(w.classList.remove("active"),f.classList.remove("active"))}),q.forEach(e=>{e.addEventListener("click",()=>{U(q),e.classList.add("active");let t=e.getAttribute("data-speed");a.playbackRate=t})}),H.forEach(e=>{e.addEventListener("click",()=>{U(H),e.classList.add("active"),F(e),V.innerHTML=""})});let P=a.textTracks;function F(e){let t=e.getAttribute("data-track");for(let a=0;a<P.length;a++)P[a].mode="disabled",P[a].label==t&&(P[a].mode="showing")}let N=e.querySelectorAll(".settings > div"),O=e.querySelectorAll(".settings > div .back_arrow"),j=e.querySelector(".settings > [data-label='quality'] ul"),z=e.querySelectorAll("source[size]");z.forEach(e=>{let t=`<li data-quality="${e.getAttribute("size")}">${e.getAttribute("size")}p</li>`;j.insertAdjacentHTML("afterbegin",t)});let G=e.querySelectorAll(".settings > [data-label='quality'] ul > li");function U(e){e.forEach(e=>{e.classList.remove("active")})}G.forEach(e=>{e.addEventListener("click",t=>{let s=e.getAttribute("data-quality");U(G),e.classList.add("active"),z.forEach(e=>{if(e.getAttribute("size")==s){let t=a.currentTime,i=e.getAttribute("src");a.src=i,a.currentTime=t,M()}})})}),O.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.getAttribute("data-label");for(let a=0;a<N.length;a++)N[a].getAttribute("data-label")==t?N[a].removeAttribute("hidden"):N[a].setAttribute("hidden","")})}),E.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.getAttribute("data-label");for(let a=0;a<N.length;a++)N[a].getAttribute("data-label")==t?N[a].removeAttribute("hidden"):N[a].setAttribute("hidden","")})});let V=e.querySelector(".caption_text");for(let X=0;X<P.length;X++)P[X].addEventListener("cuechange",()=>{if("showing"===P[X].mode){if(P[X].activeCues[0]){let e=`<span><mark>${P[X].activeCues[0].text}</mark></span>`;V.innerHTML=e}else V.innerHTML=""}});let D=a.querySelectorAll("source");for(let Q=0;Q<D.length;Q++){let W=D[Q].src;Y(D[Q],W)}function Y(e,t){let a=new XMLHttpRequest;a.open("GET",t),a.responseType="arraybuffer",a.onload=t=>{let s=new Blob([a.response]),i=URL.createObjectURL(s);e.src=i},a.send()}a.addEventListener("contextmenu",e=>{e.preventDefault()});let J,K=()=>{a.paused||(J=setTimeout(()=>{y.classList.contains("active")||f.classList.contains("active")?i.classList.add("active"):(i.classList.remove("active"),0!=k.length&&V.classList.add("active"))},3e3))};K(),e.addEventListener("mousemove",()=>{i.classList.add("active"),0!=k.length&&V.classList.remove("active"),clearTimeout(J),K()}),0==k.length&&(S.remove(),w.remove(),f.parentNode.remove()),$(document).on("DOMSubtreeModified",".videocontrols",function(){a.paused&&0===a.currentTime?i.style.display="none":i.style.display="block",a.paused&&a.currentTime>0&&($(".vdeostop-close").addClass("active2"),$(".play_pause").addClass("active3")),a.paused||($(".videocontrols").hasClass("active")?($(".v_icons_h").addClass("active2"),$(".s_screen").addClass("active2"),$(".play_pause").addClass("active3")):($(".v_icons_h").removeClass("active2"),$(".s_screen").removeClass("active2"),$(".play_pause").removeClass("active3")))});var Z=document.querySelectorAll(".watching_two.watch_now"),ee=document.querySelectorAll(".watch_now"),et=document.querySelector(".video_title"),ea=document.getElementById("v_donatebtn"),es=document.getElementById("v_donatevotebtn"),ei=document.getElementById("not_for_live1");document.addEventListener("click",function(e){e.target.matches(".watching_two.watch_now.voting, .watching_two.watch_now.voting *")?(et.innerHTML="BIG BRODA NAIJA",ea.style.display="block",ea.innerHTML='<img class="material-icons" src="img/donatdicon.svg">&nbsp;Vote &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',ei.style.display="none"):e.target.matches(".watching_two.watch_now, .watching_two.watch_now *")?(et.innerHTML="SAMPLE CHURCH: MORNING PRAYER SERVICE",ea.style.display="block",ei.style.display="none",ea.innerHTML='<img class="material-icons pr-8" src="img/v_donate.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'):e.target.matches(".watch_now, .watch_now *")?(et.innerHTML="<img src='img/live_vicon.svg' alt='Live-channel'>&nbsp;&nbsp;Channels News",ea.style.display="none",ei.style.display="block"):e.target.matches("#v_donatebtn, #v_donatebtn *")?(document.querySelector(".full_width_video").style.display="none",C()):e.target.matches("#v_donatevotebtn, #v_donatevotebtn *")?(document.querySelector(".full_width_video").style.display="none",C()):e.target.matches(".close_p_video, .close_p_video *")&&(document.querySelector(".full_width_video").style.display="block",document.querySelector(".main-video").play())}),window.location.href.includes("live.html")&&(document.getElementById("not_for_live2").style.display="none")});
document.addEventListener("click", function(e) {
   if(e.target.matches(".watch_now, .watch_now *")){
   var videoElement = document.querySelector('.main-video');
        videoElement.setAttribute('src', 'img/video.mp4');
        videoElement.play();
    }
    if (e.target.matches(".watching_two.watch_now, .watching_two.watch_now *")) {
        var videoElement = document.querySelector('.main-video');
        // Change the src attribute
        videoElement.setAttribute('src', 'img/evideo.mp4');
        videoElement.play();
    }
    if(e.target.matches(".watching_two.watch_now.voting, .watching_two.watch_now.voting *")){
       var videoElement = document.querySelector('.main-video');
        // Change the src attribute
        videoElement.setAttribute('src', 'img/video.mp4');
        videoElement.play();
    }

});

(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const e of a.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&o(e)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();async function h(){let s=(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).menu.map(t=>`<li><a href="${t.link}">${t.name}</a></li>`);document.querySelector(".menu-right").insertAdjacentHTML("beforeend",s.join(""));let a=(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).sub.map(t=>`<a href="${t.link}" class="white">${t.name}</a>`);document.querySelector(".Subscription").insertAdjacentHTML("afterbegin",a.join(""));let r=(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).login.map(t=>`<a href="${t.link}" class="white">${t.name}</a>`);document.querySelector(".login").insertAdjacentHTML("afterbegin",r.join(""))}async function j(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).mostPopularHeader.map(c=>`<h4>${c.text}</h4>`);document.querySelector(".headerMostPopular").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).mostPopularHeaderSelect.map(c=>c.text==="سریال"?`<span class="selectActive serialBtn">${c.text}</span>`:`<span class="filmBtn">${c.text}</span>`);document.querySelector(".select").insertAdjacentHTML("afterbegin",a.join(""));let r=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).serialsMostPopular.map(c=>c.id===1?`<div class="firstCover"><img src="${c.src}" alt="${c.alt}"><img class="special" src="./images/specialfilimo/special.svg"></div>`:`<div><img src="${c.src}" alt="${c.alt}"><img class="special" src="./images/specialfilimo/special.svg"></div>`);document.querySelector(".serialsMostPopular").insertAdjacentHTML("afterbegin",r.join(""));let v=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).filmsMostPopular.map(c=>c.id===1?`<div class="firstCover"><img src="${c.src}" alt="${c.alt}"><img class="special" src="./images/specialfilimo/special.svg"></div>`:`<div><img src="${c.src}" alt="${c.alt}"><img class="special" src="./images/specialfilimo/special.svg"></div>`);document.querySelector(".filmsMostPopular").insertAdjacentHTML("afterbegin",v.join(""));let f=document.querySelector(".selectActive"),w=document.querySelector(".filmBtn"),p=document.querySelector(".serialsMostPopular"),u=document.querySelector(".filmsMostPopular");document.querySelector(".filmBtn").addEventListener("click",()=>{w.classList.add("selectActive"),f.classList.remove("selectActive"),p.classList.add("notActive"),u.classList.add("active")}),document.querySelector(".serialBtn").addEventListener("click",()=>{f.classList.add("selectActive"),w.classList.remove("selectActive"),p.classList.remove("notActive"),u.classList.remove("active")})}async function b(){document.querySelector(".serialDetail");let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).serials.map(e=>`<div class="upDetail">

        <div class="right">
        <h4>${e.title}</h4>
        <span>کارگردان : ${e.director}</span>
        <div class="type">
          <span>${e.type1}</span>
          <span>${e.type2}</span>
        </div>
        <p>${e.description}</p>
        </div>

        <div class="left"><img src="${e.icon}" alt="${e.alt}">
        </div>

      </div>`);document.querySelector(".detail").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).swiperserial1.map(e=>e.id===1?`<div class="swiper-slide"><img src="${e.src}" alt="">
            <span>${e.title}</span></div>`:`<div class="swiper-slide"><img class="private" src="${e.src}" alt="">
            <span>${e.title}</span></div>`);document.querySelector(".serialSwiper .swiper-wrapper").insertAdjacentHTML("beforeend",a.join(""))}async function g(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).slider.map(o=>`<div class="swiper-slide"><img src="${o.src}" alt="${o.alt}"></div>`);document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",s.join(""))}async function S(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).offer.map(u=>`<span>${u.text}</span>`);document.querySelector(".offer").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).sliderContent2.map(u=>`<h1>${u.text}</h1>`);document.querySelector(".sliderContent").insertAdjacentHTML("afterbegin",a.join(""));let r=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).sliderContent1.map(u=>`<h1 class="orange">${u.text}</h1>`);document.querySelector(".sliderContent").insertAdjacentHTML("afterbegin",r.join(""));let v=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).buySubscription.map(u=>u.text);document.querySelector(".buySubscription").insertAdjacentHTML("afterbegin",v.join(""));let p=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).discount.map(u=>`<h5>${u.text}</h5>`);document.querySelector(".sliderContent").insertAdjacentHTML("beforeend",p.join(""))}async function D(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).watch.map(t=>`<div class="watchRight">
        <img src="${t.src}" alt="">
      </div>
      <div class="watchLeft">
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        <div class="devices"></div>
      </div>`);document.querySelector(".watch").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).devices.map(t=>`<div>
        <div class="iconDevice">
          <img src="${t.icon}" alt="">
        </div>
        <div class="titleDevice">
          <h5>${t.title}</h5>
          <span>${t.detail}</span>
        </div>
      </div>`);document.querySelector(".devices").insertAdjacentHTML("afterbegin",a.join(""));let r=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).buySubscription.map(t=>`<div class="btnDevice">${t.text}</div>`);document.querySelector(".watchLeft").insertAdjacentHTML("beforeend",r.join(""))}async function y(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).learn.map(e=>`<div class="learnRight">

        <h3>${e.title}</h3>
        <p>${e.description}</p>

        <div class="learnDevice">
        </div>

        <div class="learnBtn">${e.btn}</div>

      </div>

      <div class="learnLeft">
        <img src="${e.src}" alt="">
      </div>`);document.querySelector(".learn").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).learnDevices.map(e=>`<div>
        <div class="iconLearn">
          <img src="${e.icon}" alt="">
          <span>${e.title}</span>
        </div>
        <div class="detailLearn">
          <p>${e.description}</p>
        </div>
      </div>`);document.querySelector(".learnDevice").insertAdjacentHTML("afterbegin",a.join(""))}async function $(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).freeTitle.map(n=>`<h1>${n.title}</h1>`);document.querySelector(".freeMain").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).free.map(n=>`<div class="swiper-slide">
        <img class="test" src="${n.src}" alt="free">
        <span>${n.title}</span>
      </div>`);document.querySelector(".freeSlider2").insertAdjacentHTML("afterbegin",a.join(""));let e=document.querySelectorAll(".freeSwiper .swiper-wrapper .swiper-slide img");console.log(e),e.forEach(n=>{n.addEventListener("click",function(){e.forEach(r=>{r.classList.contains("freeActive")&&r.classList.remove("freeActive"),n.classList.add("freeActive")})})})}async function R(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).world.map(e=>`<div class="mainWorld">
        <div class="rightWorld">
          <img src="${e.img}" alt="">
        </div>
        <div class="leftWorld">
          <h4>${e.title}</h4>
          <p>${e.description}</p>
          <div class="worldBtns">
          </div>
        </div> 
      </div>`);document.querySelector(".world").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).worldBtns.map(e=>`<div class="kidsBtn">${e.title}</div>`);document.querySelector(".worldBtns").insertAdjacentHTML("afterbegin",a.join(""))}async function L(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).online.map(t=>`<div class="onlineMain">
        <h3>${t.title}</h3>

        <div class="onlineDescription">

        </div>

        <div class="onlineScroll">


        </div>
      </div>`);document.querySelector(".online").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).onlineDescription.map(t=>`<span>${t.text}</span>`);document.querySelector(".onlineDescription").insertAdjacentHTML("afterbegin",a.join(""));let r=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).onlineFilms.map(t=>`<div class="onlineItem">
        <div class="onlineRight">
          <img src="${t.src}" alt="online">
        </div>
        <div class="onlineLeft">
          <div class="onlinetit">
            <h3>${t.title}</h3>
            <span>${t.type}</span>
          </div>
          <p>کارگردان: ${t.director}</p>
          <div class="onlineCategory">
            <span>${t.cat1}</span>
            <span>${t.cat2}</span>
          </div>
          <div class="ticket">${t.btn}</div>
        </div>
      </div>`);document.querySelector(".onlineScroll").insertAdjacentHTML("afterbegin",r.join(""))}async function q(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).commentsTitle.map(e=>`<h2>${e.title}</h2>`);document.querySelector(".commentMain").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).comments.map(e=>`<div class="swiper-slide">
          <div class="info">
            <h3>${e.name}</h3>
            <p>${e.text}</p>
          </div>
        </div>`);document.querySelector(".commentContainer").insertAdjacentHTML("afterbegin",a.join(""))}async function M(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).questionsTitle.map(n=>`<h3>${n.title}</h3>
        <h5>${n.description}</h5>`);document.querySelector(".questionsTop").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).questions.map(n=>`<div class="questionBox">
        
        <div class="questionsTit">
        <h2>${n.title}</h2>
        <span>+</span>
        </div>
        
        <div class="questionsDescription">
        <p>${n.answer}</p>
        </div>
        </div>`);document.querySelector(".questionsBottom").insertAdjacentHTML("afterbegin",a.join("")),document.querySelectorAll(".questionBox").forEach(n=>{n.addEventListener("click",function(){let r=[...n.children],t=r[0].children;r[1].classList.contains("activeBox")?(r[1].classList.remove("activeBox"),t[1].innerHTML="+",t[0].classList.remove("orange")):(r[1].classList.add("activeBox"),t[1].innerHTML="&times;",t[0].classList.add("orange"))})})}async function T(){let s=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).filimo.map(e=>`        <div class="filimoIcon">
        <img src="${e.icon}" alt="filimo">
      </div>

      <div class="filimoDescription">
      </div>

      <div class="filimoBtn">
        ${e.btn}
      </div>`);document.querySelector(".filimoMain").insertAdjacentHTML("afterbegin",s.join(""));let a=await(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).filimoDescription.map(e=>`<span>${e.text}</span>`);document.querySelector(".filimoDescription").insertAdjacentHTML("afterbegin",a.join(""))}async function A(){let s=(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).footer.map(r=>`<li><a href="#">${r.text}</a></li>`);document.querySelector("footer nav ul").insertAdjacentHTML("afterbegin",s.join(""));let o=document.querySelectorAll("footer nav ul li"),i=document.createElement("div");i.classList.add("subFooter"),o[4].insertAdjacentElement("beforeend",i);let n=(await(await fetch("https://alisaadatvand.github.io/jsonServer/db.json")).json()).subFooter.map(r=>`<div><a href="#">${r.text}</a></div>`);document.querySelector(".subFooter").insertAdjacentHTML("afterbegin",n.join(""))}async function H(){await B(),await S(),await j(),await b(),await D(),await y(),await $(),await R(),await L(),await q(),await M(),await T(),await A()}H();async function B(){await h(),await g(),new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!1,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".serialSwiper",{slidesPerView:3,spaceBetween:40,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".freeSwiper",{slidesPerView:3,spaceBetween:30,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".commentsSwiper",{slidesPerView:3,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}

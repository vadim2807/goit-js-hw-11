import{a as f,S as y,i as g}from"./assets/vendor-C5BuWtzx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function h(r){return f.get("https://pixabay.com/api/",{params:{key:"51391148-cca0cd30758df7ebb9b563956",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})}const b=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(r){const o=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:s,comments:m,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${a}" alt="${e}" />
      </a>
      <ul class="gallery-item-prop">
        <li class="gallery-item-likes"><p><span>Likes</span><p>${t}</p></li>
        <li class="gallery-item-views"><p><span>Views</span><p>${s}</p></li>
        <li class="gallery-item-comments"><p><span>Comments</span><p>${m}</p></li>
        <li class="gallery-item-downloads"><p><span>Downloads</span><p>${d}</p></li>
      </ul>
    </li>
  `).join("");u.innerHTML=o,b.refresh()}function q(){u.innerHTML=""}function w(){p.style.display="inline-block"}function l(){p.style.display="none"}const S=document.querySelector(".form"),c=document.querySelector('input[name="search-text"]'),p=document.querySelector("#loader"),u=document.querySelector(".gallery");S.addEventListener("submit",r=>{r.preventDefault();const o=c.value.trim();if(!o){n("Поле пошуку не може бути порожнім");return}q(),w(),h(o).then(a=>{l(),c.value="";const i=a.data;i.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):L(i.hits)}).catch(a=>{l(),n("Щось пішло не так... Ми вже працюємо над цією проблемою.")})});function n(r){g.error({title:"Error",message:`${r}`,progressBar:!1,transitionIn:"fadeIn",position:"topRight",animateInside:!0})}
//# sourceMappingURL=index.js.map

import{n as e,t}from"./content-BluiMdet.js";var n=document.querySelector(`#app`);if(!n)throw Error(`Root element was not found.`);n.innerHTML=`
  <main class="invite" aria-label="Wedding invitation">
    <picture>
      <source media="(min-width: 761px)" srcset="${t.media.heroImage}" />
      <img class="invite__image" src="https://media.canva.com/v2/image-resize/format:PNG/height:1600/quality:100/uri:ifs%3A%2F%2FM%2F34d0a663-6e68-4418-8481-ac9c1ce4aaae/watermark:F/width:900?csig=AAAAAAAAAAAAAAAAAAAAALZIIlVS0VqIY_eMXMo9x7ft8LQy3ywz6uDIVW33blep&exp=1783139269&osig=AAAAAAAAAAAAAAAAAAAAADhuay0e7SjC5N-bgFC4rl9D-IhylloQHCAq4vLb_Tza&signer=media-rpc&x-canva-quality=screen_2x" alt="Israel and Melayna on the beach" />
    </picture>
    <div class="invite__overlay"></div>

    <div class="invite__content">
      <div class="invite__top">
        <h1 class="invite__names">${t.couple.firstName} &amp; ${t.couple.secondName}</h1>


        <p class="invite__headline">${t.couple.heading}</p>

        <div class="invite__details">
          <p class="invite__detail">
            <span>${t.newPage.date}<span class="invite__sep">&#8226;</span>${t.newPage.time}</span>
          </p>
          <p class="invite__detail">
            <span>${t.event.venue}</span>
          </p>
        </div>
      </div>

      <div class="invite__bottom">
        <a class="invite__button invite__button--ghost" href="${t.wedding_website.url}" target="_blank" rel="noreferrer">${t.wedding_website.label}</a>
        <a class="invite__button invite__button--primary" href="${t.cta.url}" target="_blank" rel="noreferrer">${t.cta.label}</a>

        <p class="invite__password">
          <span>Password: ${t.event_password}</span>
        </p>

      </div>
    </div>
  </main>
`;var r=document.documentElement.style,i=()=>{let e=window.visualViewport?.height??window.innerHeight;r.setProperty(`--app-height`,`${Math.round(e)}px`)};i(),window.addEventListener(`resize`,i),window.visualViewport?.addEventListener(`resize`,i),window.addEventListener(`orientationchange`,i),r.setProperty(`--color-accent`,e.accent),r.setProperty(`--color-text`,e.text);
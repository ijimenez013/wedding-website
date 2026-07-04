import{n as e,t}from"./content-DCzG6AAN.js";var n=document.querySelector(`#app`);if(!n)throw Error(`Root element was not found.`);n.innerHTML=`
  <main class="invite" aria-label="Wedding invitation">
    <img class="invite__image" src="${`/wedding-website/${t.newPage.backgroundImage}`}" alt="Israel and Melayna on the beach" />
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
          <span class="invite__icon">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="5" y="10.5" width="14" height="9.5" rx="2"></rect>
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"></path>
  </svg>
</span>
          <span>Password: ${t.event_password}</span>
        </p>

      </div>
    </div>
  </main>
`;var r=document.documentElement.style,i=()=>{let e=window.visualViewport?.height??window.innerHeight;r.setProperty(`--app-height`,`${Math.round(e)}px`)};i(),window.addEventListener(`resize`,i),window.visualViewport?.addEventListener(`resize`,i),window.addEventListener(`orientationchange`,i),r.setProperty(`--color-accent`,e.accent),r.setProperty(`--color-text`,e.text);
import{n as e,t}from"./content-DCzG6AAN.js";var n=document.querySelector(`#app`);if(!n)throw Error(`Root element was not found.`);n.innerHTML=`
  <main class="invite" aria-label="Wedding invitation">
    <img class="invite__image" src="${`/wedding-website/${t.newPage.backgroundImage}`}" alt="Israel and Melayna on the beach" />
    <div class="invite__overlay"></div>

    <div class="invite__content">
      <div class="invite__top">
        <h1 class="invite__names">${t.couple.firstName} &amp; ${t.couple.secondName}</h1>

        <div class="invite__divider" aria-hidden="true">
          <span class="invite__heart">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 20s-7-4.6-7-10a4.2 4.2 0 0 1 7-3 4.2 4.2 0 0 1 7 3c0 5.4-7 10-7 10Z" fill="currentColor" stroke="none"></path>
  </svg>
</span>
        </div>

        <p class="invite__headline">${t.couple.heading}</p>

        <div class="invite__details">
          <p class="invite__detail">
            <span class="invite__icon">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="3.5" y="5.5" width="17" height="15" rx="2.5"></rect>
    <path d="M7 3.5v4M17 3.5v4M3.5 10h17"></path>
  </svg>
</span>
            <span>${t.newPage.date}<span class="invite__sep">&#8226;</span>${t.newPage.time}</span>
          </p>
          <p class="invite__detail">
            <span class="invite__icon">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path>
    <circle cx="12" cy="10" r="2.3"></circle>
  </svg>
</span>
            <span>${t.event.venue}</span>
          </p>
        </div>
      </div>

      <div class="invite__bottom">
        <a class="invite__button invite__button--primary" href="${t.cta.url}" target="_blank" rel="noreferrer">${t.cta.label}</a>
        <a class="invite__button invite__button--ghost" href="${t.wedding_website.url}" target="_blank" rel="noreferrer">${t.wedding_website.label}</a>

        <p class="invite__password">
          <span class="invite__icon">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="5" y="10.5" width="14" height="9.5" rx="2"></rect>
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"></path>
  </svg>
</span>
          <span>Password: ${t.event_password}</span>
        </p>

        <div class="invite__ornament" aria-hidden="true">
          <span class="invite__leaf">
  <svg viewBox="0 0 64 24" aria-hidden="true" focusable="false">
    <path d="M32 5v14"></path>
    <path d="M32 9c-3-3-7-3-10-2 2 3 6 4 9 3"></path>
    <path d="M32 13c-3-3-8-3-11-1 3 3 7 4 10 2"></path>
    <path d="M32 9c3-3 7-3 10-2-2 3-6 4-9 3"></path>
    <path d="M32 13c3-3 8-3 11-1-3 3-7 4-10 2"></path>
  </svg>
</span>
        </div>
      </div>
    </div>
  </main>
`;var r=document.documentElement.style,i=()=>{let e=window.visualViewport?.height??window.innerHeight;r.setProperty(`--app-height`,`${Math.round(e)}px`)};i(),window.addEventListener(`resize`,i),window.visualViewport?.addEventListener(`resize`,i),window.addEventListener(`orientationchange`,i),r.setProperty(`--color-accent`,e.accent),r.setProperty(`--color-text`,e.text);
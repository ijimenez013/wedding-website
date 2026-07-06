import{n as e,t}from"./content-CA8WiNoj.js";var n=document.querySelector(`#app`);if(!n)throw Error(`Root element was not found.`);n.innerHTML=`
  <main class="site" aria-label="Wedding website">
    <section class="hero" aria-label="Hero section">
      <img class="hero__image" src="${t.media.heroImage}" alt="Israel and Melayna" />
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <div class="hero__top">
          <h1 class="hero__names">${t.couple.firstName} &amp; ${t.couple.secondName}</h1>
          <p class="hero__headline">${t.couple.heading}</p>
        </div>

        <div class="hero__bottom">
          <a class="hero__rsvp" href="${t.cta.url}" target="_blank" rel="noreferrer">${t.cta.label}</a>
          <a class="hero__link" href="${t.wedding_website.url}" target="_blank" rel="noreferrer">${t.wedding_website.label}</a>
          <p class="hero__password"><span class="hero__password-label">Password:</span> <span class="hero__password-value">${t.event_password}</span></p>
          <div class="hero__meta">
            <p class="hero__datetime">${t.event.dateTime}</p>
            <p class="hero__venue">${t.event.venue}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
`;var r=document.documentElement.style,i=()=>{let e=window.visualViewport?.height??window.innerHeight;r.setProperty(`--app-height`,`${Math.round(e)}px`)};i(),window.addEventListener(`resize`,i),window.visualViewport?.addEventListener(`resize`,i),window.addEventListener(`orientationchange`,i),r.setProperty(`--color-primary`,e.primary),r.setProperty(`--color-accent`,e.accent),r.setProperty(`--color-text`,e.text),r.setProperty(`--color-text-dark`,e.textDark),r.setProperty(`--color-overlay`,e.overlay);
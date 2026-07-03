(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={couple:{firstName:`Israel`,secondName:`Melayna`,heading:`Are Getting Married`},cta:{label:`RSVP Here`,url:`https://withjoy.com/melayna-and-israel`},event:{dateTime:`September 19, 2030, 6:00 PM`,venue:`El Adobe de Capistrano`},media:{heroImage:`https://melayna-and-israel.my.canva.site/_assets/media/de88c45cb370a3344ffaf773037c00f3.png`},event_password:`melayna&israel`,wedding_website:{label:`Wedding Website`,url:`https://withjoy.com/melayna-and-israel`},links:[{label:`Wedding Website`,url:`https://withjoy.com/melayna-and-israel`}],footer:{note:`With love`}},t={primary:`#f7f1ea`,accent:`#d7a96f`,text:`#f8f3ec`,textDark:`#2d2218`,overlay:`rgba(23, 17, 12, 0.42)`},n=document.querySelector(`#app`);if(!n)throw Error(`Root element was not found.`);n.innerHTML=`
  <main class="site" aria-label="Wedding website">
    <section class="hero" aria-label="Hero section">
      <img class="hero__image" src="${e.media.heroImage}" alt="Israel and Melayna" />
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <div class="hero__top">
          <h1 class="hero__names">${e.couple.firstName} &amp; ${e.couple.secondName}</h1>
          <p class="hero__headline">${e.couple.heading}</p>
        </div>

        <div class="hero__bottom">
          <a class="hero__rsvp" href="${e.cta.url}" target="_blank" rel="noreferrer">${e.cta.label}</a>
          <a class="hero__link" href="${e.wedding_website.url}" target="_blank" rel="noreferrer">${e.wedding_website.label}</a>
          <p class="hero__password"><span class="hero__password-label">Password:</span> <span class="hero__password-value">${e.event_password}</span></p>
          <div class="hero__meta">
            <p class="hero__datetime">${e.event.dateTime}</p>
            <p class="hero__venue">${e.event.venue}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
`;var r=document.documentElement.style;r.setProperty(`--color-primary`,t.primary),r.setProperty(`--color-accent`,t.accent),r.setProperty(`--color-text`,t.text),r.setProperty(`--color-text-dark`,t.textDark),r.setProperty(`--color-overlay`,t.overlay);
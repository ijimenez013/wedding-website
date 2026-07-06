import "./new-page.css";
import { siteContent, theme } from "./content";

const root = document.querySelector("#app");

if (!root) {
  throw new Error("Root element was not found.");
}

const calendarIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="3.5" y="5.5" width="17" height="15" rx="2.5"></rect>
    <path d="M7 3.5v4M17 3.5v4M3.5 10h17"></path>
  </svg>
`;

const locationIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path>
    <circle cx="12" cy="10" r="2.3"></circle>
  </svg>
`;

const lockIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="5" y="10.5" width="14" height="9.5" rx="2"></rect>
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"></path>
  </svg>
`;

const heartIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 20s-7-4.6-7-10a4.2 4.2 0 0 1 7-3 4.2 4.2 0 0 1 7 3c0 5.4-7 10-7 10Z" fill="currentColor" stroke="none"></path>
  </svg>
`;

const leafIcon = `
  <svg viewBox="0 0 64 24" aria-hidden="true" focusable="false">
    <path d="M32 5v14"></path>
    <path d="M32 9c-3-3-7-3-10-2 2 3 6 4 9 3"></path>
    <path d="M32 13c-3-3-8-3-11-1 3 3 7 4 10 2"></path>
    <path d="M32 9c3-3 7-3 10-2-2 3-6 4-9 3"></path>
    <path d="M32 13c3-3 8-3 11-1-3 3-7 4-10 2"></path>
  </svg>
`;

root.innerHTML = `
  <main class="invite" aria-label="Wedding invitation">
    <picture>
      <source media="(min-width: 761px)" srcset="${siteContent.media.heroImage}" />
      <img class="invite__image" src="${siteContent.newPage.mobileBackgroundImage}" alt="Israel and Melayna on the beach" />
    </picture>
    <div class="invite__overlay"></div>

    <div class="invite__content">
      <div class="invite__top">
        <h1 class="invite__names">${siteContent.couple.firstName} &amp; ${siteContent.couple.secondName}</h1>


        <p class="invite__headline">${siteContent.couple.heading}</p>

        <div class="invite__details">
          <p class="invite__detail">
            <span>${siteContent.newPage.date}<span class="invite__sep">&#8226;</span>${siteContent.newPage.time}</span>
          </p>
          <p class="invite__detail">
            <span>${siteContent.event.venue}</span>
          </p>
        </div>
      </div>

      <div class="invite__bottom">
        <a class="invite__button invite__button--ghost" href="${siteContent.wedding_website.url}" target="_blank" rel="noreferrer">${siteContent.wedding_website.label}</a>
        <a class="invite__button invite__button--primary" href="${siteContent.cta.url}" target="_blank" rel="noreferrer">${siteContent.cta.label}</a>

        <p class="invite__password">
          <span>Password: ${siteContent.event_password}</span>
        </p>

      </div>
    </div>
  </main>
`;

const style = document.documentElement.style;

const syncAppHeight = () => {
  const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
  style.setProperty("--app-height", `${Math.round(viewportHeight)}px`);
};

syncAppHeight();

window.addEventListener("resize", syncAppHeight);
window.visualViewport?.addEventListener("resize", syncAppHeight);
window.addEventListener("orientationchange", syncAppHeight);

style.setProperty("--color-accent", theme.accent);
style.setProperty("--color-text", theme.text);

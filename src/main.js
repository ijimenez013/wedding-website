import "./styles.css";
import { siteContent, theme } from "./content";

const root = document.querySelector("#app");

if (!root) {
  throw new Error("Root element was not found.");
}

root.innerHTML = `
  <main class="site" aria-label="Wedding website">
    <section class="hero" aria-label="Hero section">
      <img class="hero__image" src="${siteContent.media.heroImage}" alt="Israel and Melayna" />
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <div class="hero__top">
          <h1 class="hero__names">${siteContent.couple.firstName} &amp; ${siteContent.couple.secondName}</h1>
          <p class="hero__headline">${siteContent.couple.heading}</p>
        </div>

        <div class="hero__bottom">
          <a class="hero__rsvp" href="${siteContent.cta.url}" target="_blank" rel="noreferrer">${siteContent.cta.label}</a>
          <a class="hero__link" href="${siteContent.wedding_website.url}" target="_blank" rel="noreferrer">${siteContent.wedding_website.label}</a>
          <p class="hero__password"><span class="hero__password-label">Password:</span> <span class="hero__password-value">${siteContent.event_password}</span></p>
          <div class="hero__meta">
            <p class="hero__datetime">${siteContent.event.dateTime}</p>
            <p class="hero__venue">${siteContent.event.venue}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
`;

const style = document.documentElement.style;
style.setProperty("--color-primary", theme.primary);
style.setProperty("--color-accent", theme.accent);
style.setProperty("--color-text", theme.text);
style.setProperty("--color-text-dark", theme.textDark);
style.setProperty("--color-overlay", theme.overlay);

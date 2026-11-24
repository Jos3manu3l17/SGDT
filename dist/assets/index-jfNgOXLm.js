(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return`<header class="app-header">
  <h1 class="app_header__title">${e}</h1>
  </header>`}function t({id:e,label:t,href:n,icon:r}){return`<li>
    <a class="app-sidebar__link" href="${n}">
        ${r}<span class="app-sidebar__label">${t}</span>
    </a>
    </li>`}function n(e){return`
    <div class="app-layout__backdrop" data-action="close-sidebar" aria-hidden="true"></div>
    <aside id="app-sidebar" class="app-sidebar" aria-label="Menú principal">
      <div class="app-sidebar__header">
        <div class="app-sidebar__brand">
          <p class="app-sidebar__title">Gestor de Tareas</p>
          <p class="app-sidebar__subtitle">Institucional SENA</p>
        </div>
        <button type="button" class="app-sidebar__close-button" data-action="close-sidebar" aria-label="Cerrar menú"></button>
      </div>
      <nav aria-label="Secciones">
        <ul class="app-sidebar__list"></ul>
        ${e.map(t).join(``)}
      </nav>
    </aside>
  `.trim()}function r({sectionTitle:t,navigationItems:r}){return` <div class="app-layout">
            ${e(t)}
            ${n(r)}
            <main class="app-main" </main> 
            </div>`}function i(e,t){e.innerHTML=r(t),document.querySelector(`.app-layout`).addEventListener(`click`,e=>void 0)}function a(e,t=`button__icon`){return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e}</svg>`}a(`<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>`),a(`<path fill-rule="evenodd" d="M12 5C7 5 2.7 8.1 1 12c1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>`),a(`<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>`),a(`<path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/>`),a(`<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`,`app-header__icon`);var o=a(`<path d="M3 5h4v4H3V5zm6 1h12v2H9V6zM3 15h4v4H3v-4zm6 1h12v2H9v-2z"/>`,`app-sidebar__icon`);a(`<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`,`app-sidebar__close-icon`);var s=[{id:`tasks`,label:`Tareas`,href:`#/tasks`,icon:o},{id:`users`,label:`Usuarios`,href:`#/users`,icon:o},{id:`sales`,label:`Ventas`,href:`#/sales`,icon:o}],c=document.querySelector(`#app-root`);function l(){i(c,{sectionTitle:`Gestor de tareas`,navigationItems:s})}l();
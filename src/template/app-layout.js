import { createHeader } from "./app-header.js";
import { createSidebar } from "./app-sidebar.js";

function createappLayout({ sectionTitle, navigationItems }) {

    return ` <div class="app-layout">
            ${createHeader(sectionTitle)}
            ${createSidebar(navigationItems)}
            <main class="app-main">Contenido main</main> 
            </div>`;
}

function handleLayaoutClick(event, layoutElement) {
}
export function mountAppLayout(rootElement, opciones) {
    rootElement.innerHTML = createappLayout(opciones);
    const LayoutElement = document.querySelector('.app-layout');
    LayoutElement.addEventListener('click', (event) => (handleLayaoutClick(event, LayoutElement)))

}

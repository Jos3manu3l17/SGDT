import { createHeader } from './app-header.js';
import { createSidebar } from './app-sidebar.js';

function createappLayout() {

    return ` <div class="app-layout"> 
${createHeader()}
${createSidebar()}
    <main class="app-main"> Aca se encuentra el contenido principal </main> 
    </div>`;
}

export function mountAppLayout (rootElement) {

  
rootElement.innerHTML = createappLayout();

const LayoutElement = document.querySelector('.app-layout');


LayoutElement.addEventListener('click', (event) => {
    alert('click');
})
}
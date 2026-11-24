import {mountAppLayout} from "./template/app-layout.js";
import {navigationItems} from "./core/items.js";

const rootElement = document.querySelector('#app-root');


export function startApp() {
    mountAppLayout(rootElement, {"sectionTitle":"Gestor de tareas",navigationItems})
}



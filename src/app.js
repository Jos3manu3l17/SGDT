import {mountAppLayout} from "./template/app-layout.js";
import {navigationItems} from "./core/items.js";
import { startRouter } from "../src/core/router/router.js"

const rootElement = document.querySelector('#app-root');


export function startApp() {
    mountAppLayout(rootElement, {"sectionTitle":"Gestor de tareas",navigationItems})
    startRouter()
}


// window.addEventListener('hashchange', () => {
//   // Obtiene el nuevo hash completo (ej: "#/sales")
//   const nuevoHash = window.location.hash;
  
//   console.log('El hash cambió a:', nuevoHash);
  
//   // Aquí llamas a tu función para cambiar la vista del "Contenido main"
// //   cargarVista(nuevoHash);
// });
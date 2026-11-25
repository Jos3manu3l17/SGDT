import { initTask } from "../../features/tasks/index.js"
import { routers } from "../../core/router/routers.js"

export function startRouter() {
  window.addEventListener('hashchange', () => {
    const route = window.location.hash.replace(/^#\/?|\/$/g, '');
    console.log(route);
    
    console.log(initTask); 
    console.log(routers);
    
  });
}
import {mountAppLayout} from './template/app-layout.js';

const rootElement = document.querySelector('#app-root');

export function startApp() {
    mountAppLayout(rootElement);
}



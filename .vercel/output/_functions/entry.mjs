import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_UfAILk6a.mjs';
import { manifest } from './manifest_CqYumlbs.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DT_IH6ZH.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_BaDmLieO.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/books/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/books/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7cabcc0d-719e-42e3-a81a-16acfc8d7769",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

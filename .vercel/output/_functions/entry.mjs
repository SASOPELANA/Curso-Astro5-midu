import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_UfAILk6a.mjs';
import { manifest } from './manifest_BYOcfxAr.mjs';

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
    "middlewareSecret": "62072111-95e6-4b70-b34c-f7d6e8093201",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BUrz3wyS.mjs';
import { manifest } from './manifest_C4kmvYKl.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CC_9ydck.mjs')],
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
    "middlewareSecret": "5cdad9cc-1de1-43a9-97dd-a5052e3cc32a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

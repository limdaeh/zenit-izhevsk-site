(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/routesInfo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteNames": (()=>RouteNames),
    "RoutesHeader": (()=>RoutesHeader)
});
const RouteNames = {
    main: "/",
    news: "/news",
    team: "/team",
    club: "/club",
    matches: "/matches",
    stadium: "/stadium",
    contacts: "/contacts"
};
const RoutesHeader = [
    {
        title: "Главная",
        path: RouteNames.main
    },
    {
        title: "Новости",
        path: RouteNames.news
    },
    {
        title: "Команда",
        path: RouteNames.team
    },
    {
        title: "Клуб",
        path: RouteNames.club
    },
    {
        title: "Матчи",
        path: RouteNames.matches
    },
    {
        title: "Стадион",
        path: RouteNames.stadium
    },
    {
        title: "Контакты",
        path: RouteNames.contacts
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/Zenit-Izhevs-Logo.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Zenit-Izhevs-Logo.90748ee4.png");}}),
"[project]/public/images/Zenit-Izhevs-Logo.png.mjs { IMAGE => \"[project]/public/images/Zenit-Izhevs-Logo.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Zenit$2d$Izhevs$2d$Logo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/Zenit-Izhevs-Logo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Zenit$2d$Izhevs$2d$Logo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 459,
    height: 631,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AAAAAAAAAAABExgiRhQdKVkAAAABAAAAAAAEBQcOHzA+b0VdcLxCWWy/Gy47cwQFBxAADxIaNjRhfelkiqH/XoKZ/y1ceO0OEho9ABgeKlg+Y4D2bYSc/11zjP81XHr5Fx4sZgA3QFGWaXaP/naBmf92gZf/VmaD/zA9VbgAPklds1hqhv5KYYD/TGSC/ztUdv8vPla4ADI6SopYZX7oUWOB/Upde/4+S2XQIyk3bAAGCA0fDhIaOSU3ULIgM023DA8VLgAAAAFOf0HeIX8W5wAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/Header/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routesInfo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Zenit$2d$Izhevs$2d$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Zenit$2d$Izhevs$2d$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Zenit-Izhevs-Logo.png.mjs { IMAGE => "[project]/public/images/Zenit-Izhevs-Logo.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Header() {
    _s();
    const PathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    console.log(window.scrollY);
                    if (window.scrollY > 10) {
                        setScrolled(true);
                    } else {
                        setScrolled(false);
                    }
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-[60px] w-full bg-[#001947] flex justify-center sticky top-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[1200px] flex items-center justify-center px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "mr-[50px] shrink-0 z-1000",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            alt: "Зенит Ижевск",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Zenit$2d$Izhevs$2d$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Zenit$2d$Izhevs$2d$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            width: 76,
                            height: 104,
                            className: `transition-all duration-300 linear ${scrolled ? 'scale-50' : 'scale-100'}`
                        }, void 0, false, {
                            fileName: "[project]/Components/Header/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Components/Header/Header.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Components/Header/Header.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex gap-[60px] items-center",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesHeader"].filter((route)=>route.path !== "/").map((route)=>{
                        const isActive = PathName === route.path;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: route.path,
                            className: `text-[20px] font-light hover:text-[#10839D] ${isActive ? "text-[#10839D] border-b border-[#10839D]" : ""}`,
                            children: route.title.toUpperCase()
                        }, route.title, false, {
                            fileName: "[project]/Components/Header/Header.tsx",
                            lineNumber: 59,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Components/Header/Header.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1"
                }, void 0, false, {
                    fileName: "[project]/Components/Header/Header.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Components/Header/Header.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/Header/Header.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(Header, "dba3mwm5gBFefOIaoAOJj5mMTuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/socialRoutesInfo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SocialRouteNames": (()=>SocialRouteNames),
    "SocialRoutesHeader": (()=>SocialRoutesHeader)
});
const SocialRouteNames = {
    telegram: "https://t.me/zenitizhevsk",
    vk: "https://vk.com/fczenitizhevsk",
    youtube: "https://youtube.com/@zenitizhevsk20247"
};
const SocialRoutesHeader = [
    {
        title: "telegram",
        path: SocialRouteNames.telegram
    },
    {
        title: "vk",
        path: SocialRouteNames.vk
    },
    {
        title: "youtube",
        path: SocialRouteNames.youtube
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/HeaderSocialLinks/HeaderSocialLinks.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeaderSocialLinks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$socialRoutesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/socialRoutesInfo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function HeaderSocialLinks() {
    const SocialIcons = {
        "vk": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaVk"],
        "telegram": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTelegram"],
        "youtube": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-[30px] w-full bg-[#001E51] flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " w-full max-w-[1200px] flex flex-row justify-end gap-[20px] pe-[20px]",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$socialRoutesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialRoutesHeader"].map((route)=>{
                //Берем иконку социальной сети, ключ которой совпадает с названием социальной сети (route.title)
                const IconComponent = SocialIcons[route.title];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row justify-center items-center font-light",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: route.path,
                        target: "_blank",
                        className: "w-[20px] h-[20px] flex justify-center items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                            className: "w-full h-full text-[#CCD2DC] hover:text-white"
                        }, void 0, false, {
                            fileName: "[project]/Components/HeaderSocialLinks/HeaderSocialLinks.tsx",
                            lineNumber: 38,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Components/HeaderSocialLinks/HeaderSocialLinks.tsx",
                        lineNumber: 33,
                        columnNumber: 29
                    }, this)
                }, route.title, false, {
                    fileName: "[project]/Components/HeaderSocialLinks/HeaderSocialLinks.tsx",
                    lineNumber: 29,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Components/HeaderSocialLinks/HeaderSocialLinks.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/HeaderSocialLinks/HeaderSocialLinks.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = HeaderSocialLinks;
var _c;
__turbopack_context__.k.register(_c, "HeaderSocialLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a3f8894e._.js.map
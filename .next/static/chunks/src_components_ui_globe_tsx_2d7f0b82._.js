(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/globe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Globe": (()=>Globe),
    "WebGLRendererConfig": (()=>WebGLRendererConfig),
    "World": (()=>World),
    "genRandomNumbers": (()=>genRandomNumbers),
    "hexToRgb": (()=>hexToRgb)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$globe$2f$dist$2f$three$2d$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-globe/dist/three-globe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-dc44c1b8.esm.js [app-client] (ecmascript) <export A as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-dc44c1b8.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/data/globe.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    ThreeGlobe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$globe$2f$dist$2f$three$2d$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;
let numbersOfRings = [
    0
];
function Globe({ globeConfig, data }) {
    _s();
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const defaultProps = {
        pointSize: 1,
        atmosphereColor: "#ffffff",
        showAtmosphere: true,
        atmosphereAltitude: 0.1,
        polygonColor: "rgba(255,255,255,0.7)",
        globeColor: "#1d072e",
        emissive: "#000000",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        arcTime: 2000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        ...globeConfig
    };
    // Initialize globe only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            if (!globeRef.current && groupRef.current) {
                globeRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$globe$2f$dist$2f$three$2d$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
                groupRef.current.add(globeRef.current);
                setIsInitialized(true);
            }
        }
    }["Globe.useEffect"], []);
    // Build material when globe is initialized or when relevant props change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            if (!globeRef.current || !isInitialized) return;
            const globeMaterial = globeRef.current.globeMaterial();
            globeMaterial.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](globeConfig.globeColor);
            globeMaterial.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](globeConfig.emissive);
            globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
            globeMaterial.shininess = globeConfig.shininess || 0.9;
        }
    }["Globe.useEffect"], [
        isInitialized,
        globeConfig.globeColor,
        globeConfig.emissive,
        globeConfig.emissiveIntensity,
        globeConfig.shininess
    ]);
    // Build data when globe is initialized or when data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            if (!globeRef.current || !isInitialized || !data) return;
            const arcs = data;
            let points = [];
            for(let i = 0; i < arcs.length; i++){
                const arc = arcs[i];
                const rgb = hexToRgb(arc.color);
                points.push({
                    size: defaultProps.pointSize,
                    order: arc.order,
                    color: arc.color,
                    lat: arc.startLat,
                    lng: arc.startLng
                });
                points.push({
                    size: defaultProps.pointSize,
                    order: arc.order,
                    color: arc.color,
                    lat: arc.endLat,
                    lng: arc.endLng
                });
            }
            // remove duplicates for same lat and lng
            const filteredPoints = points.filter({
                "Globe.useEffect.filteredPoints": (v, i, a)=>a.findIndex({
                        "Globe.useEffect.filteredPoints": (v2)=>[
                                "lat",
                                "lng"
                            ].every({
                                "Globe.useEffect.filteredPoints": (k)=>v2[k] === v[k]
                            }["Globe.useEffect.filteredPoints"])
                    }["Globe.useEffect.filteredPoints"]) === i
            }["Globe.useEffect.filteredPoints"]);
            globeRef.current.hexPolygonsData(countries.features).hexPolygonResolution(3).hexPolygonMargin(0.7).showAtmosphere(defaultProps.showAtmosphere).atmosphereColor(defaultProps.atmosphereColor).atmosphereAltitude(defaultProps.atmosphereAltitude).hexPolygonColor({
                "Globe.useEffect": ()=>defaultProps.polygonColor
            }["Globe.useEffect"]);
            globeRef.current.arcsData(data).arcStartLat({
                "Globe.useEffect": (d)=>d.startLat * 1
            }["Globe.useEffect"]).arcStartLng({
                "Globe.useEffect": (d)=>d.startLng * 1
            }["Globe.useEffect"]).arcEndLat({
                "Globe.useEffect": (d)=>d.endLat * 1
            }["Globe.useEffect"]).arcEndLng({
                "Globe.useEffect": (d)=>d.endLng * 1
            }["Globe.useEffect"]).arcColor({
                "Globe.useEffect": (e)=>e.color
            }["Globe.useEffect"]).arcAltitude({
                "Globe.useEffect": (e)=>e.arcAlt * 1
            }["Globe.useEffect"]).arcStroke({
                "Globe.useEffect": ()=>[
                        0.32,
                        0.28,
                        0.3
                    ][Math.round(Math.random() * 2)]
            }["Globe.useEffect"]).arcDashLength(defaultProps.arcLength).arcDashInitialGap({
                "Globe.useEffect": (e)=>e.order * 1
            }["Globe.useEffect"]).arcDashGap(15).arcDashAnimateTime({
                "Globe.useEffect": ()=>defaultProps.arcTime
            }["Globe.useEffect"]);
            globeRef.current.pointsData(filteredPoints).pointColor({
                "Globe.useEffect": (e)=>e.color
            }["Globe.useEffect"]).pointsMerge(true).pointAltitude(0.0).pointRadius(2);
            globeRef.current.ringsData([]).ringColor({
                "Globe.useEffect": ()=>defaultProps.polygonColor
            }["Globe.useEffect"]).ringMaxRadius(defaultProps.maxRings).ringPropagationSpeed(RING_PROPAGATION_SPEED).ringRepeatPeriod(defaultProps.arcTime * defaultProps.arcLength / defaultProps.rings);
        }
    }["Globe.useEffect"], [
        isInitialized,
        data,
        defaultProps.pointSize,
        defaultProps.showAtmosphere,
        defaultProps.atmosphereColor,
        defaultProps.atmosphereAltitude,
        defaultProps.polygonColor,
        defaultProps.arcLength,
        defaultProps.arcTime,
        defaultProps.rings,
        defaultProps.maxRings
    ]);
    // Handle rings animation with cleanup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            if (!globeRef.current || !isInitialized || !data) return;
            const interval = setInterval({
                "Globe.useEffect.interval": ()=>{
                    if (!globeRef.current) return;
                    const newNumbersOfRings = genRandomNumbers(0, data.length, Math.floor(data.length * 4 / 5));
                    const ringsData = data.filter({
                        "Globe.useEffect.interval.ringsData": (d, i)=>newNumbersOfRings.includes(i)
                    }["Globe.useEffect.interval.ringsData"]).map({
                        "Globe.useEffect.interval.ringsData": (d)=>({
                                lat: d.startLat,
                                lng: d.startLng,
                                color: d.color
                            })
                    }["Globe.useEffect.interval.ringsData"]);
                    globeRef.current.ringsData(ringsData);
                }
            }["Globe.useEffect.interval"], 2000);
            return ({
                "Globe.useEffect": ()=>{
                    clearInterval(interval);
                }
            })["Globe.useEffect"];
        }
    }["Globe.useEffect"], [
        isInitialized,
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef
    }, void 0, false, {
        fileName: "[project]/src/components/ui/globe.tsx",
        lineNumber: 234,
        columnNumber: 10
    }, this);
}
_s(Globe, "V3qMflRaaXXgL95Cgjb35rRwQcg=");
_c = Globe;
function WebGLRendererConfig() {
    _s1();
    const { gl, size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebGLRendererConfig.useEffect": ()=>{
            gl.setPixelRatio(window.devicePixelRatio);
            gl.setSize(size.width, size.height);
            gl.setClearColor(0xffaaff, 0);
        }
    }["WebGLRendererConfig.useEffect"], []);
    return null;
}
_s1(WebGLRendererConfig, "B0jQnAwF0Q0GAFVNqe2DtK6GsNo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"]
    ];
});
_c1 = WebGLRendererConfig;
function World(props) {
    const { globeConfig } = props;
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"](0xffffff, 400, 2000);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        scene: scene,
        camera: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, aspect, 180, 1800),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebGLRendererConfig, {}, void 0, false, {
                fileName: "[project]/src/components/ui/globe.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                color: globeConfig.ambientLight,
                intensity: 0.6
            }, void 0, false, {
                fileName: "[project]/src/components/ui/globe.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                color: globeConfig.directionalLeftLight,
                position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-400, 100, 400)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/globe.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                color: globeConfig.directionalTopLight,
                position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-200, 500, 200)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/globe.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: globeConfig.pointLight,
                position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-200, 500, 200),
                intensity: 0.8
            }, void 0, false, {
                fileName: "[project]/src/components/ui/globe.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Globe, {
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/globe.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                enablePan: false,
                enableZoom: false,
                minDistance: cameraZ,
                maxDistance: cameraZ,
                autoRotateSpeed: 1,
                autoRotate: true,
                minPolarAngle: Math.PI / 3.5,
                maxPolarAngle: Math.PI - Math.PI / 3
            }, void 0, false, {
                fileName: "[project]/src/components/ui/globe.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/globe.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_c2 = World;
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function genRandomNumbers(min, max, count) {
    const arr = [];
    while(arr.length < count){
        const r = Math.floor(Math.random() * (max - min)) + min;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Globe");
__turbopack_context__.k.register(_c1, "WebGLRendererConfig");
__turbopack_context__.k.register(_c2, "World");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/globe.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ui/globe.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_ui_globe_tsx_2d7f0b82._.js.map
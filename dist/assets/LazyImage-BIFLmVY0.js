import{l as f,g as o,R as g,o as r}from"./index-BzIP3GRX.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],v=f("circle-check",h),x=({src:c,alt:i,className:l="",priority:e=!1})=>{const[t,d]=o.useState(!1),[s,u]=o.useState(e),a=g.useRef(null);return o.useEffect(()=>{if(e||s)return;const n=new IntersectionObserver(([m])=>{m.isIntersecting&&(u(!0),n.disconnect())},{rootMargin:"100px"});return a.current&&n.observe(a.current),()=>n.disconnect()},[e,s]),r.jsxs("div",{ref:a,className:`relative overflow-hidden ${l} ${t?"":"bg-white/[0.05] animate-pulse"}`,children:[!t&&r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-shimmer"}),s&&r.jsx("img",{src:c,alt:i,onLoad:()=>d(!0),className:`w-full h-full object-cover transition-opacity duration-1000 ${t?"opacity-100":"opacity-0"}`,loading:e?"eager":"lazy"})]})};export{v as C,x as L};

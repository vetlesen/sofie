import{a1 as I,av as k,a6 as C,c5 as _,r as o,cG as L,j as c,cH as M,cI as g,i as T,cJ as E,cK as F,cL as R,cM as K,a as O,ax as W}from"./sanity.f169d45e.js";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const G=(e,t)=>({title:O("em",{children:["No schema found for type ",c("code",{children:t})]}),subtitle:O("em",{children:["Document: ",c("code",{children:e})]}),media:()=>c(W,{})});function H(e){const{layout:t,value:n}=e;return c(g,i(i({},G(n._id,n._type)),{},{layout:t}))}function b(e,t,n){return e===!1?!1:e||t&&t.icon||n||!1}function U(e){const{icon:t,id:n,layout:r="default",pressed:u,schemaType:a,selected:l,title:d,value:s}=e,w=I(),f=k(),{ChildLink:p}=C(),m=_(n),h=Boolean(a&&a.name&&w.get(a.name)),[v,P]=o.exports.useState(!1),j=o.exports.useMemo(()=>s&&L(s)?!a||!h?c(H,{value:s}):c(M,{documentPreviewStore:f,icon:b(t,a,R),layout:r,schemaType:a,value:s,presence:m}):c(g,{status:c(T,{muted:!0,children:c(E,{})}),icon:b(t,a,K),layout:r,title:d}),[f,h,t,r,a,d,s,m]),S=o.exports.useMemo(()=>function(D){return c(p,i(i({},D),{},{childId:n}))},[p,n]),x=o.exports.useCallback(()=>P(!0),[]);return o.exports.useEffect(()=>P(!1),[l]),c(F,{__unstable_focusRing:!0,as:S,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:x,pressed:u,selected:l||v,tone:"inherit",children:j})}export{U as P};

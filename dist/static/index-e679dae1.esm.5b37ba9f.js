import{s as B,bq as _,a as j,V as g,cq as w,j as a,aB as L,cp as O,f as S,aY as T,aC as W,W as A,S as C,B as D}from"./sanity.f169d45e.js";import{P as q}from"./PaneItem-34e9a828.esm.35a9fc11.js";import{u as z}from"./index-ae1970a3.esm.4ea2d09e.js";import"./json-inspector.107074ae.js";var r;function G(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const H=B.hr(r||(r=G([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function M(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=n,{features:h}=z(),{collapsed:m}=_(),{defaultLayout:y,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return j(g,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[w,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(S,{as:T,"data-as":"a",icon:W,mode:"bleed"}),title:b}),a(A,{overflow:m?void 0:"auto",children:a(C,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(D,{paddingY:1,children:a(H,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(q,{icon:k(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{M as default};

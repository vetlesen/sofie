import{s as x,o as j,j as B,P as g,_ as w,a,c as L,d as O,e as T,f as S,A,y as D,q as W,B as z}from"./sanity-45652b60.js";import{P as C}from"./PaneItem-7b9cb213-50129808.js";import{useDeskTool as G}from"./index-2cbd8830-d4332f85.js";import"./json-inspector-5b3b104c.js";var r;function H(o,t){return t||(t=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(t)}}))}const q=x.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(o){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=o,{features:h}=G(),{collapsed:y}=j(),{defaultLayout:m,displayOptions:i,items:c,menuItems:v,menuItemGroups:I,title:b}=u,P=i==null?void 0:i.showIcons,_=e=>{var n;const s=(n=e.displayOptions)==null?void 0:n.showIcon;return typeof s<"u"?s!==!1:P!==!1};return B(g,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[w,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(D,{overflow:y?void 0:"auto",children:a(W,{padding:2,space:1,children:c&&c.map((e,n)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(q,{})},"divider-".concat(n));const s=!d&&t===e.id,k=d&&t===e.id;return a(C,{icon:_(e)?e.icon:!1,id:e.id,layout:m,pressed:s,schemaType:e.schemaType,selected:k,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};

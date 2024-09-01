import{r as u,j as o,c as w,g as R}from"./index-9RNDkFYE.js";import{h as S,T as q}from"./sortItems-BDyK-gG1.js";const L={"visually-hidden":"_visually-hidden_6r5lu_1","interactive-list":"_interactive-list_6r5lu_14"},V=u.forwardRef(function({className:l,isNotFocusable:i=!1,onFocus:x,onKeyDown:b,children:c},n){const[m,h]=u.useState(0),p=r=>{var k,E;if(!r.currentTarget.contains(r.target))return;const f=r.target;let e;switch(r.key){case"ArrowUp":case"ArrowLeft":r.preventDefault(),f===r.currentTarget.firstElementChild?e=r.currentTarget.lastElementChild:e=f.previousElementSibling,e==null||e.focus({preventScroll:!0}),e==null||e.scrollIntoView({block:"nearest",behavior:"smooth"});break;case"ArrowDown":case"ArrowRight":r.preventDefault(),f===r.currentTarget.lastElementChild?e=r.currentTarget.firstElementChild:e=f.nextElementSibling,e==null||e.focus({preventScroll:!0}),e==null||e.scrollIntoView({block:"nearest",behavior:"smooth"});break;case"Home":r.preventDefault(),e=(k=f.parentElement)==null?void 0:k.firstElementChild,e==null||e.focus({preventScroll:!0}),e==null||e.scrollIntoView({block:"nearest",behavior:"smooth"});break;case"End":r.preventDefault(),e=(E=f.parentElement)==null?void 0:E.lastElementChild,e==null||e.focus({preventScroll:!0}),e==null||e.scrollIntoView({block:"nearest",behavior:"smooth"});break}};return o.jsx("ul",{ref:n,className:w(L["interactive-list"],l),tabIndex:i?-1:m,onFocus:r=>{h(-1),x?x(r):S(r)},onBlur:()=>h(0),onKeyDown:b??p,children:c})}),N="_checkbox_square_1wz72_1",P="_checkbox_circle_1wz72_12",v={checkbox_square:N,"custom-checkbox":"_custom-checkbox_1wz72_1",checkbox_circle:P,"native-checkbox":"_native-checkbox_1wz72_16"},z=u.forwardRef(function({appearance:l="square",className:i,id:x,...b},c){return o.jsx(o.Fragment,{children:o.jsxs("label",{className:w(v.checkbox,i,{[v.checkbox_square]:l==="square",[v.checkbox_circle]:l==="circle"}),onClick:n=>n.stopPropagation(),children:[o.jsx("input",{id:x,...b,ref:c,type:"checkbox",className:w("visually-hidden",v["native-checkbox"])}),o.jsx("span",{className:v["custom-checkbox"]})]})})}),g={"visually-hidden":"_visually-hidden_cbqcc_1","context-menu-backdrop":"_context-menu-backdrop_cbqcc_14","context-menu":"_context-menu_cbqcc_14","context-menu__item":"_context-menu__item_cbqcc_36","context-menu__item-button":"_context-menu__item-button_cbqcc_39"},D=5,I=5;function M({items:d,coordinates:l,onMenuClose:i,className:x,...b}){const c=u.useRef(null),n=u.useRef(null),m=u.useRef(null),h=u.useRef(null);u.useEffect(()=>{c.current&&(c.current.focus(),t(c.current.getBoundingClientRect()),document.addEventListener("wheel",a,{passive:!1}));function t(s){if(!c.current)return;const _=l.x+s.width+D,j=l.y+s.height+I;let y,C;_<document.documentElement.clientWidth?y=l.x+D:y=l.x-s.width-35,j<document.documentElement.clientHeight?C=l.y+I:C=l.y-s.height-20,c.current.style.left=`${y}px`,c.current.style.top=`${C}px`}function a(s){var _;if((_=c.current)!=null&&_.contains(s.target))return c.current.scrollHeight,c.current.clientHeight,s.preventDefault(),s.stopPropagation(),!1;i()}return()=>{document.removeEventListener("wheel",a)}},[c,l.x,l.y]);const p=t=>{t.action(),i()},r=t=>{t.target===t.currentTarget&&i()},f=t=>{switch(t.key){case"Tab":t.preventDefault();break;case"ArrowDown":t.preventDefault(),e();break;case"ArrowUp":t.preventDefault(),k();break;case"Escape":t.preventDefault(),i();break;case"Enter":t.stopPropagation();break}},e=()=>{var t,a,s;!n.current||n.current===h.current?(n.current=m.current,(t=n.current)==null||t.focus()):(n.current=(s=(a=n.current.parentElement)==null?void 0:a.nextElementSibling)==null?void 0:s.firstElementChild,n.current.focus())},k=()=>{var t,a,s;!n.current||n.current===m.current?(n.current=h.current,(t=n.current)==null||t.focus()):n.current&&(n.current=(s=(a=n.current.parentElement)==null?void 0:a.previousElementSibling)==null?void 0:s.firstElementChild,n.current.focus())},E=o.jsx("div",{className:g["context-menu-backdrop"],onMouseDown:r,onFocus:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),children:o.jsx("ul",{ref:c,...b,tabIndex:-1,className:w(g["context-menu"],x),onKeyDown:f,children:d.map((t,a,s)=>o.jsx("li",{className:g["context-menu__item"],children:o.jsx(q,{ref:a===0&&m||a===s.length-1&&h||null,tabIndex:-1,onClick:_=>{_.stopPropagation(),p(t)},className:g["context-menu__item-button"],children:t.name})},t.name))})});return R.createPortal(E,document.getElementById("root"))}function H({contextMenuItems:d,isSelection:l,className:i,children:x,...b}){const c=u.useRef(null),[n,m]=u.useState(!1),h=u.useRef({x:0,y:0}),p=e=>{e.preventDefault(),h.current={x:e.clientX+20,y:e.clientY+10},!l&&r()},r=()=>{n||m(!0)},f=()=>{m(!1),setTimeout(()=>{var e;(e=c.current)==null||e.focus()},.5)};return o.jsxs("li",{ref:c,onContextMenu:p,tabIndex:-1,className:i,...b,children:[x,n&&d&&o.jsx(M,{onMenuClose:f,items:d,coordinates:h.current})]})}export{z as C,H as I,V as a};

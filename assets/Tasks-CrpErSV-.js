import{j as e,c as q,t as l,u as U,r as o,d as $,e as G,I as P,O as H}from"./index-Bj23Slnb.js";import{f as J,I as Q,s as K,S as W,A as X,R as Y,a as Z}from"./sortItems-BhoSQB4b.js";import{u as D,a as I}from"./useAppSelector.hook-B3uhiMkK.js";import{I as tt,C as O,a as M}from"./InteractiveListItem-DyfXyuwl.js";const et="_tasks__content_ichxt_14",st="_tasks__sidebar_ichxt_42",nt="_tasks__buttons_ichxt_69",at="_tasks__title_ichxt_75",ot="_tasks_ichxt_14",it="_tasks__header_ichxt_101",g={"visually-hidden":"_visually-hidden_ichxt_1",tasks__content:et,tasks__sidebar:st,tasks__buttons:nt,tasks__title:at,tasks:ot,tasks__header:it,"tasks__list-wrapper":"_tasks__list-wrapper_ichxt_109","tasks__add-button":"_tasks__add-button_ichxt_121","tasks__remove-button":"_tasks__remove-button_ichxt_121"},ct="_task__date_5h0om_14",lt="_task__title_5h0om_28",rt="_task_5h0om_14",dt="_task__text_5h0om_74",_t="_task__pin_5h0om_89",x={"visually-hidden":"_visually-hidden_5h0om_1",task__date:ct,task__title:lt,task:rt,task__text:dt,task__pin:_t};function F({contextMenuItems:_,children:i,data:n,isSelection:m=!1,className:u,...S}){const C=D(),y=I(b=>b.settings).sort==="createDate"?n.createdAt:n.updatedAt;return e.jsxs(tt,{...S,contextMenuItems:_,isSelection:m,className:q(x.task,u),children:[m?e.jsx(O,{name:"task-select",className:x["task__select-checkbox"],appearance:"circle",checked:n.selected,tabIndex:-1,onChange:()=>C(l.toggleSelect(n.id))}):e.jsx(O,{name:"task-complete",className:x["task__complete-checkbox"],checked:n.completed,tabIndex:-1,onChange:()=>C(l.toggleComplete(n.id))}),e.jsxs("div",{className:x.task__text,children:[e.jsx("span",{className:x.task__title,children:i}),e.jsx("span",{"aria-hidden":!0,className:x.task__date,children:J(Q(y))}),n.pinned.state&&e.jsx("img",{src:"/public/icons/pin.svg",className:x.task__pin})]})]})}const L={"visually-hidden":"_visually-hidden_zyyl1_1","tasks-list__title":"_tasks-list__title_zyyl1_14","tasks-list":"_tasks-list_zyyl1_14"};function mt({confirmAction:_,upsertTask:i}){const n=D(),m=I(t=>t.tasks),u=I(t=>t.settings),S=U(),[C,N]=o.useState(m.items.filter(t=>!t.completed).length),[y,b]=o.useState(m.items.filter(t=>t.completed).length),{searchValue:f,isSelection:T}=$(),v=o.useRef(null),k=o.useRef(null),j=o.useRef(null),r=K(m.items.filter(t=>!t.completed),u.sort),h=K(m.items.filter(t=>t.completed),u.sort);o.useEffect(()=>{var t;r.length<C&&((t=v.current)==null||t.focus()),N(r.length)},[r]),o.useEffect(()=>{var t;h.length<y&&((t=k.current)==null||t.focus()),b(h.length)},[h]);const E=t=>{const c=t.selected?"Снять выделение":"Выделить",w=t.completed?"Отменить выполнение":"Выполнить",B=t.pinned.state?"Открепить":"Закрепить";return[{name:c,action:()=>n(l.toggleSelect(t.id))},{name:w,action:()=>n(l.toggleComplete(t.id))},{name:B,action:()=>n(l.togglePin(t.id))},{name:"Редактировать",action:()=>S(`/tasks/task-${t.id}/edit`)},{name:"Удалить",action:()=>{u.actionConfirmations==="all"||u.actionConfirmations==="deleteOnly"?_({message:"Подтвердить удаление",onConfirm:R}):R();function R(){n(l.remove(t.id))}}}]},A=(t,c)=>{t.code==="Enter"&&i(t,c.id),t.code==="KeyC"&&!t.ctrlKey&&!t.altKey&&!t.metaKey&&(j.current=t.currentTarget.parentElement,n(l.toggleComplete(c.id)))};return e.jsxs(e.Fragment,{children:[r.length!==0&&e.jsx(M,{ref:v,className:L["tasks-list"],isNotFocusable:r.length===0,children:r.filter(t=>t.content.toLowerCase().includes(f)).map(t=>e.jsx(F,{contextMenuItems:E(t),data:t,isSelection:T,"data-key":t.id,onKeyDown:c=>A(c,t),onClick:c=>i(c,t.id),children:t.content},t.id))}),h.filter(t=>t.content.toLowerCase().includes(f)).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:L["tasks-list__title"],children:"Выполненные:"}),e.jsx(M,{ref:k,className:L["tasks-list"],isNotFocusable:h.length===0,children:h.filter(t=>t.content.toLowerCase().includes(f)).map(t=>e.jsx(F,{contextMenuItems:E(t),data:t,isSelection:T,"data-key":t.id,onKeyDown:c=>A(c,t),onClick:c=>i(c,t.id),children:t.content},t.id))})]})]})}function pt(){return G()}function gt(){const _=D(),i=I(s=>s.tasks),n=I(s=>s.settings),[m,u]=o.useState(!1),[S,C]=o.useState({message:"",onConfirm:()=>{}}),[N,y]=o.useState(!1),[b,f]=o.useState(!1),[T,v]=o.useState(!1),{isSelection:k,setIsSelection:j}=$(),r=o.useRef(null),h=o.useRef(null),E=U();o.useEffect(()=>{k&&r.current&&r.current.focus()},[k,r]),o.useEffect(()=>{if(i.items.find(a=>a.selected)){j(!0),y(!0);const a=i.items.filter(d=>d.selected),p=a.find(d=>d.pinned.state)&&a.find(d=>!d.pinned.state),z=a.filter(d=>d.pinned.state).length===a.length,V=a.filter(d=>!d.pinned.state).length===a.length;i.items.find(d=>!d.selected)?f(!1):f(!0),V||p?v(!0):z&&v(!1)}else y(!1),v(!0);const s=a=>{a.key==="Escape"&&w()};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[i.items]);const A=(s,a)=>{if(k&&a){_(l.toggleSelect(a));return}const p=new Date().getTime();h.current=s.currentTarget,E(`/tasks/task-${a??p}/edit`)},t=({message:s,onConfirm:a})=>{C({message:s,onConfirm:a}),u(!0)},c=()=>{n.actionConfirmations==="all"||n.actionConfirmations==="deleteOnly"?t({message:"Подтвердить удаление",onConfirm:s}):s();function s(){i.items.filter(p=>p.selected).forEach(p=>{_(l.remove(p.id))}),f(!1),j(!1)}},w=()=>{i.items.filter(s=>s.selected).forEach(s=>{_(l.toggleSelect(s.id))}),f(!1),j(!1)},B=()=>{i.items.filter(s=>s.selected===b).forEach(s=>{_(l.toggleSelect(s.id))}),f(s=>!s)},R=()=>{i.items.forEach(s=>{s.selected&&(T&&!s.pinned.state||!T)&&_(l.togglePin(s.id))})};return e.jsxs("div",{className:g.tasks,children:[e.jsxs("div",{className:g.tasks__content,children:[k&&e.jsx(W,{className:g.tasks__sidebar,closeSidebar:{exist:!0,action:w,ref:r},toggleSelectState:{exist:!0,action:B,selectAllButtonState:b},togglePinState:{exist:!0,action:R,disabled:!N,pinAllButtonState:T},changeFolder:{exist:!1}}),e.jsx("div",{className:g["tasks__list-wrapper"],children:e.jsx(mt,{confirmAction:t,upsertTask:A})})]}),e.jsx("div",{className:g.tasks__buttons,children:k?e.jsx(P,{"aria-label":"Удалить выделенные задачи",appearance:"circle",colorScheme:"primary",className:g["tasks__remove-button"],onClick:c,disabled:!N,children:e.jsx(Y,{})}):e.jsx(P,{"aria-label":"Создать задачу",appearance:"circle",colorScheme:"primary",className:g["tasks__add-button"],onClick:A,children:e.jsx(X,{})})}),e.jsx(H,{context:{isSelection:k,setIsSelection:j,focusFromUpsertTaskRef:h,confirmAction:t}}),n.actionConfirmations!=="none"&&e.jsx(Z,{message:S.message,modalState:m,onConfirm:S.onConfirm,setModalState:u})]})}export{gt as default,pt as useTasksContext};

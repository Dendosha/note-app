import{j as t,c as C,n as d,u as y,a as w,r as A,O as S,f as b}from"./index-CYeBwhlk.js";import{I as k,C as D,a as $}from"./InteractiveListItem-SHlQOFkY.js";import{f as E,I as F,s as O}from"./sortItems-Dws7nCi1.js";import{u as I,a as m}from"./useAppSelector.hook-D0DGboAb.js";import{useNotesContext as L}from"./Notes-BLr8wU4F.js";import"./CustomSelect-CYLzWulF.js";import"./useTimeout-BzISnB4r.js";const B="_note__date_1w44a_14",M="_note__title_1w44a_28",P="_note_1w44a_14",R="_note__text_1w44a_74",T="_note__pin_1w44a_89",c={"visually-hidden":"_visually-hidden_1w44a_1",note__date:B,note__title:M,note:P,note__text:R,note__pin:T};function K({contextMenuItems:p,children:_,data:o,isSelection:r=!1,className:i,...f}){const l=I(),a=m(u=>u.settings).sort==="createDate"?o.createdAt:o.updatedAt;return t.jsxs(k,{...f,contextMenuItems:p,isSelection:r,className:C(c.note,i),children:[r&&t.jsx(D,{name:"note-select",className:c["note__select-checkbox"],appearance:"circle",checked:o.selected,tabIndex:-1,onChange:()=>l(d.toggleSelect(o.id))}),t.jsxs("div",{className:c.note__text,children:[t.jsx("span",{className:c.note__title,children:_}),t.jsx("span",{"aria-hidden":!0,className:c.note__date,children:E(F(a))}),o.pinned.state&&t.jsx("img",{src:"/icons/pin.svg",className:c.note__pin})]})]})}const U={"visually-hidden":"_visually-hidden_m4pd8_1","notes-list":"_notes-list_m4pd8_14"};function W(){const{searchValue:p,isSelection:_,focusFromUpsertNoteRef:o,confirmAction:r}=L(),i=I(),f=m(e=>e.folders),l=y(),{folder:s}=w(),a=parseInt((s==null?void 0:s.split("-")[1])??"1"),u=m(e=>e.notes),x=m(e=>e.settings),g=O(u.items,x.sort).filter(e=>e.folderId.includes(a));A.useEffect(()=>{(s!=="all"&&a!==1&&!f.items.find(e=>e.id===a)||s!=="all"&&!a)&&l(-1)},[s]);const v=e=>{const n=e.selected?"Снять выделение":"Выделить",j=e.pinned.state?"Открепить":"Закрепить";return[{name:n,action:()=>i(d.toggleSelect(e.id))},{name:j,action:()=>i(d.togglePin(e.id))},{name:"Редактировать",action:()=>l(`/notes/${s}/note-${e.id}/edit`)},{name:"Удалить",action:()=>{x.actionConfirmations==="all"||x.actionConfirmations==="deleteOnly"?r({message:"Подтвердить удаление",onConfirm:N}):N();function N(){i(d.remove(e.id)),i(b.removeNotes({id:e.folderId[1]??e.folderId[0],notes:[e.id]}))}}}]},h=(e,n)=>{if(_){i(d.toggleSelect(n.id));return}o.current=e.currentTarget,l(`/notes/${s}/note-${n.id}/edit`)};return t.jsxs(t.Fragment,{children:[t.jsx($,{role:"tabpanel","aria-description":"Заметки",id:`note-folder-${a}`,className:U["notes-list"],isNotFocusable:g.length===0,children:g.filter(e=>e.title.toLowerCase().includes(p)).map(e=>t.jsx(K,{contextMenuItems:v(e),data:e,isSelection:_,onClick:n=>h(n,e),onKeyDown:n=>n.key==="Enter"&&h(n,e),children:e.title!==""?e.title:"Без заголовка"},e.id))}),t.jsx(S,{context:{focusFromUpsertNoteRef:o,confirmAction:r}})]})}export{W as default};

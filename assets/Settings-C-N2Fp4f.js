import{j as t,r as c,s as g,u as h,I as p,B as v}from"./index-BKjSFItC.js";import{u as f,a as x}from"./useAppSelector.hook-WmG-GjsH.js";import{C as b}from"./CustomSelect-C4GINFwo.js";import"./useTimeout-CQb6tUNd.js";const j="_settings__title_1io7g_14",S="_settings_1io7g_14",N="_settings__header_1io7g_41",y="_settings__content_1io7g_64",C="_settings__sidebar_1io7g_69",V="_settings__buttons_1io7g_78",e={"visually-hidden":"_visually-hidden_1io7g_1",settings__title:j,settings:S,settings__header:N,settings__content:y,settings__sidebar:C,settings__buttons:V,"settings__add-button":"_settings__add-button_1io7g_83","settings__remove-button":"_settings__remove-button_1io7g_83"},o={"visually-hidden":"_visually-hidden_dk43c_1","settings-list-item__title":"_settings-list-item__title_dk43c_14","settings-list-item":"_settings-list-item_dk43c_14"};function r({children:s,inputName:a,items:_,defaultSelectValue:i,setSelectValue:l,onSelectChange:n}){return t.jsxs("div",{className:o["settings-list-item"],children:[t.jsx("p",{className:o["settings-list-item__title"],children:s}),t.jsx(b,{name:a,items:_,defaultValue:i,setValue:l,onChange:n,placeholder:"Выберите настройку",className:o["settings-list-item__select"]})]})}const u={"visually-hidden":"_visually-hidden_1fmtz_1","settings-list":"_settings-list_1fmtz_14","settings-list__separator":"_settings-list__separator_1fmtz_22"},k=[{label:"Дата создания",value:"createDate"},{label:"Дата изменения",value:"updateDate"}],I=[{label:"Спрашивать всегда",value:"all"},{label:"Только удаление",value:"deleteOnly"},{label:"Не спрашивать",value:"none"}];function A(){const s=f(),{sort:a,actionConfirmations:_}=x(m=>m.settings),[i,l]=c.useState(a),[n,d]=c.useState(_);return t.jsxs("div",{className:u["settings-list"],children:[t.jsx(r,{inputName:"sort",items:k,defaultSelectValue:i,setSelectValue:l,onSelectChange:()=>s(g.update({key:"sort",value:i})),children:"Сортировка по дате"}),t.jsx("div",{className:u["settings-list__separator"]}),t.jsx(r,{inputName:"action-confirmations",items:I,defaultSelectValue:n,setSelectValue:d,onSelectChange:()=>s(g.update({key:"actionConfirmations",value:n})),children:"Подтверждение действий"})]})}function $(){const s=h();return t.jsxs("div",{className:e.settings,children:[t.jsxs("div",{className:e.settings__header,children:[t.jsx(p,{"aria-label":"Закрыть настройки",iconType:"stroke",onClick:()=>s(-1),children:t.jsx(v,{})}),t.jsx("h2",{className:e.settings__title,children:"Настройки"})]}),t.jsx("div",{className:e.settings__content,children:t.jsx(A,{})}),t.jsx("div",{className:e.settings__buttons})]})}export{$ as default};

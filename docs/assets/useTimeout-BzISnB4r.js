import{r as n}from"./index-CYeBwhlk.js";const u={};function c(t,r){const e=n.useRef(u);return e.current===u&&(e.current=t(r)),e}const i=[];function o(t){n.useEffect(t,i)}class s{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new s}start(r,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},r)}}function a(){const t=c(s.create).current;return o(t.disposeEffect),t}export{s as T,a as u};

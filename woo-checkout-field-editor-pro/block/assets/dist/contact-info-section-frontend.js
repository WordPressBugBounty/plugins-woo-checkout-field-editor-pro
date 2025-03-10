(()=>{"use strict";var e,o={20:(e,o,t)=>{var r=t(609),a=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,t){var r,c={},n=null,d=null;for(r in void 0!==t&&(n=""+t),void 0!==o.key&&(n=""+o.key),void 0!==o.ref&&(d=o.ref),o)l.call(o,r)&&!s.hasOwnProperty(r)&&(c[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===c[r]&&(c[r]=o[r]);return{$$typeof:a,type:e,key:n,ref:d,props:c,_owner:i.current}}o.jsx=c,o.jsxs=c},82:(e,o,t)=>{const r=window.wc.blocksCheckout,a=window.wc.wcSettings,l=window.wp.i18n,i=window.wp.element,s=(0,i.forwardRef)((function({icon:e,size:o=24,...t},r){return(0,i.cloneElement)(e,{width:o,height:o,...t,ref:r})})),c=window.wp.primitives;var n=t(848);const d=(0,n.jsx)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(c.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),p=window.wp.data;function u(e){var o,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(o=0;o<a;o++)e[o]&&(t=u(e[o]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}const h=function(){for(var e,o,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(o=u(e))&&(r&&(r+=" "),r+=o);return r},m=window.wc.wcBlocksData,_=window.wc.blocksComponents,f=e=>{const{onChange:o,options:t,label:r,value:a="",className:c,size:u,errorId:f,required:b,errorMessage:w=(0,l.__)("Please select a valid option","woo-checkout-field-editor-pro"),placeholder:v,...k}=e,g=(0,i.useCallback)((e=>{o(e.target.value)}),[o]),y=(0,i.useMemo)((()=>({value:"",label:null!=v?v:(0,l.sprintf)(
// translators: %s will be label of the field. For example "country/region".
// translators: %s will be label of the field. For example "country/region".
(0,l.__)("Select a %s","woo-checkout-field-editor-pro"),r?.toLowerCase()),disabled:!!b})),[r,v,b]),x=(0,i.useId)(),j=k.id||`wc-blocks-components-select-${x}`,C=f||j,E=(0,i.useMemo)((()=>b&&a?t:[y].concat(t)),[b,a,y,t]),{setValidationErrors:N,clearValidationError:O}=(0,p.useDispatch)(m.VALIDATION_STORE_KEY),{error:I,validationErrorId:$}=(0,p.useSelect)((e=>{const o=e(m.VALIDATION_STORE_KEY);return{error:o.getValidationError(C),validationErrorId:o.getValidationErrorId(C)}}));(0,i.useEffect)((()=>(!b||a?O(C):N({[C]:{message:w,hidden:!0}}),()=>{O(C)})),[O,a,C,w,b,N]);const A=(0,p.useSelect)((e=>e(m.VALIDATION_STORE_KEY).getValidationError(C||"")||{hidden:!0}));return(0,n.jsxs)("div",{className:h(c,{"has-error":!A.hidden}),children:[(0,n.jsx)("div",{className:"wc-blocks-components-select",children:(0,n.jsxs)("div",{className:"wc-blocks-components-select__container",children:[(0,n.jsx)("label",{htmlFor:j,className:"wc-blocks-components-select__label",children:r}),(0,n.jsx)("select",{className:"wc-blocks-components-select__select",id:j,size:void 0!==u?u:1,onChange:g,value:a,"aria-invalid":!(!I?.message||I?.hidden),"aria-errormessage":$,...k,children:E.map((e=>(0,n.jsx)("option",{value:e.value,"data-alternate-values":`[${e.label}]`,disabled:void 0!==e.disabled&&e.disabled,children:e.label},e.value)))},j),(0,n.jsx)(s,{className:"wc-blocks-components-select__expand",icon:d})]})}),(0,n.jsx)(_.ValidationInputError,{propertyName:C})]})};var b=t(609);const w=window.wp.compose,v=({label:e,secondaryLabel:o,description:t,secondaryDescription:r,id:a})=>(0,n.jsxs)("div",{className:"wc-block-components-radio-control__option-layout",children:[(0,n.jsxs)("div",{className:"wc-block-components-radio-control__label-group",children:[e&&(0,n.jsx)("span",{id:a&&`${a}__label`,className:"wc-block-components-radio-control__label",children:e}),o&&(0,n.jsx)("span",{id:a&&`${a}__secondary-label`,className:"wc-block-components-radio-control__secondary-label",children:o})]}),(t||r)&&(0,n.jsxs)("div",{className:"wc-block-components-radio-control__description-group",children:[t&&(0,n.jsx)("span",{id:a&&`${a}__description`,className:"wc-block-components-radio-control__description",children:t}),r&&(0,n.jsx)("span",{id:a&&`${a}__secondary-description`,className:"wc-block-components-radio-control__secondary-description",children:r})]})]}),k=({checked:e,name:o,onChange:t,option:r,disabled:a=!1,highlightChecked:l=!1})=>{const{value:i,label:s,description:c,secondaryLabel:d,secondaryDescription:p}=r;return(0,n.jsxs)("label",{className:h("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":e,"wc-block-components-radio-control__option--checked-option-highlighted":e&&l}),htmlFor:`${o}-${i}`,children:[(0,n.jsx)("input",{id:`${o}-${i}`,className:"wc-block-components-radio-control__input",type:"radio",name:o,value:i,onChange:e=>t(e.target.value),checked:e,"aria-describedby":h({[`${o}-${i}__label`]:s,[`${o}-${i}__secondary-label`]:d,[`${o}-${i}__description`]:c,[`${o}-${i}__secondary-description`]:p}),"aria-disabled":a,onKeyDown:e=>{a&&["ArrowUp","ArrowDown","AllowLeft","ArrowRight"].includes(e.key)&&e.preventDefault()}}),(0,n.jsx)(v,{id:`${o}-${i}`,label:s,secondaryLabel:d,description:c,secondaryDescription:p})]})},g=({className:e="",id:o,selected:t="",onChange:r,options:a=[],disabled:i=!1,highlightChecked:s=!1,title:c="",required:d=!1,errorMessage:u=(0,l.__)("Please select an option","woo-checkout-field-editor-pro"),errorId:f})=>{const v=(0,w.useInstanceId)(g),y=o||v,x=f||y,{setValidationErrors:j,clearValidationError:C}=(0,p.useDispatch)(m.VALIDATION_STORE_KEY),E=(0,p.useSelect)((e=>e(m.VALIDATION_STORE_KEY).getValidationError(x)||{hidden:!0}));(0,b.useEffect)((()=>(!d||t?C(x):j({[x]:{message:u,hidden:!0}}),()=>{C(x)})),[t,d,x,u]);const N=(0,b.useMemo)((()=>a.findIndex((e=>e.value===t))),[a,t]);return a.length?(0,n.jsxs)("div",{className:h("wc-block-components-radio-control thwcfe-radio-control",{"has-error":!E.hidden,"wc-block-components-radio-control--highlight-checked--first-selected":s&&0===N,"wc-block-components-radio-control--highlight-checked--last-selected":s&&N===a.length-1,"wc-block-components-radio-control--highlight-checked":s},e),children:[(0,n.jsxs)("div",{className:"wc-block-components-cfe-radio-control__heading",children:[" ",c||""," "]}),a.map((e=>(0,n.jsx)(k,{highlightChecked:s,name:`radio-control-${y}`,checked:e.value===t,option:e,onChange:o=>{r(o),"function"==typeof e.onChange&&e.onChange(o)},disabled:i},`${y}-${e.value}`))),(0,n.jsx)(_.ValidationInputError,{propertyName:x})]}):null},y=g,x=e=>{const{errorId:o,errorMessage:t,autoCapitalize:r,autoComplete:a,placeholder:l,...i}=e;return i},j=window.wp.url,C=({field:e,onChange:o=""})=>{const{id:t,label:r,type:a,value:i,placeholder:s,required:c,options:d,title:p,validate:u,property_set:m,enabled:w,cssclass:v}=e,{default:k,checked:g}=m,C=(e=>({id:`section_one-${e?.id}`.replaceAll("/","-"),errorId:`section_${e?.id}`,label:e?.title,autoCapitalize:e?.autocapitalize,autoComplete:e?.autocomplete,errorMessage:e?.errorMessage,required:e?.required,placeholder:e?.placeholder,className:`wc-block-components-address-form__${e?.id}`.replaceAll("/","-"),options:e?.options?Object.values(e.options).map((e=>({value:e.key,label:e.text}))):[],...e?.attributes}))(e),E=(0,b.useRef)({});if(!w||"0"===w)return null;const N=e=>{o({[t]:e})};return(0,b.useEffect)((()=>{void 0!==k&&N(k)}),[k]),"checkbox"===a&&(0,b.useEffect)((()=>{void 0!==g&&N(g)}),[g]),"email"!==e.type?"checkbox"===a?(0,n.jsx)(_.CheckboxControl,{checked:i,onChange:N,...x(C),className:h(v?.split(",").map((e=>e.trim()))),required:c},t):"select"===a&&e.options?(0,n.jsx)(f,{...C,label:p||"",className:h(v?.split(",").map((e=>e.trim())),"wc-block-components-select-input",`wc-block-components-select-input-${t}`.replaceAll("/","-")),value:i,onChange:N,options:C.options,required:c,errorMessage:C.errorMessage||void 0,placeholder:s||null},t):"radio"===a?(0,n.jsx)(y,{...C,selected:i,onChange:N,options:C.options,disabled:!1,highlightChecked:!0,title:p||"",className:h(v?.split(",").map((e=>e.trim())))}):(0,n.jsx)(_.ValidatedTextInput,{ref:e=>E.current[t]=e,...C,type:a,value:i,onChange:N,className:h(v?.split(",").map((e=>e.trim()))),customFormatter:o=>"postcode"===e.type?o.trimStart().toUpperCase():o,customValidation:e=>((e,o)=>!((e.required||e.value)&&("phone"!==o||(0,j.isPhoneNumber)(e.value)?"url"!==o||(0,j.isURL)(e.value)?"email"===o&&!(0,j.isEmail)(e.value)&&(e.setCustomValidity((0,l.__)("Please enter a valid email address","woo-checkout-field-editor-pro")),1):(e.setCustomValidity((0,l.__)("Please enter a valid URL","woo-checkout-field-editor-pro")),1):(e.setCustomValidity((0,l.__)("Please enter a valid Phone Number","woo-checkout-field-editor-pro")),1))))(e,u)},t):void 0},E=window.lodash,N=(0,a.getSetting)("thwcfe-block-integration_data",""),{allSections:O}=N,{contact:I}=O,$=JSON.parse('{"apiVersion":2,"name":"woocommerce-checkout-field-editor-pro/contact-information-section","version":"2.0.0","title":"Contact Information Section","category":"woocommerce","description":"Adds fields.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-contact-information-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}},"text":{"type":"string","default":""},"title":{"type":"string","default":"Contact Information"},"description":{"type":"string","default":"contact Fields"}},"textdomain":"woocommerce-checkout-field-editor-pro","editorStyle":"file:../../../build/style-checkout-section-block.css"}');(0,r.registerCheckoutBlock)({metadata:$,component:({checkoutExtensionData:e,extensions:o})=>{const{setExtensionData:t}=e,[r,a]=(0,b.useState)({}),l=(0,b.useCallback)((0,E.debounce)((e=>{t("thwcfe-additional-fields","contact",e)}),1e3),[t]);(0,b.useEffect)((()=>(Object.keys(r).length>0&&l(r),()=>{l.cancel()})),[r,l]);const i=(0,b.useCallback)((e=>{a((o=>({...o,...e})))}),[]),s=Array.isArray(I.fields)?I.fields:Object.values(I.fields);return(0,n.jsx)("div",{children:s.map((e=>(0,n.jsx)("div",{className:"wc-block-checkout__additional-fields__field",children:(0,n.jsx)(C,{field:{...e,value:r[e.id]||""},onChange:i})},e.id)))})}})},609:e=>{e.exports=window.React},848:(e,o,t)=>{e.exports=t(20)}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var l=t[e]={exports:{}};return o[e](l,l.exports,r),l.exports}r.m=o,e=[],r.O=(o,t,a,l)=>{if(!t){var i=1/0;for(d=0;d<e.length;d++){for(var[t,a,l]=e[d],s=!0,c=0;c<t.length;c++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](t[c])))?t.splice(c--,1):(s=!1,l<i&&(i=l));if(s){e.splice(d--,1);var n=a();void 0!==n&&(o=n)}}return o}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[t,a,l]},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={213:0,185:0,294:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var a,l,[i,s,c]=t,n=0;if(i.some((o=>0!==e[o]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var d=c(r)}for(o&&o(t);n<i.length;n++)l=i[n],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},t=globalThis.webpackChunkwoo_checkout_field_editor_pro=globalThis.webpackChunkwoo_checkout_field_editor_pro||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=r.O(void 0,[185,294],(()=>r(82)));a=r.O(a)})();
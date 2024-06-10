"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5882,7135,578,130,8549],{47135:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(89526),o=(n(92070),n(71529)),a=n(72215),i=n(91153),l=n(77548),c=(n(57170),n(28641)),s=n(20785);n(59324);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=(0,o.Z)((function(e){return t={wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"auto"},header:{background:"#696969",fontSize:20,padding:15,lineHeight:"50px",height:78},content:{height:"83.5%",overflow:"hidden"},headerAction:{},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},tabPanel:{top:0,height:"97.5%"},list:{height:"100%",overflow:"auto"},body:{padding:10}},r={width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},(n="emptyMsg")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r}));const m=function(e){var t=e.chopList,n=p(),o=u((0,r.useState)(null),2),d=o[0],m=o[1];return r.createElement("div",{className:n.wrapper},r.createElement(a.Z,{className:n.body},Object.keys(t).map((function(e){var n;return r.createElement(i.ZP,{key:"choplist-".concat(e),button:!0,divider:!0,onClick:function(){return m(e)}},r.createElement(l.Z,{primary:Boolean(null===(n=t[e])||void 0===n?void 0:n.id)?e:"".concat(e," Chop List"),secondary:r.createElement(r.Fragment,null,Boolean(t[e].public)?r.createElement("span",null,"Shared Chop List -"," ",t[e].list.length," ","Remaining",t[e].list.length>1?" Vehicles":" Vehicle"):Boolean(t[e].id)?r.createElement("span",null,"Personal Chop List -"," ",t[e].list.length," ","Remaining",t[e].list.length>1?" Vehicles":" Vehicle"):null)}))}))),Boolean(d)&&r.createElement(s.u_,{open:Boolean(d),title:"".concat(d," Chop List"),closeLang:"Close",maxWidth:"xs",onClose:function(){return m(null)}},t[d].list.sort((function(e,t){return t.hv-e.hv})).map((function(e,t){return r.createElement(c.default,{key:"chopitem-".concat(t),chopRequest:e})}))))}},60578:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(89526),o=(n(92070),n(71529)),a=(n(57170),n(20785)),i=n(18549),l=(0,o.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,height:"88.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const c=function(e){var t=e.myReputations,n=e.loading,o=(e.onRefresh,l());return r.createElement("div",{className:o.wrapper},r.createElement("div",{className:o.body},Boolean(t)?t.length>0?t.map((function(e){return r.createElement(i.default,{key:"lsu-".concat(e.id),rep:e,disabled:n})})):r.createElement("div",{className:o.emptyMsg},"No Reputation Built"):r.createElement(a.aN,{static:!0,text:"Loading"})))}},28641:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(89526),o=(n(92070),n(72757)),a=n(14710),i=n(71529),l=n(57170),c=(n(21447),n(87961),(0,i.Z)((function(e){return{wrapper:{padding:10,background:e.palette.secondary.dark},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:e.palette.primary.main,fontWeight:"bold","& svg":{marginRight:6,color:"gold"}}}})));const s=function(e){var t=e.chopRequest,n=c();return r.createElement(o.Z,{className:n.wrapper},r.createElement(a.ZP,{container:!0},r.createElement(a.ZP,{item:!0,xs:12,style:{position:"relative",height:38}},r.createElement("div",{className:n.details},r.createElement("div",{className:n.title},t.hv&&r.createElement(l.G,{icon:["fas","diamond-exclamation"]}),t.name)))))}},18549:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(89526),o=n(92070),a=n(72757),i=n(14710),l=n(95404),c=n(71529),s=(n(57170),n(21447),n(87961)),u=(0,c.Z)((function(e){return{wrapper:{padding:10,background:e.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:e.palette.primary.main,fontWeight:"bold",textAlign:"center"},progressLabel:{fontSize:16,textAlign:"center"},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},progressContainer:{padding:10}}}));const d=function(e){var t,n,c,d,p=e.rep,m=(e.myGroup,e.disabled,u());(0,o.I0)(),(0,s.VY)();return r.createElement(a.Z,{className:m.wrapper},r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,xs:12,style:{position:"relative",height:38}},r.createElement("div",{className:m.details},r.createElement("div",{className:m.title},p.label)))),r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,xs:2,style:{position:"relative"}},r.createElement("div",{className:m.progressLabel},null!==(t=null===(n=p.current)||void 0===n?void 0:n.label)&&void 0!==t?t:"No Rank")),r.createElement(i.ZP,{item:!0,xs:8,style:{position:"relative"}},r.createElement("div",{className:m.progressContainer},r.createElement(l.Z,{variant:"determinate",value:function(){var e,t,n,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,a=null!==(e=null==p||null===(t=p.current)||void 0===t?void 0:t.value)&&void 0!==e?e:0,i=null!==(n=null==p||null===(r=p.next)||void 0===r?void 0:r.value)&&void 0!==n?n:1e3;return 100*(o-a)/(i-a)}(p.value)}))),r.createElement(i.ZP,{item:!0,xs:2,style:{position:"relative"}},r.createElement("div",{className:m.progressLabel},null!==(c=null===(d=p.next)||void 0===d?void 0:d.label)&&void 0!==c?c:"Unknown"))))}},75882:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(89526),o=n(92070),a=n(71529),i=n(68621),l=n(65092),c=n(20088),s=n(38355),u=n(88590),d=n(14710),p=n(33933),m=n(16025),f=n(57170),h=n(53059),g=n(47135),v=n(60578),b=n(87961),y=n(21447);function E(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){E(a,r,o,i,l,"next",e)}function l(e){E(a,r,o,i,l,"throw",e)}i(void 0)}))}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=(0,a.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:"#E95200",fontSize:20,padding:15,lineHeight:"50px",height:78},content:{height:"83.5%",overflow:"hidden"},headerAction:{},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},tabPanel:{top:0,height:"97.5%"},list:{height:"100%",overflow:"auto"}}})),S=(0,i.Z)((function(e){return{root:{borderBottom:"1px solid #E95200"},indicator:{backgroundColor:"#E95200"}}}))((function(e){return r.createElement(c.Z,e)})),A=(0,i.Z)((function(e){return{root:{width:"50%","&:hover":{color:"#E95200",transition:"color ease-in 0.15s"},"&$selected":{color:"#E95200",transition:"color ease-in 0.15s"},"&:focus":{color:"#E95200",transition:"color ease-in 0.15s"}},selected:{},disabled:{color:"#333333 !important",transition:"color ease-in 0.15s"}}}))((function(e){return r.createElement(s.Z,e)}));const N=function(e){var t=Z(),n=((0,o.I0)(),(0,l.k6)(),(0,b.$e)(),x((0,r.useState)(!1),2)),a=n[0],i=n[1],c=x((0,r.useState)(0),2),s=c[0],E=c[1],k=x((0,r.useState)(Array()),2),N=k[0],C=k[1],P=x((0,r.useState)(Array()),2),z=P[0],B=P[1],R=(0,r.useMemo)((function(){return(0,h.throttle)(w(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return");case 2:return i(!0),e.prev=3,e.next=6,y.Z.send("GetLSUDetails");case 6:return e.next=8,e.sent.json();case 8:(t=e.sent)?(C(t.chopList),B(t.reputations)):(C(Array()),B(Array())),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),C(Array()),B(Array());case 17:i(!1);case 18:case"end":return e.stop()}}),e,null,[[3,12]])}))),1e3)}),[]);(0,r.useEffect)((function(){R()}),[]);return r.createElement("div",{className:t.wrapper},r.createElement(u.Z,{position:"static",className:t.header},r.createElement(d.ZP,{container:!0},r.createElement(d.ZP,{item:!0,xs:7,style:{lineHeight:"50px"}},"LS Underground"),r.createElement(d.ZP,{item:!0,xs:5,style:{textAlign:"right"}},r.createElement(p.Z,{title:"Refresh"},r.createElement("span",null,r.createElement(m.Z,{className:t.headerAction,onClick:R},r.createElement(f.G,{className:"fa ".concat(a?"fa-spin":""),icon:["fas","arrows-rotate"]}))))))),r.createElement("div",{className:t.content},r.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:0!==s,id:"latest"},0===s&&r.createElement(g.default,{chopList:N})),r.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:1!==s,id:"categories"},1===s&&r.createElement(v.default,{myReputations:z}))),r.createElement("div",{className:t.tabs},r.createElement(S,{value:s,onChange:function(e,t){E(t)},scrollButtons:!1,centered:!0},r.createElement(A,{icon:r.createElement(f.G,{icon:["fas","screwdriver-wrench"]})}),r.createElement(A,{icon:r.createElement(f.G,{icon:["fas","list-timeline"]})}))))}},88590:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(71972),o=n(17692),a=n(89526),i=n(23060),l=n(82082),c=n(47671),s=n(26966),u=n(9333),d=n(72757),p=n(24989);function m(e){return(0,p.Z)("MuiAppBar",e)}(0,n(36787).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var f=n(67557);const h=["className","color","enableColorOnDark","position"],g=(0,c.ZP)(d.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,u.Z)(n.position)}`],t[`color${(0,u.Z)(n.color)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:n,color:e.palette.getContrastText(n)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,o.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),v=a.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiAppBar"}),{className:a,color:c="primary",enableColorOnDark:d=!1,position:p="fixed"}=n,v=(0,r.Z)(n,h),b=(0,o.Z)({},n,{color:c,position:p,enableColorOnDark:d}),y=(e=>{const{color:t,position:n,classes:r}=e,o={root:["root",`color${(0,u.Z)(t)}`,`position${(0,u.Z)(n)}`]};return(0,l.Z)(o,m,r)})(b);return(0,f.jsx)(g,(0,o.Z)({square:!0,component:"header",ownerState:b,elevation:4,className:(0,i.Z)(y.root,a,"fixed"===p&&"mui-fixed"),ref:t},v))}))}}]);
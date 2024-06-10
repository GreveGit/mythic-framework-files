"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[761],{10761:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(89526),a=n(92070),i=n(14710),o=n(32165),l=n(16025),c=n(71529),s=n(57170),u=n(95028),m=n.n(u),p=n(55565),f=n(23192),d=n(59324),h=n.n(d),g=n(21447),y=n(11781),b=n(20785);function v(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=(0,c.Z)((function(e){return{wrapper:{paddingTop:10,height:"fit-content",background:e.palette.secondary.main,borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-of-type":{borderTop:"1px solid ".concat(e.palette.border.divider)}},author:{color:e.palette.primary.main,fontSize:16},date:{color:e.palette.text.alt,fontSize:12,marginLeft:5},avatar:{width:60,height:60,margin:"auto"},actionBtn:{fontSize:16},content:{fontSize:14},messageImg:{display:"block",maxWidth:200},copyableText:{color:"#1de9b6",textDecoration:"underline",transition:"filter ease-in 0.15s","&:hover":{filter:"brightness(0.7)",cursor:"pointer"}},hashtag:{color:e.palette.primary.light},image:{width:"100%",border:"1px solid ".concat(e.palette.border.divider),borderRadius:4},rtLink:{color:e.palette.primary.light},btnCount:{marginRight:5}}}));const k=function(e){var t=e.tweet,n=e.rtcount,c=e.onReply,u=e.onRetweet,d=w(),E=((0,a.I0)(),(0,a.v9)((function(e){return e.data.data.player}))),k=x((0,r.useState)(!1),2),C=k[0],N=k[1],A=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,g.Z.send("FavoriteTweet",{id:t._id,state:t.likes.includes(E.ID)});case 3:return e.next=5,e.sent.json();case 5:e.sent,N(!1);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){v(i,r,a,o,l,"next",e)}function l(e){v(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}(),Z=[{regex:/((https?:\/\/(www\.)?(i\.)?imgur\.com\/[a-zA-Z\d]+)(\.png|\.jpg|\.jpeg|\.gif)?)/gim,fn:function(e,t){return r.createElement(b.NX,{key:e,className:d.messageImg,src:t[0]})}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)(mp4)/gim,fn:function(e,t){return r.createElement("div",null,r.createElement(f.Z,{key:e,volume:.25,width:"100%",controls:!0,url:"".concat(t[0])}))}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return r.createElement(p.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return showAlert("Link Copied To Clipboard")}},r.createElement("a",{className:d.copyableText},t.input))}},{regex:/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return r.createElement(p.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return showAlert("Link Copied To Clipboard")}},r.createElement("a",{className:d.copyableText},t.input))}},{regex:/#(\w)+/g,fn:function(e,t){return r.createElement("span",{key:e,className:d.hashtag},t[0])}},{regex:/@(\w)+/g,fn:function(e,t){return r.createElement("span",{key:e,className:d.hashtag},t[0])}}];return r.createElement(i.ZP,{id:t._id,container:!0,className:d.wrapper},r.createElement(i.ZP,{item:!0,xs:2},r.createElement(o.Z,{className:d.avatar,src:t.author.avatar})),r.createElement(i.ZP,{item:!0,xs:10},r.createElement("div",null,r.createElement("span",{className:d.author},t.author.name),r.createElement("span",{className:d.date},r.createElement(h(),{date:t.time,interval:6e4,fromNow:!0}))),r.createElement("div",{className:d.content},m()(Z)((0,y.ok)(t.content))),Boolean(t.image.using)&&r.createElement(b.NX,{src:t.image.link,className:d.image}),r.createElement(i.ZP,{container:!0,spacing:2,style:{textAlign:"center"}},r.createElement(i.ZP,{item:!0,xs:4},r.createElement(l.Z,{className:d.actionBtn,onClick:function(){return c(t.author.name)},disabled:null==E.Alias.twitter},r.createElement(s.G,{icon:["fas","reply"]}))),r.createElement(i.ZP,{item:!0,xs:4},r.createElement(l.Z,{className:d.actionBtn,onClick:function(){return u(t)},disabled:null==E.Alias.twitter||t.retweet||t.cid==E.ID},r.createElement("span",{className:d.btnCount},n),r.createElement(s.G,{icon:["fas","retweet"]}))),r.createElement(i.ZP,{item:!0,xs:4},r.createElement(l.Z,{color:t.likes.includes(E.ID)?"primary":"inherit",className:d.actionBtn,onClick:A,disabled:null==E.Alias.twitter||C},r.createElement("span",{className:d.btnCount},t.likes.length),r.createElement(s.G,{icon:["fas","heart"]}))))))}},95028:e=>{e.exports=function(e){var t=0;function n(e,r){if(!e.fn||"function"!=typeof e.fn)return r;if(!(e.regex&&e.regex instanceof RegExp))return r;if("string"==typeof r){for(var a=e.regex,i=null,o=[];null!==(i=a.exec(r));){var l=i.index,c=i[0];o.push(r.substring(0,l)),o.push(e.fn(++t,i)),r=r.substring(l+c.length,r.length+1),a.lastIndex=0}return o.push(r),o}return Array.isArray(r)?r.map((function(t){return n(e,t)})):r}return function(t){return e&&Array.isArray(e)&&e.length?(e.forEach((function(e){return t=n(e,t)})),t):t}}}}]);
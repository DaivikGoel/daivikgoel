(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,,,,,,function(A,e,t){A.exports={div_column:"div_div_column__ozUeQ",div_row:"div_div_row__2SwHV",align_center:"div_align_center__30WSO",justify_center:"div_justify_center__1A3sC",fill_parent:"div_fill_parent__kxZUV",align_stretch:"div_align_stretch__2zjYL",align_start:"div_align_start__3TrUs",align_end:"div_align_end__19_lz",justify_stretch:"div_justify_stretch__2qRco",justify_end:"div_justify_end__3NUyT",justify_space_between:"div_justify_space_between__3-maD",justify_space_evenly:"div_justify_space_evenly__3yWLj",align_self_stretch:"div_align_self_stretch__1ujXh",align_self_center:"div_align_self_center__3I5w9",align_self_end:"div_align_self_end__1p8uB"}},,,function(A,e,t){A.exports={loader_top_container:"loader__loader_top_container___3WIis",background_loader_container:"loader__background_loader_container___2XqzP",background_container:"loader__background_container___oHylQ",background:"loader__background___24oXk",percentage_text:"loader__percentage_text___2JN0x",loading_text_container:"loader__loading_text_container___1TmyY",loading_text:"loader__loading_text___MQ_fE"}},,,,function(A,e,t){"use strict";t.d(e,"c",function(){return o}),t.d(e,"b",function(){return r}),t.d(e,"a",function(){return g});var n=t(0),c=t.n(n),a=t(54),i=t.n(a),o=function(A,e){return Math.floor(Math.random()*(e-A+1)+A)},r=function(A){return i()(A,"<br/>",function(A,e,t){return c.a.createElement("br",{key:e})})},g=function(A,e){var t,n,c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;n=c.call(window,function a(i){void 0==t&&(t=i),i-t>=e?(A(),s(n)):n=c.call(window,a)})},s=function(A){var e=window.cancelAnimationFrame||window.mozCancelAnimationFrame;e.call(window,A)}},,function(A,e,t){"use strict";var n=t(18),c=t(27),a=t(4),i=t(10),o=t(8),r=t(7),g=t(0),s=t.n(g),f=t(12),d=t.n(f),u=t(16),l=function(A){Object(o.a)(t,A);var e=Object(r.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var A=this.props,e=A.row,t=A.align,a=A.alignSelf,i=A.justify,o=A.fillParent,r=A.className,g=A.children,f=A.animate,l=A.flex,p=A.style,E=A.passRef,b=Object(c.a)(A,["row","align","alignSelf","justify","fillParent","className","children","animate","flex","style","passRef"]),m=[e?d.a.div_row:d.a.div_column,t?"string"==typeof t?d.a["align_".concat(t)]:d.a.align_center:"",i?"string"==typeof i?d.a["justify_".concat(i)]:d.a.justify_center:"",a?"string"==typeof a?d.a["align_self_".concat(a)]:d.a.align_self_center:"",o?d.a.fill_parent:"",r],w=p||{};return l&&(w=Object(n.a)(Object(n.a)({},w),{},{flex:"number"==typeof l?l:1})),f?s.a.createElement(u.a.div,Object.assign({className:m.join(" "),style:w},b),g):s.a.createElement("div",Object.assign({ref:E,className:m.join(" "),style:w},b),g)}}]),t}(g.Component);l.defaultProps={passRef:null},e.a=Object(g.memo)(l)},,,,,,,function(A,e,t){A.exports={background_image_layer:"background_animator_background_image_layer__36wbM"}},,,,,function(A,e,t){A.exports=t.p+"static/media/background-dark-doodle-first-layer.658debd5.png"},function(A,e,t){A.exports=t.p+"static/media/background-dark-doodle-second-layer.49f0fd27.png"},function(A,e,t){A.exports=t.p+"static/media/view.dbd9a9dc.jpg"},,,,,,function(A,e,t){"use strict";var n=t(0),c=t.n(n),a=t(28),i=t.n(a),o=t(16),r=(t(42),t(33)),g=t.n(r),s=t(34),f=t.n(s),d=t(35),u=t.n(d),l=function(A,e){return"translate(".concat(A/20,"px,").concat(e/20,"px)")},p=function(A,e){return"translate(".concat(A/15,"px,").concat(e/15,"px)")},E=function(A,e){return"translate(".concat(A/10,"px,").concat(e/10,"px)")};e.a=Object(n.memo)(function(A){var e,t,a=A.clientX,r=A.clientY,s=Object(o.c)({xy:(e=a,t=r,[e-window.innerWidth/2,t-window.innerHeight/2]),config:{mass:10,tension:550,friction:240}});return c.a.createElement(n.Fragment,null,c.a.createElement(o.a.div,{className:i.a.background_image_layer,style:{transform:s.xy.interpolate(l),backgroundImage:"url(".concat(u.a,")")}}),c.a.createElement(o.a.div,{className:i.a.background_image_layer,style:{transform:s.xy.interpolate(p),backgroundImage:"url(".concat(f.a,")")}}),c.a.createElement(o.a.div,{className:i.a.background_image_layer,style:{transform:s.xy.interpolate(E),backgroundImage:"url(".concat(g.a,")")}}))})},function(A,e,t){A.exports=t.p+"static/media/background-dark-doodle-fixed-layer.eabc78e2.png"},,,,,,,,function(A,e,t){"use strict";var n=t(14),c=t(4),a=t(10),i=t(8),o=t(7),r=t(0),g=t.n(r),s=t(15),f=t.n(s),d={IS_LOADING:"IS_LOADING",COMPLETED_LOADING:"COMPLETED_LOADING",SHOW_INTRO:"SHOW_INTRO",INTRO_COMPLETED:"INTRO_COMPLETED",SHOW_PAGE:"SHOW_PAGE"},u=t(30),l=t(21),p=t(2),E=t(18),b=t(53),m=t.n(b).a.withConverter({read:function(A,e){return A},write:function(A,e){return A}}),w={set:function(A,e,t){m.set(A,e,Object(E.a)(Object(E.a)({},t),{},{expires:20}))},get:function(A){return m.get(A)},getJSON:function(A){return m.getJSON(A)},delete:function(A){m.remove(A,{path:""})},checkIfCookieEnabled:function(){if(navigator.cookieEnabled)return!0;document.cookie="cookietest=1";var A=-1!==document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",A}},M=t(41),C=t(19),I=function(A){var e=[];return A.keys().forEach(function(t){e.push(A(t))}),e},B=function(A,e){var t=new Image;return t.src=A,t.onload=e,t.onerror=e,t},_=t(109),v=t(110),O=t(113),h=function(A){Object(i.a)(s,A);var e=Object(o.a)(s);function s(A){var a;return Object(c.a)(this,s),(a=e.call(this,A)).startLoader=function(){var A=a.props.location,e=Array.from(document.images);[].concat(Object(n.a)(I(_)),Object(n.a)(I(v))).map(function(A){return e.push(B(A,a.incrementLoading))}),Promise.all([t.e(0),t.e(1)]).then(t.bind(null,317)).then(function(A){return a.incrementLoading()}),Promise.all([t.e(0),t.e(2)]).then(t.bind(null,318)).then(function(A){}),a.totalItems=e.length+2;var c=!0;if(e&&e.forEach(function(A){c&&(c=A.complete)}),c)a.completeLoading(!0);else{var i=w.get("INTRO_COMPLETED");Object(p.e)(A.pathname,{path:"/project/:projectSlug?",exact:!0,strict:!1})&&i?a.completeLoading(!0):a.valuateProgress()}},a.valuateProgress=function(){var A=a.totalItems-a.itemsLoaded<=1,e=A?600:400;Object(C.a)(function(){A&&a.incrementLoading(),a.setState({contentLoadedPercentage:Math.trunc(a.itemsLoaded/a.totalItems*100)}),a.itemsLoaded>=a.totalItems?a.completeLoading():a.valuateProgress()},e)},a.incrementLoading=function(){a.itemsLoaded=a.itemsLoaded+1},a.completeLoading=function(A){var e=a.state,t=e.contentLoadedPercentage,n=e.disableIntro,c=w.get("INTRO_COMPLETED"),i=[];if(I(O).map(function(A){return i.push(B(A))}),A)return a.setState({pageState:d.SHOW_PAGE,showBackground:!1});100!=t&&a.setState({contentLoadedPercentage:100}),a.setState({pageState:d.COMPLETED_LOADING}),Object(C.a)(function(){n||c?(a.setState({pageState:d.SHOW_PAGE}),Object(C.a)(function(){return a.setState({showBackground:!1})},400)):a.setState({pageState:d.SHOW_INTRO})},500)},a.onIntroAnimationEnd=function(){a.setState({pageState:d.INTRO_COMPLETED}),Object(C.a)(function(){a.setState({pageState:d.SHOW_PAGE}),Object(C.a)(function(){return a.setState({showBackground:!1})},400)},500)},a.state={contentLoadedPercentage:0,showBackground:!0,pageState:d.IS_LOADING,disableIntro:!0},a.lastUpdated=0,a.itemsLoaded=0,a.totalItems=0,a}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.startLoader()}},{key:"render",value:function(){var A=this.props.children,e=this.state,t=e.contentLoadedPercentage,n=e.pageState,c=e.showBackground;return g.a.createElement(l.a,{className:f.a.loader_top_container},n==d.SHOW_PAGE&&A,c&&g.a.createElement(l.a,{row:!0,align:!0,className:f.a.background_loader_container},g.a.createElement("div",{className:f.a.background_container},g.a.createElement("div",{className:f.a.background},g.a.createElement(M.a,{clientX:0,clientY:0}))),g.a.createElement(u.Transition,{items:n,from:{opacity:1},enter:{opacity:1},leave:{opacity:0}},function(A){return A==d.IS_LOADING&&function(A){return g.a.createElement(r.Fragment,null,g.a.createElement(u.Spring,{to:{width:"calc(100vw - ".concat(t,"vw)"),x:t}},function(e){return g.a.createElement(r.Fragment,null,g.a.createElement("div",{style:A,className:f.a.percentage_text},Math.floor(e.x)),g.a.createElement("div",{style:{opacity:A.opacity,width:e.width},className:f.a.loading_text_container},g.a.createElement("div",{className:f.a.loading_text},"Loading...")))}))}})))}}]),s}(r.Component);e.a=Object(p.g)(h)},,function(A,e,t){A.exports={main_container:"app__main_container___3-AMd"}},,,,,,,function(A,e,t){A.exports=t.p+"static/media/RCAF-first.3024f229.png"},function(A,e,t){A.exports=t.p+"static/media/ibi-first.b37e77c1.jpg"},function(A,e,t){A.exports=t.p+"static/media/mosaic-first.c4000f0d.png"},function(A,e,t){A.exports=t.p+"static/media/shaw-logo-rest.ae14c25b.png"},,,,,,,function(A,e){A.exports="data:image/png;base64,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"},function(A,e,t){A.exports=t.p+"static/media/RCAF-rest.15e609cc.png"},function(A,e,t){A.exports=t.p+"static/media/ibi-rest.0b617fee.png"},function(A,e,t){A.exports=t.p+"static/media/ibm-first.2b3ee8dd.png"},function(A,e,t){A.exports=t.p+"static/media/mosaic-rest.546d68a9.png"},function(A,e,t){A.exports=t.p+"static/media/profile-pic.7d620020.jpeg"},function(A,e,t){A.exports=t.p+"static/media/shaw-first.1f938b7e.png"},function(A,e,t){A.exports=t.p+"static/media/tesla-first.cf97d49d.png"},function(A,e,t){A.exports=t.p+"static/media/Me1.2d6ab612.jpg"},function(A,e,t){A.exports=t.p+"static/media/TAD-background.82eb382c.jpg"},function(A,e,t){A.exports=t.p+"static/media/Thinking.3d15a8fb.jpg"},function(A,e,t){A.exports=t.p+"static/media/UWVoice.94ea5bae.jpg"},function(A,e,t){A.exports=t.p+"static/media/hack.ba7be832.jpg"},function(A,e,t){A.exports=t.p+"static/media/medium.96ab1fe1.jpg"},function(A,e,t){A.exports=t.p+"static/media/airforce.68b780a8.jpg"},function(A,e,t){A.exports=t.p+"static/media/ibm.40010961.jpg"},function(A,e,t){A.exports=t.p+"static/media/max-saeling--6DrJ58xtt8-unsplash.eb3a9fca.jpg"},function(A,e,t){A.exports=t.p+"static/media/newyork.48bd9d0f.jpg"},function(A,e,t){A.exports=t.p+"static/media/shaw-background.30537365.jpg"},function(A,e,t){A.exports=t.p+"static/media/tech-doodle-background-image.3aed0545.png"},function(A,e,t){A.exports=t.p+"static/media/tesla.a8981a9a.jpg"},function(A,e,t){A.exports=t.p+"static/media/tesla2.d0f8d640.jpg"},function(A,e,t){A.exports=t.p+"static/media/toronto.13f6bb07.jpg"},function(A,e,t){A.exports=t(134)},,,,,function(A,e,t){},,,,,,,,,,,,function(A,e,t){var n={"./IBM-rest.png":69,"./RCAF-first.png":59,"./RCAF-rest.png":70,"./background-dark-doodle-first-layer.png":33,"./background-dark-doodle-fixed-layer.png":42,"./background-dark-doodle-second-layer.png":34,"./ibi-first.jpg":60,"./ibi-rest.png":71,"./ibm-first.png":72,"./mosaic-first.png":61,"./mosaic-rest.png":73,"./profile-pic.jpeg":74,"./shaw-first.png":75,"./shaw-logo-rest.png":62,"./tesla-first.png":76,"./view.jpg":35};function c(A){var e=a(A);return t(e)}function a(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}c.keys=function(){return Object.keys(n)},c.resolve=a,A.exports=c,c.id=109},function(A,e,t){var n={"./Me1.jpg":77,"./TAD-background.jpg":78,"./Thinking.jpg":79,"./UWVoice.jpg":80,"./hack.jpg":81,"./htn.png":111,"./medium.jpg":82,"./react-native-background-image.png":112};function c(A){var e=a(A);return t(e)}function a(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}c.keys=function(){return Object.keys(n)},c.resolve=a,A.exports=c,c.id=110},function(A,e,t){A.exports=t.p+"static/media/htn.828782ce.png"},function(A,e,t){A.exports=t.p+"static/media/react-native-background-image.5c657d3b.png"},function(A,e,t){var n={"./Thinking.jpg":114,"./airforce.jpg":83,"./ibm.jpg":84,"./max-saeling--6DrJ58xtt8-unsplash.jpg":85,"./newyork.jpg":86,"./shaw-background.jpg":87,"./tech-doodle-background-image.png":88,"./tesla.jpg":89,"./tesla2.jpg":90,"./toronto.jpg":91};function c(A){var e=a(A);return t(e)}function a(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}c.keys=function(){return Object.keys(n)},c.resolve=a,A.exports=c,c.id=113},function(A,e,t){A.exports=t.p+"static/media/Thinking.3d15a8fb.jpg"},,,,,,,,,,,,,,,,,,,,function(A,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),a=t(26),i=(t(97),t(52)),o=t.n(i),r=t(21),g=t(50),s=t(49),f=t(2),d=t(31),u=t(27),l=function(A){var e=A.match,t=A.whenToRender,a=A.component,i=Object(u.a)(A,["match","whenToRender","component"]),o=Object(n.useState)(t(e)),r=Object(d.a)(o,2),g=r[0],s=r[1],f=Object(n.useState)(!1),l=Object(d.a)(f,2),p=l[0],E=l[1];Object(n.useEffect)(function(){t(e)?s(!0):g&&E(!0)},[e,t]);return g&&c.a.createElement(a,Object.assign({match:e,startPageEndAnimation:p,onPageAnimationEnd:function(){s(!1),E(!1)}},i))},p=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,317))}),E=c.a.lazy(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,318))}),b=function(){return c.a.createElement(r.a,{className:o.a.main_container},c.a.createElement(s.a,null,c.a.createElement(n.Suspense,{fallback:null},c.a.createElement(f.c,null,c.a.createElement(f.a,{path:""},c.a.createElement(g.a,null,c.a.createElement(p,null),c.a.createElement(f.a,{exact:!0,path:"/project/:projectSlug?",children:function(A){return c.a.createElement(l,Object.assign({component:E,whenToRender:function(A){return A&&A.params&&A.params.projectSlug}},A))}})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=t(38),w=document.getElementById("root");w.hasChildNodes()?Object(a.hydrate)(c.a.createElement(b,null),w):Object(a.render)(c.a.createElement(b,null),w),m.a.initialize("UA-98419716-1"),m.a.pageview(window.location.pathname+window.location.search),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(A){A.unregister()})}],[[92,4,5]]]);
//# sourceMappingURL=main.3e7b975b.chunk.js.map
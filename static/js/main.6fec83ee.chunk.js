(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},20:function(e,n,t){e.exports=t(35)},25:function(e,n,t){},26:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(11),c=t.n(o),l=(t(25),t(12)),u=t(13),i=t(18),s=t(14),d=t(19),f=t(4),p=t(3),m=t(15),h=t.n(m),E=(t(26),function(){for(var e={handleButtonClick:function(){},handleInputFocus:function(){}},n={setHeaderHandler:function(n,t){if(!t||t.length<1)throw new TypeError("An event handler needs to be supplied: function(event) {...}");if(!(n in e))throw new TypeError("Unknown event handler supplied");e[n]=t}},t=function(){var t=r[a];n[t]=function(n){return e[t](n)}},a=0,r=Object.keys(e);a<r.length;a++)t();return Object.freeze(n)}());function v(e){var n=e.controls;return r.a.createElement("header",{className:"App-header"},r.a.createElement(f.b,{to:"/"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})),r.a.createElement(p.a,{path:"/bar",render:function(){return r.a.createElement("p",null,"BarHeader",r.a.createElement("button",{onClick:n.handleButtonClick},"Click me!"))}}),r.a.createElement(p.a,{path:"/foo",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"FooHeader"),r.a.createElement("input",{onFocus:function(e){return n.handleInputFocus(e)}}))}}),r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return"La-".concat("la-".repeat(10),"la")}}))}var b=function(e){function n(e){var t;Object(l.a)(this,n),t=Object(i.a)(this,Object(s.a)(n).call(this,e));var a=e.controls.setHeaderHandler;return a("handleButtonClick",function(e){alert("This is Barta!"),e.preventDefault()}),a("handleInputFocus",function(e){e.preventDefault()}),t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(f.b,{to:"/foo"},'Please focus!", said the Bar-tender')}}]),n}(r.a.PureComponent),w=10,g=!0;function k(e){return(0,e.controls.setHeaderHandler)("handleInputFocus",function(e){var n=e.target;n.value="A Fooz pedal!",n.style.border="dashed 3px green";var t=function(e){w=g?w+10:w-10,e.target.style.fontSize=w+"px",w>50&&(g=!1),w<11&&(g=!0)};n.addEventListener("keyup",t),n.addEventListener("blur",function(){n.removeEventListener("keyup",t)},{once:!0})}),r.a.createElement(f.b,{to:"/"},'"I AM focused!", said the Foo-baller')}var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{basename:"/shared-header-solution"},r.a.createElement(v,{controls:E}),r.a.createElement(p.a,{path:"/bar",render:function(){return r.a.createElement(b,{controls:E})}}),r.a.createElement(p.a,{path:"/foo",render:function(){return r.a.createElement(k,{controls:E})}}),r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(f.b,{to:"/bar"},"Go to bar")}})),r.a.createElement("p",null,"This is the end, my friend"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.6fec83ee.chunk.js.map
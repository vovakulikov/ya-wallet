webpackJsonp([0],[,function(e,t,n){n(2),e.exports=n(5)},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";e.exports=n(4)},function(e,t,n){"use strict"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(0),u=n(13),i=(n.n(u),n(18)),c=function(e){r.default.render(o.default.createElement(u.AppContainer,null,o.default.createElement(e,null)),document.getElementById("root"))};c(i.a);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(c,"render","/home/vovakulikov/Desktop/yaSch/node-school-wallet-app/source/client/index.js")}()},,,,,,,,function(e,t,n){e.exports=n(14)},function(e,t,n){"use strict";e.exports=n(15)},function(e,t,n){"use strict";e.exports.AppContainer=n(16)},function(e,t,n){"use strict";e.exports=n(17)},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),a=c.Component,l=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return this.props.component?c.createElement(this.props.component,this.props.props):c.Children.only(this.props.children)}}]),t}(a);e.exports=l},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n(19),a=n(21),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h1",null," Hello World react people"),i.default.createElement(c.a,null),i.default.createElement(a.a,{name:"Vova"}))}}]),t}(i.default.Component),f=s;t.a=f;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"App","/home/vovakulikov/Desktop/yaSch/node-school-wallet-app/source/client/app.js"),__REACT_HOT_LOADER__.register(f,"default","/home/vovakulikov/Desktop/yaSch/node-school-wallet-app/source/client/app.js"))}()},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n(20),a=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),l=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={counter:0},n}return u(t,e),a(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.increment.bind(this),1e3)}},{key:"increment",value:function(){this.setState(function(e){return{counter:e.counter-5}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.counter;return i.default.createElement("header",null,i.default.createElement("div",null,"Webpack is doing its thing with React and ES2015"),i.default.createElement("div",null,e))}}]),t}(i.Component),s=l;t.a=s;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"App","/home/vovakulikov/Desktop/yaSch/node-school-wallet-app/source/client/components/layout.js"),__REACT_HOT_LOADER__.register(s,"default","/home/vovakulikov/Desktop/yaSch/node-school-wallet-app/source/client/components/layout.js"))}()},function(e,t){},function(e,t,n){"use strict";var o=n(0),r=function(e){return o.default.createElement("h1",null,"Hello, ",e.name)};t.a=r;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(r,"default","/home/vovakulikov/Desktop/yaSch/node-school-wallet-app/source/client/components/user.js")}()}],[1]);
(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[32],{1158:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(214),i=n(215),c=n(20),l=n(1159),s=n.n(l),u=n(1160),d=n.n(u),p=Object(c.b)(s.a,d.a),m=[{name:"1-base",title:Object(c.b)("基本用法 \n Popover 放置在一个组件内部弹出","Base \n The basic usage."),component:n(1161).default,rawText:n(1162)},{name:"2-position",title:Object(c.b)("弹出位置 \n 内置了十二个弹出的位置","Position \n Twelve pop-up positions are built in."),component:n(1163).default,rawText:n(1164)},{name:"3-click",title:Object(c.b)("点击触发 \n 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发","Trigger \n Set the trigger property to change the trigger event to 'click'."),component:n(1165).default,rawText:n(1166)},{name:"4-func",title:Object(c.b)("关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件","Close \n Set the content property to a function, you can handle the close event inside the popup panel."),component:n(1167).default,rawText:n(1168)},{name:"5-type",title:Object(c.b)("样式 \n 内置四种样式","Type \n Four styles are built in."),component:n(1169).default,rawText:n(1170)},{name:"6-type",title:Object(c.b)(" \n 如果内置样式不满足需求，可以通过 background 和 border 自定义样式"," \n Customize the style with background and border."),component:n(1171).default,rawText:n(1172)},{name:"7-old",title:Object(c.b)("旧API \n 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐","Old API \n Old API, is out of date."),component:n(1173).default,rawText:n(1174)},{name:"8-event",title:Object(c.b)("事件 \n ","Events \n "),component:n(1175).default,rawText:n(1176)}];t.default=Object(r.a)(function(e){return a.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:p,examples:m}))})},1159:function(e,t){e.exports="# Popover *气泡*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#fff' | 弹出层背景色（含箭头） |\n| border | string | '#dee2e6' | 弹出层边框颜色（含箭头） |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 弹出显示内容 |\n| onClose | function | 无 | Popover 关闭时回调时间 |\n| onOpen | function | 无 | Popover 弹出回调事件 |\n| position | string | 'top' | 弹出层位置，可选值为 \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | 无 | 最外层扩展样式 |\n| trigger | string | 'hover' | 触发方式，可选值为 \\['click', 'hover'] |\n| type | string | 无 | 可选值为，\\['success', 'info', 'warning', 'danger'] |\n| * content | ReactElement \\| function | | 旧接口，如果content为空，父组件作为触发元素 | "},1160:function(e,t){e.exports="# Popover\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#fff' | Pop-up background-color(with arrows) |\n| border | string | '#dee2e6' | The color of pop-up border(with arrows) |\n| className | string | - | Extend className |\n| children | ReactElement | required | Pop-up content. |\n| onClose | function | - | Callback event when close. |\n| onOpen | function | - | Callback event when open. |\n| position | string | 'top' | The position of pop-up layer, options:  \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | - | The pop-up container style |\n| trigger | string | 'hover' | options: \\['click', 'hover'] |\n| type | string | none | Options: \\['success', 'info', 'warning', 'danger'] |\n| * content | ReactElement \\| function | | Old API, out of date. | "},1161:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(80),i=n(1345);t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(i.a,{style:{width:200,padding:20}},"Some text"),"Hover")}},1162:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Popover 放置在一个组件内部弹出\n * en - Base\n *    -- The basic usage.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover style={{ width: 200, padding: 20 }}>Some text</Popover>\n      Hover\n    </Button>\n  )\n}\n"},1163:function(e,t,n){"use strict";n.r(t);var o=n(21),a=n(0),r=n.n(a),i=n(1345),c=[[null,"bottom-left","bottom","bottom-right",null],["right-top",null,null,null,"left-top"],["right",null,null,null,"left"],["right-bottom",null,null,null,"left-bottom"],[null,"top-left","top","top-right",null]],l={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee",cursor:"pointer"};t.default=function(){return c.map(function(e,t){return r.a.createElement("div",{key:t},e.map(function(e,t){return e?r.a.createElement("div",{key:t,style:l},r.a.createElement(i.a,{trigger:"click",position:e},r.a.createElement("div",{style:{width:240,padding:30}},"Some text")),e):r.a.createElement("div",{key:t,style:Object(o.a)({},l,{border:0})})}))})}},1164:function(e,t){e.exports="/**\n * cn - 弹出位置\n *    -- 内置了十二个弹出的位置\n * en - Position\n *    -- Twelve pop-up positions are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst positions = [\n  [null, 'bottom-left', 'bottom', 'bottom-right', null],\n  ['right-top', null, null, null, 'left-top'],\n  ['right', null, null, null, 'left'],\n  ['right-bottom', null, null, null, 'left-bottom'],\n  [null, 'top-left', 'top', 'top-right', null],\n]\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n  cursor: 'pointer',\n}\n\nexport default function() {\n  return positions.map((row, i) => (\n    <div key={i}>\n      {row.map((p, j) =>\n        p ? (\n          <div key={j} style={style}>\n            <Popover trigger=\"click\" position={p}>\n              <div style={{ width: 240, padding: 30 }}>Some text</div>\n            </Popover>\n            {p}\n          </div>\n        ) : (\n          <div key={j} style={{ ...style, border: 0 }} />\n        )\n      )}\n    </div>\n  ))\n}\n"},1165:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(80),i=n(1345),c=n(250);t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(i.a,{trigger:"click",style:{marginRight:12}},a.a.createElement(c.a,{style:{width:300,border:0,background:"transparent"}},a.a.createElement(c.a.Header,null,"Header"),a.a.createElement(c.a.Body,{style:{height:80}},"Body"))),"Click me")}},1166:function(e,t){e.exports="/**\n * cn - 点击触发\n *    -- 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发\n * en - Trigger\n *    -- Set the trigger property to change the trigger event to 'click'.\n */\nimport React from 'react'\nimport { Button, Popover, Card } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover trigger=\"click\" style={{ marginRight: 12 }}>\n        <Card style={{ width: 300, border: 0, background: 'transparent' }}>\n          <Card.Header>Header</Card.Header>\n          <Card.Body style={{ height: 80 }}>Body</Card.Body>\n        </Card>\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1167:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(80),i=n(1345),c=n(256);t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(i.a,{trigger:"click"},function(e){return a.a.createElement("div",{style:{padding:20}},a.a.createElement("div",null,"Are you sure you want to close this panel?"),a.a.createElement("div",{style:{marginTop:30,textAlign:"right"}},a.a.createElement(r.a,{size:"small",onClick:function(){e(),c.a.success("Popover panel closed.")}},"close")))}),"Click me")}},1168:function(e,t){e.exports="/**\n * cn - 关闭事件\n *    -- content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件\n * en - Close\n *    -- Set the content property to a function, you can handle the close event inside the popup panel.\n */\nimport React from 'react'\nimport { Button, Popover, Message } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover trigger=\"click\">\n        {close => (\n          <div style={{ padding: 20 }}>\n            <div>Are you sure you want to close this panel?</div>\n            <div style={{ marginTop: 30, textAlign: 'right' }}>\n              <Button\n                size=\"small\"\n                onClick={() => {\n                  close()\n                  Message.success('Popover panel closed.')\n                }}\n              >\n                close\n              </Button>\n            </div>\n          </div>\n        )}\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1169:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(1345),i=["success","info","warning","danger"],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){return i.map(function(e,t){return a.a.createElement("div",{style:c,key:t},a.a.createElement(r.a,{type:e,style:{width:200,padding:20}},"Some text"),e)})}},1170:function(e,t){e.exports="/**\n * cn - 样式\n *    -- 内置四种样式\n * en - Type\n *    -- Four styles are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst types = ['success', 'info', 'warning', 'danger']\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n}\n\nexport default function() {\n  return types.map((t, i) => (\n    <div style={style} key={i}>\n      <Popover type={t} style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      {t}\n    </div>\n  ))\n}\n"},1171:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(80),i=n(1345);t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(i.a,{background:"#555",border:"gold",style:{width:200,padding:20,color:"gold"}},"Some text"),"Hover")}},1172:function(e,t){e.exports="/**\n * cn -\n *    -- 如果内置样式不满足需求，可以通过 background 和 border 自定义样式\n * en -\n *    -- Customize the style with background and border.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover background=\"#555\" border=\"gold\" style={{ width: 200, padding: 20, color: 'gold' }}>\n        Some text\n      </Popover>\n      Hover\n    </Button>\n  )\n}\n"},1173:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(1345),i=n(80);t.default=function(){var e=a.a.createElement("div",{style:{width:200,padding:20}},"Some text");return a.a.createElement(r.a,{content:e},a.a.createElement(i.a,null,"Hover"))}},1174:function(e,t){e.exports="/**\n * cn - 旧API\n *    -- 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐\n * en - Old API\n *    -- Old API, is out of date.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return (\n    <Popover content={content}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},1175:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(80),i=n(1345);t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(i.a,{onOpen:function(){return console.log("popover open")},onClose:function(){return console.log("popover close")},trigger:"click",style:{width:200,padding:20}},"Some text"),"Click me.")}},1176:function(e,t){e.exports="/**\n * cn - 事件\n *    --\n * en - Events\n *    --\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const open = () => console.log('popover open')\n  const close = () => console.log('popover close')\n  return (\n    <Button>\n      <Popover onOpen={open} onClose={close} trigger=\"click\" style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      Click me.\n    </Button>\n  )\n}\n"},1345:function(e,t,n){"use strict";var o={};n.r(o),n.d(o,"hide",function(){return l}),n.d(o,"show",function(){return s}),n.d(o,"move",function(){return u}),n.d(o,"isCurrent",function(){return j});var a=n(0),d=n.n(a),r=n(313),i=n(78),p=n.n(i),m=n(11),c=n(314),h=document.createElement("div");h.style.display="none",Object(c.a)(function(){document.body.appendChild(h)});var f=document.createElement("div");f.className=Object(m.t)("arrow"),h.appendChild(f);var b=document.createElement("div");b.className=Object(m.t)("content"),h.appendChild(b);var v,g=null;function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:500;g=setTimeout(function(){h.style.display="none",h.className="",v=void 0},e)}var y=l.bind(null,0);function O(e){h.contains(e.target)||(l(0),document.removeEventListener("click",O))}function s(e,t){var n=e.position,o=e.style,a=e.content,r=e.background,i=e.border,c=e.noArrow,l=e.type;v=t,g&&clearTimeout(g),h.style.cssText="display: none",Object.keys(o).forEach(function(e){h.style[e]=o[e]}),h.setAttribute("raw-left",o.left),h.setAttribute("raw-top",o.top),h.style.background=r||"",b.style.background=r||"",f.style.background=r||"",h.style.borderColor=i||"",f.style.borderColor=i||"";var s=Object(m.t)("_",n,l);f.style.display=c?"none":"block",setTimeout(function(){h.style.display="block",h.className=s},0);var u="function"==typeof a?a(y):a;p.a.render(u,b),document.addEventListener("click",O)}function u(e,t,n){e===v&&(h.style.left="".concat(t,"px"),h.style.top="".concat(n,"px"))}function j(e){return e===v}h.addEventListener("mouseenter",function(){g&&(clearTimeout(g),document.addEventListener("click",O))});var E=n(4),k=n(5),w=n(8),C=n(2),S=n(18),x=n(7),P=n(1),T=n(19),N=n(282),R=n(9),H=n(64),B=function(e){return e.stopPropagation()},A=function(e){function n(e){var t;return Object(E.a)(this,n),(t=Object(w.a)(this,Object(C.a)(n).call(this,e))).state={show:!1},t.isRendered=!1,t.placeholderRef=t.placeholderRef.bind(Object(P.a)(Object(P.a)(t))),t.clickAway=t.clickAway.bind(Object(P.a)(Object(P.a)(t))),t.handleShow=t.handleShow.bind(Object(P.a)(Object(P.a)(t))),t.handleHide0=t.handleHide.bind(Object(P.a)(Object(P.a)(t)),0),t.handleHide500=t.handleHide.bind(Object(P.a)(Object(P.a)(t)),500),t.element=document.createElement("div"),t}return Object(x.a)(n,e),Object(k.a)(n,[{key:"componentDidMount",value:function(){Object(S.a)(Object(C.a)(n.prototype),"componentDidMount",this).call(this),this.parentElement=this.placeholder.parentElement,"hover"===this.props.trigger?(this.parentElement.addEventListener("mouseenter",this.handleShow),this.parentElement.addEventListener("mouseleave",this.handleHide500),this.element.addEventListener("mouseenter",this.handleShow),this.element.addEventListener("mouseleave",this.handleHide500)):this.parentElement.addEventListener("click",this.handleShow),document.body.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){Object(S.a)(Object(C.a)(n.prototype),"componentWillUnmount",this).call(this),this.parentElement.removeEventListener("mouseenter",this.handleShow),this.parentElement.removeEventListener("mouseleave",this.handleHide500),this.parentElement.removeEventListener("click",this.handleShow),document.removeEventListener("click",this.clickAway),document.body.removeChild(this.element)}},{key:"getPositionStr",value:function(){var e=this.props.position;if(e)return e;var t=this.parentElement.getBoundingClientRect(),n=H.b.height,o=H.b.width;return e=t.top+t.height/2>n/2?"top":"bottom",t.left<100?e+="-right":t.right>o-100&&(e+="-left"),e}},{key:"placeholderRef",value:function(e){this.placeholder=e}},{key:"clickAway",value:function(e){this.parentElement.contains(e.target)||this.element.contains(e.target)||this.handleHide(0)}},{key:"handleShow",value:function(){this.closeTimer&&clearTimeout(this.closeTimer),this.state.show||(document.addEventListener("click",this.clickAway),this.setState({show:!0}),this.props.onOpen&&this.props.onOpen())}},{key:"handleHide",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:500;this.closeTimer=setTimeout(function(){document.removeEventListener("click",e.clickAway),e.setState({show:!1}),e.props.onClose&&e.props.onClose()},t)}},{key:"toggle",value:function(e){this.closeTimer&&clearTimeout(this.closeTimer),this.setState({show:e})}},{key:"render",value:function(){var e=this.props,t=e.background,n=e.border,o=e.children,a=e.type,r=this.state.show;if(!r&&!this.isRendered)return d.a.createElement("noscript",{ref:this.placeholderRef});this.isRendered=!0;var i={background:t,borderColor:n},c=Object.assign({},this.props.style,{background:t}),l=this.getPositionStr(),s=Object(N.a)(l,this.parentElement);this.element.className=Object(m.t)("_",l,a);var u=this.element.style;return u.left="".concat(s.left,"px"),u.top="".concat(s.top,"px"),u.display=r?"block":"none",t&&(u.background=t),n&&(u.borderColor=n),p.a.createPortal([d.a.createElement("div",{key:"arrow",className:Object(m.t)("arrow"),style:i}),d.a.createElement("div",{key:"content",onClick:B,className:Object(m.t)("content"),style:c},Object(R.e)(o)?o(this.handleHide0):o)],this.element)}}]),n}(T.b);A.defaultProps={background:"",trigger:"hover"};var L=A,I=Object(r.a)(o);function M(e){return e.content?d.a.createElement(I,e):d.a.createElement(L,e)}M.displayName="ShineoutPopover";t.a=M},214:function(e,t,n){"use strict";var l=n(29),s=n(0),u=n.n(s),d=n(220),p=n(72),m=n(25);t.a=function(c){return function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),o=t[0],a=t[1],n=Object(s.useState)([]),r=Object(l.a)(n,1)[0],i=Object(s.useCallback)(function(e){e.forEach(function(e){r.push(e)})},[]);Object(s.useEffect)(function(){var e=function(){var n=document.documentElement.scrollTop,e=r.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var o=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(o=e.id)}),a(o)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return u.a.createElement("div",{className:Object(m.f)("_")},u.a.createElement(c,{onHeadingSetted:i}),u.a.createElement(d.a,{className:Object(m.f)("sticky"),top:50},u.a.createElement("div",{className:Object(m.f)("nav")},r.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return u.a.createElement("a",{key:t,className:Object(m.f)("level-".concat(e.level),o===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},215:function(e,t,n){"use strict";var x=n(0),P=n.n(x),u=n(15),T=n(29),o=n(221),d=n.n(o),p=n(37),N=n(25),m=n(20),a=n(14),i=n.n(a),r=n(222),c=n.n(r),R=(n(223),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,o=e.onHighLight,a=e.value,r=Object(x.useRef)(null);return Object(x.useEffect)(function(){var e=r.current;c.a.highlightElement(e,!1,function(){o&&o(e.offsetHeight)})},[]),P.a.createElement("pre",{ref:r,className:i()(n||"lang-jsx",Object(N.a)("pre"))},P.a.createElement("code",null,a))}),H=n(76),l=n(67),s=n(4),h=n(5),f=n(8),b=n(2),v=n(7),g=n(19),y=n(216),B=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(f.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(v.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(y.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(y.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,o=t.placeholder;return e?n:P.a.createElement("span",{ref:this.placeholderRef},o)}}]),n}(g.b),A=n(75),L=n(72),I=P.a.createElement("div",{className:Object(N.a)("placeholder")},P.a.createElement(l.a,null));function O(e){var t=e.component,n=e.id,o=e.name,a=e.rawText,r=e.title,i=Object(x.useRef)(null),c=Object(x.useState)(!1),l=Object(T.a)(c,2),s=l[0],u=l[1],d=Object(x.useState)(),p=Object(T.a)(d,2),m=p[0],h=p[1],f=Object(x.useState)(),b=Object(T.a)(f,1)[0],v=function e(t,n,o){i.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,o)},16),o&&(document.documentElement.scrollTop-=t)};Object(x.useEffect)(function(){if(i.current)if(s)i.current.style.height="".concat(m,"px");else{var e=m%15;0<e&&v(e,1,b),v((m-e)/15,15,b)}},[s]);var g=function(e){u(!s),b=e},y=function(e){return P.a.createElement("a",{href:"javascript:;",className:Object(N.a)("toggle"),onClick:g.bind(null,e)},P.a.createElement(A.a,{name:s?"code-close":"code"}))},O=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=L.a.location.search,E="?example=";if(0===j.indexOf(E)&&(j=j.replace(E,""),o.indexOf(j)<0))return null;var k=r.split("\n"),w=Object(H.a)(k),C=w[0],S=w.slice(1);return C&&(C=C.trim()),P.a.createElement(x.Fragment,null,C&&P.a.createElement("h3",{key:"0",id:n},C),P.a.createElement(B,{placeholder:I},P.a.createElement("div",{className:Object(N.a)("_",s&&"showcode")},P.a.createElement("div",{className:Object(N.a)("body")},Object(x.createElement)(t)),0<r.length&&P.a.createElement("div",{className:Object(N.a)("desc")},S.map(function(e,t){return P.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),y(!1)),P.a.createElement("div",{ref:i,className:Object(N.a)("code")},P.a.createElement(R,{onHighLight:function(e){h(e)},onClose:g,value:O}),y(!0)))))}O.defaultProps={rawText:""};var j=function(e){var t=e.children,n=Object(x.useState)(!1),o=Object(T.a)(n,2),a=o[0],r=o[1],i=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),c=a?"pre":"div";return P.a.createElement("div",{onClick:function(){r(!a)},className:Object(N.e)("console")},P.a.createElement(c,null,i))};j.defaultProps={children:[]};var E=j;function k(e){var t=e.children;return P.a.createElement("table",{className:"doc-api-table"},t)}k.defaultProps={};var w=k,C=/^<code name="([\w|-]+)" /,S=/^<example name="([\w|-]+)"/;function M(e){var t=e.onHeadingSetted,r=e.codes,i=e.examples,n=e.source,o=Object(x.useState)([]),a=Object(T.a)(o,1)[0],c=Object(x.useState)({}),l=Object(T.a)(c,1)[0];Object(x.useEffect)(function(){t&&t(a)},[]);var s=function(e){a.push(e)};return a=[],P.a.createElement(d.a,{className:Object(N.e)("_"),source:n,renderers:{code:R,heading:function(e){var t=e.level,n=e.children,o="".concat(t,"-").concat(n[0]),a="h".concat(t);if("object"==typeof n[0])return P.a.createElement(a,null,n);if(!l[o]){var r="heading-".concat(Object(p.b)());2!==t&&3!==t||s({id:r,level:t,children:n}),l[o]=P.a.createElement(a,{id:r},n)}return l[o]},html:function(e){if("<example />"===e.value)return function(){if(l.examples)return l.examples;if(!i)return P.a.createElement("div",null);var e=Object(m.b)("示例","Example"),t="heading-".concat(Object(p.b)());return s({id:t,level:2,children:[e]}),l.examples=[P.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(i.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),o=e.title.split("\n"),a=Object(T.a)(o,1)[0];return s({id:n,level:3,children:[a]}),P.a.createElement(O,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),l.examples}();var t=e.value.match(S);if(t)return function(t){var e="example-".concat(t);if(!l[e]){var n=(i||[]).find(function(e){return e.name===t});l[e]=n?P.a.createElement(O,n):null}return l[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return P.a.createElement("br",null);var n,o,a=e.value.match(C);return a?(n=a[1],(o=r[n])?[P.a.createElement(R,{key:"cb",value:o.text})].concat(Object(u.a)(o.log.map(function(e,t){return P.a.createElement(E,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:w,link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return P.a.createElement("a",{href:e.href,target:t},e.children)}}})}M.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var D=n(74),_=n(214);n.d(t,"a",function(){return q});var z,F=((z=function(e){var t=Object(x.useState)(e.source),n=Object(T.a)(t,2),o=n[0],a=n[1];return Object(x.useEffect)(function(){e.loader&&e.loader().then(function(e){a(e.default)})},[]),o?P.a.createElement(M,Object.assign({},e,{source:o})):P.a.createElement(D.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(x.memo)(z));t.b=F;function q(t){return Object(_.a)(function(e){return P.a.createElement(F,Object.assign({},e,{loader:t}))})}},216:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var o=n(218),a=n(37),r=n(64),i={},c=null,l=!1,s=r.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(a.b)();return i[n]=e,n}return e.render(),null}function d(e){e&&delete i[e]}document.addEventListener("scroll",function(){c&&clearTimeout(c),c=setTimeout(function(){l||(l=!0,Object.keys(i).forEach(function(e){var t=i[e],n=t.element,o=t.render,a=n.getBoundingClientRect();a.bottom<0||a.top>s||(delete i[e],o())}),l=!1),c=null},80)},o.a)},229:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var o=n(0),a=n.n(o),r=n(28),i=n.n(r)()(),c=i.Provider;var l=function(n){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return function(t){return a.a.createElement(i.Consumer,null,function(e){return a.a.createElement(n,Object.assign({},t,function(t,e){if(!t)return{};var n={};return e.forEach(function(e){n[e]=t[e]}),n}(e,o)))})}}},230:function(e,t,n){"use strict";var o=n(21),a=n(4),r=n(5),i=n(8),c=n(2),l=n(7),s=n(1),u=n(0),d=n.n(u),p=n(19),m=n(35),h=n(23),f=n(11),b=n(65),v=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={dismiss:0},t.bindRef=t.bindRef.bind(Object(s.a)(Object(s.a)(t))),t.dismiss=t.dismiss.bind(Object(s.a)(Object(s.a)(t))),t.handleClose=t.handleClose.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(0<this.state.dismiss)){var t=this.props.duration;0<t?this.setState({dismiss:1},function(){setTimeout(e.dismiss,t)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,t=this.props,n=t.type,o=t.iconSize;if("boolean"==typeof e&&(e=b.a[Object(m.a)(n)]),!e)return null;var a={width:o,height:o,marginRight:o/2};return d.a.createElement("div",{className:Object(f.a)("icon"),style:a},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var t=this.props,n=t.children,o=t.className,a=t.type,r=t.onClose,i=this.renderIcon(),c=this.props.style,l=Object(f.a)("_",a,1===e&&"dismissed",r&&"with-close",i&&"with-icon");return o&&(l+=" ".concat(o)),d.a.createElement("div",{ref:this.bindRef,className:l,style:c},r&&d.a.createElement("a",{href:"javascript:;",className:Object(f.a)("close"),onClick:this.handleClose},b.a.Close),i,d.a.createElement("div",{className:Object(f.a)("content")},n))}}]),n}(p.b);v.defaultProps=Object(o.a)({},h.a,{duration:216,iconSize:14,type:"warning"}),v.displayName="ShineoutAlert",t.a=v},244:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var o=n(0),a=n.n(o),r=n(28),i=n.n(r)()(),c=i.Consumer,l=i.Provider,s=function(n){return function(t){return a.a.createElement(c,null,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return a.a.createElement(n,Object.assign({},t,{scrollElement:e.element,scrollLeft:e.left,scrollTop:e.top}))})}}},250:function(e,t,n){"use strict";var o=n(21),a=n(4),r=n(5),i=n(8),c=n(2),l=n(7),s=n(1),u=n(0),d=n.n(u),p=n(14),m=n.n(p),h=n(23),f=n(77),b=n(11),v=n(229),g=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={collapsed:e.defaultCollapsed,formStatus:""},t.bindElement=t.bindElement.bind(Object(s.a)(Object(s.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(s.a)(Object(s.a)(t))),t.handleCollapse=t.handleCollapse.bind(Object(s.a)(Object(s.a)(t))),t.setFormStatus=t.setFormStatus.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"getCollapsed",value:function(){var e=this.props,t=e.collapsible,n=e.collapsed;if(t)return void 0!==n?n:this.state.collapsed}},{key:"setFormStatus",value:function(e){e!==this.state.formStatus&&this.setState({formStatus:e})}},{key:"bindElement",value:function(e){this.element=e}},{key:"handleCollapse",value:function(){var e=!this.getCollapsed();this.props.onCollapse?this.props.onCollapse(e):this.setState({collapsed:e})}},{key:"handleSubmit",value:function(){var e=this.element.querySelector("form");e?Object(f.b)(e,"submit"):console.error(new Error("No form found."))}},{key:"render",value:function(){var e=this.props.collapsible,t=this.getCollapsed(),n=!0===this.props.shadow?"shadow":this.props.shadow,o=m()(Object(b.d)("_",n,e&&"collapsible",t&&"collapsed"),this.props.className),a={onCollapse:this.handleCollapse,collapsible:e,collapsed:t,formStatus:this.state.formStatus,onSubmit:this.handleSubmit,setFormStatus:this.setFormStatus};return d.a.createElement("div",{className:o,ref:this.bindElement,style:this.props.style},d.a.createElement(v.a,{value:a},this.props.children))}}]),n}(u.PureComponent);g.defaultProps=Object(o.a)({},h.a,{defaultCollapsed:!0,collapsible:!1});var y=g,O=n(12),j=n(80),E=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"handleClick",value:function(){var e=this;setTimeout(function(){e.props.onSubmit()},50)}},{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.loading),n=e.children,o=e.formStatus,a=Object(O.a)(e,["onSubmit","loading","children","formStatus"]);return d.a.createElement(j.a,Object.assign({type:"primary"},a,{disabled:"disabled"===o,loading:"pending"===o||t,onClick:this.handleClick}),n)}}]),n}(u.PureComponent),k=n(65),w=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderIndicator",value:function(){if(void 0!==this.props.collapsed){var e=Object(b.d)("indicator");return d.a.createElement("span",{className:e},k.a.AngleRight)}}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.align,o=e.className,a=e.children,r=e.onCollapse,i=e.collapsed,c=m()(Object(b.d)("header",n),o),l="boolean"==typeof i?r:void 0;return d.a.createElement("div",{style:t,onClick:l,className:c},this.renderIndicator(),a)}}]),t}(u.PureComponent),C=n(81),S=Object(C.a)(["collapse"],"fast"),x=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.collapsed,o=e.collapsible,a=Object(O.a)(e,["className","collapsed","collapsible"]),r=m()(Object(b.d)("body"),t);return o?d.a.createElement(S,{show:!n},d.a.createElement("div",Object.assign({},a,{className:r}))):d.a.createElement("div",Object.assign({},a,{className:r}))}}]),t}(u.PureComponent),P=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.align,n=e.className,o=Object(O.a)(e,["align","className"]),a=m()(Object(b.d)("footer",t),n);return d.a.createElement("div",Object.assign({},o,{className:a}))}}]),t}(u.PureComponent),T=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={active:e.active||e.defaultActive},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"getActive",value:function(){return void 0!==this.props.active?this.props.active:this.state.active}},{key:"handleActive",value:function(e){e===this.state.active&&(e=-1),this.setState({active:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var o=this,a=this.state.active;return u.Children.toArray(this.props.children).map(function(e,t){var n={collapsed:a!==t,collapsible:!0,className:m()("object"==typeof e&&e.className,Object(b.d)("accordion")),onCollapse:o.handleActive.bind(o,t)};return Object(u.cloneElement)(e,n)})}}]),n}(n(19).b);T.defaultProps={defaultActive:0};var N=T;y.Header=Object(v.b)(w,["collapsed","onCollapse"]),y.Body=Object(v.b)(x,["collapsed","collapsible"]),y.Footer=P,y.Submit=Object(v.b)(E,["onSubmit","formStatus"]),y.Accordion=N,y.Body.displayName="ShineoutCardBody",y.Header.displayName="ShineoutCardHeader",y.displayName="ShineoutCard";t.a=y},256:function(e,t,n){"use strict";var o=n(0),c=n.n(o),a=n(78),r=n.n(a),l=n(11),i=n(4),s=n(5),u=n(8),d=n(2),p=n(7),m=n(27),h=n(19),f=n(230),b=n(37),v=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(u.a)(this,Object(d.a)(n).call(this,e))).state={messages:[]},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"addMessage",value:function(t){var e=this,n=Object(b.b)();this.setState(Object(m.a)(function(e){e.messages.push(Object.assign({id:n},t))})),0<t.duration&&setTimeout(function(){e.setState(Object(m.a)(function(e){e.messages.forEach(function(e){e.id===n&&(e.dismiss=!0)})}))},1e3*t.duration)}},{key:"removeMessage",value:function(t){var n,e=this.state.messages.filter(function(e){return e.id!==t||(e.onClose&&(n=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),n&&n()}},{key:"closeEvent",value:function(e,t){if(0===t)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var i=this;return[this.state.messages.map(function(e){var t=e.id,n=e.type,o=e.content,a=e.dismiss,r=e.title;return c.a.createElement("div",{key:t,className:Object(l.q)("item")},c.a.createElement(f.a,{className:Object(l.q)("msg"),dismiss:a,onClose:i.removeMessage.bind(i,t),icon:!0,iconSize:r?20:14,type:n},r&&c.a.createElement("h3",null,r),o))})]}}]),n}(h.b);v.displayName="ShineoutMessage";var g=v,y={},O={};function j(e){y[e]&&(r.a.unmountComponentAtNode(y[e]),document.body.removeChild(y[e]),delete y[e]),O[e]&&delete O[e]}function E(a){return new Promise(function(t){var e,n,o=O[a];o?t(o):r.a.render(c.a.createElement(g,{ref:function(e){O[a]=e,t(e)},onDestory:j.bind(null,a)}),(e=a,(n=document.createElement("div")).className=Object(l.q)("_",e),document.body.appendChild(n),y[e]=n))})}var k=function(c){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=e.onClose,a=e.position,r=void 0===a?"top":a,i=e.title;E(r).then(function(e){e.addMessage({content:t,duration:n,type:c,onClose:o,title:i})})}};t.a={show:k("default"),success:k("success"),info:k("info"),warn:k("warning"),warning:k("warning"),danger:k("danger"),error:k("danger"),close:function(e){e?j(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){j(e)})}}},282:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var c=n(64),o=function(e,t){var n,o,a=t.getBoundingClientRect(),r=c.a.top,i=c.a.left;switch(e){case"top-left":n=i+a.left,o=r+a.top;break;case"top":n=i+a.left+a.width/2,o=r+a.top;break;case"top-right":n=i+a.left+a.width,o=r+a.top;break;case"left-top":n=i+a.left,o=r+a.top;break;case"left":n=i+a.left,o=r+a.top+a.height/2;break;case"left-bottom":n=i+a.left,o=r+a.bottom;break;case"right-top":n=i+a.left+a.width,o=r+a.top;break;case"right":n=i+a.left+a.width,o=r+a.top+a.height/2;break;case"right-bottom":n=i+a.left+a.width,o=r+a.bottom;break;case"bottom-left":n=i+a.left,o=r+a.top+a.height;break;case"bottom":n=i+a.left+a.width/2,o=r+a.top+a.height;break;case"bottom-right":n=i+a.left+a.width,o=r+a.top+a.height}return{left:Math.round(n),top:Math.round(o)}}},313:function(e,t,n){"use strict";var o=n(4),a=n(5),s=n(8),u=n(2),d=n(7),p=n(1),m=n(0),h=n.n(m),f=n(244),b=n(37),v=n(282);t.a=function(e){var r=e.show,i=e.hide,c=e.move,l=e.isCurrent,t=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).handleShow=t.handleShow.bind(Object(p.a)(Object(p.a)(t))),t.tryHide=t.tryHide.bind(Object(p.a)(Object(p.a)(t))),t.elementRef=t.elementRef.bind(Object(p.a)(Object(p.a)(t))),t.id=Object(b.b)(),t}return Object(d.a)(n,e),Object(a.a)(n,[{key:"componentDidUpdate",value:function(e){if(c&&l(this.id)){var t=this.props,n=t.scrollLeft,o=t.scrollTop;if(e.scrollLeft!==n||e.scrollTop!==o){var a=this.getPosition(),r=a.left,i=a.top;c(this.id,r,i),this.tryHide()}}}},{key:"componentWillUnmount",value:function(){i()}},{key:"getElement",value:function(){return this.placeholderElement.nextSibling}},{key:"getPosition",value:function(){var e=this.props.position,t=this.getElement();return Object(v.a)(e,t)}},{key:"elementRef",value:function(e){this.placeholderElement=e}},{key:"tryHide",value:function(){var e=this.props.scrollElement,t=this.getElement().getBoundingClientRect(),n=e?e.getBoundingClientRect():{};(t.bottom<n.top||t.top>n.bottom||t.right<n.left||t.left>n.right)&&i(0)}},{key:"handleShow",value:function(){var a=this;this.showTimer&&clearTimeout(this.showTimer),this.showTimer=setTimeout(function(){var e=a.getPosition(),t=e.left,n=e.top,o=Object.assign({},a.props,{style:{left:"".concat(t,"px"),top:"".concat(n,"px")}});r(o,a.id,a.props.style)},this.props.delay)}},{key:"render",value:function(){var t=this,e=this.props,n=e.children,o=e.trigger;if(!Object(m.isValidElement)(n))return console.error(new Error("Tooltip children expect a single ReactElement.")),null;var a={key:"el"};return"hover"===o?(a.onMouseEnter=this.handleShow,a.onMouseLeave=function(){return i()}):a.onClick=function(e){e.stopPropagation(),setTimeout(t.handleShow,10),n.props.onClick&&n.props.onClick()},[h.a.createElement("noscript",{ref:this.elementRef,key:"ns"}),Object(m.cloneElement)(n,a)]}}]),n}(m.PureComponent);return t.defaultProps={animation:!0,delay:0,position:"top",trigger:"hover"},Object(f.b)(t)}},314:function(e,t,n){"use strict";t.a=function(e){e&&("loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e))}}}]);
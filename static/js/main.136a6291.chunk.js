(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),c=s.n(r),i=s(5),o=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=(s(14),s(15),s(2)),d=s.n(b),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="",t.ALPABET="ALPABET",t.LENGTH="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.sortByAlphabet=function(){t.setState({sortType:n.ALPABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.handleReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.handleReset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=e!==n.NONE||!1!==s,c=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);return c.sort((function(t,e){switch(s){case n.ALPABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}(j,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":e!==n.ALPABET}),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":e!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!1===s}),onClick:this.handleReverse,children:"Reverse"}),r&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(p.jsx)("ul",{children:c.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(h.Component);c.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.136a6291.chunk.js.map
(this["webpackJsonpClicky-Xeno"]=this["webpackJsonpClicky-Xeno"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/images/021-alien.png","clicked":false},{"id":2,"image":"/assets/images/023-alien.png","clicked":false},{"id":3,"image":"/assets/images/032-alien.png","clicked":false},{"id":4,"image":"/assets/images/035-alien.png","clicked":false},{"id":5,"image":"/assets/images/038-alien.png","clicked":false},{"id":6,"image":"/assets/images/039-alien.png","clicked":false},{"id":7,"image":"/assets/images/041-alien.png","clicked":false},{"id":8,"image":"/assets/images/044-alien.png","clicked":false},{"id":9,"image":"/assets/images/047-alien.png","clicked":false},{"id":10,"image":"/assets/images/006-alien.png","clicked":false},{"id":11,"image":"/assets/images/012-alien.png","clicked":false},{"id":12,"image":"/assets/images/009-alien.png","clicked":false},{"id":13,"image":"/assets/images/014-alien.png","clicked":false},{"id":14,"image":"/assets/images/042-alien.png","clicked":false},{"id":15,"image":"/assets/images/050-alien.png","clicked":false},{"id":16,"image":"/assets/images/022-alien.png","clicked":false}]')},function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(8),c=t.n(s),r=(t(15),t(6)),l=t(1),o=t(2),m=t(4),u=t(3),d=t(5),g=(t(16),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={message:"",animating:!1},t.renderMessage=function(){switch(t.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click an image to begin!"}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=e.score,n=e.topScore,i={animating:!0};i.message=0===t&&0===n?"":0===t&&n>0?"incorrect":"correct",t===this.props.score&&this.state.message===i.message||this.setState(i)}},{key:"render",value:function(){var e=this;return i.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),a}(n.Component));t(17);var f=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",{className:"brand"},i.a.createElement("a",{href:"/"},"Clicky Xeno")),i.a.createElement(g,{score:e.score,topScore:e.topScore}),i.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};t(18);var h=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Clicky Xeno!"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};t(19);var p=function(e){return i.a.createElement("main",{className:"container"},e.children)};t(20);var k=function(e){return i.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})};t(21);var v=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"bottom"},"Clicky Xeno"))},E=t(9),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={data:E,score:0,topScore:0},t.handleCorrectGuess=function(e){var a=t.state,n=a.topScore,i=a.score+1,s=Math.max(i,n);t.setState({data:t.shuffleData(e),score:i,topScore:s})},t.handleIncorrectGuess=function(e){t.setState({data:t.resetData(e),score:0})},t.resetData=function(e){var a=e.map((function(e){return Object(r.a)({},e,{clicked:!1})}));return t.shuffleData(a)},t.shuffleData=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n,a--}return e},t.handleItemClick=function(e){var a=!1,n=t.state.data.map((function(t){var n=Object(r.a)({},t);return n.id===e&&(n.clicked||(n.clicked=!0,a=!0)),n}));a?t.handleCorrectGuess(n):t.handleIncorrectGuess(n)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(h,null),i.a.createElement(p,null,this.state.data.map((function(a){return i.a.createElement(k,{key:a.id,id:a.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:a.image})}))),i.a.createElement(v,null))}}]),a}(n.Component);var y=function(){return i.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.588123b7.chunk.js.map
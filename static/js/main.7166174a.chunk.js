(this["webpackJsonpcooking-recipe-app"]=this["webpackJsonpcooking-recipe-app"]||[]).push([[0],{13:function(e,a,t){},19:function(e,a,t){e.exports=t(30)},30:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(15),i=t.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(8),s=t.n(l),m=t(16),o=t(4);var p=t(18);t(13);var u=function(e){e.search;var a=e.setSearch,t=Object(r.useState)(""),n=Object(o.a)(t,2),i=n[0],l=n[1];return c.a.createElement("div",{className:"searchbar-compenent"},c.a.createElement("div",{className:"search-wrapper"},c.a.createElement("div",{className:"searchbar-wrapper"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i?(a(i),l("")):console.log("no value")}},c.a.createElement("div",{className:"input-wrapper"},c.a.createElement("input",{type:"text",className:"input-form textInput",placeholder:"search for recipe ...",value:i,onChange:function(e){return l(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"input-searchbar submit"}," ",c.a.createElement(p.a,null)," "))))))};var v=function(e){var a=e.props;return c.a.createElement("div",{className:"recipe"},c.a.createElement("div",{className:"recipe-info"},c.a.createElement("p",{className:"lable"},a.recipe.label),c.a.createElement("p",{className:"calories"},"Calories : ",a.recipe.calories.toFixed(2)),c.a.createElement("p",{className:"deit"}," ",a.recipe.healthLabels.join(" | "))),c.a.createElement("div",{className:"img-label"},a.recipe.image?c.a.createElement("img",{className:"recipe-img",alt:"pic",src:a.recipe.image}):c.a.createElement("h1",null,"Loading")))};var E=function(e){var a=e.props;return c.a.createElement("div",{className:"recipe"},c.a.createElement("div",{className:"recipe-info"},c.a.createElement("p",{className:"lable"},a.recipe.label),c.a.createElement("p",{className:"calories"},"Calories : ",a.recipe.calories.toFixed(2)),c.a.createElement("p",{className:"deit"}," ",a.recipe.healthLabels.join(" | "))),c.a.createElement("div",{className:"img-label"},a.recipe.image?c.a.createElement("img",{className:"recipe-img",alt:"pic",src:a.recipe.image}):c.a.createElement("h1",null,"Loading")))},d=t(6);var f=function(e){var a=e.reciper,t=e.view;console.log(t);var r=a.filter((function(e,a){if(a<4)return!0}));return console.log(r),"search"===t?c.a.createElement("div",{className:"recipe-wrapper",id:"recipe-wrapper"},a.map((function(e,a){return c.a.createElement(d.b,{key:a,to:"/recipeview/".concat(e.recipe.label)},c.a.createElement(v,{key:a,props:e}))}))):c.a.createElement("div",{className:"recipe-wrapper",id:"recipe-wrapper"},r.map((function(e,a){return c.a.createElement(d.b,{key:a,to:"/recipeview/".concat(e.recipe.label)},c.a.createElement(E,{key:a,props:e}))})))};var g=function(e){for(var a=e.recipesPerPage,t=e.totalRecipes,r=e.paginate,n=(e.currentPage,[]),i=1;i<=Math.ceil(t/a);i++)n.push(i);return c.a.createElement("div",null,c.a.createElement("ul",{className:"pagination"},n.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("a",{onClick:function(){r(e)}},e))}))))};var h=function(e){var a=e.currentPage,t=e.recipesPerPage,r=e.search,n=e.setSearch,i=e.recipes,l=e.setCurrentPage,s=a*t,m=s-t,o=i.slice(m,s);return c.a.createElement("div",{className:"home-page"},c.a.createElement(u,{search:r,setSearch:n}),c.a.createElement(f,{reciper:o,view:"search"}),c.a.createElement(g,{recipesPerPage:t,totalRecipes:i.length,paginate:function(e){l(e)},currentPage:a}))};var b=function(e){var a=e.id,t=e.recipes;Object(r.useEffect)((function(){}));var n=[];n=t.filter((function(e){return e.recipe.label===a}));var i=t.filter((function(e){return e.recipe.label!==a}));console.log(n);var l=n.filter((function(e,a){if(console.log(a),0==a)return!0}));return console.log(l),c.a.createElement("div",{className:"recipeview-page"},c.a.createElement("div",{className:"recipeview-compenent"}),l.map((function(e,a){return c.a.createElement("div",{key:a,className:"item-wrapper"},c.a.createElement("div",{className:"item-sec-a"},c.a.createElement("div",{className:"view-img"},c.a.createElement("img",{className:"img-label-view",alt:"pic",src:e.recipe.image})),c.a.createElement("div",{className:"recipe-view"},c.a.createElement("div",{className:"recipe-info"},c.a.createElement("h4",null,e.recipe.label),c.a.createElement("p",{className:"calories"},"Calories : ",e.recipe.calories.toFixed(2)),c.a.createElement("p",{className:"deit"}," ",e.recipe.healthLabels.join(" | "))))),c.a.createElement("div",{className:"item-sec-b"},c.a.createElement("span",{className:"ingredient-title"},e.recipe.ingredientLines.length," Ingredient"),c.a.createElement("div",{className:"recipe-view-ingr"},c.a.createElement("ul",null,e.recipe.ingredientLines.map((function(e,a){return c.a.createElement("li",{key:a},e)}))))))})),i?c.a.createElement("div",{className:"relatedtitle"},"also try "):null,c.a.createElement(f,{reciper:i,view:"ralated"}))},N=t(1);var w=function(){var e=Object(r.useState)([]),a=Object(o.a)(e,2),t=a[0],n=a[1],i=Object(r.useState)(1),l=Object(o.a)(i,2),p=l[0],u=l[1],v=Object(r.useState)(10),E=Object(o.a)(v,1)[0],f=Object(r.useState)("chicken"),g=Object(o.a)(f,2),w=g[0],j=g[1];Object(r.useEffect)((function(){k()}),[w]);var k=function(){var e=Object(m.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(w,"&app_id=").concat("dffecd49","&app_key=").concat("06bd1a0e0b7da0e3bb098a6f14a3f394","&from=0&to=24"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null,c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/",component:function(){return c.a.createElement(h,{recipes:t,search:w,setSearch:j,recipesPerPage:E,currentPage:p,setCurrentPage:u})}}),c.a.createElement(N.a,{exact:!0,path:"/recipeview",component:b}),c.a.createElement(N.a,{exact:!0,path:"/recipeview/:id",render:function(e){var a=e.match;return c.a.createElement(b,{id:a.params.id,recipes:t})}}))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7166174a.chunk.js.map
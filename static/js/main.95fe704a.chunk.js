(this.webpackJsonpnotemacher=this.webpackJsonpnotemacher||[]).push([[0],{115:function(e,t,n){"use strict";t.a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,270)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),s(e),c(e),a(e)}))}},116:function(e,t,n){"use strict";var o=n(5),s=n(22),c=n.n(s),a=n(34),i=n(16),r=n(113),l=n(114),d=n(118),j=n(117),h=n(0),u=n(1),b=n.n(u),O=n(29),g=n.n(O),m=n(4),x=(n(48),function(e){var t=e.obj,n=e.open,o=e.deleteMongoItem,s=e.handleClickCategory,c=t.id,a=Object(m.convertFromHTML)(t.content),i=m.ContentState.createFromBlockArray(a.contentBlocks,a.entityMap),r=m.EditorState.createWithContent(i);return Object(h.jsxs)("div",{className:"noteItem",children:[Object(h.jsxs)("header",{children:[Object(h.jsxs)("div",{className:"note-id",children:[Object(h.jsxs)("span",{children:["note ID: ",t.id]}),Object(h.jsx)("button",{onClick:function(){return n(t.id)},children:"edit"}),Object(h.jsx)("button",{onClick:function(){return o()},children:"delete"})]}),Object(h.jsxs)("h4",{children:[t.title," "]}),Object(h.jsxs)("p",{className:"noteInfo",children:[Object(h.jsxs)("span",{children:["Created: ",t.dateCreation," by ",t.author]})," | ",Object(h.jsx)("span",{children:t.dateEdit?"Last edit: ".concat(t.dateEdit," by: ").concat(t.editor," "):"unedited"})]}),Object(h.jsxs)("p",{children:["Categories: ",function(){if(void 0!==t.categories)return t.categories.map((function(e){return e.length>0&&Object(h.jsx)("button",{className:"categories",onClick:function(){return s(e)},children:e})}))}()]})]}),Object(h.jsx)(m.Editor,{editorState:r,readOnly:!0})]},c)}),f=function(e){var t=e.id,n=e.title,o=e.author,s=e.editor,c=e.dateCreation,a=e.dateEdit,i=e.content,r=e.open,l=e.deleteIt;return Object(h.jsxs)("div",{className:"noteItem",children:[Object(h.jsxs)("header",{children:[Object(h.jsxs)("div",{className:"note-id",children:[Object(h.jsxs)("span",{children:["note ID: ",t]}),Object(h.jsx)("button",{onClick:function(){return r(t)},children:"edit"}),Object(h.jsx)("button",{onClick:function(e){return l(t)},children:"delete"})]}),Object(h.jsx)("h4",{children:n}),Object(h.jsxs)("p",{className:"noteInfo",children:[Object(h.jsxs)("span",{children:["Created: ",c," by ",o]})," | ",Object(h.jsx)("span",{children:a?"Last edit: ".concat(a," by: ").concat(s," "):"unedited"})]})]}),Object(h.jsx)("div",{className:"content",children:i})]},t)},p=n(9),C=n(8),S=function(e){var t,n,o=e.addFunction,s=e.changeFunction,c=e.edit,a=e.add,i=e.close,r=e.id;if(c)for(var l=0;l<C.length;l++)C[l].id===r&&(t=C[l].title,n=C[l].content);else t="",n="";var d=Object(u.useState)((function(){return m.EditorState.createWithContent(m.ContentState.createFromText(n))})),j=Object(p.a)(d,2),b=j[0],O=j[1],g=Object(u.useState)(t),x=Object(p.a)(g,2),f=x[0],S=x[1],v=Object(u.useState)(n),N=Object(p.a)(v,2),D=N[0],y=N[1],B=function(e,t){s(e,t,f,D),i()},M=function(e,t){c?(B(e,r),O(t)):(o(e,t),S(""),y(""),O((function(){return m.EditorState.createEmpty()})))},E=function(e){var t=e.getCurrentContent();O(e),function(e,t){var n=e.getPlainText("\n");y(n),O(t)}(t,e)};return Object(h.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:function(e){return M(e,D)},children:[Object(h.jsx)("label",{htmlFor:"title",children:c?"Title of [ "+r+" ]":"Title"}),Object(h.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(e){S(e.target.value)},value:f,required:!0}),Object(h.jsx)("label",{htmlFor:"content",children:"Content"}),Object(h.jsx)(m.Editor,{editorState:b,onChange:E,handleKeyCommand:function(e){var t=m.RichUtils.handleKeyCommand(b,e);return t?(E(t),"handled"):"not-handled"}}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"big",type:"submit",children:a?"ADD":"SAVE"})})]})},v=n(51),N=n.n(v),D=(n(112),n(28)),y=n.n(D),B=n(52),M=n.n(B),E=n(7),k=n(36),w=y()(),I=w.Toolbar,T=[w],L=function(e){var t=e.changeMongoFn,n=e.id,s=e.close,c=e.editMongoTime,a=e.userMongoID,i=e.stateCategoriesVal,r=e.stateTitleVal,l=e.stateContentVal,d=Object(m.convertFromHTML)(l),j=m.ContentState.createFromBlockArray(d.contentBlocks,d.entityMap),b=Object(u.useState)((function(){return m.EditorState.createWithContent(j)})),O=Object(p.a)(b,2),g=O[0],x=O[1],f=Object(u.useState)(r),C=Object(p.a)(f,2),S=C[0],v=C[1],y=Object(u.useState)([i,""].toString(", ")),B=Object(p.a)(y,2),w=B[0],L=B[1],A=function(e){x(e),l=Object(k.a)(e.getCurrentContent())};return Object(h.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:function(e){return function(e,o){var i=Array.from(w.split(","));L(Array.from(w.split(","))),l=Object(k.a)(g.getCurrentContent()),t(e,n,o,l,i,c,a),s()}(e,S)},children:[Object(h.jsx)("label",{htmlFor:"title",children:"Title of [ "+n+" ]"}),Object(h.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(e){v(e.target.value)},value:S,required:!0}),Object(h.jsx)("label",{htmlFor:"content",children:"Content"}),Object(h.jsxs)("div",{className:M.a.editor,children:[Object(h.jsx)(I,{children:function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(E.BoldButton,Object(o.a)({},e)),Object(h.jsx)(E.ItalicButton,Object(o.a)({},e)),Object(h.jsx)(E.UnderlineButton,Object(o.a)({},e)),Object(h.jsx)(E.CodeButton,Object(o.a)({},e)),Object(h.jsx)(D.Separator,Object(o.a)({},e)),Object(h.jsx)(E.HeadlineOneButton,Object(o.a)({},e)),Object(h.jsx)(E.HeadlineTwoButton,Object(o.a)({},e)),Object(h.jsx)(E.HeadlineThreeButton,Object(o.a)({},e)),Object(h.jsx)(E.UnorderedListButton,Object(o.a)({},e)),Object(h.jsx)(E.OrderedListButton,Object(o.a)({},e)),Object(h.jsx)(E.BlockquoteButton,Object(o.a)({},e)),Object(h.jsx)(E.CodeBlockButton,Object(o.a)({},e))]})}}),Object(h.jsx)(N.a,{editorState:g,onChange:A,handleKeyCommand:function(e){var t=m.RichUtils.handleKeyCommand(g,e);return t?(A(t),"handled"):"not-handled"},plugins:T})]}),Object(h.jsx)("button",{className:"big",type:"submit",children:"SAVE"}),Object(h.jsx)("label",{htmlFor:"categories",children:"Categories of [ "+[i]+" ]"}),Object(h.jsx)("input",{type:"text",name:"categories",id:"categories",onChange:function(e){L(e.target.value)},value:w}),Object(h.jsx)("h4",{children:"Result of EDIT"}),Object(h.jsxs)("p",{children:["Title: ",S]}),Object(h.jsxs)("p",{children:["Edit time: ",c]}),Object(h.jsxs)("p",{children:["Editor: ",a]}),Object(h.jsxs)("p",{children:["StateCategories: ",[i]]}),Object(h.jsxs)("p",{children:["Categories: ",w]})]})},A=y()(),J=A.Toolbar,F=[A],R=function(e){var t=e.addMongoFunction,n=e.edit,s=e.close,c=e.id,a=Object(u.useState)((function(){return m.EditorState.createEmpty()})),i=Object(p.a)(a,2),r=i[0],l=i[1],d=Object(u.useState)(""),j=Object(p.a)(d,2),b=j[0],O=j[1],g=Object(u.useState)(""),x=Object(p.a)(g,2),f=x[0],C=x[1],S=Object(u.useState)([]),v=Object(p.a)(S,2),y=v[0],B=v[1],w=function(e){var t=e.getCurrentContent();l(e),function(e,t){var n=Object(k.a)(e);C(n),l(t)}(t,e)};return Object(h.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:function(e){return function(e,n,o){var c=[];y.length&&(c=Array.from(y.split(","))),t(e,n,o,c),s()}(e,b,f)},children:[Object(h.jsx)("label",{htmlFor:"title",children:n?"Title of [ "+c+" ]":"Title"}),Object(h.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(e){O(e.target.value)},value:b,required:!0}),Object(h.jsx)("label",{htmlFor:"content",children:"Content"}),Object(h.jsxs)("div",{className:M.a.editor,children:[Object(h.jsx)(J,{children:function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(E.BoldButton,Object(o.a)({},e)),Object(h.jsx)(E.ItalicButton,Object(o.a)({},e)),Object(h.jsx)(E.UnderlineButton,Object(o.a)({},e)),Object(h.jsx)(E.CodeButton,Object(o.a)({},e)),Object(h.jsx)(D.Separator,Object(o.a)({},e)),Object(h.jsx)(E.HeadlineOneButton,Object(o.a)({},e)),Object(h.jsx)(E.HeadlineTwoButton,Object(o.a)({},e)),Object(h.jsx)(E.HeadlineThreeButton,Object(o.a)({},e)),Object(h.jsx)(E.UnorderedListButton,Object(o.a)({},e)),Object(h.jsx)(E.OrderedListButton,Object(o.a)({},e)),Object(h.jsx)(E.BlockquoteButton,Object(o.a)({},e)),Object(h.jsx)(E.CodeBlockButton,Object(o.a)({},e))]})}}),Object(h.jsx)(N.a,{editorState:r,onChange:w,handleKeyCommand:function(e){var t=m.RichUtils.handleKeyCommand(r,e);return t?(w(t),"handled"):"not-handled"},plugins:F})]}),Object(h.jsx)("label",{htmlFor:"categories",children:"Categories of"}),Object(h.jsx)("input",{type:"text",name:"categories",id:"categories",onChange:function(e){B(e.target.value),console.log("ADD1 categories",y)},value:y}),Object(h.jsx)("button",{className:"big",type:"submit",children:"ADD"})]})},V=function(){var e=Object(u.useState)(""),t=Object(p.a)(e,2),n=t[0],o=t[1];return Object(u.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,s,a,i,r,l,d,j,h,u,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.06&lon=17.01");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,s=n.properties.timeseries[0].data.instant.details.air_temperature,e.next=9,fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=31.47&lon=35.13");case 9:return a=e.sent,e.next=12,a.json();case 12:return i=e.sent,r=i.properties.timeseries[0].data.instant.details.air_temperature,e.next=16,fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=35.41&lon=139.41");case 16:return l=e.sent,e.next=19,l.json();case 19:return d=e.sent,j=d.properties.timeseries[0].data.instant.details.air_temperature,e.next=23,fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=9.1&lon=38.44");case 23:return h=e.sent,e.next=26,h.json();case 26:u=e.sent,b=u.properties.timeseries[0].data.instant.details.air_temperature,o([s,r,j,b]);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"(functional component w/ hooks useState and useEffect) Data fetched from Meteorologisk institutt:"}),Object(h.jsxs)("table",{className:"tableFetch",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"City"}),Object(h.jsx)("th",{children:"Temperature now"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Wroc\u0142aw"}),Object(h.jsxs)("td",{children:[n[0]," \xb0C"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u05d9\u05b0\u05e8\u05d5\u05bc\u05e9\u05b8\u05c1\u05dc\u05b7\u05d9\u05b4\u05dd\u200e"}),Object(h.jsxs)("td",{children:[n[1]," \xb0C"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u6771\u4eac"}),Object(h.jsxs)("td",{children:[n[2]," \xb0C"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u12a0\u12f2\u1235 \u12a0\u1260\u1263"}),Object(h.jsxs)("td",{children:[n[3]," \xb0C"]})]})]})]})]})},P=(n(269),"https://notemacher.herokuapp.com/notes"),H=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={notesJSON:Object(i.a)(C),isEditOpenJSON:!1,isEditOpenMongo:!1,isCreateOpenMongo:!1,isCreateOpenJSON:!1,id:"",nbpdata:null,euro:null,dollar:null,ratio:null,stateContentJSONVal:null,stateContentMongoVal:null,stateTitleMongoVal:null,stateCategoriesVal:null,editMongoTime:null,userMongoID:null,mongoDB:[],mongoDBArchive:[],searchValue:null,searchValueLength:0,categoriesSelected:null,reloadStuff:!0},e.openCreateJSON=function(){e.setState({isCreateOpenJSON:!0})},e.closeCreateJSON=function(){e.setState({isCreateOpenJSON:!1})},e.openEdit=function(t){var n=e.state.notesJSON.filter((function(e){return e.id===t}))[0].content;e.setState({isEditOpenJSON:!0,id:t,stateContentJSONVal:n})},e.closeEdit=function(){e.setState({isEditOpenJSON:!1})},e.addItem=function(t,n){t.preventDefault();var o=(new Date).toISOString().slice(0,10),s=(new Date).toLocaleTimeString("pl-PL").slice(0,5),c="".concat(o," - ").concat(s),a={id:String(t.target[0].value.slice(0,10).concat(C.length+1)),dateCreation:c,title:t.target[0].value,content:n,author:t.target[0].author||"anon"};e.setState((function(e){return{notesJSON:[].concat(Object(i.a)(e.notesJSON),[a]),isCreateOpenJSON:!1}})),C.push(a),t.target.reset()},e.editItem=function(t,n,o,s){t.preventDefault();for(var c=(new Date).toISOString().slice(0,10),a=(new Date).toLocaleTimeString("pl-PL").slice(0,5),r="".concat(c," - ").concat(a),l=0;l<C.length;l++)C[l].id===n&&(C[l].dateEdit=r,C[l].title=o,C[l].content=s,C[l].editor=t.target[0].editor||"anon");e.setState({notesJSON:Object(i.a)(C)})},e.removeItem=function(t){for(var n=0;n<C.length;n++)C[n].id===t&&C.splice(n,1);e.setState({notesJSON:Object(i.a)(C)})},e.searchFunction=function(t){e.setState({notesJSON:t})},e.openCreateMongo=function(){e.setState({isCreateOpenMongo:!0})},e.closeCreateMongo=function(){e.setState({isCreateOpenMongo:!1})},e.closeEditMongo=function(){e.setState({isEditOpenMongo:!1,isCreateOpenMongo:!1})},e.addItemMongo=function(t,n,o,s){t.preventDefault(),console.log("APP : ",s);var c=(new Date).toISOString().slice(0,10),a=(new Date).toLocaleTimeString("pl-PL").slice(0,5),i="".concat(c," - ").concat(a),r={id:String(n.slice(0,10).concat(e.state.mongoDB.length+1)),dateCreation:i,title:n,content:o,author:"anon",categories:s};g.a.post(P,r).then((function(e){})).catch((function(e){console.log("ERROR IN REACT APP AAD MONGO NOTE",e)})),e.setState({isCreateOpenMongo:!1})},e.openEditMongo=function(t){var n=(new Date).toISOString().slice(0,10),o=(new Date).toLocaleTimeString("pl-PL").slice(0,5),s="".concat(n," - ").concat(o),c=e.state.mongoDB.filter((function(e){return e.id===t}))[0].title,a=e.state.mongoDB.filter((function(e){return e.id===t}))[0].content,i=e.state.mongoDB.filter((function(e){return e.id===t}))[0].categories;e.setState({isEditOpenMongo:!0,id:t,stateTitleMongoVal:c,stateContentMongoVal:a,editMongoTime:s,userMongoID:"anon",stateCategoriesVal:i})},e.editItemMongo=function(t,n,o,s,c,a,i){t.preventDefault();for(var r=(new Date).toISOString().slice(0,10),l=(new Date).toLocaleTimeString("pl-PL").slice(0,5),d="".concat(r," - ").concat(l),j=0;j<e.state.mongoDB.length;j++)e.state.mongoDB[j].id===n&&function(){var t={_id:e.state.mongoDB[j]._id,id:e.state.mongoDB[j].id,dateCreation:e.state.mongoDB[j].dateCreation,author:e.state.mongoDB[j].author,dateEdit:d,title:o,content:s,editor:"anon",categories:c},n=e.state.mongoDB;n.splice(j,1,t),g.a.put(P,t).then((function(t){e.setState({mongoDB:n,isCreateOpenMongo:!1})})).catch((function(e){console.log("ERROR IN REACT EDIT MONGO NOTE",e)}))}()},e.removeItemMongo=function(e){g.a.delete(P,{data:e}).then((function(e){})).catch((function(e){console.log("ERROR IN REACT REMOVE MONGO NOTE",e)}))},e.searchMongoFunction=function(t){t.preventDefault();var n=t.target[0].value.toLowerCase(),o=e.state.mongoDBArchive.filter((function(e){return e.title.toLowerCase().includes(n)||(t=e.content,t.toLowerCase().replaceAll(/<\/?[\w\s]*>|<.+[\W]>/g,"")).includes(n)||e.categories.toString().toLowerCase().includes(n);var t}));e.setState({searchValueLength:t.target[0].value.length,reloadStuff:!1,mongoDB:o,searchValue:o}),document.getElementsByClassName("searchResult")[0].classList.add("result")},e.handleInput=function(t){0===t.target.value.length&&e.setState({searchValueLength:0},document.getElementsByClassName("searchResult")[0].classList.remove("result"))},e.restoreList=function(){e.setState({reloadStuff:!0,searchValueLength:0,mongoDB:e.state.mongoDBArchive,categoriesSelected:null}),document.getElementsByClassName("searchResult")[0].classList.remove("result")},e.searchInstant=function(t){var n=t.target.value.toLowerCase(),o=e.state.mongoDBArchive.filter((function(e){return e.title.toLowerCase().includes(n)||(t=e.content,t.toLowerCase().replaceAll(/<\/?[\w\s]*>|<.+[\W]>/g,"")).includes(n)||e.categories.toString().toLowerCase().includes(n);var t}));return e.setState({reloadStuff:!1,mongoDB:o,searchValue:o}),0===t.target.value.length?document.getElementsByClassName("searchResult")[0].classList.remove("result"):document.getElementsByClassName("searchResult")[0].classList.add("result"),o},e.handleClickCategory=function(t){var n=e.state.mongoDBArchive.filter((function(e){return e.categories.includes(t)}));e.setState({categoriesSelected:t,searchValue:n,reloadStuff:!1}),console.log(t,e.state.categoriesSelected,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nbp.pl/api/exchangerates/tables/a");case 2:return t=e.sent,this.state.reloadStuff&&g.a.get(P).then((function(e){o.setState({mongoDB:Object(i.a)(e.data),mongoDBArchive:Object(i.a)(e.data)})})).catch((function(e){console.log("ERROR IN componentDidMount: ",e)})),e.next=6,t.json();case 6:n=e.sent,this.setState({nbpdata:Object(i.a)(n),euro:Object(i.a)(n)[0].rates[7].mid,dollar:Object(i.a)(n)[0].rates[1].mid});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(a.a)(c.a.mark((function e(){var t=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.reloadStuff&&g.a.get(P).then((function(e){t.setState({mongoDB:Object(i.a)(e.data),mongoDBArchive:Object(i.a)(e.data)})})).catch((function(e){console.log("ERROR IN componentDidUpdate: ",e)}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mongoNotes",value:function(){var e=this;return this.state.reloadStuff?this.state.mongoDB.map((function(t,n){return Object(h.jsx)(x,{obj:t,open:e.openEditMongo,deleteMongoItem:function(){return e.removeItemMongo(t)},handleClickCategory:e.handleClickCategory},t.id)})):this.state.searchValue.map((function(t,n){return Object(h.jsx)(x,{obj:t,open:e.openEditMongo,deleteMongoItem:function(){return e.removeItemMongo(t)},handleClickCategory:e.handleClickCategory},t.id)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.isEditOpenJSON,s=t.isEditOpenMongo,c=t.isCreateOpenMongo,a=t.isCreateOpenJSON;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h2",{children:"_notemacher"}),Object(h.jsxs)("nav",{className:"navgh",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://tdudkowski.github.io/",children:"[ to Github Page ]"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://github.com/tdudkowski/notemacher",children:"[ repo of _notemacher ]"})})]}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:this.openCreateJSON,children:"ADD JSON Note"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:this.openCreateMongo,children:"ADD mongoDB Note"})})]})]}),Object(h.jsxs)("div",{className:"search",children:[Object(h.jsxs)("form",{onSubmit:function(t){return e.searchMongoFunction(t)},children:[Object(h.jsx)("input",{type:"text",name:"clickit",id:"clickit",placeholder:"search Mongo",onChange:this.handleInput}),Object(h.jsx)("button",{className:"big",type:"submit",children:"SEARCH"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",name:"instant",id:"instant",placeholder:"search Mongo",onChange:function(t){return e.searchInstant(t)}}),Object(h.jsx)("h3",{children:"type to search"})]})]})]}),Object(h.jsxs)("main",{children:[Object(h.jsxs)("article",{className:"listNotes",children:[Object(h.jsxs)("h3",{children:["MongoDB Notes ",Object(h.jsxs)("span",{children:["(number of Notes: ",this.state.mongoDBArchive.length,")"]})]}),Object(h.jsxs)("div",{className:"searchResult",children:[this.state.searchValueLength?Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Search mode"}),Object(h.jsxs)("p",{children:["Till ",Object(h.jsx)("strong",{children:"search mode"})," is on, you can add, remove, and edit notes, but with no visible effect. To close search mode you should empty both input fields or click the button below 'restore list'."]}),Object(h.jsxs)("p",{children:["The search returned ",this.mongoNotes().length," items | ",Object(h.jsx)("button",{className:"big",onClick:this.restoreList,children:"Restore list"})]})]}):null,this.state.categoriesSelected?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Category searched: ",Object(h.jsx)("strong",{children:this.state.categoriesSelected})]}),Object(h.jsxs)("p",{children:["Back to main view: ",Object(h.jsx)("button",{className:"big",onClick:this.restoreList,children:"Restore list"})]})]}):null,this.state.mongoDB.length?this.mongoNotes():Object(h.jsxs)("div",{className:"infoOnMongo",children:[Object(h.jsx)("p",{children:"If you are seeing this info, there're a few possibilities:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Notes are not yet loaded, connection to database usually takes a moment (but not enough long to read it comfortably: ~3 seconds in maximum)"}),Object(h.jsx)("li",{children:'Database is empty now, in this case please use "ADD mongoDB Note" button to create one'})]})]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("h3",{children:["JSON Notes ",Object(h.jsxs)("span",{children:["(number of Notes: ",this.state.notesJSON.length,")"]})]}),this.state.notesJSON.map((function(t){return Object(h.jsx)(f,Object(o.a)(Object(o.a)({},t),{},{open:e.openEdit,deleteIt:e.removeItem}),t.id)}))]}),n&&Object(h.jsxs)("div",{className:"edit",children:[Object(h.jsxs)("header",{children:[Object(h.jsxs)("h3",{children:["Edit JSON Note - note id: ",this.state.id]}),Object(h.jsx)("button",{className:"big",onClick:this.closeEdit,children:"CLOSE"})]}),Object(h.jsx)(S,{edit:!0,id:this.state.id,changeFunction:this.editItem,array:this.state.notesJSON,stateContentJSONVal:this.state.stateContentJSONVal,close:this.closeEdit})]}),a&&Object(h.jsxs)("div",{className:"edit",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h3",{children:"Add a JSON note"}),Object(h.jsx)("button",{className:"big",onClick:this.closeCreateJSON,children:"CLOSE"})]}),Object(h.jsx)(S,{add:!0,addFunction:this.addItem})]}),s&&Object(h.jsxs)("div",{className:"edit",children:[Object(h.jsxs)("header",{children:[Object(h.jsxs)("h3",{children:["Edit Mongo - note id: ",this.state.id]}),Object(h.jsx)("button",{className:"big",onClick:this.closeEditMongo,children:"CLOSE"})]}),Object(h.jsx)(L,{edit:!0,id:this.state.id,changeFunctionMongo:this.editItemMongo,changeMongoFn:this.editItemMongo,array:this.state.mongoDB,stateTitleVal:this.state.stateTitleMongoVal,stateCategoriesVal:this.state.stateCategoriesVal,stateContentVal:this.state.stateContentMongoVal,editMongoTime:this.state.editMongoTime,userMongoID:this.state.userMongoID,close:this.closeEditMongo})]}),c&&Object(h.jsxs)("div",{className:"edit",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h3",{children:"Add a Mongo Note"}),Object(h.jsx)("button",{className:"big",onClick:this.closeCreateMongo,children:"CLOSE"})]}),Object(h.jsx)(R,{addMongoFunction:this.addItemMongo,close:this.closeEditMongo})]}),Object(h.jsxs)("aside",{children:[Object(h.jsx)("h3",{children:"_notemacher"}),Object(h.jsx)("h4",{children:"Features"}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Notes"})," creating, deleting, and editing Notes are OK."]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Search"})," works well in scope of one line - the same as in most usercases. There're two kinds of search, it still not decided which one is better and should stay."]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Categories"})," searching in them is not case sensitive, but select by clicking them is. It's a feature or bug, it depends. I'm not sure if uppercase should be allowed in categories, or just leave it to user. But it works and is stable - so let call it ver 0.3."]})]}),Object(h.jsx)("h4",{children:"Two kinds of Notes:"}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"mongoDB Notes"})," from mongoDB Atlas served by Node.js API"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"JSON Notes"})," (below hr line) kept in local React file and browser's cache. I've started from it, but now they are kept only for a testing purposes."]})]}),Object(h.jsx)("h4",{children:"Stack:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Draft.js"}),Object(h.jsx)("li",{children:"React 17 + hooks (Github)"}),Object(h.jsx)("li",{children:"async, fetch, axios"}),Object(h.jsx)("li",{children:"Node.js + Express (Heroku)"}),Object(h.jsx)("li",{children:"mongoDB (MongoDB Atlas)"})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Fetch"}),Object(h.jsx)("p",{children:"(state component) Data fetched from NBP API, ratio to Polish PLN"}),Object(h.jsxs)("table",{className:"tableFetch",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Currency"}),Object(h.jsx)("th",{children:"Ratio"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Euro"}),Object(h.jsx)("td",{children:this.state.euro})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"US Dollar"}),Object(h.jsx)("td",{children:this.state.dollar})]})]})]}),Object(h.jsx)(V,{})]})]}),Object(h.jsx)("footer",{children:Object(h.jsx)("p",{children:"_notemacher @2020"})})]})}}]),n}(b.a.Component);t.a=H},119:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),o=n(1),s=n.n(o),c=n(63),a=n.n(c),i=n(116),r=n(115);a.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(i.a,{})}),document.getElementById("root")),e.hot.accept(),Object(r.a)()}.call(this,n(120)(e))},269:function(e,t,n){},52:function(e,t,n){},8:function(e){e.exports=JSON.parse('[{"id":"1","author":"admin","dateCreation":"2020-12-25 - 21:36","editor":"admin","dateEdit":"2020-12-25 - 21:38","title":"Obvious Info","content":"This is notemaking app done only for an educational purposes. All notes done by you at JSON section are lost at every reload, only this first note is kept at file. All notes in mongoDB section are stored on mongoDB database, and can be read and deleted by any other user. Do not write here any confidential or important info not saved anywhere else."}]')}},[[119,1,2]]]);
//# sourceMappingURL=main.95fe704a.chunk.js.map
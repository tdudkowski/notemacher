(this.webpackJsonpnotemacher=this.webpackJsonpnotemacher||[]).push([[0],{223:function(t,e,n){},224:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(3),i=n.n(c),a=n(54),s=n.n(a),r=n(55),l=n(19),d=n.n(l),j=n(30),h=n(16),u=n(103),O=n(104),b=n(106),m=n(105),f=n(25),g=n.n(f),x=n(4),p=(n(43),function(t){var e=t.obj,n=t.id,c=t.open,i=t.deleteMongoItem,a=Object(x.convertFromHTML)(e.content),s=x.ContentState.createFromBlockArray(a.contentBlocks,a.entityMap),r=x.EditorState.createWithContent(s);return Object(o.jsxs)("div",{className:"noteItem",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("div",{className:"note-id",children:[Object(o.jsxs)("span",{children:["note ID: ",e.id]}),Object(o.jsx)("button",{onClick:function(){return c(e.id)},children:"edit"}),Object(o.jsx)("button",{onClick:function(){return i()},children:"delete"})]}),Object(o.jsxs)("h4",{children:[e.title," "]}),Object(o.jsxs)("p",{className:"noteInfo",children:[Object(o.jsxs)("span",{children:["Created: ",e.dateCreation," by ",e.author]})," | ",Object(o.jsx)("span",{children:e.dateEdit?"Last edit: ".concat(e.dateEdit," by: ").concat(e.editor," "):"unedited"})]})]}),Object(o.jsx)(x.Editor,{editorState:r,readOnly:!0})]},n)}),C=function(t){var e=t.id,n=t.title,c=t.author,i=t.editor,a=t.dateCreation,s=t.dateEdit,r=t.content,l=t.open,d=t.deleteIt;return Object(o.jsxs)("div",{className:"noteItem",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("div",{className:"note-id",children:[Object(o.jsxs)("span",{children:["note ID: ",e]}),Object(o.jsx)("button",{onClick:function(){return l(e)},children:"edit"}),Object(o.jsx)("button",{onClick:function(t){return d(e)},children:"delete"})]}),Object(o.jsx)("h4",{children:n}),Object(o.jsxs)("p",{className:"noteInfo",children:[Object(o.jsxs)("span",{children:["Created: ",a," by ",c]})," | ",Object(o.jsx)("span",{children:s?"Last edit: ".concat(s," by: ").concat(i," "):"unedited"})]})]}),Object(o.jsx)("div",{className:"content",children:r})]},e)},S=n(11),v=n(6),N=n(24),E=function(t){var e,n,i=t.addFunction,a=t.changeFunction,s=t.edit,r=t.add,l=t.close,d=t.id;if(s)for(var j=0;j<v.length;j++)v[j].id===d&&(e=v[j].title,n=v[j].content);else e="",n="";var h=Object(c.useState)((function(){return x.EditorState.createWithContent(x.ContentState.createFromText(n))})),u=Object(S.a)(h,2),O=u[0],b=u[1],m=Object(c.useState)(e),f=Object(S.a)(m,2),g=f[0],p=f[1],C=Object(c.useState)(n),E=Object(S.a)(C,2),D=E[0],M=E[1],I=function(t,e){a(t,e,g,D),l()},y=function(t,e){s?(I(t,d),b(e)):(i(t,e),p(""),M(""),b((function(){return x.EditorState.createEmpty()})))},k=function(t){var e=t.getCurrentContent();b(t),function(t,e){var n=Object(N.a)(t);M(n),b(e)}(e,t)};return Object(o.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:function(t){return y(t,D)},children:[Object(o.jsx)("label",{htmlFor:"title",children:s?"Title of [ "+d+" ]":"Title"}),Object(o.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(t){p(t.target.value)},value:g,required:!0}),Object(o.jsx)("label",{htmlFor:"content",children:"Content"}),Object(o.jsx)(x.Editor,{editorState:O,onChange:k,handleKeyCommand:function(t){var e=x.RichUtils.handleKeyCommand(O,t);return e?(k(e),"handled"):"not-handled"}}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:r?"ADD":"SAVE"})})]})},D=function(t){var e=t.changeMongoFn,n=t.id,i=t.close,a=t.editMongoTime,s=t.userMongoID,r=t.stateTitleVal,l=t.stateContentVal,d=Object(x.convertFromHTML)(l),j=x.ContentState.createFromBlockArray(d.contentBlocks,d.entityMap),h=Object(c.useState)((function(){return x.EditorState.createWithContent(j)})),u=Object(S.a)(h,2),O=u[0],b=u[1],m=Object(c.useState)(r),f=Object(S.a)(m,2),g=f[0],p=f[1],C=function(t){b(t),l=Object(N.a)(t.getCurrentContent())};return Object(o.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:function(t){return function(t,o){l=Object(N.a)(O.getCurrentContent()),e(t,n,o,l,a,s),i()}(t,g)},children:[Object(o.jsx)("label",{htmlFor:"title",children:"Title of [ "+n+" ]"}),Object(o.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(t){p(t.target.value)},value:g,required:!0}),Object(o.jsx)("label",{htmlFor:"content",children:"Content"}),Object(o.jsxs)("div",{className:"editorContainer",children:[Object(o.jsx)("button",{onClick:function(){C(x.RichUtils.toggleInlineStyle(O,"UNDERLINE"))},children:"Underline"}),Object(o.jsx)("button",{onClick:function(){C(x.RichUtils.toggleInlineStyle(O,"BOLD"))},children:Object(o.jsx)("b",{children:"Bold"})}),Object(o.jsx)("button",{onClick:function(){C(x.RichUtils.toggleInlineStyle(O,"ITALIC"))},children:Object(o.jsx)("em",{children:"Italic"})}),Object(o.jsx)("div",{className:"editors",children:Object(o.jsx)(x.Editor,{editorState:O,onChange:C,handleKeyCommand:function(t){var e=x.RichUtils.handleKeyCommand(O,t);return e?(C(e),"handled"):"not-handled"}})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"submit",children:"SAVE"}),Object(o.jsx)("h4",{children:"Result of EDIT"}),Object(o.jsxs)("p",{children:["Title: ",g]}),Object(o.jsxs)("p",{children:["Edit time: ",a]}),Object(o.jsxs)("p",{children:["Editor: ",s]})]})]})},M=function(t){var e=t.addMongoFunction,n=t.edit,i=t.close,a=t.id,s=Object(c.useState)((function(){return x.EditorState.createEmpty()})),r=Object(S.a)(s,2),l=r[0],d=r[1],j=Object(c.useState)(""),h=Object(S.a)(j,2),u=h[0],O=h[1],b=Object(c.useState)(""),m=Object(S.a)(b,2),f=m[0],g=m[1],p=function(t){var e=t.getCurrentContent();d(t),function(t,e){var n=Object(N.a)(t);g(n),d(e)}(e,t)};return Object(o.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:function(t){return function(t,n,o){e(t,n,o),i()}(t,u,f)},children:[Object(o.jsx)("label",{htmlFor:"title",children:n?"Title of [ "+a+" ]":"Title"}),Object(o.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(t){O(t.target.value)},value:u,required:!0}),Object(o.jsx)("label",{htmlFor:"content",children:"Content"}),Object(o.jsx)(x.Editor,{editorState:l,onChange:p,handleKeyCommand:function(t){var e=x.RichUtils.handleKeyCommand(l,t);return e?(p(e),"handled"):"not-handled"}}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"ADD"})})]})},I=function(t){var e=t.searchFunction;return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("input",{type:"text",name:"notes",onChange:function(t){var n=v.filter((function(e){return e.title.toLowerCase().includes(t.target.value.toLowerCase())||e.content.toLowerCase().includes(t.target.value.toLowerCase())}));e(n)}}),Object(o.jsx)("h3",{children:"type to search"})]})},y=function(){var t=Object(c.useState)(""),e=Object(S.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){(function(){var t=Object(j.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.1&lon=17.0");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,i(n.properties.timeseries[0].data.instant.details.air_temperature);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(o.jsxs)(o.Fragment,{children:["(functional component w/ hooks useState and useEffect) Data fetched from Meteorologisk institutt:",Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsxs)("strong",{children:["temperature in Wroc\u0142aw ",n,"\xb0C"]})})})]})},k=(n(223),function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={notesJSON:Object(h.a)(v),isEditOpen:!1,isEditOpenMongo:!1,isCreateOpenMongo:!1,isCreateOpenJSON:!1,id:"",nbpdata:null,euro:null,dollar:null,ratio:null,temperatureInWroclaw:null,stateContentVal:null,stateContentMongoVal:null,stateTitleMongoVal:null,editMongoTime:null,userMongoID:null,mongoDB:[]},t.openCreateJSON=function(){t.setState({isCreateOpenJSON:!0})},t.closeCreateJSON=function(){t.setState({isCreateOpenJSON:!1})},t.openEdit=function(e){var n=t.state.notesJSON.filter((function(t){return t.id===e}))[0].content;t.setState({isEditOpen:!0,id:e,stateContentVal:n})},t.closeEdit=function(){t.setState({isEditOpen:!1})},t.addItem=function(e,n){e.preventDefault();var o=(new Date).toISOString().slice(0,10),c=(new Date).toLocaleTimeString("pl-PL").slice(0,5),i="".concat(o," - ").concat(c),a={id:String(e.target[0].value.slice(0,10).concat(v.length+1)),dateCreation:i,title:e.target[0].value,content:n,author:e.target[0].author||"anon"};t.setState((function(t){return{notesJSON:[].concat(Object(h.a)(t.notesJSON),[a]),isCreateOpenJSON:!1}})),v.push(a),e.target.reset()},t.editItem=function(e,n,o,c){e.preventDefault();for(var i=(new Date).toISOString().slice(0,10),a=(new Date).toLocaleTimeString("pl-PL").slice(0,5),s="".concat(i," - ").concat(a),r=0;r<v.length;r++)v[r].id===n&&(v[r].dateEdit=s,v[r].title=o,v[r].content=c,v[r].editor=e.target[0].editor||"anon");t.setState({notesJSON:Object(h.a)(v)})},t.removeItem=function(e){for(var n=0;n<v.length;n++)v[n].id===e&&v.splice(n,1);t.setState({notesJSON:Object(h.a)(v)})},t.searchFunction=function(e){t.setState({notesJSON:e})},t.openCreateMongo=function(){t.setState({isCreateOpenMongo:!0})},t.closeCreateMongo=function(){t.setState({isCreateOpenMongo:!1})},t.closeEditMongo=function(){t.setState({isEditOpenMongo:!1,isCreateOpenMongo:!1})},t.addItemMongo=function(e,n,o){e.preventDefault();var c=(new Date).toISOString().slice(0,10),i=(new Date).toLocaleTimeString("pl-PL").slice(0,5),a="".concat(c," - ").concat(i),s={id:String(n.slice(0,10).concat(t.state.mongoDB.length+1)),dateCreation:a,title:n,content:o,author:"anon"};g.a.post("http://localhost:5000/notes",s).then((function(t){})).catch((function(t){console.log("ERROR IN REACT APP AAD MONGO NOTE",t)})),t.setState({isCreateOpenMongo:!1})},t.openEditMongo=function(e){var n=(new Date).toISOString().slice(0,10),o=(new Date).toLocaleTimeString("pl-PL").slice(0,5),c="".concat(n," - ").concat(o),i=t.state.mongoDB.filter((function(t){return t.id===e}))[0].title,a=t.state.mongoDB.filter((function(t){return t.id===e}))[0].content;t.setState({isEditOpenMongo:!0,id:e,stateTitleMongoVal:i,stateContentMongoVal:a,editMongoTime:c,userMongoID:"anon"})},t.editItemMongo=function(e,n,o,c,i,a){e.preventDefault();for(var s=(new Date).toISOString().slice(0,10),r=(new Date).toLocaleTimeString("pl-PL").slice(0,5),l="".concat(s," - ").concat(r),d=0;d<t.state.mongoDB.length;d++)if(t.state.mongoDB[d].id===n){var j={_id:t.state.mongoDB[d]._id,id:t.state.mongoDB[d].id,dateCreation:t.state.mongoDB[d].dateCreation,author:t.state.mongoDB[d].author,dateEdit:l,title:o,content:c,editor:"anon"},h=t.state.mongoDB;h.splice(d,1,j),t.setState({mongoDB:h,isCreateOpenMongo:!1}),g.a.put("http://localhost:5000/notes",j).then((function(t){})).catch((function(t){console.log("ERROR IN REACT EDIT MONGO NOTE",t)}))}},t.removeItemMongo=function(t){g.a.delete("http://localhost:5000/notes",{data:t}).then((function(t){})).catch((function(t){console.log("ERROR IN REACT REMOVE MONGO NOTE",t)}))},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e,n,o=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.nbp.pl/api/exchangerates/tables/a");case 2:return e=t.sent,g.a.get("http://localhost:5000/notes").then((function(t){o.setState({mongoDB:Object(h.a)(t.data)})})).catch((function(t){console.log("ERROR IN componentDidMount: ",t)})),t.next=6,e.json();case 6:n=t.sent,this.setState({nbpdata:Object(h.a)(n),euro:Object(h.a)(n)[0].rates[7].mid,dollar:Object(h.a)(n)[0].rates[1].mid});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.a.get("http://localhost:5000/notes").then((function(t){e.setState({mongoDB:Object(h.a)(t.data)})})).catch((function(t){console.log("ERROR IN componentDidUpdate: ",t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"dataTable",value:function(){var t=this;return this.state.mongoDB.map((function(e,n){return Object(o.jsx)(p,{obj:e,open:t.openEditMongo,deleteMongoItem:function(){return t.removeItemMongo(e)}},n)}))}},{key:"render",value:function(){var t=this,e=this.state.isEditOpen,n=this.state.isEditOpenMongo,c=this.state.isCreateOpenMongo,i=this.state.isCreateOpenJSON;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h2",{children:"_notemacher"}),Object(o.jsx)("nav",{className:"navgh",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://tdudkowski.github.io/",children:"[ to Github Page ]"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/tdudkowski/notemacher",children:"[ repo of _notemacher ]"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:this.openCreateJSON,children:"ADD JSON Note"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:this.openCreateMongo,children:"ADD mongoDB Note"})})]})}),Object(o.jsx)(I,{searchFunction:this.searchFunction})]}),Object(o.jsxs)("main",{children:[Object(o.jsxs)("article",{className:"listNotes",children:[Object(o.jsx)("h3",{children:"JSON Notes"}),this.state.notesJSON.map((function(e){return Object(o.jsx)(C,Object(r.a)(Object(r.a)({},e),{},{open:t.openEdit,deleteIt:t.removeItem}),e.id)})),Object(o.jsx)("hr",{}),Object(o.jsx)("h3",{children:"MongoDB Notes"}),this.dataTable()]}),e&&Object(o.jsxs)("div",{className:"edit",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("h3",{children:["Edit JSON Note - note id: ",this.state.id]}),Object(o.jsx)("button",{onClick:this.closeEdit,children:"CLOSE"})]}),Object(o.jsx)(E,{edit:!0,id:this.state.id,changeFunction:this.editItem,array:this.state.notesJSON,stateContentVal:this.state.stateContentVal,close:this.closeEdit})]}),i&&Object(o.jsxs)("div",{className:"edit",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:"Add a JSON note"}),Object(o.jsx)("button",{onClick:this.closeCreateJSON,children:"CLOSE"})]}),Object(o.jsx)(E,{add:!0,addFunction:this.addItem})]}),n&&Object(o.jsxs)("div",{className:"edit",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("h3",{children:["Edit Mongo - note id: ",this.state.id]}),Object(o.jsx)("button",{onClick:this.closeEditMongo,children:"CLOSE"})]}),Object(o.jsx)(D,{edit:!0,id:this.state.id,changeFunctionMongo:this.editItemMongo,changeMongoFn:this.editItemMongo,array:this.state.mongoDB,stateTitleVal:this.state.stateTitleMongoVal,stateContentVal:this.state.stateContentMongoVal,editMongoTime:this.state.editMongoTime,userMongoID:this.state.userMongoID,close:this.closeEditMongo})]}),c&&Object(o.jsxs)("div",{className:"edit",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:"Add a Mongo Note"}),Object(o.jsx)("button",{onClick:this.closeCreateMongo,children:"CLOSE"})]}),Object(o.jsx)(M,{addMongoFunction:this.addItemMongo,close:this.closeEditMongo})]}),Object(o.jsxs)("aside",{children:[Object(o.jsx)("h3",{children:"_notemacher"}),Object(o.jsx)("p",{children:"two kinds of Notes"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"JSON Notes"})," kept in local React file"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"mongoDB Notes"})," from mongoDB Atlas served by Node.js API"]})]}),Object(o.jsx)("p",{children:"Search for now is only for JSON Notes"}),Object(o.jsx)("p",{children:"Stack:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"React 17 + hooks"}),Object(o.jsx)("li",{children:"async fetch"}),Object(o.jsx)("li",{children:"Draft.js"}),Object(o.jsx)("li",{children:"axios"}),Object(o.jsx)("li",{children:"Node.js + Express"}),Object(o.jsx)("li",{children:"mongoDB"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("h3",{children:"Fetch"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["(state component) Data fetched from NBP API:",Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("strong",{children:["Euro: ",this.state.euro]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("strong",{children:["US Dollar: ",this.state.dollar]})})]})]}),Object(o.jsx)("li",{children:Object(o.jsx)(y,{})})]})]})]}),Object(o.jsx)("footer",{children:Object(o.jsx)("p",{children:"_notemacher @2020"})})]})}}]),n}(i.a.Component)),T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),T()},6:function(t){t.exports=JSON.parse('[{"id":"1","author":"admin","dateCreation":"2020-11-25 - 21:37","editor":"admin","dateEdit":"2020-11-20 - 21:37","title":"Obvious Info","content":"This is notemaking app done only for an educational purposes. All notes done by you at JSON section are lost at every reload, only this first note is kept at file. All notes in mongoDB section are stored on mongoDB database, and can be read and deleted by any other user. Do not write here any confidential or important info not saved anywhere else."}]')}},[[224,1,2]]]);
//# sourceMappingURL=main.6c441cc9.chunk.js.map
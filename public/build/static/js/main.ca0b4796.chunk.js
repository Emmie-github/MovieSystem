(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{189:function(e,t,n){e.exports=n.p+"static/media/defaultposter.b4e877ba.png"},211:function(e,t,n){e.exports=n(381)},216:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(16),c=n.n(i),u=(n(216),n(129)),l=n(80),s=n(35),p=n(46),m=n(47),d=n(59),f=n(60),h=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",null,"\u6b22\u8fce\u4f7f\u7528\u7535\u5f71\u7ba1\u7406\u7cfb\u7edf")}}]),n}(o.a.Component),v=n(17),b=n.n(v),g=n(34),y=n(388),E=n(384),w=n(387),j=n(111),k=n(389),C=n(394),O=n(39),x=n(385),I=n(386),M=n(395),S=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e}return Object(m.a)(n,[{key:"getUploadContent",value:function(){return this.props.value?null:o.a.createElement("div",null,o.a.createElement(M.a,null),o.a.createElement("div",null,"Upload"))}},{key:"getFileList",value:function(){return this.props.value?[{uid:this.props.value,name:this.props.value,url:this.props.value}]:[]}},{key:"handleRequest",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(n=new FormData).append(t.filename,t.file),a=new Request(t.action,{method:"post",body:n}),e.next=6,fetch(a).then((function(e){return e.json()}));case 6:r=e.sent,console.log(r),r.err?y.b.error("\u4e0a\u4f20\u5931\u8d25"):this.props.onChange&&this.props.onChange(r.data);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(x.a,{action:"/api/upload",listType:"picture-card",accept:".jpg,.png,.gif,.jpeg,.bmp",name:"imgfile",fileList:this.getFileList(),customRequest:this.handleRequest.bind(this),onRemove:function(){e.props.onChange&&e.props.onChange("")},onPreview:function(){console.log("\u663e\u793a\u9884\u89c8"),e.setState({showModal:!0})}},this.getUploadContent()),o.a.createElement(I.a,{visible:this.state.showModal,footer:null,onCancel:function(){e.setState({showModal:!1})}},o.a.createElement("img",{alt:"\u56fe\u7247",style:{width:"100%"},src:this.props.value})))}}]),n}(o.a.Component),_={labelCol:{span:5},wrapperCol:{span:18,offset:1}},P=[{label:"\u4e2d\u56fd\u5927\u9646",value:"\u4e2d\u56fd\u5927\u9646"},{label:"\u7f8e\u56fd",value:"\u7f8e\u56fd"},{label:"\u4e2d\u56fd\u53f0\u6e7e",value:"\u4e2d\u56fd\u53f0\u6e7e"},{label:"\u4e2d\u56fd\u9999\u6e2f",value:"\u4e2d\u56fd\u9999\u6e2f"}],L=[{label:"\u559c\u5267",value:"\u559c\u5267"},{label:"\u707e\u96be",value:"\u707e\u96be"},{label:"\u52a8\u4f5c",value:"\u52a8\u4f5c"},{label:"\u7231\u60c5",value:"\u7231\u60c5"}],D=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).formRef=o.a.createRef(),e.handleFinish=function(){var t=Object(g.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.formRef.current.getFieldsValue(),console.log(n),t.next=4,e.props.onSubmit(n);case 4:(a=t.sent)?y.b.error(a):y.b.success("\u5904\u7406\u6210\u529f",1,(function(){e.props.history.push("/movie")}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.movie!==e.movie&&this.formRef.current&&this.formRef.current.setFieldsValue(this.props.movie)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E.a,Object.assign({style:{width:400},ref:this.formRef},_,{onFinish:this.handleFinish.bind(this),initialValues:{isHot:!1,isComing:!1,isClassic:!1}}),o.a.createElement(E.a.Item,{name:"name",label:"\u7535\u5f71\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u7535\u5f71\u540d\u79f0"}]},o.a.createElement(w.a,null)),o.a.createElement(E.a.Item,{name:"poster",label:"\u5c01\u9762"},o.a.createElement(S,null)),o.a.createElement(E.a.Item,{name:"areas",label:"\u5730\u533a",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5730\u533a"}]},o.a.createElement(j.a.Group,{options:P})),o.a.createElement(E.a.Item,{name:"types",label:"\u7c7b\u578b",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7c7b\u578b"}]},o.a.createElement(j.a.Group,{options:L})),o.a.createElement(E.a.Item,{name:"timeLong",label:"\u65f6\u957f(\u5206\u949f)",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65f6\u957f"}]},o.a.createElement(k.a,{min:1,step:10})),o.a.createElement(E.a.Item,{name:"isHot",label:"\u6b63\u5728\u70ed\u6620",valuePropName:"checked"},o.a.createElement(C.a,null)),o.a.createElement(E.a.Item,{name:"isComing",label:"\u5373\u5c06\u4e0a\u6620",valuePropName:"checked"},o.a.createElement(C.a,null)),o.a.createElement(E.a.Item,{name:"isClassic",label:"\u7ecf\u5178\u5f71\u7247",valuePropName:"checked"},o.a.createElement(C.a,null)),o.a.createElement(E.a.Item,{name:"description",label:"\u63cf\u8ff0"},o.a.createElement(w.a.TextArea,null)),o.a.createElement(E.a.Item,{labelCol:{span:0},wrapperCol:{span:18,offset:6}},o.a.createElement(O.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}]),n}(o.a.Component),R=Object(s.e)(D),A=n(104),F=n.n(A),q=function(){function e(){Object(p.a)(this,e)}return Object(m.a)(e,null,[{key:"add",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("/api/movie",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(g.a)(b.a.mark((function e(t,n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.put("/api/movie/"+t,n);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.delete("/api/movie/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/api/movie/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoviesByPage",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/api/movie",{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),H=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(R,{onSubmit:function(){var e=Object(g.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.add(t);case 2:if(!(n=e.sent).data){e.next=7;break}return e.abrupt("return","");case 7:return e.abrupt("return",n.err);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))}}]),n}(o.a.Component),N=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movie:void 0},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getMovieById(this.props.match.params.id);case 2:(null===(t=e.sent)||void 0===t?void 0:t.data)&&this.setState({movie:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(R,{movie:this.state.movie,onSubmit:function(){var t=Object(g.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.edit(e.props.match.params.id,n);case 2:if(!(a=t.sent).data){t.next=7;break}return t.abrupt("return","");case 7:return t.abrupt("return",a.err);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}))}}]),n}(o.a.Component),B=n(393),z=n(390),T=n(383),V=n(189),K=n.n(V);!function(e){e.isHot="isHot",e.isComing="isComing",e.isClassic="isClassic"}(a||(a={}));var U=n(391),G=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.onLoad&&this.props.onLoad()}},{key:"getFilterDropDown",value:function(e){var t=this;return o.a.createElement("div",{style:{padding:8}},o.a.createElement(w.a,{style:{width:188,marginBottom:8,display:"block"},value:this.props.condition.key,onChange:function(e){return t.props.onKeyChange(e.target.value)},onPressEnter:this.props.onSearch}),o.a.createElement(B.b,null,o.a.createElement(O.a,{type:"primary",icon:o.a.createElement(U.a,null),size:"small",onClick:this.props.onSearch,style:{width:90}},"\u641c\u6240"),o.a.createElement(O.a,{size:"small",style:{width:90},onClick:function(){t.props.onKeyChange(""),t.props.onSearch()}},"\u91cd\u7f6e")))}},{key:"getColumns",value:function(){var e=this;return[{title:"\u5c01\u9762",dataIndex:"poster",render:function(e){return e?o.a.createElement("img",{className:"tablePoster",src:e,alt:"\u56fe\u7247"}):o.a.createElement("img",{className:"tablePoster",src:K.a,alt:"\u56fe\u7247"})}},{title:"\u540d\u79f0",dataIndex:"name",filterDropdown:this.getFilterDropDown.bind(this),filterIcon:o.a.createElement(U.a,null)},{title:"\u5730\u533a",dataIndex:"areas",render:function(e){return e.join(", ")}},{title:"\u7c7b\u578b",dataIndex:"types",render:function(e){return e.join(", ")}},{title:"\u65f6\u957f",dataIndex:"timeLong",render:function(e){return e+"\u5206\u949f"}},{title:"\u6b63\u5728\u70ed\u6620",dataIndex:"isHot",render:function(t,n){return o.a.createElement(C.a,{checked:t,onChange:function(t){e.props.onSwitchChange(a.isHot,t,n._id)}})}},{title:"\u5373\u5c06\u4e0a\u6620",dataIndex:"isComing",render:function(t,n){return o.a.createElement(C.a,{checked:t,onChange:function(t){e.props.onSwitchChange(a.isComing,t,n._id)}})}},{title:"\u7ecf\u5178\u5f71\u7247",dataIndex:"isClassic",render:function(t,n){return o.a.createElement(C.a,{checked:t,onChange:function(t){e.props.onSwitchChange(a.isClassic,t,n._id)}})}},{title:"\u64cd\u4f5c",dataIndex:"_id",render:function(t){return o.a.createElement("div",null,o.a.createElement(B.b,null,o.a.createElement(l.b,{to:"/movie/edit/"+t},o.a.createElement(O.a,{type:"primary",size:"small"},"\u7f16\u8f91")),o.a.createElement(z.a,{title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:Object(g.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.props.onDelete(t);case 2:y.b.success("\u5220\u9664\u6210\u529f\uff01");case 3:case"end":return n.stop()}}),n)}))),onCancel:Object(g.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.props.onDelete(t);case 2:y.b.success("\u53d6\u6d88\u6210\u529f\uff01");case 3:case"end":return n.stop()}}),n)}))),okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},o.a.createElement(O.a,{type:"primary",danger:!0,size:"small"},"\u5220\u9664"))))}}]}},{key:"getPageConfig",value:function(){return 0!==this.props.total&&{current:this.props.condition.page,pageSize:this.props.condition.limit,total:this.props.total}}},{key:"handleChange",value:function(e){this.props.onChange(e.current)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(T.a,{rowKey:"_id",loading:this.props.isLoading,pagination:this.getPageConfig(),onChange:this.handleChange.bind(this),dataSource:this.props.data,columns:this.getColumns()}))}}]),n}(o.a.Component),J=n(128);function Q(e,t){return{type:"movie_save",payload:{movies:e,total:t}}}function W(e){return{type:"movie_setLoading",payload:e}}function X(e){return{type:"movie_setCondition",payload:e}}function Y(e){return{type:"movie_delete",payload:e}}function Z(e,t,n){return{type:"movie_switch",payload:{type:e,newVal:t,id:n}}}var $={saveMoviesAction:Q,setLoadingAction:W,setConditionAction:X,deleteAction:Y,fetchMovies:function(e){return function(){var t=Object(g.a)(b.a.mark((function t(n,a){var r,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(W(!0)),n(X(e)),r=a().movie.condition,t.next=5,q.getMoviesByPage(r);case 5:o=t.sent,n(Q(o.data,o.total)),n(W(!1));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},deleteMovie:function(e){return function(){var t=Object(g.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(W(!0)),t.next=3,q.delete(e);case 3:n(Y(e)),n(W(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeSwitchAction:Z,changeSwitch:function(e,t,n){return function(){var a=Object(g.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(Z(e,t,n)),a.next=3,q.edit(n,Object(J.a)({},e,t));case 3:r(Y(n)),r(W(!1));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},ee=Object(u.b)((function(e){return e.movie}),(function(e){return{onLoad:function(){e($.fetchMovies({page:1,limit:10,key:""}))},onSwitchChange:function(t,n,a){e($.changeSwitch(t,n,a))},onDelete:function(t){return Object(g.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e($.deleteMovie(t));case 2:case"end":return n.stop()}}),n)})))()},onChange:function(t){e($.fetchMovies({page:t}))},onKeyChange:function(t){e($.setConditionAction({key:t}))},onSearch:function(){e($.fetchMovies({page:1}))}}}))(G);var te=n(382),ne=n(90),ae=n(392),re=te.a.Header,oe=te.a.Sider,ie=te.a.Content,ce=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(te.a,null,o.a.createElement(re,{className:"header"},o.a.createElement(l.b,{to:"/"},"\u732b\u773c\u7535\u5f71\u7ba1\u7406\u7cfb\u7edf")),o.a.createElement(te.a,null,o.a.createElement(oe,null,o.a.createElement(ne.a,{mode:"inline",theme:"dark"},o.a.createElement(ne.a.Item,{key:"1",icon:o.a.createElement(ae.a,null)},o.a.createElement(l.b,{to:"/movie"},"\u7535\u5f71\u5217\u8868")),o.a.createElement(ne.a.Item,{key:"2",icon:o.a.createElement(ae.a,null)},o.a.createElement(l.b,{to:"/movie/add"},"\u6dfb\u52a0\u7535\u5f71")))),o.a.createElement(ie,null,o.a.createElement("div",{style:{padding:"1.5em"}},o.a.createElement(s.a,{path:"/",component:h,exact:!0}),o.a.createElement(s.a,{path:"/movie",exact:!0,component:ee}),o.a.createElement(s.a,{path:"/movie/add",component:H}),o.a.createElement(s.a,{path:"/movie/edit/:id",component:N}))))))},ue=n(85),le=n(84),se={data:[],condition:{page:1,limit:10,key:""},total:0,isLoading:!1,totalPage:0},pe=function(e,t){return Object(le.a)({},e,{data:t.payload.movies,total:t.payload.total,totalPage:Math.ceil(t.payload.total/e.condition.limit)})},me=function(e,t){var n=Object(le.a)({},e,{condition:Object(le.a)({},e.condition,{},t.payload)});return n.totalPage=Math.ceil(n.total/n.condition.limit),n},de=function(e,t){return Object(le.a)({},e,{isLoading:t.payload})},fe=function(e,t){return Object(le.a)({},e,{data:e.data.filter((function(e){return e._id!==t.payload})),total:e.total-1,totalPage:Math.ceil((e.total-1)/e.condition.limit)})},he=function(e,t){var n=e.data.find((function(e){return e._id===t.payload.id}));if(!n)return e;var a=Object(le.a)({},n);a[t.payload.type]=t.payload.newVal;var r=e.data.map((function(e){return e._id===t.payload.id?a:e}));return console.log(r),Object(le.a)({},e,{data:r})},ve=Object(ue.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"movie_save":return pe(e,t);case"movie_setCondition":return me(e,t);case"movie_setLoading":return de(e,t);case"movie_delete":return fe(e,t);case"movie_switch":return he(e,t);default:return e}}}),be=n(202),ge=n.n(be),ye=n(203),Ee=Object(ue.d)(ve,Object(ue.a)(ye.a,ge.a));var we=function(){return o.a.createElement(u.a,{store:Ee},o.a.createElement(l.a,null,o.a.createElement(s.a,{path:"/",component:ce})))};n(380);c.a.render(o.a.createElement(we,null),document.getElementById("root"))}},[[211,1,2]]]);
//# sourceMappingURL=main.ca0b4796.chunk.js.map
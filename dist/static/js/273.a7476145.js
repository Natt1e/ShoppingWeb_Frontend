"use strict";(self["webpackChunkshopping_web"]=self["webpackChunkshopping_web"]||[]).push([[273],{65924:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var s=function(){var t=this,i=t._self._c;return i("div",[i("div",{staticClass:"center"},[i("span",{on:{click:t.back}},[t._m(0),t._m(1)]),i("div",{staticClass:"logo"},[t._v(" 我的订单 ")]),i("span",{staticStyle:{"font-weight":"900"}},[t._v(" 合计支付：￥"+t._s(t.total)+" ")])]),0==t.goods.length?i("div",{attrs:{id:"no"}},[i("el-empty",{attrs:{"image-size:50px":"",description:"这里什么都没有呢，快去逛逛叭~"}})],1):t._e(),0!=t.goods.length?i("div",{attrs:{id:"main"}},t._l(t.goods,(function(s){return i("div",{staticClass:"item"},[0!=s.pic.length?i("div",{staticClass:"imageBox",style:{backgroundImage:"url("+e(20853)("./"+s.pic[0])+")"},on:{click:function(i){return t.click_detail(s)}}}):t._e(),0==s.pic.length?i("div",{staticClass:"imageBox",style:{backgroundImage:"url("+e(59572)+")"},on:{click:function(i){return t.click_detail(s)}}}):t._e(),i("div",{staticClass:"nameText"},[t._v(" "+t._s(s.good)+" ")]),i("div",{staticClass:"priceBox"},[i("div",{staticStyle:{"padding-top":"50%"}},[i("div",[t._v(" 支付:￥"+t._s(s.actual_paid)+" ")]),t._v(" quanatity:"+t._s(s.count)+" ")])]),i("div",{staticClass:"counter"},[i("div",[t._v(" FORM:"+t._s(s.FromPlace)+" ")]),i("div",[t._v(" TO:"+t._s(s.ToPlace)+" ")]),i("el-button",{staticStyle:{"background-color":"rgb(174, 0, 255)",color:"white"},attrs:{type:"primary"},on:{click:function(i){return t.submitComment1(s)}}},[t._v(" 写评价 ")]),i("div",{staticClass:"money"}),i("div",[t._v(" "+t._s(s.time)+" ")])],1)])})),0):t._e(),i("el-dialog",{attrs:{title:"撰写评价",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(i){t.centerDialogVisible=i}}},[i("el-rate",{model:{value:t.score,callback:function(i){t.score=i},expression:"score"}}),i("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:100}},model:{value:t.content,callback:function(i){t.content=i},expression:"content"}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(i){t.centerDialogVisible=!1}}},[t._v("我再想想")]),i("el-button",{attrs:{type:"primary"},on:{click:t.submitComment}},[t._v("提交评价")])],1)],1)],1)},o=[function(){var t=this,i=t._self._c;return i("div",{staticStyle:{display:"inline-block"}},[i("img",{attrs:{src:e(66949),width:"80"}})])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"logo",staticStyle:{"text-align":"center",display:"inline-block"}},[i("div",[t._v("烧瓶")]),i("div",{staticStyle:{"font-size":"16px"}},[t._v("心仪生活上烧瓶")])])}],n=(e(57658),e(50196)),a=e(33845),l={name:"Detail",async created(){this.id=this.$route.query.id,await n.Z.get("/api/getorder/"+this.id+"/all/").then((t=>{this.goods=t.data})),this.total=0;for(var t=0;t<this.goods.length;t++)this.total=this.total+Number(this.goods[t].actual_paid)},components(){a.Z},data(){return{id:"",goods:[],centerDialogVisible:!1,content:"",score:null,currentId:null,currentOrder:null,total:0}},methods:{back(){this.$router.push({path:"/main",query:{userId:this.id}})},submitComment(){this.centerDialogVisible=!1,""===this.content?this.$notify.error({title:"评论失败",message:"评论内容不能为空"}):(this.$axios({method:"post",url:"/api/addcomment/",data:JSON.stringify({grade:this.score,comment:this.content,orderId:this.currentOrder})}).then((t=>{})),this.$notify.success({title:"评论成功",message:"感谢您的评论~"}))},submitComment1(t){this.centerDialogVisible=!0,this.currentId=t.goodId,this.currentOrder=t.id},click_detail(t){let i=this.$router.resolve({path:"/detail",query:{id:t.goodId,username:this.id}});window.open(i.href,"_blank")}},filters:{numFilter(t){let i=parseFloat(t).toFixed(2);return i}},components:{Mybutton:a.Z}},r=l,c=e(1001),d=(0,c.Z)(r,s,o,!1,null,null,null),u=d.exports},66949:function(t,i,e){t.exports=e.p+"static/img/logo.b639b7b8.png"}}]);
//# sourceMappingURL=273.a7476145.js.map
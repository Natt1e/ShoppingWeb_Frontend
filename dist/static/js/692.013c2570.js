"use strict";(self["webpackChunkshopping_web"]=self["webpackChunkshopping_web"]||[]).push([[692],{33845:function(e,r,t){t.d(r,{Z:function(){return n}});var s=function(){var e=this,r=e._self._c;return r("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.msg)+" ")])},o=[],a={name:"Mybutton",props:{msg:String}},l=a,i=t(1001),u=(0,i.Z)(l,s,o,!1,null,"2636bfaa",null),n=u.exports},78692:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var s=function(){var e=this,r=e._self._c;return r("div",{staticClass:"body"},[r("Transition",{attrs:{appear:"",name:"slide-fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],key:"livelist",staticClass:"mainWindow"},[r("div",{staticStyle:{"padding-top":"5%","padding-bottom":"5%"}},[r("h1",[e._v("修改个人信息")])]),r("div",{staticStyle:{width:"60%",margin:"auto"}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",clearable:""},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",clearable:""},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),r("el-form-item",{attrs:{label:"新身份",prop:"checkRole"}},[r("el-radio-group",{model:{value:e.ruleForm.role,callback:function(r){e.$set(e.ruleForm,"role",r)},expression:"ruleForm.role"}},[r("el-radio",{attrs:{label:"买家"}}),r("el-radio",{attrs:{label:"商家"}})],1)],1)],1)],1),r("div",{staticStyle:{"margin-top":"5%","margin-bottom":"3%"}},[r("Mybutton",{attrs:{msg:"提交修改"},nativeOn:{click:function(r){return e.submitForm("ruleForm")}}})],1)])])],1)},o=[],a=(t(57658),t(33845)),l={name:"Information",components:{Mybutton:a.Z},data(){var e=(e,r,t)=>{""===r?t(new Error("请输入原始密码")):(""!==this.ruleForm.checkPass&&this.$refs.ruleForm.validateField("checkPass"),t())},r=(e,r,t)=>{""===r?t(new Error("请输入新的密码")):t()},t=(e,r,t)=>{""==this.ruleForm.role?t(new Error("请选择身份")):t()};return{username:"",ruleForm:{pass:"",checkPass:"",role:""},show:!0,status:0,correct:!0,rules:{pass:[{validator:e,trigger:"blur"}],checkPass:[{validator:r,trigger:"blur"}],checkRole:[{validator:t,trigger:"blur"}]}}},created(){document.addEventListener("keyup",this.keyup),this.username=this.$route.query.id},methods:{keyup(e){let r=this;var t=e.which||e.keyCode;13==t&&r.submitForm("ruleForm")},click_return(){this.$router.push({name:"Login"})},submitForm(e){this.$refs[e].validate((e=>{var r=1;if("买家"==this.ruleForm.role?r=1:"商家"==this.ruleForm.role&&(r=2),!e)return console.log("error"),!1;this.$axios.put("/api/change/password/"+this.ruleForm.pass+"/",{userId:this.username,passWord:this.ruleForm.checkPass,type:r,money:0}).then((e=>{this.$notify.success({title:"修改成功",message:"请重新登录"}),this.$router.push({name:"Login"})})).catch((e=>{e.response&&this.$notify.error({title:"修改失败",message:"原始密码错误！"})}))}))}}},i=l,u=t(1001),n=(0,u.Z)(i,s,o,!1,null,"f86dbcaa",null),c=n.exports}}]);
//# sourceMappingURL=692.013c2570.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0f9e":function(n,e,t){"use strict";(function(n){t("c6ef");o(t("66fd"));var e=o(t("18e3"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"18e3":function(n,e,t){"use strict";t.r(e);var o=t("f094"),i=t("a613");for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("bf1a");var s,u=t("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=c.exports},"6d94":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{isH5Plus:!1,userinfo:{},orderTypeLise:[{name:"订单查询",icon:"l1.png",badge:1},{name:"软件投稿",icon:"l2.png",badge:2},{name:"待收货",icon:"l3.png",badge:6},{name:"待评价",icon:"l4.png",badge:9},{name:"加官方群",icon:"l5.png",badge:0}],severList:[[{name:"兑换会员",icon:"point.png"},{name:"修改密码",icon:"quan.png"},{name:"绑定邮箱",icon:"momey.png"},{name:"修改昵称",icon:"renw.png"}],[{name:"积分明细",icon:"mingxi.png"},{name:"清除缓存",icon:"choujiang.png"},{name:"在线客服",icon:"kefu.png"}]],vipicon:"/static/vip/novip.png",isVip:!1,isLogin:!1,user:{name:"",id:"",email:"",profile:""},notice:""}},computed:{getMenus:function(){var n=new Array;for(var e in this.memberMenus)1==this.memberMenus[e].show&&n.push(this.memberMenus[e]);return n}},onLoad:function(){this.getIsLogin(),this.getInfo(),this.getgg()},onShow:function(){this.getIsLogin(),this.getInfo(),this.getgg()},onShareAppMessage:function(n){},onShareTimeline:function(n){},onPullDownRefresh:function(){this.getIsLogin(),this.getInfo(),this.getgg(),setTimeout((function(){n.stopPullDownRefresh()}),1e3)},methods:{toOrderType:function(e){n.showToast({title:this.orderTypeLise[e].name})},toPage:function(e,t){n.showToast({title:this.severList[e][t].name})},getIsLogin:function(){var e=n.getStorageSync("SET_ISLOGIN");this.IsLoginJudje=null==e,this.IsLoginJudje||(this.isLogin=e)},getgg:function(){var e=this;n.request({url:"",success:function(n){""!=n.data.msg&&(e.notice=n.data.msg[0].content)}})},memberLinkTo:function(e){var t=parseInt(e.currentTarget.dataset.index);n.navigateTo({url:this.getMenus[t].link})},vips:function(){n.navigateTo({url:"../vip/vip"})},vajraTap:function(e){if(console.log(e),0==e){var t=this;t.key="yR1zcrfS6Lqjgr2QGxHr98bq66NJT-7Q",plus.runtime.openURL("mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26jump_from%3Dwebapi%26k%3D"+t.key)}else if(1==e)n.navigateTo({url:"/subPage/commen/post"});else if(2==e){var o=this.userid;n.navigateTo({url:"/pages/my/vip/shoplist?oin="+o})}},getInfo:function(){var e=JSON.parse(n.getStorageSync("access-admin"));this.user.email=e.email,this.user.name=e.name,this.user.id=e.userid,this.user.profile=e.profile,console.log(this.user)},logins:function(){n.navigateTo({url:"/subPage/my/account/login"})},loginYes:function(){},upimg:function(){var e=this,t=n.getStorageSync("Token");n.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(o){n.showLoading({title:"正在上传.."});var i=o.tempFilePaths[0];n.uploadFile({url:"http://易如意后台域名/api.php?act=upic&app=10000&token="+t+"&upt=bbp",filePath:i,name:"file",success:function(t){var o=JSON.parse(t.data);console.log(t.data),200===o.code?(n.showToast({title:"头像上传成功"}),n.hideLoading(),e.getInfo()):(n.showToast({title:"头像上传失败",icon:"none"}),n.hideLoading())}})}})},tuichu:function(){console.log("用户点击退出了"),n.setStorageSync("SET_ISLOGIN",!1),n.removeStorageSync("Token"),n.showToast({title:"已退出登录！"}),n.switchTab({url:"/pages/appdown/appdown"}),this.userimg="/static/logo/yclogo.png",this.getInfo()},qiandao:function(){var e=this,t=n.getStorageSync("Token");n.request({url:"http://易如意后台域名/api.php?act=clock&app=10000&token="+t,success:function(t){console.log(t.data),n.showToast({title:t.data.msg+"，积分+10",icon:"none"}),e.getInfo()}})}}};e.default=t}).call(this,t("543d")["default"])},"9ce5":function(n,e,t){},a613:function(n,e,t){"use strict";t.r(e);var o=t("6d94"),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=i.a},bf1a:function(n,e,t){"use strict";var o=t("9ce5"),i=t.n(o);i.a},f094:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return o}));var o={uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,"29bb"))}},i=function(){var n=this,e=n.$createElement;n._self._c},a=[]}},[["0f9e","common/runtime","common/vendor"]]]);
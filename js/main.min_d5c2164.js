var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__assign=this&&this.__assign||Object.assign||function(t){for(var e,i=1,n=arguments.length;n>i;i++){e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function a(t){try{h(n.next(t))}catch(e){o(e)}}function s(t){try{h(n["throw"](t))}catch(e){o(e)}}function h(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(a,s)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,o&&(a=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[0,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,o=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){h.label=i[1];break}if(6===i[0]&&h.label<a[1]){h.label=a[1],a=i;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(i);break}a[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],o=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,o,a,s,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Store=function(){function t(){this.state={canStart:!0}}return t.prototype.getState=function(t){return t?this.state[t]:this.state},t.prototype.setState=function(t,e){this.state[t]=e},t}();__reflect(Store.prototype,"Store");var AppStore=new Store,AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Hoodle=function(t){function e(e){var i=t.call(this)||this;return i.iSpeedX=5,i.iSpeedY=5,i.s=5,i.init=function(){var t=i._option;i.graphics.beginFill(0,1),i.graphics.drawCircle(21.5,21.5,t.radius),i.x=t.x,i.y=t.y,i.graphics.endFill()},i.start=function(t,e){i.iSpeedX=t,i.iSpeedY=e,egret.startTick(i.run,i)},i.run=function(){var t=i._option;i.iSpeedY+=i.s;for(var e=i.iSpeedX+i.x,n=i.iSpeedY+i.y,r=100,o=1/r;1>o;){var a=i.iSpeedX*o+i.x,s=i.iSpeedY*o+i.y,h=i.hitTest(s,a);if(h){switch(h.type){case"bottom":i.iSpeedY*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,n=h.amend;break;case"right":i.iSpeedX*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,e=h.amend;break;case"top":i.iSpeedY*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,n=h.amend;break;case"left":i.iSpeedX*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,e=h.amend}break}if(t.container.width-a-i.width<=0){i.iSpeedX*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,e=t.container.width-i.width;break}if(t.container.height-s-i.height<=0){i.iSpeedY*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,n=t.container.height-i.height;break}if(i.x+a<0){i.iSpeedX*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,e=0;break}if(i.y+s<0){i.iSpeedY*=-1,i.iSpeedX*=.9,i.iSpeedY*=.9,n=0;break}o+=1/r}return i.y=n,i.x=e,Math.abs(i.iSpeedX)<1&&(i.iSpeedX=0),Math.abs(i.iSpeedY)<1&&(i.iSpeedY=0),n===t.container.height-i.height&&0===i.iSpeedY&&0===i.iSpeedX&&(egret.stopTick(i.run,i),console.log("1")),!0},i.stop=function(){egret.stopTick(i.run,i)},i.hitTest=function(t,e){for(var n=AppStore.getState("currentObs"),r=0,o=Object.keys(n);r<o.length;r++)for(var a=o[r],s=0,h=Object.keys(n[a]);s<h.length;s++){var c=h[s],l=n[a][c];if(l){var p=l.topCanHit,u=l.bottomCanHit,d=l.leftCanHit,g=l.rightCanHit,f=e+i.width,y=e,S=t+i.height,_=t,v=l.x+l.width,m=l.x,w=l.y+l.height,b=l.y;if(u&&i.iSpeedY<0&&f>m&&v>y&&w>_&&S>w)return l.hit(a,c,"bottom"),{type:"bottom",amend:w};if(g&&i.iSpeedX<0&&S>b&&w>_&&v>y&&f>v)return l.hit(a,c,"right"),{type:"right",amend:v};if(p&&i.iSpeedY>0&&f>m&&v>y&&S>b&&b>_)return l.hit(a,c,"top"),{type:"top",amend:b-i.height};if(d&&i.iSpeedX>0&&S>b&&w>_&&f>m&&m>y)return l.hit(a,c,"left"),{type:"left",amend:m-i.width}}}},i._option=__assign({x:0,y:0,radius:20,container:i.parent},e),i.init(),i}return __extends(e,t),e}(egret.Shape);__reflect(Hoodle.prototype,"Hoodle");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var obstaclesAll=[[3,0,0,0,0,0,0],[3,2,3,3,3,3,0],[0,0,0,0,0,0,0],[0,2,3,3,3,3,3]],Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),console.log(AppStore),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,i=this.stage.stageHeight;t.width=e,t.height=i;var n=new Hoodle({x:(this.stage.stageWidth-40)/2,y:this.stage.stageHeight-250,radius:18.5,container:this});n.name="MainHoodle",AppStore.setState("hoodles",[n]),this.renderHoodle(),this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this),this.renderObstacle(),this.renderCarBtn()},e.prototype.touchBegin=function(t){var e=AppStore.getState("canStart");e&&(AppStore.setState("canStart",!1),this.btginStageX=t.stageX,this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this))},e.prototype.touchMove=function(t){var e=this.getChildByName("CarBtn"),i=this.getChildByName("MainHoodle"),n=t.stageX-this.btginStageX;this.btginStageX=t.stageX,e.x=e.x+n;var r=(e.x,this.stage.stageWidth/2),o=i.y+i.height/2,a=e.x,s=e.y,h=Math.abs(r-a),c=Math.abs(o-s),l=Math.sqrt(Math.pow(h,2)+Math.pow(c,2)),p=function(t){var e=Math.acos(t),i=180/Math.PI*e;return Math.round(i)},u=(p(c/l),p(h/l));e.rotation=e.x<=320?-(u-90):u-90},e.prototype.touchEnd=function(){var t=this;this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this),this.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);var e=this.getChildByName("CarBtn"),i=this.getChildByName("MainHoodle"),n=e.rotation>0&&0!==e.rotation,r=n?90-e.rotation:90+Math.abs(e.rotation),o=this.stage.stageWidth/2,a=i.y+i.height/2,s=0!==e.rotation?a+(e.height/2+i.height/2)*Math.sin(2*Math.PI/360*r):a+(e.height/2+i.height/2),h=0!==e.rotation?o-(e.height/2+i.height/2)*Math.cos(2*Math.PI/360*r):o,c=egret.Tween.get(e);console.log(e.rotation),c.to({x:h,y:s},1e3).call(function(){return t.hoodleStart(e.rotation)})},e.prototype.renderCarBtn=function(){var t=new egret.Shape;t.graphics.beginFill(0,1),t.graphics.drawRect(-10,-30,20,60),t.x=this.stage.stageWidth/2,t.y=this.stage.stageHeight-100,t.graphics.endFill(),t.name="CarBtn",this.addChild(t)},e.prototype.renderObstacle=function(){for(var t=0,e=0,i=0,n=0,r=[],o=0,a=obstaclesAll;o<a.length;o++){var s=a[o],h=[];0===t&&(i=s.length,n=this.stage.stageWidth/i);for(var c=0,l=s;c<l.length;c++){var p=l[c];if(p){var u=0!==t&&!obstaclesAll[t-1][e],d=0!==e&&!s[e-1],g=t===obstaclesAll.length-1||!obstaclesAll[t+1][e],f=e!==s.length-1&&!s[e+1],y=new Obstacle({width:n,x:e*n,y:t*n,text:""+p,topCanHit:u,leftCanHit:d,bottomCanHit:g,rightCanHit:f});this.addChild(y),h.push(y),e++}else e++,h.push(null)}t++,e=0,r.push(h)}AppStore.setState("currentObs",r)},e.prototype.renderHoodle=function(){for(var t=AppStore.getState("hoodles"),e=0,i=t;e<i.length;e++){var n=i[e];this.addChild(n)}},e.prototype.hoodleStart=function(t){for(var e=AppStore.getState("hoodles"),i=0,n=e;i<n.length;i++){var r=n[i];try{r.start(t,-100)}catch(o){throw 1}}},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.startAnimation=function(t){var e=this,i=new egret.HtmlTextParser,n=t.map(function(t){return i.parse(t)}),r=this.textfield,o=-1,a=function(){o++,o>=n.length&&(o=0);var t=n[o];r.textFlow=t;var i=egret.Tween.get(r);i.to({alpha:1},200),i.wait(2e3),i.to({alpha:0},200),i.call(a,e)};a()},e.prototype.onButtonClick=function(t){var e=new eui.Panel;e.title="Title",e.horizontalCenter=0,e.verticalCenter=0,this.addChild(e)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Obstacle=function(t){function e(e){var i=t.call(this)||this;return i.initRender=function(){var t=i._option;i.graphics.lineStyle(2,14423100),i.graphics.beginFill(9662683,1),i.graphics.drawRect(0,0,t.width,t.width),i.graphics.endFill();var e=new egret.TextField;e.text=""+t.text,e.size=36,e.width=t.width,e.height=t.width,e.textAlign=egret.HorizontalAlign.CENTER,e.verticalAlign=egret.VerticalAlign.MIDDLE,e.fontFamily="Impact",i.addChild(e),i.x=t.x,i.y=t.y,i.topCanHit=t.topCanHit,i.leftCanHit=t.leftCanHit,i.rightCanHit=t.rightCanHit,i.bottomCanHit=t.bottomCanHit},i.hit=function(t,e,n){var r=AppStore.getState("currentObs"),o=i.getChildAt(0),a=Number(o.text),s=r.map(function(t){return t.slice()});a>1?(o.text=""+(a-1),i.hitAnimation(n)):(i.parent.removeChild(i),s[t][e]=null,s[t+1]&&s[t+1][e]&&(s[t+1][e].topCanHit=!0),t>0&&s[t-1][e]&&(s[t-1][e].bottomCanHit=!0),s[t][e+1]&&(s[t][e+1].leftCanHit=!0),e>0&&s[t][e-1]&&(s[t][e-1].rightCanHit=!0)),AppStore.setState("currentObs",s)},i.hitAnimation=function(t){var e=egret.Tween.get(i);switch(t){case"top":e.to({y:i.y+10},100).to({y:i._option.y},100);break;case"bottom":e.to({y:i.y-10},100).to({y:i._option.y},100);break;case"left":e.to({x:i.x+10},100).to({x:i._option.x},100);break;case"right":e.to({x:i.x-10},100).to({x:i._option.x},100)}},i._option=__assign({width:20,text:"1",x:0,y:0,topCanHit:!0,leftCanHit:!0,bottomCanHit:!0,rightCanHit:!0},e),i.initRender(),i}return __extends(e,t),e}(egret.Sprite);__reflect(Obstacle.prototype,"Obstacle");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),i.call(n))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(n,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(n,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var s=t.split("/");s.pop();var h=s.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(n,generateJSON.paths[t])},this):RES.getResByUrl(h,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){e.call(n,generateJSON.paths[t])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(n,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);
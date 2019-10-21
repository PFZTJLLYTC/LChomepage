import Vue      from 'vue';
import App      from './App';
import store    from './store';
import router   from './router';
import MuseUI   from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
require('./assets/iconfont/material-icons.css');

Vue.config.productionTip    = false;
Vue.config.devtools         = true;
Vue.config.debug            = true;

Vue.use( MuseUI );

//路由跳转后，页面回到顶部
router.afterEach(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});

/*
 * 页面加入这段代码可使Android机器页面不再受到用户字体缩放强制改变大小
 * 但是会有一个1秒左右的延迟，期间可以考虑通过loading展示
 * 仅供参考
 */
(function(){
    if (typeof(WeixinJSBridge) == 'undefined') {
        document.addEventListener('WeixinJSBridgeReady', function ( e ) {
            setTimeout(function(){
                WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 }, function( res ) {
                    // alert(JSON.stringify(res));
                });
            },0);
        });
    } else {
        setTimeout(function(){
            WeixinJSBridge.invoke('setFontSizeCallback',{ 'fontSize': 0 }, function( res ) {
                // alert(JSON.stringify(res));
            });
        },0);
    }
})();

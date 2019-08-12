// '电商网站'
<template lang="pug">
#ECommerce
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    DetailContent( v-bind:DetailContentProps="eCommerceArr" )
    .moduleBox( v-bind:style="{ backgroundColor: fff }" )
        TitleBox( v-bind:titleInfo="registerModule" )
        Register
    .moduleBox( v-bind:style="{ backgroundColor: teamModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="contactUsModule" )
        ContactUs
</template>

<script>
import DetailAppBar         from '../components/common/DetailAppBar'
import DetailBanner         from '../components/common/DetailBanner'
import DetailContent        from '../components/common/DetailContent'
import ContactUs    from '../components/Home/ContactUs'
import TitleBox     from '../components/common/TitleBox'
import Register from '../components/common/Register'

import { ECommerceModule }  from '../assets/script/module/ECommerce.js'
import { aboutUsObj, serviceObj, introObj, worksObj, teamObj, contactUsObj, registerObj }    from '../assets/script/module/Home'
const components = { DetailAppBar, DetailBanner, DetailContent, TitleBox, ContactUs, Register }

export default {
    name: 'ECommerce',
    data() {
        return {
            bannerInfo: {
                bgImg: require('../assets/img/ECommerce-bgbanner.png'),
                titleInfo: [
                    {
                        title: '管理员'
                    }
                ]
            },
            eCommerceArr: ECommerceModule,
            serviceModule: serviceObj,
            introModule: introObj,
            worksModule: worksObj,
            teamModule: teamObj ,
            aboutUsModule: aboutUsObj,
            contactUsModule: contactUsObj,
            registerModule: registerObj
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'ECommerce' );            // 更新 路由url状态
        this.$toDetailTop();                                // 初始页面滚动到页面顶部
    },
    components: components
}
</script>

// 首页内容( 路由 - 引入 )
<template lang="pug">
#Home
    AppBar
    Banner
    .moduleBox( v-bind:style="{ backgroundColor: introModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="introModule" )
        Intro
    .moduleBox( v-bind:style="{ backgroundColor: serviceModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="serviceModule" )
        Server
    .moduleBox( v-bind:style="{ backgroundColor: aboutUsModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="aboutUsModule" )
        AboutUs
    .moduleBox( v-bind:style="{ backgroundColor: contactUsModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="contactUsModule" )
        ContactUs
</template>

<script>
import TitleBox     from '../components/common/TitleBox'        // 标题

import AppBar       from '../components/Home/AppBar'            // AppBar顶部导航
import Banner       from '../components/Home/Banner'            // Banner组件
import ContactUs    from '../components/Home/ContactUs'         // 联系我们

import AboutUs      from '../components/Home/AboutUs'           // 关于我们
import Server       from '../components/Home/Service'           // 提供服务
import Intro        from '../components/Home/Intro'             // 服务简介

import { aboutUsObj, serviceObj, introObj, contactUsObj }    from '../assets/script/module/Home'
const components = { TitleBox, AppBar, Banner, ContactUs,Server, Intro, AboutUs }

export default {
    name: 'Home',
    data() {
        return {
            serviceModule: serviceObj,
            introModule: introObj,
            aboutUsModule: aboutUsObj,
            contactUsModule: contactUsObj
        }
    },
    components: components
}
</script>

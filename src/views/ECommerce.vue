// '电商网站'
<template lang="pug">
#ECommerce
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    DetailContent( v-bind:DetailContentProps="eCommerceArr" )
    .moduleBox( v-bind:style="{ backgroundColor: registerModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="registerModule" )
        mu-row.moduleBox__content( gutter )
        Register
    .moduleBox( v-bind:style="{ backgroundColor: platformModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="platformModule" )
        mu-row.moduleBox__content( gutter )
            mu-col(
                v-for="item in platformModule.contentInfo" v-bind:key="item.title"
                class="mediaQuery--platformModule platformModule"
                width="100" tablet="100" desktop="50"
            )
                .moduleBox__iconImg( v-bind:style="{ borderRadius: '50%' }" )
                    img( v-bind:src="item.iconImg" v-bind:style="{ width: '80%' }" )
                .moduleBox__info
                    h3 {{ item.title }}
                    p {{ item.subTitle }}
                    a( v-bind:href="item.download" ) {{ item.word }}

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
import { platformObj }    from '../assets/script/module/Application'
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
                        title: '予以高效'
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
            registerModule: registerObj,
            platformModule: platformObj
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'ECommerce' );            // 更新 路由url状态
        this.$toDetailTop();                                // 初始页面滚动到页面顶部
    },
    components: components
}

</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

// 模块样式
.moduleBox
    +pT( 0 )
    +REM( padding-bottom, 40px )
    .moduleBox__content
        margin: 0 auto
        max-width: 1180px
        @media only screen and ( min-width : 1024px )
            padding: $M-contentMargin
        @media only screen and ( min-width : 1180px )
            padding: 0
        .platformModule
            +REM-margin-TB( $M-contentMargin )
            .moduleBox__iconImg
                +flexCenter--inline
                border: 1px solid $C-title
                +text-vertical-align( top )
            .moduleBox__info

        .fourPlatformModule
            h3
                color: $F
        .sixAdvantageModule
            +REM-padding-TB( $M-contentMargin )
            @media only screen and ( min-width : 320px )
                border-bottom: 1px solid $C-Intro-border
                &:last-child
                    border-bottom: 0
            @media only screen and ( min-width : 1024px )
                +rowBorderAll( 2, $C-Intro-border )
                &:last-child
                    border-bottom: 1px solid $C-Intro-border
            h3
                +fontStyle( $F-info, $C-title, 1.5 )
                +fW( bold )
            p
                +fontStyle( $F-text, $C-text, 1.5 )

// 媒体查询 - 两大平台
.mediaQuery--platformModule
   +REM( padding, $M-contentMargin )
   @media only screen and ( min-width : 1024px )
       +textCenter
   .moduleBox__iconImg
       @media only screen and ( min-width : 320px )
           +dib
           +REM( margin-left, $M-contentMargin )
           +REM( width, 45px )
           +REM( height, 45px )
       @media only screen and ( min-width : 768px )
           +REM( width, 60px )
           +REM( height, 60px )
       @media only screen and ( min-width : 1024px )
           +block
           margin: 0 auto
   .moduleBox__info
       @media only screen and ( min-width : 320px )
           +dib
           +REM( margin-left, $M-contentMargin )
           +REM( max-width, 260px )
           >h3
               +REM( font-size, $F-info*.9 )
               color: $C-title
           >p
               +REM( font-size, $F-text*.7 )
               color: $C-text
       @media only screen and ( min-width : 768px )
           >h3
               +REM( font-size, $F-title*.9 )
               color: $C-title
           >p
               +REM( font-size, $F-text )
               color: $C-text
       @media only screen and ( min-width : 1024px )
           +block
           margin: 0 auto
           >h3
               +REM( font-size, $F-sub-bigTitle*.9 )
               color: $C-title
           >p
               +REM( font-size, $F-text )
               color: $C-text
</style>




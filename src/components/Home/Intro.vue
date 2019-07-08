// 服务简介( V1.2新加组件 )
<template lang="pug">
#Intro
    .mobile
        TableRender( v-bind:TableRenderArr = "introArr" )
    .desktop
        // 循环输出 进行渲染
        mu-tabs( v-bind:value="activeTab" @change="handleTabChange" v-bind:style="{ backgroundColor: '#67b5c2' }" )
            mu-tab( v-for="item in introArr" v-bind:value="item.tabName" v-bind:icon="item.iconName" v-bind:title="item.titleName" v-bind:key="item.titleName" v-bind:style="{ color: '#FFF' }" )

        div( v-for="item in introArr" v-if="activeTab === item.tabName" )
            TableOnly( v-bind:TableArr = "item.itemArr" )
    //下为之前"行业方案"的实现
    // 表格渲染
    TableRender( v-bind:TableRenderArr = "worksArr" )
    // 图片介绍
    mu-row( gutter )
        mu-col.works--box( v-for="item in worksBoxArr" v-bind:key="item.itemTitle" width="100" tablet="100" desktop="50" )
            div( v-if="item.imgLeft" v-bind:style="{ backgroundColor: item.itemColor }" )
                .works--box--imgBox( v-bind:style=" { backgroundImage: 'url(' + item.itemImgSrc + ')', backgroundSize: 'cover' } " )
                .works--box--textContent
                    .flexbox
                        h3 {{ item.itemTitle }}
                        p {{ item.itemText }}
            div( v-else v-bind:style="{ backgroundColor: item.itemColor }" )
                .works--box--textContent
                    .flexbox
                        h3 {{ item.itemTitle }}
                        p.text {{ item.itemText }}
                .works--box--imgBox( v-bind:style=" { backgroundImage: 'url(' + item.itemImgSrc + ')', backgroundSize: 'cover' } " )
</template>

<script>
import TableRender      from '../common/TableRender'
import TableOnly        from '../common/TableOnly'
const components = { TableRender, TableOnly }

export default {
    name: 'Intro',
    data() {
        return {
            activeTab: 'APP',          // Tabs 组件 点击效果
            // 服务类型
            introArr: [
                {
                    titleName   : `APP应用开发`,
                    iconName    : "phone_iphone",
                    tabName     : "APP",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [                                             // 单独服务类型的细分数组
                        {
                            iconImg     : require('../../assets/img/ico-windows-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'Windows'
                        }, {
                            iconImg     : require('../../assets/img/ico-iphone-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'Apple'
                        }, {
                            iconImg     : require('../../assets/img/ico-android-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'Android'
                        }, {
                            iconImg     : require('../../assets/img/ico-h-t-m-l-5-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'HTML5'
                        }
                    ]
                }, {
                    titleName   : `企业应用`,
                    iconName    : "laptop_mac",
                    tabName     : "Enterprise",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-e-r-p-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : 'ERP系统'
                        }, {
                            iconImg     : require('../../assets/img/ico-o-a-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : 'OA系统'
                        }, {
                            iconImg     : require('../../assets/img/ico-c-r-m-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : 'CRM'
                        }, {
                            iconImg     : require('../../assets/img/ico-w-e-b-s-i-t-e-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : '大型门户'
                        }, {
                            iconImg     : require('../../assets/img/ico-wechat-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : '微信'
                        }
                    ]
                }, {
                    titleName   : `电商系统`,
                    iconName    : "local_grocery_store",
                    tabName     : "ECommerce",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-webshop-140-px@3x.png'),
                            row         : "33%",
                            rowClass    : 'row3',
                            itemTitle   : '线上电商'
                        }, {
                            iconImg     : require('../../assets/img/ico-appshop-140-px@3x.png'),
                            row         : "33%",
                            rowClass    : 'row3',
                            itemTitle   : '移动商城'
                        }, {
                            iconImg     : require('../../assets/img/ico-weishop-140-px@3x.png'),
                            row         : "33%",
                            rowClass    : 'row3',
                            itemTitle   : '微商城'
                        }
                    ]
                }, {
                //之前"行业方案"的内容
                    titleName   : `系统集成`,
                    iconName    : "settings",
                    tabName     : "system",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '溯源'
                        }, {
                            iconImg     : require('../../assets/img/ico-barcode-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '防伪'
                        }, {
                            iconImg     : require('../../assets/img/ico-card-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '一卡通'
                        }, {
                            iconImg     : require('../../assets/img/ico-card-140-px-copy@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '巡检'
                        }
                    ]
                }
            ],worksBoxArr: [
                {
                    imgLeft     : true,
                    itemColor   : '#67B5C2',
                    itemImgSrc  : require('../../assets/img/works_2.png'),
                    itemTitle   : `艾迦办公官方网站`,
                    itemText    : `艾迦办公是一家专注于为各类企业提供中高端办公室租赁
                                    及配套服务的互联网平台，通过线上初步选房-线下核定房源-陪同看房-撮合交易这一流程，
                                    为客户提供最有效的租房服务。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#6574BB',
                    itemImgSrc  : require('../../assets/img/works_5.png'),
                    itemTitle   : `欢乐颂H5办公租赁平台`,
                    itemText    : `长江中心“欢乐颂创意办公空间”是岛城首家互联网创意办公空间，旨在引领本土白领生态办公新模式，
                                    打造微租赁、短时租赁新地标。`
                }, {
                    imgLeft     : true,
                    itemColor   : '#343A48',
                    itemImgSrc  : require('../../assets/img/works_3.png'),
                    itemTitle   : `艾迦办公APP客户端`,
                    itemText    : `艾迦办公是一家专注于为各类企业提供中高端办公室租赁及配套服务的互联网平台，
                                    通过线上初步选房-线下核定房源-陪同看房-撮合交易这一流程，为客户提供最有效的租房服务。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#6574BB',
                    itemImgSrc  : require('../../assets/img/works_1.png'),
                    itemTitle   : `查看更多`,
                    itemText    : `···`
                }
            ]
        }
    },
    methods: {
        handleTabChange (val) {
            this.activeTab = val
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'
#Intro
    .mobile
        @media only screen and ( min-width : 320px )
            +block
        @media only screen and ( min-width : 768px )
            +dNone
    .desktop
        @media only screen and ( min-width : 320px )
            +dNone
        @media only screen and ( min-width : 768px )
            +block
    @media only screen and ( min-width : 1180px )
        max-width: 1180px
        margin: 0 auto
        padding:
            left: 0
            right: 0
    +global-maxWidth
    +bC( $C-base )
    .works--box
        >div
            +box
            +REM( height, 200px )
            .works--box--imgBox
                width: 50%
            .works--box--textContent
                +flexCenter
                width: 50%
                color: $F
                .flexbox
                    +REM-margin-LR( $M-contentMargin*2 )
                    +REM-margin-TB( $M-contentMargin )
                    >h3
                        // +textCenter
                        +REM( margin-bottom, $M-contentMargin/3 )
                        +fS( $F-info )
                    >p
                        +ell-line( $F-title, 4 )
                        +fS( $F-text )
                        +lH( $F-title )
                        @extend %justify
        &:last-child
            >div .works--box--textContent .flexbox>p
                +textCenter

    @media only screen and ( min-width : 768px )
        .works--box >div
            +REM( height, 250px )
            .works--box--textContent .flexbox > h3
                +fS( $F-title )
            .works--box--textContent .flexbox > p
                +fS( $F-info )
                +ell-line( $F-title*1.5, 7 )
    @media only screen and ( min-width : 1024px )
        .row
            flex-direction: column
            height: 720px
            .works--box
                width: 50% !important
</style>

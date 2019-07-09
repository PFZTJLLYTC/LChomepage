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
                    titleName   : `管理端应用`,
                    iconName    : "laptop_mac",
                    tabName     : "Enterprise",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-windows-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'Windows'
                        }, {
                            iconImg     : require('../../assets/img/ico-w-e-b-s-i-t-e-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row5',
                            itemTitle   : '大型门户'
                        }
                    ]
                }, /*{
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
                }, */{
                //之前"行业方案"的内容
                    titleName   : `消息与升级`,
                    iconName    : "settings",
                    tabName     : "system",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-wechat-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row5',
                            itemTitle   : '微信推送'
                        },
                    ]
                }
            ],worksBoxArr: [
                {
                    imgLeft     : true,
                    itemColor   : '#67B5C2',
                    itemImgSrc  : require('../../assets/img/works_2.png'),
                    itemTitle   : `连城App`,
                    itemText    : `连城App是连城服务的客户端，用户和司机通过此App进行订单的上传和接收。联系更加方便且分配灵活。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#6574BB',
                    itemImgSrc  : require('../../assets/img/works_5.png'),
                    itemTitle   : `连城服务`,
                    itemText    : `连城服务一直在探索更加便民的服务方式，所以总是在升级，您的支持将让我们更加努力。:)`
                }, {
                    imgLeft     : true,
                    itemColor   : '#343A48',
                    itemImgSrc  : require('../../assets/img/works_3.png'),
                    itemTitle   : `连城管理系统`,
                    itemText    : `方便线路管理人的管理端，提供多项操作，准确管理订单和司机，并且提供统计数据和司机绩效，让管理人更加方便业务处理。`
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

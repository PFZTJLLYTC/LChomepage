// 服务简介( V1.2新加组件 )
<template lang="pug">
#Intro
    .mobile
        TableRender( v-bind:TableRenderArr = "introArr" )
    //下为之前"行业方案"的实现

    DetailContent( v-bind:DetailContentProps="userApp" )
    mu-row( gutter )
        mu-col.works--box( v-for="item in userAppArr" v-bind:key="item.itemTitle" width="100" tablet="100" desktop="50" )
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
    DetailContent( v-bind:DetailContentProps="driverApp" )
    mu-row( gutter )
        mu-col.works--box( v-for="item in driverAppArr" v-bind:key="item.itemTitle" width="100" tablet="100" desktop="50" )
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
    DetailContent( v-bind:DetailContentProps="manager" )
    mu-row( gutter )
        mu-col.works--box( v-for="item in managerArr" v-bind:key="item.itemTitle" width="100" tablet="100" desktop="50" )
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
import DetailContent    from '../common/DetailContent'


const components = { TableRender, TableOnly ,DetailContent}
import { UserAppModule }  from '../../assets/script/module/UserApp.js'
import { DriverAppModule } from "../../assets/script/module/DriverApp.js";
import { ManagerModule } from "../../assets/script/module/Manager.js";

export default {
    name: 'Intro',
    data() {
        return {
            activeTab: 'APP',          // Tabs 组件 点击效果
            // 服务类型
            userAppArr: [
                {
                    imgLeft     : true,
                    itemColor   : '#0066cc',
                    itemImgSrc  : require('../../assets/img/userApp1.jpg'),
                    itemTitle   : `发现界面`,
                    itemText    : `为用户提供更多休闲性服务，在乘车过程中拥有更好的体验.`
                }, {
                    imgLeft     : false,
                    itemColor   : '#0066cc',
                    itemImgSrc  : require('../../assets/img/userApp4.jpg'),
                    itemTitle   : `用户个人信息界面`,
                    itemText    : `用于用户所有订单记录的查看，并且可以修改App设置以适应用户的使用习惯。`
                },{
                    imgLeft     : true,
                    itemColor   : '#0066cc',
                    itemImgSrc  : require('../../assets/img/userApp5.jpg'),
                    itemTitle   : `行程界面`,
                    itemText    : `用户可直接查看订单信息以及自己的行程情况，以便做出更好的出行计划，也可与司机联系交流细节以决定是否乘车。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#0066cc',
                    itemImgSrc  : require('../../assets/img/userApp3.jpg'),
                    itemTitle   : `消息界面`,
                    itemText    : `用于查看订单处理情况，主要由线路服务管理员处理订单后推送信息给用户，以便用户能及时了解自己订单的处理情况。`
                }
            ],
            userApp: UserAppModule,
            driverAppArr: [
                {
                    imgLeft     : true,
                    itemColor   : '#0099cc',
                    itemImgSrc  : require('../../assets/img/driverApp21.jpg'),
                    itemTitle   : `车主信息界面`,
                    itemText    : `车主个人信息修改、历史订单查看、车上可用座位数量设置以及客服服务。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#0099cc',
                    itemImgSrc  : require('../../assets/img/driverApp22.jpg'),
                    itemTitle   : `车主状态修改`,
                    itemText    : `车主通过修改状态来灵活使用自己的工作时间，也方便线路服务管理员对司机的任务分配。`
                },{
                    imgLeft     : true,
                    itemColor   : '#0099cc',
                    itemImgSrc  : require('../../assets/img/driverApp23.jpg'),
                    itemTitle   : `总订单查看`,
                    itemText    : `车主可查看自己往期订单以及现在正在进行的订单，提供关键记录，便于其的日常使用。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#0099cc',
                    itemImgSrc  : require('../../assets/img/driverApp24.jpg'),
                    itemTitle   : `车主主要信息`,
                    itemText    : `当车主有车型更换或者车牌更换时，修改此处可以同步修改服务管理员和用户的订单信息，以便于更好的工作处理。`
                }
            ],
            driverApp: DriverAppModule,
            managerArr: [
                {
                    imgLeft     : true,
                    itemColor   : '#336699',
                    itemImgSrc  : require('../../assets/img/manager22.png'),
                    itemTitle   : `订单处理界面`,
                    itemText    : `服务管理员系统的主要功能，用于分发订单给司机，快速处理订单；更建议于移动app使用。`
                },{
                    imgLeft     : false,
                    itemColor   : '#336699',
                    itemImgSrc  : require('../../assets/img/manager21.png'),
                    itemTitle   : `其它信息`,
                    itemText    : `订单记录总结以及线路概况，还有客服、推送等的处理。`
                }, {
                    imgLeft     : true,
                    itemColor   : '#336699',
                    itemImgSrc  : require('../../assets/img/manager23.png'),
                    itemTitle   : `司机登记验证`,
                    itemText    : `司机正常处理订单需经过对应线路的服务管理员的审核通过后，才能正常使用连城的车主App；且服务管理员有权利删除不称职者。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#336699',
                    itemImgSrc  : require('../../assets/img/manager24.png'),
                    itemTitle   : `所有订单记录`,
                    itemText    : `历史所有订单的记录，提供概况，便于服务管理员对线路当月的总体情况查看。`
                }
            ],
            manager: ManagerModule
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

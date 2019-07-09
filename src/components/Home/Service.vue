<template lang="pug">
#Service
    mu-row( gutter )
        mu-col(
            v-for="item in serviceArr" v-bind:key="item.title"
            class="serviceBox mediaQuery--serviceBox"
            width="100" tablet="50" desktop="20"
        )
            div
                .imgBox
                    img( v-bind:src=" item.img " )
                h2 {{ item.title }}
                .string
                p( v-for="itemText in item.textArr" v-bind:style="{ display: 'block' }" ) {{ itemText.text }}
                .btnBox
                    mu-flat-button.demo-flat-button( label="查看详情" @click="toDetailPage( item.url )" )
</template>

<script>
export default {
    name: 'Service',
    methods: {
        // 目的: 点击'查看详情' -> 跳转到详情页
        toDetailPage(detailPageUrl) {
            // 判断跳转是否为CMMI链接
            // if( detailPageUrl != 'CMMI' ) {
            //     location.href = '#/' + detailPageUrl
            // } else {
            //     location.href = 'http://baike.baidu.com/link?url=fEHKyvDNi26xfAcmLZmshqPUXjv_N100RQnBraaK2ACYZnJ_My57DTN_XHER-3q9dFkSySDl4h97xgipV6hou_'
            // }
            location.href = '#/' + detailPageUrl
        }
    },
    data() {
        return {
            serviceArr: [
                {
                    //这里图片修改！
                    img     : require('../../assets/img/yonghu.png'),
                    title   : '用户入口',
                    url     : 'Application',
                    textArr: [
                        {
                            text: `Android4.0+、iOS10+`
                        }, {
                            text: `完美适配刘海屏、全面屏、色彩友好，`
                        }, {
                            text: `与生活贴近`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/comiis_siji.png'),
                    title   : '司机入口',
                    url     : 'BigData',
                    textArr: [
                        {
                            text: `人线对应、即时延时消息通知，`
                        }, {
                            text: `多机型适配，`
                        }, {
                            text: `简与用兼顾...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/guanliyuan.png'),
                    title   : '管理员入口',
                    url     : 'ECommerce',
                    textArr: [
                        {
                            text: `网页管理、可实现移动化办公，`
                        }, {
                            text: `年、月、日数据分析，`
                        }, {
                            text: `多线路合作通道...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/hezuohuoban.png'),
                    title   : '其他合作',
                    url     : 'SystemIntegration',
                    textArr: [
                        {
                            text: `加盟或反馈、`
                        }, {
                            text: `商业投放与推广，`
                        }, {
                            text: `其他定制要求……`
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#Service
    +moduleBoxStyle
    padding: 0
    +global-maxWidth
    .serviceBox
        +flexCenter
        +textCenter
        +REM( padding, $M-padding )
        +REM( margin-bottom, $M-padding )
        +bC( $F )
        >div
            .imgBox
                @extend %dib
                +REM-W-H( 30px, 30px )
                >img
                    +imgCover( 100% )
            // "查看详情" 按钮
            .demo-flat-button
                +ellipseBtn( 30px )
                width: auto
                margin: 0
                +REM-margin-TB( $M-margin )
                box-shadow: none                        // 隐藏不必要的shadow效果
                border: 1px solid rgba( $C-text, .4 )
                color: $C-text
                // hover 事件
                &:hover
                    border-color: $C-theme
                    +bC( $C-theme )
                    color: $F


// 媒体查询
.mediaQuery--serviceBox
    @media only screen and ( min-width : 320px )
        >div
            >h2
                +REM-fontStyle( $F-title, $C-title )
                +REM-padding-TB( $M-contentMargin )
            .string
                +dib
                width: 30%
                +REM( height, 2px )
                +REM( margin-bottom, $M-contentMargin )
                +bC( $C-theme )
            >p
                +REM-fontStyle( $F-text, $C-text, 2.5 )
    @media only screen and ( min-width : 768px )
        height: 360px
    @media only screen and ( min-width : 1024px )
        height: 500px
        >div
            +REL
            +pT( $M-padding*2 )
            height: 100%
            >h2
                +fontStyle( $F-title, $C-title )
            .string
            >p
                +fontStyle( $F-text, $C-text, 2.5 )
            >.btnBox
                +ABS
                +flexCenter
                bottom: 0
                +W100
</style>

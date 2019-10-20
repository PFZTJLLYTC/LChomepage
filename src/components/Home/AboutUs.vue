<template lang="pug">
#AboutUs
    mu-row( gutter )
        mu-col( class="AboutUs--img" width="100" tablet="45" desktop="40" )
            img( src="../../assets/img/pic-detail-3-1@3x.png" )
        mu-col( class="AboutUs--text" width="100" tablet="55" desktop="60" )
            h3 {{ contentInfo.title }}
            .string
            p( v-for=" item in contentInfo.textArr ") &nbsp;&nbsp;&nbsp;&nbsp;{{ item.text }}
            p( v-for=" item in contentInfo.contributeArr ") &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;{{ item.text }}
</template>

<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            contentInfo: {
                title: '连城',
                textArr:   [
                     {
                        text: `“连城”致力于解决小城市或城区之间的出行的无序和不合理的情况，
                        旨在提供一个更加安全，便于科学化管理，实现业务拓展可能，便于居民城际出行安排的易于操作的移动端系统。以服务出行为最大目标，为居民带来更便捷的出行体验。
                        平台的建立基于共享经济的概念，为小城市人们的出行提供一个可选的较便利服务。`
                    },{
                        text: `平台是由多个大学生进行维护与开发，并将不断的迭代，引入新的功能，也希望平台用户可以在公众号提出宝贵建议。
                        同样的，我们也欢迎有能力的同学加入我们的开发维护工作，希望能在留言中给出联系方式。`
                    },{
                        text: `连城二字传达着我们的初衷——将城间间进行连接以便人们出行。连城取名自金庸先生的小说《连城决》，而我们也希望您在生活中未曾被完全磨平棱角，持有一股江湖义气。`
                    },{
                        text: `“欲行，则连城”。`
                    },{
                        text: `期待着我们的共同进步。`
                    }
                ],
                contributeArr:[{text:`——LC项目组7月于上海`}]

            }
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#AboutUs
    @media only screen and ( min-width : 768px )
        +REL
        +REM( height, 370px )
        +REM-P( $M-padding, $M-margin, $M-padding, $M-margin )
    +global-maxWidth
    .AboutUs--img
        @media only screen and ( min-width : 320px )
            >img
                +imgCover( 100% )
        @media only screen and ( min-width : 768px )
            +ABS
            +REM( right, $M-margin )
            height: 445px
            >img
                +imgCover( 100% )
                height: 100%
    .AboutUs--text
        +moduleBoxStyle
        h3
            +REM( padding-bottom, $M-contentMargin )
            +REM( font-size, $F-title )
            +fW( bold )
            color: $C-sub-title
        .string
            +halfString( $C-sub-title, 200% )
        p
            +REM( padding-top, $M-contentMargin )
            +REM( font-size, $F-text )
            +REM( line-height, $F-title )
            color: $C-text
        @media only screen and ( min-width : 768px )
            +ABS
            left: 0
            padding:
                top: 0
                bottom: 0
        @media only screen and ( min-width : 1180px )
            +pL( 0 )
</style>

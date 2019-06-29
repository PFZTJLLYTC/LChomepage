<template lang="pug">
#AboutUs
    mu-row( gutter )
        mu-col( class="AboutUs--img" width="100" tablet="45" desktop="40" )
            img( src="../../assets/img/pic-about-us.png" )
        mu-col( class="AboutUs--text" width="100" tablet="55" desktop="60" )
            h3 {{ contentInfo.title }}
            .string
            p( v-for=" item in contentInfo.textArr " ) {{ item.text }}
</template>

<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            contentInfo: {
                title: '连城管理系统',
                textArr:   [
                    {
                        text: `在万物互联的互联网的时代，人们的出行方式与网络联系得更为密切，市面上的出行应用如春笋般涌现，但是几乎没有一款应用是针对固定线路出行提供服务的。
                        这是在出行服务上的一个盲点，而“连城”正是为此而生。`
                    }, {
                        text: `“连城”的主要制作目标是创建一个城际行车固定线路的服务与管理系统（基于移动端和pc端）。它将用于解决（主要是）四线及以下城市之间的出行的各种无序和不合理的情况，
                        旨在提供一个更加安全，便于科学化管理，实现业务拓展可能，便于居民城际出行安排的易于操作的移动端系统。以服务出行为最大目标，为居民带来更便捷的出行体验。`
                    }
                ]

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

<template lang="pug">
#Works
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
import TableRender  from '../common/TableRender'
const components = { TableRender }

export default {
    name: 'Works',
    data() {
        return {
            worksBoxArr: [
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
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#Works
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

<template lang="pug">
#ContactUs
    mu-row( gutter )
        mu-col(
            v-for="item in contactUsArr" v-bind:key="item.iconName"
            class="contactUS--box mediaQuery--contactUs--info"
            width="100" tablet="100" desktop="25"
        )
            .contactUS--text
                i( class="mu-icon material-icons" ) {{ item.iconName }}
                P {{ item.info }}
</template>

<script>
export default {
    data() {
        return {
            contactUsArr: [
                {
                    iconName: 'mail',
                    //info: 'liancheng.a.2019@gmail.com'
                    info: 'leodpen@gmail.com'
                }, {
                    iconName: 'person_add',
                    info: '客服QQ：3382767527'
                    //info: '公众号维护中'
                }, {
                    iconName: 'group',
                    info: '公众号：连城出行'
                }, {
                    iconName: 'place',
                    info: '上海市普陀区中山北路3663号'
                }
            ],
            input                      : '',
            inputErrorText             : '',
            multiLineInput             : '',
            multiLineInputErrorText    : ''
        }
    },
    methods: {
        handleInputOverflow (isOverflow) {
            this.inputErrorText = isOverflow ? '超过！' : ''
        },
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '超过！' : ''
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#ContactUs
    +global-maxWidth
    +REM-padding-TB( $M-contentMargin*2 )
    +REM-padding-LR( $M-contentMargin )
    .contactUS--box
        +flexCenter
        +textCenter

.mediaQuery--contactUs--info
    @media only screen and ( min-width : 320px )
        .contactUS--text
            +REM( padding-bottom, $M-contentMargin )
            >i
                +REM( font-size, $F-sub-bigTitle )
            >p
                +REM-fontStyle( $F-info, $C-sub-title, 2 )
    @media only screen and ( min-width : 768px )
        .contactUS--text >i
            +REM( font-size, $F-sub-bigTitle )
    @media only screen and ( min-width : 1024px )
        .contactUS--text >p
            +fontStyle( $F-title, $C-sub-title, 2 )

// 输入框 宽度样式
.mu-text-field
    width: 100%
</style>

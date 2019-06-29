<template lang="pug">
    .footer
        p © 连城管理系统 2019
</template>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

.footer
    +flexCenter
    width: 100%
    +REM( height, 40px )
    +bC( $C-title )
    >p
        color: rgba( $F, .6 )
</style>

<template lang="pug">
    .footer
        p Copyright © 2018-2019 LC(连城) All Rights Reserved
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

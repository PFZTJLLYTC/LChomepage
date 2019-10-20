<template lang="pug">
#Register
    mu-row( gutter )
        // 表单
        mu-col( class="contactUs--box contactUs--form" width="100" tablet="100" desktop="100" )
            p.form--text {{ formTitle }}
            mu-text-field( hintText="姓名" v-model="registerForm.man_name")
            br
            mu-text-field( hintText="申请线路,格式为'北京-上海'" v-model="registerForm.lineName")
            br
            mu-text-field( hintText="微信号" v-model="registerForm.wx")
            br
            mu-text-field( hintText="联系电话" v-model="registerForm.tel")
            br
            mu-text-field( hintText="设置初始密码" v-model="pwd")
            br
            mu-text-field( hintText="重复密码" v-model="pwdAgain")
            br
            mu-text-field( hintText="其他补充或备注信息" v-model="registerForm.other")
            .btnBox
                mu-flat-button.demo-flat-button( label="提交申请" @click="managerRegister('registerForm')" )

</template>

<script>
import axios from 'axios'
        export default {
            data() {
                return {
                    formTitle: `       申请成为新线路或已有线路的管理员`,
                    registerForm: {
                        man_name: '',
                        lineName: '',
                        pwd: '',
                        wx:'',
                        tel: '',
                        other: ''
                    },
                    pwd:'',
                    pwdAgain:''
                }
            }
            ,methods: {
                managerRegister(registerForm){
                    /*console.log(this.registerForm);*/
                    if (this.pwd == ''){
                        alert("请输入密码");
                    }
                    else if (this.pwd!=this.pwdAgain){
                        alert("密码键入不一致");
                    }else{
                        this.registerForm.pwd = this.pwd;
                        axios({
                        method: 'post',
                        url: 'http://www.liancheng2019.cn/root/manager/add',
                        data:{
                            man_name: this.registerForm.man_name,
                            lineName: this.registerForm.lineName,
                            pwd: this.registerForm.pwd,
                            wx: this.registerForm.wx,
                            tel: this.registerForm.tel,
                            other: this.registerForm.other
                        },
                        transformRequest: [function (data) {
                            data = JSON.stringify(data);
                            return data
                        }],
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(resp => {
                        if (resp.data.code === 0) {
                            alert('提交成功，我们将尽快与你联系');
                        } else {
                            alert('提交失败，请确保正确性与完整性！');
                        }
                    })
                    }
                }
            }
        }
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#Register
    +global-maxWidth
    @media only screen and ( min-width : 1180px )
        .contactUs--box
            height: 550px
            &:first-child
               +mB( 0 !important)
        .demo-flat-button
            +ellipseBtn( 30px )
            width: auto
            +REM-margin-LR( $M-margin*20 )
            box-shadow: none                        // 隐藏不必要的shadow效果
            border: 1px solid rgba( $C-text, .4 )
            color: $C-text
            // hover 事件
            &:hover
                border-color: $C-theme
                +bC( $C-theme )
                color: $F
    +REM-margin-TB( $M-padding )
    +REM-margin-LR( $M-margin )
    .contactUs--box
        +moduleBoxStyle
        +REM-padding-LR( $M-padding*6)
        +bC( $F )
        &:first-child
            +REM( margin-bottom, $M-contentMargin )
    .contactUs--form
        >P
            +REM( font-size, $F-text )
            +REM( line-height, $F-text*3 )
            color: $C-text
/*    .contactUs--contactInfo
        .contactInfo--item
            +REM-padding-TB( $M-contentMargin )
            >i
                @extend %dib
                +REM( margin-top, $F-title/4 )
                +REM( font-size, $F-info )
                +text-vertical-align( top )
                color: $C-text
            .contactInfo--text
                @extend %dib
                +REM( padding-left, $M-contentMargin )
                >h2
                    +REM( font-size, $F-info )
                    +fW( 500 )
                    color: $C-title
                >p
                    +REM( margin-top, $M-contentMargin/2 )
                    +REM( font-size, $F-text )
                    color: $C-text*/
// 输入框 宽度样式
.mu-text-field
    width: 100%
</style>

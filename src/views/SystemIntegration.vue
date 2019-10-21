// 其他合作
<template lang="pug">
#System-Integration
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    DetailContent( v-bind:DetailContentProps="systemIntegrationArr" )
    .moduleBox( v-bind:style="{ backgroundColor: contactUsModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="contactUsModule" )
        ContactUs
</template>

<script>
import DetailAppBar                 from '../components/common/DetailAppBar'
import DetailBanner                 from '../components/common/DetailBanner'
import DetailContent                from '../components/common/DetailContent'
import ContactUs    from '../components/Home/ContactUs'
import TitleBox     from '../components/common/TitleBox'

import { SystemIntegrationModule }  from '../assets/script/module/SystemIntegration'
import { aboutUsObj, serviceObj, introObj, contactUsObj }    from '../assets/script/module/Home'
const components = { DetailAppBar, DetailBanner, DetailContent, TitleBox, ContactUs }
export default {
	name: 'SystemIntegration',
	data() {
		return {
			bannerInfo: {
				bgImg: require('../assets/img/SystemIntegration.png'),
				titleInfo: [
					{
						title: '其他合作'
					}
				]
			},
			systemIntegrationArr: SystemIntegrationModule,
            serviceModule: serviceObj,
            introModule: introObj,
            aboutUsModule: aboutUsObj,
            contactUsModule: contactUsObj
		}
	},
	components: components
}
</script>

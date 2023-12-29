<template>
    <f7-page name="masturbationList">
        <Navbar :backLink="false" title="Lista Masturbazioni" />
        
        <f7-block-title>Lista Masturbate</f7-block-title>
        

        <div class="list links-list list-outline-ios list-strong-ios list-dividers-ios">
        <ul v-for="item in masturbationList" v-bind:key="item">
            <li><a> {{ item.attributes.Who + ' - ' + item.attributes.Date }}</a></li>
        </ul>
        </div>



    </f7-page>
</template>

<script>

import axios from 'axios'
import { f7, f7ready } from 'framework7-vue'
import Navbar from '@/components/layout/Navbar.vue'
import constants from '@/js/constants'

export default {
    props: {
        f7route: Object,
        f7router: Object,
    },
    components: {
        Navbar
    },
    data() {
        return {
            constants: constants,
            masturbationList: []

        }

    },
    name: 'MasturbationList',
    mounted() {
        f7ready(async (f7) => {
            try{
                let response = await axios.get(this.constants.api.masturbation)
                this.masturbationList = response.data.data
                console.log(this.masturbationList)
            }
            catch(e){
                console.error(e)
            }

        })
    }
}

</script>
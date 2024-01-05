<template>
    <f7-page name="sexualactivitiesList">
        <Navbar :backLink="false" title="Lista Attività Sessuali" />

        <div class="list links-list list-outline-ios list-strong-ios list-dividers-ios">
        <ul v-for="(item, i) in sexualActivitiesList" v-bind:key="item">
            <li><a @click="navigateTo(item)"> {{ i + 1}}. {{ item.attributes.date }}</a></li>
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
    name: 'sexualActivitiesList',
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
            sexualActivitiesList: []

        }

    },
    mounted() {
        f7ready(async (f7) => {
            try{
                let response = await axios.get(this.constants.api.sexualActivities)
                this.sexualActivitiesList = response.data.data
            }
            catch(e){
                console.error(e)
            }

        })
    }, 
    methods: {
        navigateTo(item) {
            this.f7router.navigate('/editSexualActivities/', {
                props: {
                    sexualActivity: item
                }
            })
        }
    }
}

</script>
<template>
    <f7-page name="sexualactivitiesList">
        <Navbar :backLink="false" title="Lista Attività Sessuali" />

        <div class="list links-list list-outline-ios list-strong-ios list-dividers-ios" v-if="sexualActivitiesStore.sexualActivitiesList.length > 0">
            <ul v-for="(item, i) in sexualActivitiesStore.sexualActivitiesList" v-bind:key="item">
                <li><a @click="navigateTo(item)"> {{ i + 1}}. {{ formatDate(item.attributes.date) }}</a></li>
            </ul>
        </div>
        <div v-else>
            <f7-block>
                <div class="alert alert-warning">Non sono presenti attività sessuali</div>
            </f7-block>
            
       </div>
    </f7-page>
</template>


<script>

import { f7, f7ready } from 'framework7-vue'
import Navbar from '@/components/layout/Navbar.vue'
import constants from '@/js/constants'
import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'

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
            sexualActivitiesStore: useSexualActivitiesStore(),
        }

    },
    mounted() {
        f7ready(async (f7) => {
            

        })
    }, 
    methods: {
        navigateTo(item) {
            this.f7router.navigate('/editSexualActivities/', {
                props: {
                    sexualActivity: item
                }
            })
        },
        formatDate(inputDate) {
            const date = new Date(inputDate)

            const day = date.getDate().toString().padStart(2, '0')
            const month = (date.getMonth() + 1).toString().padStart(2, '0') 
            const year = date.getFullYear()

            return `${day}-${month}-${year}`
        }
    }
}

</script>
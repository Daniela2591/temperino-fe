<template>
    <f7-page name="sexualactivitiesList">
        <Navbar :backLink="false" title="Lista Attività Sessuali" />

        <div class="list links-list list-outline-ios list-strong-ios list-dividers-ios">
        <ul v-for="(item, i) in sexualActivitiesStore.sexualActivitiesList" v-bind:key="item">
            <li><a @click="navigateTo(item)"> {{ i + 1}}. {{ item.attributes.date }}</a></li>
        </ul>
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
        }
    }
}

</script>
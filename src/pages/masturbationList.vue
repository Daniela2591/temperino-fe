<template>
    <f7-page name="masturbationList">
        <Navbar :backLink="false" title="Lista Masturbazioni" />

        <f7-block-title>Lista Masturbate</f7-block-title>


        <div class="list links-list list-outline-ios list-strong-ios list-dividers-ios" v-if="masturbationStore.masturbationList.length > 0">
            <ul v-for="item in masturbationStore.masturbationList" v-bind:key="item">
                <li><a @click="navigateTo(item)"> {{ item.attributes.who + ' - ' + formatDate(item.attributes.date) }}</a></li>
            </ul>
        </div>
        <div v-else>
            <f7-block>
                <div class="alert alert-warning">Non sono presenti masturbazioni</div>
            </f7-block>
            
       </div>



    </f7-page>
</template>

<script>

import { f7, f7ready } from 'framework7-vue'
import Navbar from '@/components/layout/Navbar.vue'
import constants from '@/js/constants'
import { useMasturbationStore } from '@/stores/masturbationStore'

export default {
    name: 'masturbationList',
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
            masturbationStore: useMasturbationStore()

        }

    },
    mounted() {
        f7ready(async (f7) => {
            this.masturbationStore.getLastYearMasturbation()
        console.log(this.masturbationStore.masturbationList)
            

        })
    },
    methods: {
        navigateTo(item) {
            this.f7router.navigate('/editMasturbation/', {
                props: {
                    masturbation: item
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
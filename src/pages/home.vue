<template>
    <f7-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">
    
        <f7-navbar>

            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Temperino </f7-nav-title>
            </f7-nav-left>

        </f7-navbar>

        <HomeDashboard />
    </f7-page>
</template>

<script>

import constants from '@/js/constants'

import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'
import { useMasturbationStore } from '@/stores/masturbationStore'

import HomeDashboard from '@/components/dashboards/HomeDashboard.vue'

export default {
    name: 'Home',
    props: {
        f7route: Object,
        f7router: Object,
    },
    components: {
        HomeDashboard
    },
    data() {
        return {
            constants: constants,
            sexualActivitiesStore: useSexualActivitiesStore(),
            masturbationStore: useMasturbationStore(),
            currentYear: new Date().getFullYear()
        }
    },
    async mounted() {
        
    },
    methods: {
        async loadMore(done) {
            this.sexualActivitiesStore.getLastYearSexualActivities()
            this.masturbationStore.getLastYearMasturbation()

            done()
        }
    }
}
</script>

<style scoped>
.card-header,
.card-footer {
    display: block !important;
    text-align: center;
    font-size: 18px;
}

.card-content {
    text-align: center;
}
</style>
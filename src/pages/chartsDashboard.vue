<template>
    <f7-page ptr :ptr-mousewheel="true" @ptr:refresh="loadAgain">

        <f7-navbar>

            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Temperino </f7-nav-title>
            </f7-nav-left>

        </f7-navbar>

        <SexualActivitiesAggregatedChart />

    </f7-page>
</template>

<script>

import { useChartsStore } from '@/stores/chartsStore'
import SexualActivitiesAggregatedChart from '@/components/charts/SexualActivitiesAggregatedChart.vue'

export default {
    name: 'Home',
    props: {
        f7route: Object,
        f7router: Object,
    },
    components: {
        SexualActivitiesAggregatedChart
    },
    data() {
        return {
            chartsStore: useChartsStore(),
            currentYear: new Date().getFullYear(),
        }
    },
    async mounted() {
        this.chartsStore.getSexualActivitiesAggregatedByMonth()
    },
    methods: {
        async loadAgain(done) {
            this.chartsStore.getSexualActivitiesAggregatedByMonth()

            done()
        }
    }
}
</script>
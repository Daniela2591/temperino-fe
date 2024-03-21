<template>
    <f7-block-title>Orgasmi per mese</f7-block-title>
    <f7-block>
        <apexchart width="100%" type="area" :options="chartOptions" :series="series"></apexchart>
    </f7-block>
</template>

<script>

import { useChartsStore } from '@/stores/chartsStore'

export default {
    name: 'Home',
    props: {
        f7route: Object,
        f7router: Object,
    },
    components: {
    },
    data() {
        return {
            chartsStore: useChartsStore(),
            currentYear: new Date().getFullYear(),

            chartOptions: {
                theme: {
                    mode: 'dark'
                },
                chart: {
                    background: '#000',
                    stroke: {

                        id: "vuechart-example",
                        curve: 'smooth',
                    },
                    toolbar: {
                        show: false // Nasconde la toolbar
                    }
                },
                xaxis: {
                    categories: [],
                },
            },
            series: [
                {
                    name: "Orgasmi Andrea",
                    data: [],
                },
                {
                    name: "Orgasmi Daniela",
                    data: [],
                },
            ],
        }
    },
    async mounted() {
        this.chartsStore.getSexualActivitiesAggregatedByMonth()

        let data = this.chartsStore.sexualActivitiesAggregatedByMonth
        this.series[0].data = data.map(o => o.orgasm_a)
        this.series[1].data = data.map(o => o.orgasm_d)
        this.chartOptions.xaxis.categories = data.map(o => o.date)
    },
    methods: {

    }
}
</script>
<template>
    <f7-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">
    
        <f7-navbar>

            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Temperino </f7-nav-title>
            </f7-nav-left>

        </f7-navbar>

        <f7-block-title>Resoconto anno {{ currentYear }}</f7-block-title>

    <div class="card">
        <div class="card-header">N° scopate</div>
        <div class="card-content card-content-padding">
            {{ sexualActivitiesStore.countSex }}
        </div>
    </div>

    <f7-block-title>Numero orgasmi totali</f7-block-title>
    <div class="grid grid-cols-2">

        <div class="card">
            <div class="card-header">Andrea</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countOrgasmA + masturbationStore.countOrgasmA }}
            </div>
        </div>

        <div class="card">
            <div class="card-header">Daniela</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countOrgasmD + masturbationStore.countOrgasmD }}
            </div>
        </div>

    </div>

    <f7-block-title>Visualizza le dashboard</f7-block-title>
    <div class="block">
        <div class="grid grid-cols-2 grid-gap">
            <div> 
                <a class="button button-large button-raised button-fill" href="/masturbationDashboard/">Masturbazioni</a>
            </div>

            <div> 
                <a class="button button-large button-raised button-fill" href="/sexualActivitiesDashboard/">Attività sessuali</a>
            </div>
        </div>
        <a class="button button-large button-raised button-fill mt-5" href="/chartsDashboard/">Grafici</a>
    </div>
    </f7-page>
</template>

<script>

import constants from '@/js/constants'

import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'
import { useMasturbationStore } from '@/stores/masturbationStore'


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
            constants: constants,
            sexualActivitiesStore: useSexualActivitiesStore(),
            masturbationStore: useMasturbationStore(),
            currentYear: new Date().getFullYear()
        }
    },
    async mounted() {
        this.sexualActivitiesStore.getLastYearSexualActivities()
        this.masturbationStore.getLastYearMasturbation()
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
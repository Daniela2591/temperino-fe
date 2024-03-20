<template>
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
            <div> <a class="button button-large button-raised button-fill" href="/masturbationDashboard/">Masturbazioni</a> </div>
            <div> <a class="button button-large button-raised button-fill" href="/sexualActivitiesDashboard/">Attività sessuali</a> </div>
        </div>
    </div>
</template>

<script>

import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'
import { useMasturbationStore } from '@/stores/masturbationStore'

export default {
    name: 'Home',
    data() {
        return {
            sexualActivitiesStore: useSexualActivitiesStore(),
            masturbationStore: useMasturbationStore(),
            currentYear: new Date().getFullYear()
        }
    },
    async mounted() {
        this.sexualActivitiesStore.getLastYearSexualActivities()
        
    },
    methods: {
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
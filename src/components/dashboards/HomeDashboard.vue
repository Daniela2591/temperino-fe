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

    <f7-block-title>Attività</f7-block-title>
    <div class="grid grid-cols-2">

        <div class="card">
            <div class="card-header">Pompini</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countBlowjob }}
            </div>
        </div>

        <div class="card">
            <div class="card-header">Seghe</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countHandjob }}
            </div>
        </div>

    </div>

    <div class="grid grid-cols-2">

        <div class="card">
            <div class="card-header">Ditalini</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countFingering }}
            </div>
        </div>

        <div class="card">
            <div class="card-header">Leccate</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countLick }}
            </div>
        </div>

    </div>

    <div class="grid grid-cols-2">

        <div class="card">
            <div class="card-header">Spagnolette</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countTitsFuck }}
            </div>
        </div>

        <div class="card">
            <div class="card-header">Anal</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countAnal }}
            </div>
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
        this.masturbationStore.getLastYearMasturbation()
        
    },
    methods: {
    }
}
</script>
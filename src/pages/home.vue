<template>
    <f7-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">
        <!-- Top Navbar -->
        <Navbar :backLink="false" title="Temperino" />

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
                    {{ sexualActivitiesStore.countOrgasmA + masturbationStore.countOrgasmA}}
                </div>
            </div>

            <div class="card">
                <div class="card-header">Daniela</div>
                <div class="card-content card-content-padding">
                    {{ sexualActivitiesStore.countOrgasmD + masturbationStore.countOrgasmD}}
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

    </f7-page>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
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
        Navbar
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
<template>
    <f7-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">
        <f7-page name="home">
            <!-- Top Navbar -->
            <Navbar :backLink="false" title="Temperino" />

            <f7-block-title>Resoconto anno {{ currentYear }}</f7-block-title>

            <div class="card">
                <div class="card-header">N° scopate</div>
                <div class="card-content card-content-padding">
                    {{ sexualActivitiesStore.countSex }}
                </div>
            </div>

            <div class="grid grid-cols-2">

                <div class="card">
                    <div class="card-header">Orgasmi Andrea</div>
                    <div class="card-content card-content-padding">
                        {{ sexualActivitiesStore.countOrgasmA }}
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">Orgasmi Daniela</div>
                    <div class="card-content card-content-padding">
                        {{ sexualActivitiesStore.countOrgasmD }}
                    </div>
                </div>

            </div>
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

            <div class="card">
                <div class="card-header">Anal</div>
                <div class="card-content card-content-padding">
                    {{ sexualActivitiesStore.countAnal }}
                </div>
            </div>
        </f7-page>
    </f7-page>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import constants from '@/js/constants'
import axios from 'axios'

import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'

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
            currentYear: new Date().getFullYear()
        }
    },
    async mounted() {
        this.sexualActivitiesStore.getLastYearSexualActivities()
        
    },
    methods: {
        async loadMore(done) {
            this.sexualActivitiesStore.getLastYearSexualActivities()

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
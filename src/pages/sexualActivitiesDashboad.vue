<template>
    <f7-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">

        <f7-navbar>

            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Temperino </f7-nav-title>
            </f7-nav-left>

        </f7-navbar>

        <f7-block-title>Orgasmi attività sessuali {{ currentYear }}</f7-block-title>
        <div class="grid grid-cols-2">

            <div class="card">
                <div class="card-header">Andrea</div>
                <div class="card-content card-content-padding">
                    {{ sexualActivitiesStore.countOrgasmA }}
                </div>
            </div>

            <div class="card">
                <div class="card-header">Daniela</div>
                <div class="card-content card-content-padding">
                    {{ sexualActivitiesStore.countOrgasmD }}
                </div>
            </div>

        </div>

        <f7-block-title>Scopate</f7-block-title>
        <div class="card">
            <div class="card-header">N° scopate</div>
            <div class="card-content card-content-padding">
                {{ sexualActivitiesStore.countSex }}
            </div>
        </div>

        <div class="grid grid-cols-2">

            <div class="card">
                <div class="card-header">Andrea</div>
                <div class="card-content card-content-padding">
                    {{ sexualActivitiesStore.countOrgasmWhenSexA }}
                </div>
            </div>

            <div class="card">
                <div class="card-header">Daniela</div>
                <div class="card-content card-content-padding">
                    {{ sexualActivitiesStore.countOrgasmWhenSexD }}
                </div>
            </div>

        </div>
        <f7-block class="mt-2"> <b>Rapporto orgasmi D / A</b>: {{ sexualActivitiesStore.ratioOrgasm }}</f7-block>
        <f7-block-title>Attività generiche</f7-block-title>
        <div class="card">
            <div class="card-content">
                <div class="list list-outline-ios list-strong-ios list-dividers-ios">
                    <ul v-for="activity in sexualActivitiesStore.getCountersArray" v-bind:key="activity">
                        <li>
                            <div class="item-content">
                                <div class="item-media"></div>
                                <div class="item-inner">
                                    <div class="item-title"> {{ activity.name }}</div>
                                    <div class="item-after">{{ activity.count}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
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
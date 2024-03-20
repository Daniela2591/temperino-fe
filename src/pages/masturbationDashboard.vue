<template>
    <f7-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">

        <f7-navbar>

            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Temperino </f7-nav-title>
            </f7-nav-left>

        </f7-navbar>

        <f7-block-title>Resoconto masturbazioni {{ currentYear }}</f7-block-title>

        <f7-block-title>Andrea</f7-block-title>
        <div class="card">
            <div class="card-content">
                <div class="list list-outline-ios list-strong-ios list-dividers-ios">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media"></div>
                                <div class="item-inner">
                                    <div class="item-title">Seghe</div>
                                    <div class="item-after">{{ masturbationStore.countOrgasmA }}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media"></div>
                                <div class="item-inner">
                                    <div class="item-title">Di cui con accessori</div>
                                    <div class="item-after">{{ masturbationStore.countMasturbationWithToyA }}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <f7-block-title>Daniela</f7-block-title>
        <div class="card">
            <div class="card-content">
                <div class="list list-outline-ios list-strong-ios list-dividers-ios">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media"></div>
                                <div class="item-inner">
                                    <div class="item-title">Dittalini</div>
                                    <div class="item-after">{{ masturbationStore.countOrgasmD }}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media"></div>
                                <div class="item-inner">
                                    <div class="item-title">Di cui con accessori</div>
                                    <div class="item-after">{{ masturbationStore.countMasturbationWithToyD }}</div>
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
            masturbationStore: useMasturbationStore(),
            currentYear: new Date().getFullYear()
        }
    },
    async mounted() {

    },
    methods: {
        async loadMore(done) {
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
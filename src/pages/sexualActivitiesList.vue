<template>
    <f7-page name="sexualactivitiesList" ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">

        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Lista attività </f7-nav-title>
            </f7-nav-left>
        </f7-navbar>

        <f7-block-title>Lista attività sessuali</f7-block-title>
        

        <div class="list media-list  list-outline-ios list-strong-ios list-dividers-ios"
            v-if="sexualActivitiesStore.sexualActivitiesList.length > 0">
            <ul v-for="(item, i) in sexualActivitiesStore.sexualActivitiesList" v-bind:key="item">
                <li>
                    <a class="item-link" @click="navigateTo(item)">
                        <div class="item-content">
                            <div class="item-media"><img style="border-radius: 8px"
                                    src="/icons/sexual-activities.jpg" width="70" />
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">{{ formatDate(item.attributes.date) }}</div>
                                </div>
                                <div class="item-subtitle">Sborrata: {{ utils.getCumshot(item.attributes.cumshot) }}</div>
                                <div class="item-text">
                                    Orgasmi Andrea: {{ item.attributes.orgasm_a }} <br>
                                    Orgasmi Daniela: {{ item.attributes.orgasm_d }} <br>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div v-else>
            <f7-block>
                <div class="alert alert-warning">Non sono presenti attività sessuali</div>
            </f7-block>
        </div>

        <f7-fab href="/addSexualActivities/" position="right-bottom">
            <f7-icon ios="f7:plus" md="material:add"></f7-icon>
            <f7-icon ios="f7:xmark" md="material:close"></f7-icon>
        </f7-fab>
    </f7-page>
</template>


<script>

import { f7, f7ready } from 'framework7-vue'

import constants from '@/js/constants'
import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'
import utils from '@/js/utils'

export default {
    name: 'sexualActivitiesList',
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
            utils: utils
        }

    },
    mounted() {
        f7ready(async (f7) => {
            this.sexualActivitiesStore.getLastYearSexualActivities()

        })
    },
    methods: {
        navigateTo(item) {
            this.f7router.navigate('/editSexualActivities/', {
                props: {
                    sexualActivity: item
                }
            })
        },
        formatDate(inputDate) {
            const date = new Date(inputDate)

            const day = date.getDate().toString().padStart(2, '0')
            const month = (date.getMonth() + 1).toString().padStart(2, '0')
            const year = date.getFullYear()

            return `${day}-${month}-${year}`
        },
        async loadMore(done) {
            await this.sexualActivitiesStore.getLastYearSexualActivities()

            done()
        }
    }
}

</script>
<template>
    <f7-page name="masturbationList" ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">

        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <!-- <f7-nav-title> Lista Masturbazioni</f7-nav-title> -->
            </f7-nav-left>
        </f7-navbar>

        <f7-block-title>Lista masturbazioni ({{ masturbationStore.countAll }})</f7-block-title>
        <div class="list media-list  list-outline-ios list-strong-ios list-dividers-ios"
            v-if="masturbationStore.masturbationList.length > 0">
            <ul v-for="item in masturbationStore.masturbationList" v-bind:key="item">
                <li>
                    <a class="item-link item-content" @click="navigateTo(item)">
                        <div class="item-media">
                            <img style="border-radius: 8px" :src="getIcon(item.attributes.who)" width="50" />

                        </div>
                        <div class="item-inner">
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">{{ formatDate(item.attributes.date) }}</div>
                                    <div class="item-after">{{ getFullName(item.attributes.who) }}</div>
                                </div>
                            </div>

                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div v-else>
            <f7-block>
                <div class="alert alert-warning">Non sono presenti masturbazioni</div>
            </f7-block>
        </div>

        <f7-fab href="/addMasturbation/" position="right-bottom">
            <f7-icon ios="f7:plus" md="material:add" ></f7-icon>
            <f7-icon ios="f7:xmark" md="material:close"></f7-icon>
        </f7-fab>
    </f7-page>
</template>

<script>

import { f7, f7ready } from 'framework7-vue'

import constants from '@/js/constants'
import { useMasturbationStore } from '@/stores/masturbationStore'

export default {
    name: 'masturbationList',
    props: {
        f7route: Object,
        f7router: Object,
    },
    data() {
        return {
            constants: constants,
            masturbationStore: useMasturbationStore()
        }

    },
    mounted() {
        f7ready(async (f7) => {
            this.masturbationStore.getLastYearMasturbation()
        })
    },
    methods: {

        navigateTo(item) {
            this.f7router.navigate('/editMasturbation/', {
                props: {
                    masturbation: item
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
            await this.masturbationStore.getLastYearMasturbation()

            done()
        },
        getIcon(who) {
            if (who == "A") {
                return "/icons/temperinoA.jpg"
            }

            if (who == "D") {
                return "/icons/temperinoD.jpg"
            }

            return ""
        },
        getFullName(who) {
            if (who == "A") {
                return "Andrea"
            }

            if (who == "D") {
                return "Daniela"
            }
            return ""
        }
    }
}

</script>
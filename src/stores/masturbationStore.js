import { defineStore } from 'pinia'
import axios from 'axios'
import constants from '@/js/constants'

export const useMasturbationStore = defineStore('masturbationStore', {
    state: () => ({
        masturbationList: [],
    }),
    getters: {

    },
    actions: {
        async getLastYearMasturbation() {
            const currentYear = new Date().getFullYear()
            this.masturbationList = (await axios.get(constants.api.masturbationsLastYear(currentYear))).data.data
            console.log(this.masturbationList)
        } 
    },
})
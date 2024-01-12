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
            
        },
        async deleteMasturbation(masturbationId) {
            await axios.delete(`${constants.api.masturbation}/${masturbationId}`)
        },
        async updateMasturbation(masturbationId, form) {
            await axios.put(`${constants.api.masturbation}/${masturbationId}`, form)
        },
        async addMasturbation(form) {
            await axios.post(constants.api.masturbation, form)
        },
    }
})
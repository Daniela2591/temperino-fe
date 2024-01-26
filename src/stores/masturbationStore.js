import { defineStore } from 'pinia'
import axios from 'axios'
import constants from '@/js/constants'

export const useMasturbationStore = defineStore('masturbationStore', {
    state: () => ({
        masturbationList: [],
    }),
    getters: {
        countOrgasmA(state) {
            return state.masturbationList.reduce((total, x) => (x.attributes.who == "A" ? total + x.attributes.n_orgasms : total), 0) //(total + x.attributes.n_orgasms), 0)
        },
        countOrgasmD(state) {
            return state.masturbationList.reduce((total, x) => (x.attributes.who == "D" ? total + x.attributes.n_orgasms : total), 0)
        },
        countMasturbationA(state) {
            return state.masturbationList.reduce((total, x) => (x.attributes.who == "A" ? total + 1 : total), 0)
        },
        countMasturbationD(state) {
            return state.masturbationList.reduce((total, x) => (x.attributes.who == "D" ? total + 1 : total), 0)
        },
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
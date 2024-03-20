import { defineStore } from 'pinia'
import axios from 'axios'
import constants from '@/js/constants'

export const useSexualActivitiesStore = defineStore('sexualActivityStore', {
    state: () => ({
        sexualActivitiesList: [],
    }),
    getters: {
        countAll(state) {
            return state.sexualActivitiesList.length
        },
        countSex(state) {
            return state.sexualActivitiesList.reduce((total, x) => (x.attributes.sex == true ? total + 1 : total), 0)
        },
        countOrgasmA(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.orgasm_a), 0)
        },
        countOrgasmD(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.orgasm_d), 0)
        },
        countOrgasmWhenSexA(state) {
            return state.sexualActivitiesList.reduce((total, x) => (x.attributes.sex == true ? total + x.attributes.orgasm_a : total), 0)
        },
        countOrgasmWhenSexD(state) {
            return state.sexualActivitiesList.reduce((total, x) => (x.attributes.sex == true ? total + x.attributes.orgasm_d : total), 0)
        },
        ratioOrgasm(state) {
            return (parseInt(this.countOrgasmWhenSexD) / parseInt(this.countOrgasmWhenSexA)).toFixed(2)
        },
        countBlowjob(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.blowjob), 0)
        },
        countHandjob(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.handjob), 0)
        },
        countFingering(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.fingering), 0)
        },
        countLick(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.lick), 0)
        },
        countTitsFuck(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.tits_fuck), 0)
        },
        countAnal(state) {
            return state.sexualActivitiesList.reduce((total, x) => (total + x.attributes.anal), 0)
        },
        getCountersArray(state) {
            return [
                {
                    name: "Pompini",
                    count: this.countBlowjob
                },
                {
                    name: "Seghe",
                    count: this.countHandjob
                },
                {
                    name: "Ditalini",
                    count: this.countFingering
                },
                {
                    name: "Leccate",
                    count: this.countLick
                },
                {
                    name: "Spagnolette",
                    count: this.countTitsFuck
                },
                {
                    name: "Anal",
                    count: this.countAnal
                }
            ]
        }
    },
    actions: {
        async getLastYearSexualActivities() {
            const currentYear = new Date().getFullYear()
            this.sexualActivitiesList = (await axios.get(constants.api.sexualActivitiesLastYear(currentYear))).data.data
        },
        async deleteSexualActivity(sexualActivityId) {
            await axios.delete(`${constants.api.sexualActivities}/${sexualActivityId}`, constants.api.headers)
        },
        async updateSexualActivity(sexualActivityId, form) {
            await axios.put(`${constants.api.sexualActivities}/${sexualActivityId}`, form, constants.api.headers)
        },
        async addSexualActivity(form) {
            await axios.post(constants.api.sexualActivities, form, constants.api.headers)
        }
    },

})
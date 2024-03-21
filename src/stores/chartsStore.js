import { defineStore } from 'pinia'

import dayjs from 'dayjs'
import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'
import { useMasturbationStore } from '@/stores/masturbationStore'

export const useChartsStore = defineStore('chartsStore', {
    state: () => ({
        sexualActivitiesStore: useSexualActivitiesStore(),
        masturbationStore: useMasturbationStore(),
        
        sexualActivitiesAggregatedByMonth: [],

        booleanFields: [
            'sex',
            'blowjob',
            'handjob',
            'anal',
            'fingering',
            'lick',
            'tits_fuck'
        ],
        integersFields: [
            'orgasm_d',
            'orgasm_a'
        ]
    }),
    getters: {
        
    },
    actions: {
        async getSexualActivitiesAggregatedByMonth() {
            this.sexualActivitiesAggregatedByMonth = []
            
            const mappedToArray = this.sexualActivitiesStore.sexualActivitiesList.reduce((acc, item) => {

                const date = dayjs(item?.attributes.date).format('MM/YYYY');
        
                if (acc?.[date] != undefined) {
                    acc[date].push(item)
                } else {
                    acc[date] = [item]
                }
                
                return acc
            }, {})
            
            for(const date in mappedToArray) {
                const counter = {}
                counter['date'] = date
        
                this.booleanFields.forEach(field => {
                    counter[field] = mappedToArray[date].filter(item => item.attributes[field]).length
                })
        
                this.integersFields.forEach(field => {
                    counter[field] = mappedToArray[date].reduce((total, x) => (total + x.attributes[field]), 0)
                })
        
                this.sexualActivitiesAggregatedByMonth.push(counter)
            }
        
            return this.sexualActivitiesAggregatedByMonth

        }
    }

})
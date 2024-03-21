// const dayjs = require('dayjs')
import dayjs from 'dayjs'

let aggregator = {}

aggregator.sexualActivities = (array) => {

    const booleanFields = [
        'sex',
        'blowjob',
        'handjob',
        'anal',
        'fingering',
        'lick',
        'tits_fuck'
    ]

    const integersFields = [
        'orgasm_d',
        'orgasm_a'
    ]

    const mappedToArray = array.reduce((acc, item) => {

        const date = dayjs(item?.attributes.date).format('MM/YYYY');

        if (acc?.[date] != undefined) {
            acc[date].push(item)
        } else {
            acc[date] = [item]
        }
        
        return acc
    }, {})
    
    const mappedToCounter = []

    for(const date in mappedToArray) {
        const counter = {}
        counter['date'] = date

        booleanFields.forEach(field => {
            counter[field] = mappedToArray[date].filter(item => item.attributes[field]).length
        })

        integersFields.forEach(field => {
            counter[field] = mappedToArray[date].reduce((total, x) => (total + x.attributes[field]), 0)
        })

        mappedToCounter.push(counter)
    }

    return mappedToCounter
}

export default aggregator
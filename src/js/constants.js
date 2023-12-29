let _c = {
    baseUrl: 'http://localhost:1337/api/'
}

let api = {
    masturbation: `${_c.baseUrl}masturbations`,
    sexualActivities: `${_c.baseUrl}sexual-activities`,
    sexualActivitiesLastYear: (year) => {
        return `${_c.baseUrl}sexual-activities?filters[Date][$gte]=${year}-01-01&filters[Date][$lte]=${year}-12-31`
    }
}

export default { _c, api }
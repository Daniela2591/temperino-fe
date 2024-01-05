let _c = {
    baseUrl: 'http://localhost:1338/api/'
    // baseUrl: 'https://temperino.andreacorriga.com/api/'
}

let api = {
    masturbation: `${_c.baseUrl}masturbations`,
    sexualActivities: `${_c.baseUrl}sexual-activities`,
    sexualActivitiesLastYear: (year) => {
        return `${_c.baseUrl}sexual-activities?filters[date][$gte]=${year}-01-01&filters[date][$lte]=${year}-12-31`
    }
}

export default { _c, api }
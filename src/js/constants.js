let _c = {
    baseUrl: 'http://localhost:1337/api/',
    // baseUrl: 'https://strapi.andreacorriga.com/api/',
    apiToken: '6ea9ef5fe408811f06611b7cc223978b4645711591eb551dc5797a4d588d606f9071dcfceba15b178e7bdd34f3fe084e52cf097482d5771339735febca9b7189d19a2f8e18dcf7bad4a7eaa2f18168d10285dbb77cf838a31f6014602349b0c471b77d3deaab49f40410025f26b16f1b6ef9855559569dd4924ea03c51d7d2b7'
}

let api = {
    masturbation: `${_c.baseUrl}masturbations`,
    sexualActivities: `${_c.baseUrl}sexual-activities`,
    sexualActivitiesLastYear: (year) => {
        return `${_c.baseUrl}sexual-activities?filters[date][$gte]=${year}-01-01&filters[date][$lte]=${year}-12-31&sort[1]=date:desc`
    },
    masturbationsLastYear: (year) => {
        return `${_c.baseUrl}masturbations?filters[date][$gte]=${year}-01-01&filters[date][$lte]=${year}-12-31&sort[1]=date:desc`
    },
    headers: {
        headers: {
            Authorization: `bearer ${_c.apiToken}`,
        }
    }
}

export default { _c, api }
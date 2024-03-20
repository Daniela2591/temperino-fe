
import HomePage from '../pages/home.vue';
import AddMasturbation from '../pages/addMasturbation.vue'
import AddSexualActivities from '../pages/addSexualActivities.vue'
import EditSexualActivities from '../pages/editSexualActivities.vue'
import EditMasturbation from '../pages/editMasturbation.vue'

import MasturbationList from '../pages/masturbationList.vue'
import SexualActivitiesList from '../pages/sexualActivitiesList.vue'

import SexualActivitiesDashboard from '../pages/sexualActivitiesDashboad.vue'
import MasturbationDashboard from '../pages/masturbationDashboard.vue'

var routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/sexualActivitiesDashboard/',
        component: SexualActivitiesDashboard
    },
    {
        path: '/masturbationDashboard/',
        component: MasturbationDashboard
    },
    {
        path: '/addMasturbation/',
        component: AddMasturbation
    },
    {
        path: '/editMasturbation/',
        component: EditMasturbation
    },
    {
        path: '/addSexualActivities/',
        component: AddSexualActivities
    },
    {
        path: '/editSexualActivities/',
        component: EditSexualActivities
    },
    {
        path: '/masturbationList/',
        component: MasturbationList
    },
    {
        path: '/sexualActivitiesList/',
        component: SexualActivitiesList
    }
];

export default routes;

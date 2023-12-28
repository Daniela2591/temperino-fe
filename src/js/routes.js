
import HomePage from '../pages/home.vue';
import Masturbation from '../pages/masturbation.vue'
import SexualActivities from '../pages/sexualactivities.vue'
import MasturbationList from '../pages/masturbationList.vue'
import SexualActivitiesList from '../pages/sexualActivitiesList.vue'

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/masturbation/',
    component: Masturbation,
  },
  {
    path: '/sexualActivities/',
    component: SexualActivities,
  },
  {
    path: '/masturbationList/',
    component: MasturbationList,
  },
  {
    path: '/sexualActivitiesList/',
    component: SexualActivitiesList,
  }
];

export default routes;

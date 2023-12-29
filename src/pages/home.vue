<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <Navbar :backLink="false" title="Temperino" />

    <f7-block-title>Resoconto anno {{ currentYear }}</f7-block-title>

    <div class="card">
      <div class="card-header">N° scopate</div>
      <div class="card-content card-content-padding">
        {{ totSex }}
      </div>
    </div>

    <div class="grid grid-cols-2">

      <div class="card">
        <div class="card-header">Orgasmi Andrea</div>
        <div class="card-content card-content-padding">
          {{ orgasmsA }}
        </div>
      </div>

      <div class="card">
        <div class="card-header">Orgasmi Daniela</div>
        <div class="card-content card-content-padding">
          {{ orgasmsD }}
        </div>
      </div>

    </div>
    <div class="grid grid-cols-2">

      <div class="card">
        <div class="card-header">Pompini</div>
        <div class="card-content card-content-padding">
          {{ blowjob }}
        </div>
      </div>

      <div class="card">
        <div class="card-header">Seghe</div>
        <div class="card-content card-content-padding">
          {{ handjob }}
        </div>
      </div>

    </div>

    <div class="grid grid-cols-2">

      <div class="card">
        <div class="card-header">Ditalini</div>
        <div class="card-content card-content-padding">
          {{ fingering }}
        </div>
      </div>

      <div class="card">
        <div class="card-header">Leccate</div>
        <div class="card-content card-content-padding">
          {{ lick }}
        </div>
      </div>

    </div>

    <div class="card">
      <div class="card-header">Anal</div>
      <div class="card-content card-content-padding">
        {{ anal }}
      </div>
    </div>

  </f7-page>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import constants from '@/js/constants'
import axios from 'axios'

export default {
  name: 'Home',
  props: {
    f7route: Object,
    f7router: Object,
  },
  components: {
    Navbar
  },
  data() {
    return {
      constants: constants,
      currentYear: '',
      totSex: 0,
      orgasmsA: 0,
      orgasmsD: 0,
      blowjob: 0,
      handjob: 0,
      fingering: 0,
      lick: 0,
      anal: 0
    }
  },
  mounted() {
    this.getLastYearSexualActivities()
  },
  methods: {
    async getLastYearSexualActivities() {
      this.currentYear = new Date().getFullYear()
      
      let response = await axios.get(this.constants.api.sexualActivitiesLastYear(this.currentYear))

      this.totSex = this.countSex(response.data.data)
      this.orgasmsA = this.countOrgasms(response.data.data, 'A')
      this.orgasmsD = this.countOrgasms(response.data.data, 'D')
      this.blowjob = this.countBlowjob(response.data.data)
      this.handjob = this.countHandjob(response.data.data)
      this.fingering = this.countFingering(response.data.data)
      this.lick = this.countLick(response.data.data)
      this.anal = this.countAnal(response.data.data)
    },
    countSex(activities) {
      return activities.reduce((total, x) => (x.attributes.Sex == true ? total + 1 : total), 0)
    },
    countOrgasms(activities, person) {
      if (person == 'A') {
        return activities.reduce((total, x) => (total + x.attributes.Orgasm_A), 0)
      }
      if (person == 'D') {
        return activities.reduce((total, x) => (total + x.attributes.Orgasm_D), 0)
      }
    },
    countBlowjob(activities) {
      return activities.reduce((total, x) => (total + x.attributes.Blowjob), 0)
    },
    countHandjob(activities) {
      return activities.reduce((total, x) => (total + x.attributes.Handjob), 0)
    },
    countFingering(activities) {
      return activities.reduce((total, x) => (total + x.attributes.Fingering), 0)
    },
    countLick(activities) {
      return activities.reduce((total, x) => (total + x.attributes.Lick), 0)
    },
    countAnal(activities) {
      return activities.reduce((total, x) => (total + x.attributes.Anal), 0)
    },
  }
}
</script>

<style scoped>
.card-header,
.card-footer {
  display: block !important;
  text-align: center;
  font-size: 18px;
}

.card-content {
  text-align: center;
}
</style>
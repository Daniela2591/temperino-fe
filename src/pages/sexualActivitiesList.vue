<template>
    <f7-page name="sexualactivitiesList">
        <f7-navbar title="Sexual Activities List" back-link="Back"></f7-navbar>

        <div class="list links-list list-outline-ios list-strong-ios list-dividers-ios">
        <ul v-for="item in sexualActivitiesList" v-bind:key="item">
            <li><a> {{ item.attributes.Date }}</a></li>
        </ul>
        </div>
    </f7-page>
</template>


<script>

import axios from 'axios'
import { f7, f7ready } from 'framework7-vue'


export default {
    data() {
        return {
            sexualActivitiesList: []

        }

    },
    name: 'sexualActivitiesList',
    mounted() {
        f7ready(async (f7) => {
            try{
                let response = await axios.get('http://localhost:1337/api/sexual-activities')
                this.sexualActivitiesList = response.data.data
                console.log(this.sexualActivitiesList)
            }
            catch(e){
                console.error(e)
            }

        })
    }
}

</script>
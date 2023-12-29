<template>
    <f7-page name="sexualactivities">
        <f7-navbar title="Sexual Activities" back-link="Back"></f7-navbar>
        <f7-block-title>Avete fatto gli sporcaccioni?</f7-block-title>
        <div class="list list-strong-ios list-outline-ios list-dividers-ios">
            <ul>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Sesso</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.Sex">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Pompino</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.Blowjob">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Sega</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.Handjob">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Anal</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.Anal">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Ditalino</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.Fingering">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Leccata</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.Lick">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
        <div class="list list-strong-ios list-dividers-ios inset-ios">
            <ul>
                <li class="item-content item-input item-input-outline">
                    <div class="item-media">
                        <i class="icon demo-list-icon"></i>
                    </div>
                    <div class="item-inner">
                        <div class="item-title item-floating-label">Numero orgasmi</div>
                        <div class="item-input-wrap">
                            <input type="number" min="0" max="12" placeholder="Numero orgasmi Andrea" v-model="form.data.Orgasm_A">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list list-strong-ios list-dividers-ios inset-ios">
            <ul>
                <li class="item-content item-input item-input-outline">
                    <div class="item-media">
                        <i class="icon demo-list-icon"></i>
                    </div>
                    <div class="item-inner">
                        <div class="item-title item-floating-label">Numero orgasmi</div>
                        <div class="item-input-wrap">
                            <input type="number" min="0" max="12" placeholder="Numero orgasmi Daniela" v-model="form.data.Orgasm_D">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list list-strong-ios list-outline-ios">
            <ul>
                <li>
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-input-wrap">
                                <input type="text" v-model="form.data.Date" placeholder="Data Sesso"
                                    readonly="readonly" id="date-picker-sexualActivities" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <f7-block>
            <f7-button fill round @click="getInputForm">Salva</f7-button>
        </f7-block>
    </f7-page>
</template>

<script>
import axios from 'axios'
import { f7, f7ready } from 'framework7-vue'

export default {
    data() {
        return {
            form: {
                "data": {
                    "Sex": 0,
                    "Blowjob": 0,
                    "Handjob": 0,
                    "Anal": 0,
                    "Fingering": 0,
                    "Lick": 0,
                    "Orgasm_D": null,
                    "Orgasm_A": null,
                    "Date": ""
                }
            }
        }
    },
    methods: {
        getInputForm() {

            axios.post('http://localhost:1337/api/sexual-activities', this.form)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })

        }
    },

    name: 'Sexual Activities',
    mounted() {
        f7ready((f7) => {
            f7.calendar.create({
                inputEl: '#date-picker-sexualActivities',
                closeOnSelect: true,
                on: {
                    change: (calendar, value) => {
                        value = value[0]

                        var year = value.getFullYear()
                        var month = ('0' + (value.getMonth() + 1)).slice(-2)
                        var day = ('0' + value.getDate()).slice(-2)

                        this.form.data.Date = year + '-' + month + '-' + day
                    }
                }
            })
        })
    }
}

</script>
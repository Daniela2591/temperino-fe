<template>
    <f7-page name="masturbation">
        <f7-navbar title="Masturbation" back-link="Back"></f7-navbar>

        <f7-block-title>Chi si è masturbato?</f7-block-title>
        <div class="list list-strong-ios list-outline-ios list-dividers-ios">
            <ul>
                <li>
                    <label class="item-radio item-radio-icon-start item-content">
                        <input type="radio" v-model="form.data.Who" name="demo-radio-start" value="A" checked />
                        <i class="icon icon-radio"></i>
                        <div class="item-inner">
                            <div class="item-title">Andrea</div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-radio item-radio-icon-start item-content">
                        <input type="radio" v-model="form.data.Who" name="demo-radio-start" value="D" />
                        <i class="icon icon-radio"></i>
                        <div class="item-inner">
                            <div class="item-title">Daniela</div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>

        <f7-block-title>Sono stati usati giocattoli?</f7-block-title>
        <div class="list list-strong-ios list-outline-ios list-dividers-ios">
            <ul>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Toys</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.Toys">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>

        <f7-block-title>Quanti orgasmi si è fatto?</f7-block-title>
        <div class="list list-strong-ios list-dividers-ios inset-ios">
            <ul>
                <li class="item-content item-input item-input-outline">
                    <div class="item-media">
                        <i class="icon demo-list-icon"></i>
                    </div>
                    <div class="item-inner">
                        <div class="item-title item-floating-label">Numero orgasmi</div>
                        <div class="item-input-wrap">
                            <input type="number" min="0" max="12" placeholder="Numero orgasmi" v-model="form.data.N_Orgasm">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <f7-block-title>Quando si è masturbato?</f7-block-title>
        <div class="list list-strong-ios list-outline-ios">
            <ul>
                <li>
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-input-wrap">
                                <input type="text" v-model="form.data.Date" placeholder="Data masturbazione"
                                    readonly="readonly" id="date-picker-masturbation" />
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
                    data: {
                        Who: "A",
                        N_Orgasm: 1,
                        Toys: 0,
                        Date: ""
                }
            }
        }
    },
    methods: {
        getInputForm() {

            axios.post('http://localhost:1337/api/masturbations', this.form )
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })

        }
    },

    name: 'Masturbation',
    mounted() {
        f7ready((f7) => {
            f7.calendar.create({
                inputEl: '#date-picker-masturbation',
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
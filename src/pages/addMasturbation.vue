<template>
    <f7-page name="masturbation">
        
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Aggiungi masturbazione </f7-nav-title>
            </f7-nav-left>
        </f7-navbar>

        <f7-block-title>Chi si è masturbato?</f7-block-title>
        <div class="list list-strong-ios list-outline-ios list-dividers-ios">
            <ul>
                <li>
                    <label class="item-radio item-radio-icon-start item-content">
                        <input type="radio" v-model="form.data.who" name="demo-radio-start" value="A" checked />
                        <i class="icon icon-radio"></i>
                        <div class="item-inner">
                            <div class="item-title">Andrea</div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-radio item-radio-icon-start item-content">
                        <input type="radio" v-model="form.data.who" name="demo-radio-start" value="D" />
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
                                    <input type="checkbox" v-model="form.data.toys">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
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
                                <input type="text" v-model="form.data.date" placeholder="Data masturbazione"
                                    readonly="readonly" id="date-picker-masturbation" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <f7-block-title>Quanti orgasmi si è fatto?</f7-block-title>
        <f7-block>
            <f7-stepper large v-model:value="form.data.n_orgasms" min="0"/>
        </f7-block>

        <f7-block>
            <f7-button fill round @click="saveData" preloader :loading="isLoading" large>Salva</f7-button>
        </f7-block>
        
    </f7-page>
</template>

<script>
import axios from 'axios'
import { f7, f7ready } from 'framework7-vue'

import { useMasturbationStore } from '@/stores/masturbationStore'
import constants from '@/js/constants'

export default {
    name: 'Masturbation', 
    props: {
        f7route: Object,
        f7router: Object,

    },
    components: {
    },
    data() {
        return {
            constants: constants,
            masturbationStore: useMasturbationStore(),
            form: {
                data: {
                    who: "A",
                    n_orgasms: 0,
                    toys: 0,
                    date: ""
                }
            },
            isLoading: false
        }
    },
    methods: {
        async saveData() {
            try {
                this.isLoading = true
                await this.masturbationStore.addMasturbation(this.form)
                
                f7.toast.create({
                    text: 'Masturbata salvata con successo',
                    closeTimeout: 2000,
                }).open()

                this.f7router.navigate('/')
            }
            catch(e){
                f7.toast.create({
                    text: 'Errore generico nel salvataggio dei dati',
                    closeTimeout: 2000,
                })

                console.error(e)
            }
            finally {
                this.isLoading = false
            }
        },

        getCurrentDate(date = new Date()) {
            const year = date.toLocaleString('default', { year: 'numeric' });
            const month = date.toLocaleString('default', {
                month: '2-digit',
            })
            const day = date.toLocaleString('default', { day: '2-digit' });

            return [year, month, day].join('-');
        }

    
    },
    
    mounted() {
        this.form.data.date = this.getCurrentDate()
        
        f7ready((f7) => {
            f7.calendar.create({
                inputEl: '#date-picker-masturbation',
                closeOnSelect: true,
                value: [this.getCurrentDate()],
                on: {
                    change: (calendar, value) => {
                        value = value[0]

                        var year = value.getFullYear()
                        var month = ('0' + (value.getMonth() + 1)).slice(-2)
                        var day = ('0' + value.getDate()).slice(-2)

                        this.form.data.date = year + '-' + month + '-' + day
                    }
                }
            })
        })
    }
}

</script>
<template>
    <f7-page name="sexualactivities">
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                <f7-nav-title> Aggiungi attività </f7-nav-title>
            </f7-nav-left>
        </f7-navbar>

        <f7-block-title>Come avete fatto gli sporcaccioni?</f7-block-title>
        <div class="list list-strong-ios list-outline-ios list-dividers-ios">
            <ul>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Sesso</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.sex">
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
                                    <input type="checkbox" v-model="form.data.blowjob">
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
                                    <input type="checkbox" v-model="form.data.handjob">
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
                                    <input type="checkbox" v-model="form.data.anal">
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
                                    <input type="checkbox" v-model="form.data.fingering">
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
                                    <input type="checkbox" v-model="form.data.lick">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
                <li>
                    <label class="item-content">
                        <div class="item-inner">
                            <div class="item-title">Spagnola</div>
                            <div class="item-after">
                                <div class="toggle toggle-init color-red">
                                    <input type="checkbox" v-model="form.data.tits_fuck">
                                    <span class="toggle-icon"></span>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
                <li>
                    <a class="item-link smart-select smart-select-init">
                        <select name="cumshot" v-model="form.data.cumshot">
                            <option value="mouth">Bocca</option>
                            <option value="face">Faccia</option>
                            <option value="tits">Tette</option>
                            <option value="belly">Pancia</option>
                            <option value="pussy-inside">Figa (dentro)</option>
                            <option value="pussy-condom">Figa (ghindolo)</option>
                            <option value="ass">Culo</option>
                            <option value="butts">Chiappe</option>
                        </select>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">Dove sborrata?</div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <f7-block-title class="mt-0">Quando è capitato il fattaccio?</f7-block-title>
        <div class="list list-strong-ios list-outline-ios mb-0">
            <ul>
                <li>
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-input-wrap">
                                <input type="text" v-model="form.data.date" placeholder="Data Sesso" readonly="readonly"
                                    id="date-picker-sexualActivities" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="grid grid-cols-2 grid-gap text-align-center">
            <div>
                <f7-block-title>N° orgasmi Andrea</f7-block-title>
                <f7-block>
                    <f7-stepper large v-model:value="form.data.orgasm_a" />
                </f7-block>
            </div>

            <div>
                <f7-block-title>N° orgasmi Daniela</f7-block-title>
                <f7-block>
                    <f7-stepper large color="red" v-model:value="form.data.orgasm_d" />
                </f7-block>
            </div>
        </div>
    
        <f7-block class="mt-2">
            <f7-button fill round @click="saveData" preloader :loading="isLoading" large>Salva</f7-button>
        </f7-block>
    </f7-page>
</template>

<script>
import axios from 'axios'
import { f7, f7ready } from 'framework7-vue'
import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'
import constants from '@/js/constants'

export default {
    props: {
        f7route: Object,
        f7router: Object,
    },
    components: {
    },
    data() {
        return {
            constants: constants,
            form: {
                data: {
                    sex: 0,
                    blowjob: 0,
                    handjob: 0,
                    anal: 0,
                    fingering: 0,
                    lick: 0,
                    tits_fuck: 0,
                    cumshot: "",
                    orgasm_d: 0,
                    orgasm_a: 0,
                    date: ""
                }
            }, 
            isLoading: false,
            sexualActivitiesStore: useSexualActivitiesStore()
        }
    },
    methods: {
        async saveData() {
            try {
                this.isLoading = true
                
                await this.sexualActivitiesStore.addSexualActivity(this.form)
                
                f7.toast.create({
                    text: 'Scopata salvata con successo',
                    closeTimeout: 2000,
                }).open()

                this.f7router.navigate('/')
            }
            catch (e) {
                f7.toast.create({
                    text: 'Il salvataggio non è andato a buon fine',
                    closeTimeout: 2000,
                }).open()

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
            });
            const day = date.toLocaleString('default', { day: '2-digit' });

            return [year, month, day].join('-');
        }
    },

    name: 'Sexual Activities',
    mounted() {
        this.form.data.date = this.getCurrentDate()

        f7ready((f7) => {
            f7.calendar.create({
                inputEl: '#date-picker-sexualActivities',
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
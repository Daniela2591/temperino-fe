<template>
    <f7-page name="sexualactivities">
        <Navbar :backLink="false" title="Aggiungi scopata" />

        <f7-block-title>Avete fatto gli sporcaccioni?</f7-block-title>
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
        <div class="list list-strong-ios list-dividers-ios inset-ios">
            <ul>
                
                <li class="item-content item-input item-input-outline">
                    <div class="item-media">
                        <i class="icon demo-list-icon"></i>
                    </div>
                    <div class="item-inner">
                        <div class="item-title item-floating-label">Numero orgasmi Andrea</div>
                        <div class="item-input-wrap">
                            <input type="number" min="0" max="12" placeholder="Numero orgasmi Andrea"
                                v-model="form.data.orgasm_a">
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
                        <div class="item-title item-floating-label">Numero orgasmi Daniela</div>
                        <div class="item-input-wrap">
                            <input type="number" min="0" max="12" placeholder="Numero orgasmi Daniela"
                                v-model="form.data.orgasm_d">
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
                                <input type="text" v-model="form.data.date" placeholder="Data Sesso" readonly="readonly"
                                    id="date-picker-sexualActivities" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <f7-block>
            <f7-button fill round @click="saveData">Salva</f7-button>
        </f7-block>
    </f7-page>
</template>

<script>
import axios from 'axios'
import { f7, f7ready } from 'framework7-vue'
import Navbar from '@/components/layout/Navbar.vue'
import constants from '@/js/constants'

export default {
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
            form: {
                "data": {
                    "sex": 0,
                    "blowjob": 0,
                    "handjob": 0,
                    "anal": 0,
                    "fingering": 0,
                    "lick": 0,
                    "cumshot": "",
                    "orgasm_d": null,
                    "orgasm_a": null,
                    "date": ""
                }
            }
        }
    },
    methods: {
        async saveData() {
            try {
                await axios.post(this.constants.api.sexualActivities, this.form)

                f7.toast.create({
                    text: 'Scopata salvata con successo',
                    closeTimeout: 2000,
                }).open()

                this.f7router.navigate('/')
            }
            catch (e) {
                f7.toast.create({
                    text: 'Errore generico nel salvataggio dei dati',
                    closeTimeout: 2000,
                })

                console.error(e)
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
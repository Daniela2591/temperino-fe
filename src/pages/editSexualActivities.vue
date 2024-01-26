<template>
    <f7-page name="sexualactivities" @page:beforeout="beforeLeave()">
        <Navbar :backLink="false" title="Modifica attività " />

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
                    <a class="item-link smart-select smart-select-init" id="smart-select-cumshot-edit">
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

        <f7-block-title>Tempo di tirare le somme</f7-block-title>
        <div class="list list-strong-ios list-dividers-ios inset-ios">
            <ul>

                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Numero orgasmi Andrea</div>
                        <div class="item-input-wrap">
                            <input type="number" min="0" max="12" v-model="form.data.orgasm_a">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>

                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Numero orgasmi Daniela</div>
                        <div class="item-input-wrap">
                            <input type="number" min="0" max="12" v-model="form.data.orgasm_d">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

        <f7-block-title>Quando è capitato il fattaccio?</f7-block-title>
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
            <f7-button fill round @click="saveData" preloader :loading="isLoadingSave">Salva</f7-button>
        </f7-block>
        <f7-block>
            <f7-button fill round color="red"  @click="deleteData" preloader :loading="isLoadingDelete">Cancella</f7-button>
        </f7-block>
    </f7-page>
</template>

<script>
import axios from 'axios'
import { f7, f7ready } from 'framework7-vue'
import Navbar from '@/components/layout/Navbar.vue'
import constants from '@/js/constants'
import { useSexualActivitiesStore } from '@/stores/sexualActivitiesStore'


export default {
    name: 'Sexual Activities',
    props: {
        f7route: Object,
        f7router: Object,
        sexualActivity: Object
    },
    components: {
        Navbar
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
                    orgasm_d: null,
                    orgasm_a: null,
                    date: ""
                }
            },
            isLoadingSave: false,
            isLoadingDelete: false,
            sm: undefined,
            sexualActivitiesStore: useSexualActivitiesStore(),

        }
    },
    methods: {
        async saveData() {
            try {
                this.isLoadingSave = true
                
                await this.sexualActivitiesStore.updateSexualActivity(this.sexualActivity.id, this.form)

                f7.toast.create({
                    text: 'Scopata modificata con successo',
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
                this.isLoadingSave = false
            }
        },

        async deleteData() {
            f7.dialog.confirm('Faceva così schifo?', async () => {
                try {
                    this.isLoadingDelete = true
                    await this.sexualActivitiesStore.deleteSexualActivity(this.sexualActivity.id)

                    f7.toast.create({
                        text: 'Fai finta che non sia mai successo',
                        closeTimeout: 2000,
                    }).open()

                    this.f7router.navigate('/')
                }
                catch (e) {
                    f7.toast.create({
                        text: 'Mi spiace te la devi ricordare a vita',
                        closeTimeout: 2000,
                    }).open()
                }
                finally {
                    this.loadingDelete = false
                }
            })
        },

        getCurrentDate(date = new Date()) {
            const year = date.toLocaleString('default', { year: 'numeric' });
            const month = date.toLocaleString('default', {
                month: '2-digit',
            });
            const day = date.toLocaleString('default', { day: '2-digit' });

            return [year, month, day].join('-');
        },
        setupData() {
            
            this.form.data.sex = this.sexualActivity.attributes.sex
            this.form.data.blowjob = this.sexualActivity.attributes.blowjob
            this.form.data.handjob = this.sexualActivity.attributes.handjob
            this.form.data.anal = this.sexualActivity.attributes.anal
            this.form.data.fingering = this.sexualActivity.attributes.fingering
            this.form.data.lick = this.sexualActivity.attributes.lick
            this.form.data.tits_fuck = this.sexualActivity.attributes.tits_fuck
            this.form.data.cumshot = this.sexualActivity.attributes.cumshot
            this.form.data.orgasm_d = (this.sexualActivity.attributes.orgasm_d)
            this.form.data.orgasm_a = this.sexualActivity.attributes.orgasm_a
            this.form.data.date = this.sexualActivity.attributes.date
        },

        beforeLeave() {
            // f7.smartSelect.destroy('.smart-select')
            // this.sm = {}
            // console.log("qui")
        }
    },

    mounted() {
        this.setupData()

        f7ready((f7) => {
            // if(this.sexualActivity == undefined)
            //     this.f7router.navigate('/addMasturbation/')

            this.sm = f7.smartSelect.create({ el: '#smart-select-cumshot-edit' })


            console.log(this.sexualActivity.attributes.cumshot)
            console.log(this.sm)

            this.sm.setValue(this.sexualActivity.attributes.cumshot)

            f7.calendar.create({
                inputEl: '#date-picker-sexualActivities',
                closeOnSelect: true,
                value: [this.sexualActivity.attributes.date],
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
    },
}

</script>
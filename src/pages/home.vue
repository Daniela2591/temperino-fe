<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <Navbar :backLink="false" title="Temperino" />


    <div class="block-title">N° Totale Sesso</div>

    <div class="card card-raised">
      <div class="card-header">Card header</div>
      <div class="card-content card-content-padding">Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom actions.</div>
    </div>


    <div class="grid grid-cols-2 grid-gap">

      <div class="card">
        <div class="card-header">Card header</div>
        <div class="card-content card-content-padding">
          20
        </div>
      </div>

      <div class="card">
        <div class="card-header">Card header</div>
        <div class="card-content card-content-padding">
          10
        </div>
      </div>

    </div>




    <div class="block-title">Sesso Annuo</div>
    <div class="card card-raised">
      <div class="card-header">Card header</div>
      <div class="card-content card-content-padding">Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom actions.</div>
    </div>

    <div class="block-title">Sesso Settimanale</div>
    <div class="card card-raised">
      <div class="card-header">Card header</div>
      <div class="card-content card-content-padding">Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom actions.</div>
    </div>
   

  </f7-page>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

export default {
    props: {
        f7route: Object,
        f7router: Object,
    },
    components: {
        Navbar
    },
}
</script>

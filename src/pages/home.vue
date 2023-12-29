<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title>Temperino</f7-nav-title>
    </f7-navbar>

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
    <!-- Page content-->
    <f7-block>
      <div class="grid grid-cols-2 grid-gap">

        <div>
          <a href="/masturbation/" class="button button-fill button-round">Masturbazione</a>
        </div>

        <div>
          <a href="/sexualActivities/" class="button button-fill button-round">Attività Sessuale</a>
        </div>

      </div>
    </f7-block>
    <f7-block>
      <div class="grid grid-cols-2 grid-gap">

        <div><a href="/masturbationList/" class="button button-fill button-round">Lista Masturbazione</a></div>
        <div><a href="/sexualActivitiesList/" class="button button-fill button-round">Lista Attività Sessuale</a></div>
      </div>

    </f7-block>

  </f7-page>
</template>
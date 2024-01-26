<template>
    <f7-panel id="panel-nested" theme-dark left cover container-el="#panel-page">
        <f7-page>
            <div class="side-menu-header"></div>

            <f7-block-title>Statistiche</f7-block-title>
            <f7-list>
                <f7-list-item title="Home" link="/" panel-close></f7-list-item>
            </f7-list>
            <f7-block-title>Aggiunte</f7-block-title>
            <f7-list>
                <f7-list-item title="Aggiungi attività" link="/addSexualActivities/" panel-close></f7-list-item>
                <f7-list-item title="Aggiungi masturbazioni" link="/addMasturbation/" panel-close></f7-list-item>
            </f7-list>
            <f7-block-title>Visualizza</f7-block-title>
            <f7-list>
                <f7-list-item title="Attività" link="/sexualActivitiesList/" panel-close></f7-list-item>
                <f7-list-item title="Masturbazioni" link="/masturbationList/" panel-close></f7-list-item>
                <!-- <f7-list-item :title="$t('message.panelList.settings')" link="/settings/" panel-close></f7-list-item> -->
            </f7-list>
        </f7-page>
    </f7-panel>
</template>

<script>

export default {
    name: 'SideMenu'
}
</script>

<style scoped>
.side-menu-header {
    height: 100px;
    background-image: url('/icons/side-menu-temperino.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
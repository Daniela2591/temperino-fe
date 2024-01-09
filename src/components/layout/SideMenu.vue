<template>
    <f7-panel id="panel-nested" theme-dark left cover container-el="#panel-page">
        <f7-page>
            <f7-block-title>Statistiche</f7-block-title>
            <f7-list>
                <f7-list-item title="Home" link="/" panel-close></f7-list-item>
            </f7-list>
            <f7-block-title>Aggiunte</f7-block-title>
            <f7-list>
                <f7-list-item title="Aggiungi scopata" link="/addSexualActivities/" panel-close></f7-list-item>
                <f7-list-item title="Aggiungi masturbazioni" link="/addMasturbation/" panel-close></f7-list-item>
            </f7-list>
            <f7-block-title>Visualizza</f7-block-title>
            <f7-list>
                <f7-list-item title="Scopate" link="/sexualActivitiesList/" panel-close></f7-list-item>
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
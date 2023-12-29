<template>
    <f7-panel id="panel-nested" theme-dark left cover container-el="#panel-page">
        <f7-page>
            <f7-list>
                <f7-list-item title="Home" link="/" panel-close></f7-list-item>
                <f7-list-item title="Attività Sessuale" link="/sexualActivities/" panel-close></f7-list-item>
                <f7-list-item title="Masturbazione" link="/masturbation/" panel-close></f7-list-item>
                <f7-list-item title="Lista Attività Sessuale" link="/sexualActivitiesList/" panel-close></f7-list-item>
                <f7-list-item title="Lista Masturbazione" link="/masturbationList/" panel-close></f7-list-item>
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
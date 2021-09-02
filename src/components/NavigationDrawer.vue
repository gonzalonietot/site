<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet color="avatar grey lighten-4" class="pa-4">
      <v-avatar class="mb-4" color="grey darken-1" size="64">

      </v-avatar>
    </v-sheet>
    <v-divider />
    <v-list>
      <v-list-item v-for="page in pages" :key="page.icon" link>
        <v-list-item-icon>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title><strong>{{ page.text }}</strong></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: this.drawer,
      pages: [
        {icon: 'mdi-account-check-outline', text: 'SOBRE MI'},
        {icon: 'mdi-laptop', text: 'TECNOLOGIAS'},
        {icon: 'mdi-briefcase-outline', text: 'EXPERIENCIA'},
        {icon: 'mdi-phone', text: 'CONTACTO'},
      ],
    }
  }
}
</script>

<style scoped lang="scss">
  .avatar {
    margin-left: 20px;
  }
  .stack {
    margin-left: 3px;
    font-size: 12px;
  }
  .v-list-item {
    &__icon {
      margin-left: 20px;
    }
    &__title {
      font-family: 'Circular-Loom';
      font-size: 12px;
      margin-top: 5px;

    }
  }
  .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px;
  }
  .v-icon {
    color: black;
  }

</style>
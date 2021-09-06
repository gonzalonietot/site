<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet color="avatar white lighten-4" class="pa-4">
      <v-avatar color="white darken-1" size="60">
        <img src="../../public/static/photo.jpg"/>
      </v-avatar>
    </v-sheet>
    <v-divider />
    <v-list>
      <div v-for="page in pages" :key="page.icon">
        <v-list-item link @click="goTo(page.to)">
          <v-list-item-icon>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><strong>{{ page.text }}</strong></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
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
  emits: ['path'],
  data() {
    return {
      value: this.drawer,
      pages: [
        {icon: 'mdi-account-check-outline', text: 'HOME', to: "/"},
        {icon: 'mdi-laptop', text: 'TECNOLOGIAS', to: 'technologies'},
        {icon: 'mdi-briefcase-outline', text: 'EXPERIENCIA', to: 'work'},
      ],
    }
  },
  methods: {
    goTo(path) {
      this.$emit('path', path)
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
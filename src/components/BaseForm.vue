<template>
  <v-app id="inspire" :class="mode ? '' : 'v-application--light'">
    <navigation-drawer :drawer.sync="drawer" @path="access"/>
    <toolbar :drawer.sync="drawer" @mode="theme"/>
    <v-main>
      <v-container>
        <phone v-if="path === '/'"/>
        <technologies v-if="path === 'technologies'" />
        <work v-if="path === 'work'"/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Toolbar from "./Toolbar";
import NavigationDrawer from "./NavigationDrawer";
import Phone from "./Phone";
import Technologies from "./Technologies";
import Work from "./Work";
export default {
  name: 'Home',
  components: {
    Work,
    Technologies,
    Phone,
    NavigationDrawer,
    Toolbar
  },
  data() {
    return {
      drawer: true,
      mode: true,
      path: '/'
    }
  },
  methods: {
    theme(mode) {
      this.mode = mode;
    },
    access(path) {
      this.path = path;
    }
  }
}
</script>

<style scoped lang="scss">
  $dark-mode: #15202B;
  $light-mode: #fff;
  .v-application {
    background-color: $dark-mode;
    &--light {
      background-color: $light-mode;
    }
  }
  .tab {
    color: #000;
  }
</style>

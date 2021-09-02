<template>
  <v-app id="inspire" :class="mode ? '' : 'v-application--light'">
    <navigation-drawer :drawer.sync="drawer"/>
    <toolbar :drawer.sync="drawer" @mode="theme"/>
    <v-main>
      <v-container>
        <phone />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Toolbar from "./Toolbar";
import NavigationDrawer from "./NavigationDrawer";
import Phone from "./Phone";
export default {
  name: 'Home',
  components: {
    Phone,
    NavigationDrawer,
    Toolbar
  },
  data() {
    return {
      drawer: true,
      mode: true
    }
  },
  methods: {
    theme(mode) {
      this.mode = mode;
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

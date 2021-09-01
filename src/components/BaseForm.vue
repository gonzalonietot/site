<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <!--  -->
    </v-navigation-drawer>
    <toolbar :drawer.sync="drawer"/>

    <v-main>
      <v-container>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Toolbar from "./Toolbar";
export default {
  name: 'Home',
  components: {
    Toolbar
  },
  data() {
    return {
      pages: [
        'SOBRE MI',
        'TECNOLOGIAS',
        'EXPERIENCIA',
        'CONTACTO',
      ],
      drawer: true
    }


  }
}
</script>

<style scoped lang="scss">
  .tab {
    color: #000;
  }
</style>

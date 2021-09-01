<template>
  <v-app id="inspire">
   <toolbar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
          >
            <v-sheet
                min-height="90vh"
                rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
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
    }


  }
}
</script>

<style scoped lang="scss">
  .tab {
    color: #000;
  }
</style>

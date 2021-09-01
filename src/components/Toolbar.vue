<template>
  <v-card class="overflow-hidden">
    <v-app-bar
        app
        color="white"
        flat
        src="https://picsum.photos/1920/1080?random"
    >
      <v-avatar size="40">
        <v-img src="../../public/static/gonzalo.jpg" />
      </v-avatar>
      <v-spacer />
      <v-btn href="https://github.com/gonzalonietot" target="_blank" icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn href="https://www.linkedin.com/in/gonzalonietot/" target="_blank" icon>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Toolbar"
}
</script>

<style scoped lang="scss">
 .v-icon {
   color: #fff !important;
 }

</style>
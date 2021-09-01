<template>
  <v-card class="overflow-hidden">
    <v-app-bar
        app
        color="white"
        flat
        src="https://picsum.photos/1920/1080?random"
    >
      <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
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
  name: "Toolbar",
  props: {
    drawer: {
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      value:this.drawer
    }
  },
  mounted() {
    console.log(this.drawer, 'we')
  },
  methods: {
    openMenu() {
      this.value = !this.value
      this.$emit('update:drawer', this.value)
    }
  }
}
</script>

<style scoped lang="scss">
 .v-icon {
   color: #fff !important;
 }

</style>
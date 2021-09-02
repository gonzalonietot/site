<template>
  <v-card class="overflow-hidden">
    <v-app-bar app color="white" style="height: 112px" prominent src="https://i.picsum.photos/id/765/1920/1080.jpg?hmac=ISIX7q65bemk92EaIix8-7VPMWxiZlSCh2SoCXp1F3A">
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
      <v-btn v-if="moon" icon @click="changeTheme(false)">
        <v-icon>mdi-moon-waning-crescent</v-icon>
      </v-btn>
      <v-btn v-else icon @click="changeTheme(true)">
        <v-icon>mdi-weather-sunny</v-icon>
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
      value:this.drawer,
      moon: true
    }
  },
  emits: ['update:drawer', 'mode'],
  methods: {
    openMenu() {
      this.value = !this.value
      this.$emit('update:drawer', this.value)
    },
    changeTheme(mode) {
      this.moon = mode;
      this.$emit('mode', this.moon)
    }
  }
}
</script>

<style scoped lang="scss">
 .v-icon {
   color: #fff !important;
 }

</style>
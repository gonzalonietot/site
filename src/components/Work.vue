<template>
  <v-row class=" mt-lg-12 pt-lg-12" align="end" justify="center">
    <v-col sm="8" md="8">
      <v-toolbar data-app dark prominent height="60" color="#1A237E">
        <v-toolbar-title>Experiencia</v-toolbar-title>
      </v-toolbar>
      <v-card flat tile elevation="20">
        <v-window v-model="onboarding" reverse>
          <v-window-item v-for="n in img" :key="n.id">
            <v-card height="200">
              <v-row class="fill-height" align="center" justify="center" tag="v-card-text">
                <v-col cols="7" md="3">
                  <v-img :src="n.src" />
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>
        <v-card-actions class="justify-space-between">
          <v-btn text @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn text @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "works",
  data() {
    return {
      length: 3,
      img: [
        {id: 1, src: 'https://media-exp1.licdn.com/dms/image/C560BAQGb7R7oHmwKWA/company-logo_200_200/0/1546902289091?e=2159024400&v=beta&t=0rplZspGg6tkIBR4R0QwzyWxGgSTlxohfAhA8CWOQh4'},
        {id: 2, src: 'https://www.drupal.org/files/Valtech_Beta_Logo_colors.png'},
        {id: 3, src: 'https://aulicum.com/wp-content/uploads/2020/07/aulicum-logo-2.png'}
      ],
      onboarding: 0
    }
  },
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },

}
</script>

<style scoped>

</style>
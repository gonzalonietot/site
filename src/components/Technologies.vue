<template>
  <v-row class="mt-16 mt-lg-12 pt-lg-12" align="center" justify="center">
    <v-col sm="8" md="8">
      <v-toolbar data-app dark prominent height="60" color="#1A237E">
        <v-toolbar-title>Tecnologías</v-toolbar-title>
      </v-toolbar>
      <v-card flat tile elevation="20">
        <v-window v-model="onboarding" reverse>
          <v-window-item v-for="n in img" :key="n.id">
            <v-card height="200">
              <v-row class="fill-height" align="center" justify="center" tag="v-card-text">
                <v-col cols="5" md="3">
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
  name: 'Technologies',
  data() {
    return {
      length: 11,
      img: [
        {id: 1, src: 'https://i.imgur.com/oUH9hNy.png'},
        {id: 2, src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'},
        {id: 3, src: 'https://anthoncode.com/wp-content/uploads/2019/01/nodejs-logo-png.png'},
        {id: 4, src: 'http://javadesde0.com/wp-content/uploads/sass-1.jpg'
        },
        {id: 5, src: 'https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png'},
        {id: 6, src: 'https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png'},
        {id: 7, src: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lgyno4NC7rhy49BAEjN%2F-Lh14lb3LH4C886qWxYA%2F-Lh1DZeIUQennGd9RiHe%2FScreen%20Shot%202019-06-10%20at%2011.30.20%20AM.png?alt=media&token=784b79f6-81b5-4308-97a2-155afb9d496f'},
        {id: 8, src: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'},
        {id: 9, src: 'https://ih1.redbubble.net/image.1057190214.1918/flat,750x1000,075,f.u1.jpg'},
        {id: 10, src: 'https://28ya633z29rr3bn0kq4e3b0c-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/aem_opt.png'},
        {id: 11, src: 'https://blog.artegrafico.net/wp-content/uploads/2019/02/jQuery-logo.png'}
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
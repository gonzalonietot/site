<template>
  <v-row align="end" justify="center" class="phone-container mt-lg-16 pt-lg-16">
    <v-col xs="4" sm="4" md="4">
      <div class="phone">
        <div class="screen">
          <span id="content">
            <label>Gonzalo Nieto</label>
            Full stack developer
          </span>
          <v-btn icon class="mt-auto">
            <v-icon class="icon-flashlight">mdi-flashlight</v-icon>
          </v-btn>
          <v-btn icon class="mt-auto">
            <v-icon class="icon-camera">mdi-camera</v-icon>
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "Phone"
}
</script>

<style scoped lang="scss">

  .phone-container {
     text-align: -webkit-center;
  }
  .phone {
    position: relative;
    background: azure;
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 236px;
    height: 452px;
    box-shadow: 0 0 8px 0px rgba(0,0,0, .3);

  }

  .phone::after {
    content: "";
    position: absolute;
    border: 1px solid #000;
    border-radius: 5px;
    width: 54px;
    height: 3px;
    top: 13px;
    left: 50%;
    transform: translate(-27px);
  }
  .phone::before {
    content: "";
    position: absolute;
    border: 1px solid #111;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    bottom: 9px;
    left: 50%;
    transform: translate(-15px);
  }

  .phone .screen {
    position: absolute;
    background: #130f40;
    border: 1px solid rgba(68, 68, 68, 0.87);
    width: 220px;
    height: 372px;
    top: 30px;
    z-index: 1;
    left: 7px;
    border-radius: 5px;
    overflow: hidden;
  }
  .phone .screen #content {
    position: absolute;
    font-weight: bold;
    left: 9px;
    top: 30px;
    display: block;
    color: white;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .phone .screen #content label {
    display: block;
    margin-top: 3px;
    font-size: 28px;
    color: #009688;
  }
  .icon-camera {
    transform: translate(60px, 320px);
    color: #fff !important;
  }
  .icon-flashlight {
    color: #fff !important;
    transform: translate(-50px, 320px);
  }



</style>
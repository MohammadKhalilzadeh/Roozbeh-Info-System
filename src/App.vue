<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "Vazir";
  src: url("../src/assets/fonts/Vazir.ttf");
}

* {
  direction: rtl;
  font-family: "Vazir";
}

p {
  font-family: "Vazir";
}
</style>

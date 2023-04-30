<template>
  <v-app>
    <Navbar />
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HelloWorld",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({}),
};
</script>

<template>
  <div class="about">
    <UserNavBar></UserNavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import UserNavBar from "@/components/User-Panel-Bar.vue";

export default {
  name: "HelloWorld",
  data: () => {},
  components: {
    UserNavBar,
  },
};
</script>

<style>
.about {
  direction: rtl;
  text-align: right;
  padding: 0%;
  margin: 0;
}
</style>

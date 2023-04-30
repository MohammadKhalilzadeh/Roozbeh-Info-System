<template>
  <div class="about">
    <PanelBar></PanelBar>
    <router-view></router-view>
  </div>
</template>

<script>
import PanelBar from "@/components/Panel_Bar.vue";

export default {
  name: "HelloWorld",
  data: () => {},
  components: {
    PanelBar,
  },
};
</script>

<style>
.about {
  padding: 0%;
  margin: 0;
}
</style>

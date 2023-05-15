<template>
  <div class="about">
    <UserNavBar
      :resolver="passing.resolver"
      :counsultant="passing.counsultant"
      :education="passing.education"
      :health="passing.health"
    ></UserNavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import UserNavBar from "@/components/User-Panel-Bar.vue";
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      passing: {},
    };
  },
  components: {
    UserNavBar,
  },
  async created() {
    let id = localStorage.getItem("id");
    await axios
      .get("http://localhost:3000/staffs/" + id)
      .then((res) => {
        if (res.status == 200) {
          this.passing = res.data;
        } else {
          alert("مشکل برقراری ارتباط با سرور");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

<template>
  <div class="navbar-2">
    <ul>
      <li v-if="accesses.resolver">
        <router-link
          class="route-btn"
          to="/userpanel/madadkhari"
          style="color: white"
          >مدیریت مددکاری</router-link
        >
      </li>
      <li v-if="accesses.counsultant">
        <router-link
          class="route-btn"
          to="/userpanel/counseling"
          style="color: white"
          >واحد مشاوره</router-link
        >
      </li>
      <li v-if="accesses.education">
        <router-link
          class="route-btn"
          to="/userpanel/education"
          style="color: white"
          >واحد آموزشی</router-link
        >
      </li>
      <li v-if="accesses.health">
        <router-link
          class="route-btn"
          to="/userpanel/health"
          style="color: white"
          >واحد بهداشت</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      accesses: {},
    };
  },
  created() {
    this.accesses = {
      resolver: true, //localStorage.getItem("resolver"),
      counsultant: true, //localStorage.getItem("counsultant"),
      health: true, //localStorage.getItem("health"),
      education: true, //localStorage.getItem("education"),
    };
    console.log(this.accesses);
  },
};
</script>

<style>
.navbar-2 {
  direction: rtl;
  text-align: right;
  background-color: #02b075;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #02b075;
  color: white;
}

li {
  float: left;
  background-color: #02b075;
}

.route-btn {
  display: block;
  text-align: center;
  padding: 14px 16px;
  color: white;
  text-decoration: none;
  background-color: #02b075;
}
</style>

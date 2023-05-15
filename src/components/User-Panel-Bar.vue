<template>
  <div class="navbar-2">
    <ul>
      <li v-if="resolver">
        <router-link
          class="route-btn"
          to="/userpanel/madadkhari"
          style="color: white"
          >مدیریت مددکاری</router-link
        >
      </li>
      <li v-if="counsultant">
        <router-link
          class="route-btn"
          to="/userpanel/counseling"
          style="color: white"
          >واحد مشاوره</router-link
        >
      </li>
      <li v-if="education">
        <router-link
          class="route-btn"
          to="/userpanel/education"
          style="color: white"
          >واحد آموزشی</router-link
        >
      </li>
      <li v-if="health">
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
// import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    resolver: Boolean,
    counsultant: Boolean,
    education: Boolean,
    health: Boolean,
  },
  data() {
    return {
      accesses: {},
    };
  },
  mounted() {},
  created() {},
};
</script>

<style>
.navbar-2 {
  padding: 5px;
  direction: rtl;
  text-align: start;
  background-color: #006df3;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

ul {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  background-color: #006df3;
  color: white;
}

li {
  float: left;
  background-color: #006df3;
}

.route-btn {
  display: block;
  text-align: center;
  padding: 14px 16px;
  color: white;
  text-decoration: none;
  background-color: #006df3;
}

@media (min-width: 1000px) {
  ul {
    margin: 5px auto;
    padding: 10px 25px;
  }

  li {
    width: 150px;
    margin: 5px auto;
  }

  .route-btn {
    width: 100%;
    padding: 5px 10px;
  }
}
</style>

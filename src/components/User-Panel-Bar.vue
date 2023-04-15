<template>
  <div class="navbar-2">
    <ul>
      <li>
        <router-link
          class="route-btn"
          to="/userpanel/madadkhari"
          style="color: white"
          >مدیریت مددکاری</router-link
        >
      </li>
      <li>
        <router-link
          class="route-btn"
          to="/userpanel/counseling"
          style="color: white"
          >واحد مشاوره</router-link
        >
      </li>
      <li>
        <router-link
          class="route-btn"
          to="/userpanel/education"
          style="color: white"
          >واحد آموزشی</router-link
        >
      </li>
      <li>
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
  data: () => ({}),
};
</script>

<style>
.navbar-2 {
  direction: rtl;
  text-align: right;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0b9fc2;
  color: white;
}

li {
  float: left;
}

.route-btn {
  display: block;
  text-align: center;
  padding: 14px 16px;
  color: white;
  text-decoration: none;
}

.route-btn:hover {
  background-color: #0b9fc2;
  color: white;
}
</style>

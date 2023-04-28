<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link
          class="route-btn"
          to="/director/usermng"
          style="color: white"
          >مدیریت اعضا</router-link
        >
      </li>
      <li>
        <router-link
          class="route-btn"
          to="/director/clients"
          style="color: white"
          >مددجویان</router-link
        >
      </li>
      <li>
        <router-link
          class="route-btn"
          to="/director/reports"
          style="color: white"
          >گزارشات</router-link
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
.navbar {
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
  color: white;
  background-color: #02b075;
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

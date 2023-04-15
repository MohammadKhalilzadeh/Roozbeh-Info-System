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

.user-manager {
  width: 94%;
  margin: 3%;
  border: blue 1px soild;
  border-radius: 15px;
  padding: 5%;
}
</style>

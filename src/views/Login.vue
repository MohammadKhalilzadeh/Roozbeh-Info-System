<template>
  <div class="root">
    <div class="inputs-box">
      <div class="box-row">
        <input
          class="input-field"
          type="text"
          placeholder="نام کاربری"
          v-model="username"
        />
      </div>
      <div class="box-row">
        <input
          class="input-field"
          type="text"
          placeholder="رمز عبور"
          v-model="password"
        />
      </div>
      <div class="box-row">
        <button class="thebtn" @click="ceologin">ورود مدیر عامل</button>
      </div>
      <div class="box-row">
        <button class="thebtn" @click="staffLogin(username)">ورود اعضا</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "LoginPage",
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ceologin() {
      if (this.username.length > 0 && this.password.length > 0) {
        if (this.username == "admin") {
          if (this.password == "admin") {
            console.log("1");
            router.push("/director/usermng");
            console.log("2");
          } else {
            alert("رمز عبور اشتباه است");
          }
        } else {
          alert("نام کاربری اشتباه است");
        }
      } else {
        alert("هیچ فیلدی نباید خالی باشد");
      }
    },
    staffLogin(username) {
      axios
        .post("http://localhost:3000/staffs/login/" + username, {
          password: this.password,
        })
        .then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            console.log("1");
            router.push("/userpanel");
            localStorage.setItem("resolver", res.data.resolver);
            localStorage.setItem("counsultant", res.data.counsultant);
            localStorage.setItem("health", res.data.health);
            localStorage.setItem("education", res.data.education);
            console.log("2");
          } else if (res.status == 400) {
            alert("رمز عبور اشتباه است");
          } else if (res.status == 404) {
            alert("کاربری با این اطلاعات وجود ندارد");
          } else {
            alert("مشکل برقراری ارتباط با سرور");
          }
        });
    },
  },
};
</script>

<style>
.root {
  background-color: #2f3032;
}

.inputs-box {
  width: 500px;
  margin: 30px auto;
  padding: 3%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #18191b;
}

.box-row {
  width: 90%;
  margin: 10px auto;
  background-color: #18191b;
}

.input-field {
  width: 350px;
  margin: 10px auto;
  background-color: #202123;
}

.thebtn {
  margin: 10px auto;
  background-color: #02b075;
}
</style>

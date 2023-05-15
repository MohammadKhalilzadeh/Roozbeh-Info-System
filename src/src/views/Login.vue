<template>
  <div class="root">
    <div class="login-box">
      <div class="box-row">
        <input
          class="input-field"
          type="text"
          placeholder="نام کاربری"
          v-model="username"
          name="username"
        />
      </div>
      <div class="box-row">
        <input
          class="input-field"
          type="password"
          placeholder="رمز عبور"
          v-model="password"
          name="password"
        />
      </div>
      <div class="box-row">
        <button class="thebtn" @click="ceologin" @keypress="ceologin">
          ورود مدیر عامل
        </button>
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
            router.push("/director/usermng");
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
    async staffLogin(username) {
      await axios
        .post("http://localhost:3000/staffs/login/" + username, {
          password: this.password,
        })
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("id", res.data._id);
            router.push("/userpanel");
          } else if (res.status == 401) {
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
  background-color: #fff;
  min-height: 800px;
}

.box-row {
  padding: 10px;
}

.input-field {
  width: 300px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.thebtn {
  background-color: #006df3;
  margin: 20px 15px 10px;
  border-radius: 5px;
}

@media (min-width: 1000px) {
  .root {
    min-height: 800px;
    padding: 5%;
  }

  .login-box {
    width: 500px;
    padding: 40px 20px;
    margin: 60px auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    align-items: center;
    text-align: center;
  }
}
</style>

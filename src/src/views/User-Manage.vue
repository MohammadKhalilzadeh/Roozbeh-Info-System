<template>
  <div class="home">
    <div class="user-ops">
      <div class="sections">
        <input
          class="input-field"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="نام همکار"
          v-model="form.firstname"
        />
        <input
          class="input-field"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="نام خانوادگی همکار"
          v-model="form.lastname"
        />
        <input
          class="input-field"
          type="text"
          name="username"
          id="username"
          placeholder="شماره ملی"
          v-model="form.nationalno"
        />
        <input
          class="input-field"
          type="text"
          name="password"
          id="password"
          placeholder="شماره تماس"
          v-model="form.phone"
        />
        <input
          class="input-field"
          type="text"
          name="password"
          id="password"
          placeholder="نام کاربری"
          v-model="form.username"
        />
        <input
          class="input-field"
          type="text"
          name="password"
          id="password"
          placeholder="رمزعبور"
          v-model="form.password"
        />
        <input
          class="input-field"
          type="text"
          name="password"
          id="password"
          placeholder="آدرس"
          v-model="form.address"
        />
      </div>
      <div class="sections">
        <div class="access-options">
          <input
            type="checkbox"
            name="option1"
            value="مددجویان"
            v-model="form.resolver"
            class="input-check"
          />
          <label>مددجویان</label>
        </div>
        <div class="access-options">
          <input
            type="checkbox"
            name="option2"
            value="آموزش"
            v-model="form.education"
            class="input-check"
          />
          <label>آموزش</label>
        </div>
        <div class="access-options">
          <input
            type="checkbox"
            name="option3"
            value="بهداشت"
            v-model="form.health"
            class="input-check"
          />
          <label>بهداشت</label>
        </div>
        <div class="access-options">
          <input
            type="checkbox"
            name="option4"
            value="مشاوره"
            v-model="form.counsultant"
            class="input-check"
          />
          <label>مشاوره</label>
        </div>
      </div>
      <button @click="postUser">ایجاد</button>
    </div>
    <hr />
    <div class="members-list">
      <table>
        <tr>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>شماره ملی</th>
          <th>شماره تماس</th>
          <th>نام کاربری</th>
          <th>پنل مددکاری</th>
          <th>پنل مشاوره</th>
          <th>پنل بهداشت</th>
          <th>پنل آموزش</th>
        </tr>
        <tr v-for="(member, index) in members" :key="index">
          <td>{{ member.firstname }}</td>
          <td>{{ member.lastname }}</td>
          <td>{{ member.nationalno }}</td>
          <td>{{ member.phone }}</td>
          <td>{{ member.username }}</td>
          <td>
            <h6 v-if="member.resolver">فعال</h6>
            <h6 v-else>غیرفعال</h6>
          </td>
          <td>
            <h6 v-if="member.counsultant">فعال</h6>
            <h6 v-else>غیرفعال</h6>
          </td>
          <td>
            <h6 v-if="member.health">فعال</h6>
            <h6 v-else>غیرفعال</h6>
          </td>
          <td>
            <h6 v-if="member.education">فعال</h6>
            <h6 v-else>غیرفعال</h6>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserManage",
  data: () => {
    return {
      members: {},
      form: {
        firstname: "",
        lastname: "",
        nationalno: "",
        phone: "",
        username: "",
        password: "",
        address: "",
        resolver: false,
        counsultant: false,
        health: false,
        education: false,
      },
    };
  },
  methods: {
    postUser() {
      console.log(this.form);
      axios.post("http://localhost:3000/staffs", this.form).then((response) => {
        console.log(response);
      });
    },
  },
  created() {
    axios.get("http://localhost:3000/staffs").then((response) => {
      this.members = response.data;
    });
  },
};
</script>

<style>
.home {
  direction: rtl;
  padding: 5%;
}

.user-ops,
.members-list {
  width: 80%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 40px auto;
  padding: 3%;
}

.members-list {
  width: 90%;
}

input {
  width: 300px;
  text-align: start;
  margin: 10px 20px;
}

.input-field {
  margin: 5px 15px;
}

button {
  width: 150px;
  background-color: #0b9fc2;
  color: white;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.access-options {
  width: 40%;
  margin: 0;
  float: inline-start;
}

.input-check {
  width: 50px;
}

label {
  width: 200px;
}

button {
  background-color: #02b075;
}
</style>

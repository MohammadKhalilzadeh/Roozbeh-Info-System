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
          type="number"
          name="nationalno"
          placeholder="شماره ملی"
          v-model="form.nationalno"
        />
        <input
          class="input-field"
          type="tel"
          name="phone"
          placeholder="شماره تماس"
          v-model="form.phone"
        />
        <input
          class="input-field"
          type="text"
          name="username"
          placeholder="نام کاربری"
          v-model="form.username"
        />
        <input
          class="input-field"
          type="password"
          name="password"
          id="password"
          placeholder="رمزعبور"
          v-model="form.password"
        />
        <input
          class="input-field"
          type="text"
          name="address"
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
          <label class="labels">مددجویان</label>
        </div>
        <div class="access-options">
          <input
            type="checkbox"
            name="option2"
            value="آموزش"
            v-model="form.education"
            class="input-check"
          />
          <label class="labels">آموزش</label>
        </div>
        <div class="access-options">
          <input
            type="checkbox"
            name="option3"
            value="بهداشت"
            v-model="form.health"
            class="input-check"
          />
          <label class="labels">بهداشت</label>
        </div>
        <div class="access-options">
          <input
            type="checkbox"
            name="option4"
            value="مشاوره"
            v-model="form.counsultant"
            class="input-check"
          />
          <label class="labels">مشاوره</label>
        </div>
      </div>
      <section class="sections">
        <button class="thebtn" @click="postUser">ایجاد</button>
      </section>
    </div>
    <hr />
    <div class="members-list">
      <table class="users-table">
        <tr>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>شماره ملی</th>
          <th>پسورد</th>
          <th>نام کاربری</th>
          <th>پنل مددکاری</th>
          <th>پنل مشاوره</th>
          <th>پنل بهداشت</th>
          <th>پنل آموزش</th>
          <th>عملیات</th>
        </tr>
        <tr v-for="(member, index) in members" :key="index">
          <td>{{ member.firstname }}</td>
          <td>{{ member.lastname }}</td>
          <td>{{ member.nationalno }}</td>
          <td>{{ member.password }}</td>
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
          <td>
            <button class="close" @click="deleteit(member._id)">حذف</button>
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
    async postUser() {
      if (this.form.username.length > 7 && this.form.password.length > 7) {
        await axios
          .post("http://localhost:3000/staffs", this.form)
          .then((response) => {
            if (response.status == 200) {
              alert("همکار جدید ایجاد شد");
            } else {
              alert("خطا در پردازش");
            }
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("طول نام کاربری , پسورد باید حداقل 8 کاراکتر باشد");
      }
    },
    async deleteit(id) {
      await axios
        .delete("http://localhost:3000/staffs/" + id)
        .then((res) => {
          if (res.status == 200) {
            alert("کارمند حذف شد");
            window.location.reload();
          } else {
            alert("خطا در پردازش");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async created() {
    await axios
      .get("http://localhost:3000/staffs")
      .then((response) => {
        if (response.status == 200) {
          this.members = response.data;
        } else {
          alert("مشکل در دریافت لیست کارمندان");
        }
      })
      .catch((err) => {
        console.log(err);
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

.user-ops {
  align-items: center;
  text-align: center;
}

.members-list {
  width: 90%;
  overflow: scroll;
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
  padding: 0;
  float: right;
}

.input-check {
  width: 30px;
  margin: 5px;
  padding: 0;
}

label {
  width: 200px;
}

button {
  background-color: #0b9fc2;
}

.users-table {
  width: 96%;
}

th,
td {
  text-align: center;
  padding: 10px;
}
</style>

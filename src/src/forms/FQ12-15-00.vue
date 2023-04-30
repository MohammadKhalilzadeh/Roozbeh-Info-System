<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>کاربرگ تسویه مددجو با مؤسسه خیریه استاد روزبه</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ ورود:</label>
          <input
            v-model="form.entrydate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
          <label for="adddate">تاریخ خروج:</label>
          <input
            v-model="form.exitdate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
          <label for="adddate">تاریخ تولد:</label>
          <input
            v-model="form.birthdate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
        </div>
      </section>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="fname"
          id="fname"
          placeholder="نام"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          name="lname"
          id="lname"
          placeholder="نام خانوادگی"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="text"
          name="skill"
          placeholder="مهارت آموز دوره آموزشی"
          v-model="form.coursename"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="کد ملی"
          v-model="nationalno"
        />
      </section>
      <hr />
      <section>
        <button @click="submitForm">Submit</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-15-00",
  data: () => {
    return {
      formcode: "FQ12-15-00",
      nationalno: "",
      form: {
        entrydate: "",
        exitdate: "",
        birthdate: "",
        cfname: "",
        clname: "",
        coursename: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/forms", {
          formcode: this.formcode,
          nationalno: this.nationalno,
          content: this.form,
        })
        .then((res) => {
          console.log(res.status);
          console.log(res.data);
        });
    },
  },
};
</script>

<style>
.paper-templ {
  direction: rtl;
  margin: 20px;
  padding: 3%;
  border: #0b9fc2 2px solid;
  border-radius: 15px;
}

table {
  width: 100%;
}
</style>

<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>ارزیابی و نتایج شرکت در دوره های آموزشی</h3>
      </section>
      <section>
        <div>
          <label for="adddate">تاریخ شروع دوره:</label>
          <input
            v-model="form.startdate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
          <label for="adddate">تاریخ پایان دوره:</label>
          <input
            v-model="form.enddate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
        </div>
      </section>
      <section>
        <input
          class="input-field"
          type="text"
          name="fname"
          id="fname"
          placeholder="نام مددجو"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          name="lname"
          id="lname"
          placeholder="نام خانوادگی مددجو"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="text"
          name="edu"
          placeholder="میزان تحصیلات"
          v-model="form.cedulvl"
        />
        <input
          class="input-field"
          type="text"
          name="course"
          placeholder="نام دوره آموزشی"
          v-model="form.coursename"
        />
      </section>
      <section>
        <div class="input-field">
          <textarea
            v-model="form.analyzeres"
            name="Textarea"
            id="textarea"
            rows="3"
          >
                تحلیل و نتیجه دوره برگزار شده
              </textarea
          >
        </div>
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
  name: "FQ12-13-00",
  data: () => {
    return {
      formcode: "FQ12-13-00",
      nationalno: "",
      form: {
        startdate: "",
        enddate: "",
        cfname: "",
        clname: "",
        cedulvl: "",
        coursename: "",
        analyzeres: "",
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

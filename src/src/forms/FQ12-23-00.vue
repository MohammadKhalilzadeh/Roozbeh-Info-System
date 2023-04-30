<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>معرفی به واحد بهداشت و درمان</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ:</label>
          <input
            v-model="form.thedate"
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
          name="skill"
          placeholder="نام مسئول واحد بهداشت و درمان"
          v-model="form.healthunitmngr"
        />
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
          name="nationalid"
          placeholder="شماره ملی"
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
  name: "FQ12-23-00",
  data: () => {
    return {
      formcode: "FQ12-23-00",
      nationalno: "",
      form: {
        thedate: "",
        healthunitmngr: "",
        cfname: "",
        clname: "",
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

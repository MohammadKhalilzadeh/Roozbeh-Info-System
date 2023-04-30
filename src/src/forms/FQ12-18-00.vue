<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>معرفی به واحدهای حمایتی و خدماتی</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ تنظیم درخواست:</label>
          <input
            v-model="form.reqdate"
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
          name="skill"
          placeholder="نام مدیر واحد"
          v-model="form.unitmanager"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="نام خدمات"
          v-model="form.servicename"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="نام مدیر مددکاری"
          v-model="form.madadkarimngr"
        />
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
          <label for="adddate">تاریخ مراجعه:</label>
          <input
            v-model="form.refdate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="نام واحد"
            v-model="form.unitname"
          />
        </div>
        <div>
          <div class="input-field">
            <textarea
              v-model="form.actionsdesc"
              name="Textarea"
              id="textarea"
              rows="5"
            >
  شرح اقدامات</textarea
            >
          </div>
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
  name: "FQ12-18-00",
  data: () => {
    return {
      formcode: "FQ12-18-00",
      nationalno: "",
      form: {
        reqdate: "",
        cfname: "",
        clname: "",
        unitmanager: "",
        servicename: "",
        madadkarimngr: "",
        thedate: "",
        refdate: "",
        unitname: "",
        actionsdesc: "",
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

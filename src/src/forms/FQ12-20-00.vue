<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>معرفی به اشتغال خانگی</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ شروع:</label>
          <input
            v-model="form.startdate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
          <label for="adddate">تاریخ تولد:</label>
          <input
            v-model="form.enddate"
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
          placeholder="نام پدر"
          v-model="form.father"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="تحصیلات"
          v-model="form.education"
        />
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>وضعیت تاهل؟</legend>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">مجرد</label>
            </div>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">متاهل</label>
            </div>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">مطلقه</label>
            </div>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">فوت همسر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">همسر مفقود الاثر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">ترک منزل همسر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">زندانی همسر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">در حال طلاق</label>
            </div>
          </fieldset>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="سابقه بیماری/ناتوانی"
            v-model="form.anyillness"
          />
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="سابقه ناتوانی"
            v-model="form.incapability"
          />
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="شماره تلفن ثابت"
            v-model="form.permanant"
          />
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="شماره تلفن همراه"
            v-model="form.cell"
          />
        </div>
        <div class="input-field">
          <textarea
            v-model="form.theory"
            name="Textarea"
            id="textarea"
            rows="3"
          >
  نظریه مشاور / مددکار</textarea
          >
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="مدیر مددکاری"
            v-model="form.madadkarimngr"
          />
        </div>
      </section>
      <hr />
      <section>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="واحد محترم"
            v-model="form.unit"
          />
        </div>
        <div>
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
        </div>
        <div class="input-field">
          <textarea
            v-model="form.skills"
            name="Textarea"
            id="textarea"
            rows="2"
          >
  مهارتها و توانایی ها</textarea
          >
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="مدیر آموزش"
            v-model="form.edumngr"
          />
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea
            v-model="form.finalres"
            name="Textarea"
            id="textarea"
            rows="2"
          >
  نتیجه نهایی</textarea
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
  name: "FQ12-20-00",
  data: () => {
    return {
      formcode: "FQ12-20-00",
      nationalno: "",
      form: {
        startdate: "",
        enddate: "",
        cfname: "",
        clname: "",
        father: "",
        education: "",
        maritalstatus: "",
        anyillness: "",
        incapability: "",
        permanant: "",
        cell: "",
        theory: "",
        madadkarimngr: "",
        unit: "",
        skills: "",
        edumngr: "",
        finalres: "",
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

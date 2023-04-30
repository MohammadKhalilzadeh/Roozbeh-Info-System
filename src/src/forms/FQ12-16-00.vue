<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>پیگیری وضعیت مددجو پس از خروج از مؤسسه</h3>
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
          placeholder="امتیاز کل"
          v-model="form.totalscore"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="کد مددجو"
          v-model="form.clientcode"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="دوره آموزشی گذارنده شده"
          v-model="form.registereds"
        />
      </section>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="fname"
          id="fname"
          placeholder="وضعیت اشتغال"
          v-model="form.employment"
        />
        <input
          class="input-field"
          type="text"
          name="lname"
          id="lname"
          placeholder="ساعت کاری"
          v-model="form.workhours"
        />
        <input
          class="input-field"
          type="text"
          name="skill"
          placeholder="وضعیت استخدام"
          v-model="form.hired"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="حقوق ماهیانه / دستمزدی"
          v-model="form.salary"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="بیمه"
          v-model="form.insurance"
        />
        <div class="input-field">
          <textarea
            v-model="form.jobadrs"
            name="Textarea"
            id="textarea"
            rows="2"
          >
  آدرس محل کار</textarea
          >
        </div>
        <div class="input-field">
          <textarea
            v-model="form.familystatus"
            name="Textarea"
            id="textarea"
            rows="3"
          >
  شرایط خانوادگی</textarea
          >
        </div>
        <div>
          <label for="adddate">تاریخ پیگیری:</label>
          <input
            v-model="form.trackdate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
        </div>
        <div class="input-field">
          <textarea
            v-model="form.clientpersonals"
            name="Textarea"
            id="textarea"
            rows="3"
          >
  وضعیت شخصی مددجو</textarea
          >
        </div>
        <div class="input-field">
          <textarea
            v-model="form.spouse"
            name="Textarea"
            id="textarea"
            rows="3"
          >
همسر</textarea
          >
        </div>
        <div class="input-field">
          <textarea
            v-model="form.kidsandedu"
            name="Textarea"
            id="textarea"
            rows="3"
          >
  وضعیت فرزندان و شرایط تحصیلی</textarea
          >
        </div>
        <div class="input-field">
          <textarea
            v-model="form.visitresult"
            name="Textarea"
            id="textarea"
            rows="3"
          >
  نتیجه بازدید</textarea
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
  name: "FQ12-16-00",
  data: () => {
    return {
      formcode: "FQ12-16-00",
      nationalno: "",
      form: {
        entrydate: "",
        exitdate: "",
        cfname: "",
        clname: "",
        totalscore: "",
        clientcode: "",
        registereds: "",
        employment: "",
        workhours: "",
        hired: "",
        salary: "",
        insurance: "",
        jobadrs: "",
        familystatus: "",
        clientpersonals: "",
        spouse: "",
        kidsandedu: "",
        visitresult: "",
        trackdate: "",
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

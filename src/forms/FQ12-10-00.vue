<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>پیگیری وضعیت مددجو در حین آموزش</h3>
      </section>
      <section>
        <label for="adddate">تاریخ جذب:</label>
        <date-picker class="date-picker" v-model="form.admissiondate" />
        <label for="adddate">تاریخ اتمام دوره آموزشی:</label>
        <date-picker class="date-picker" v-model="form.courseenddate" />
      </section>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="cfname"
          id="cfname"
          placeholder="نام مددجو"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          name="clname"
          id="clname"
          placeholder="نام خانواده مددجو"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="number"
          name="clname"
          id="clname"
          placeholder="کد ملی مددجو"
          v-model="nationalno"
        />
        <input
          class="input-field"
          type="text"
          name="edudep"
          id="edudep"
          placeholder="واحد آموزشی"
          v-model="form.edudep"
        />
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ نوبت اول مشاوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نتیجه مشاوره</textarea
          >
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نظریه مدیر مددکاری</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ نوبت دوم مشاوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نتیجه مشاوره</textarea
          >
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نظریه مدیر مددکاری</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <h4>مشاوره های تخصصی انجام شده:</h4>
        <section>
          <div>
            <label for="adddate">تاریخ:</label>
            <input class="input-field" type="date" name="Date" id="date" />
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="counsultant"
              id="counsultant"
              placeholder="نام مشاور"
            />
            <div class="input-field">
              <textarea name="Textarea" id="textarea" rows="3">
                نتیجه مشاور
              </textarea>
            </div>
            <div class="input-field">
              <textarea name="Textarea" id="textarea" rows="3">
                نتیجه مددکاری
              </textarea>
            </div>
          </div>
        </section>
      </section>
      <hr />
      <section>
        <button @click="submitForm">ذخیره</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-10-00",
  data: () => {
    return {
      formcode: "FQ12-10-00",
      nationalno: "",
      form: {
        admissiondate: "",
        courseenddate: "",
        cfname: "",
        clname: "",
        edudep: "",
      },
    };
  },
  methods: {
    async submitForm() {
      await axios
        .post("http://localhost:3000/forms/", {
          formcode: this.formcode,
          nationalno: this.nationalno,
          content: this.form,
        })
        .then((res) => {
          if (res.status == 200) {
            alert("فرم ایجاد شد");
            window.location.reload();
          } else {
            alert("خطا در پردازش درخواست");
          }
        })
        .catch((err) => {
          console.log(err);
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
</style>

<template>
  <div>
    <div class="paper-templ">
      <div class="header">
        <h3>آشنایی با دوره های آموزشی مؤسسه خیریه روزبه</h3>
      </div>
      <section>
        <input
          class="input-field"
          type="text"
          name="cfname"
          id="cfname"
          placeholder="نام متقاضی"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          name="clname"
          id="clname"
          placeholder="نام خانوادگی متقاضی"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="text"
          name="father"
          id="father"
          placeholder="نام پدر"
          v-model="form.father"
        />
        <input
          class="input-field"
          type="text"
          name="nationalno"
          id="nationalno"
          placeholder="شماره ملی"
          v-model="nationalno"
        />
        <input
          class="input-field"
          type="text"
          name="edudep"
          id="edudep"
          placeholder="نام واحد آموزشی"
          v-model="form.edudepname"
        />
      </section>
      <hr />
      <section>
        <div class="text-holder">
          <p>
            اینجانب
            {{ form.cfname }} {{ form.clname }}
            فرزند
            {{ father }}
            به شماره ملی
            {{ nationalno }}
            با مطالعه و اطلاع کامل سرفصل های آموزشی موسسه خیریه روزبه، مایلم در
            واحد آموزشی
            {{ form.edudepname }}
            مشغول به یادگیری و مهارت آموزی شوم.
          </p>
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <table>
            <tr>
              <th>ردیف</th>
              <th>آشپزی</th>
              <th>آشپزی</th>
              <th>قنادی</th>
              <th>خیاطی</th>
            </tr>
            <tr>
              <td>1</td>
              <td>آشنایی به مواد اولیه و شرایط نگهداری دستگاه‌ها</td>
              <td>آشنایی با شرایط نگهداری مواد غذایی</td>
              <td>آشنایی به مواد اولیه و شرایط نگهداری دستگاه‌ها</td>
              <td>آشنایی با دشتگاه ها و ابزار خیاطی</td>
            </tr>
          </table>
        </div>
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
  name: "FQ12-06-00",
  data: () => {
    return {
      formcode: "FQ12-06-00",
      nationalno: "",
      form: {
        cfname: "",
        clname: "",
        father: "",
        nationalno: "",
        edudepname: "",
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

.widget-list {
  direction: rtl;
  margin: 5%;
  width: 90%;
  padding: 3%;
  border: solid 1px #0b9fc2;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: right;
  align-items: start;
}

.radio-opt {
  width: 33%;
  margin: 0px;
  float: right;
}

.radio-input {
  width: 30px;
  margin: 0;
}

.text-holder {
  padding: 3%;
}
</style>

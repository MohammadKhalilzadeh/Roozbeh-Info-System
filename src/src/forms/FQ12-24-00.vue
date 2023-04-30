<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>حضور و غیاب مددجو در واحد آموزش</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ شروع دوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
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
          name="nationalid"
          placeholder="نام واحد آموزشی"
          v-model="form.eduunit"
        />
      </section>
      <hr />
      <section>
        <div class="input-field">
          <table>
            <tr>
              <th>ردیف</th>
              <th>تاریخ</th>
              <th>ساعت ورود</th>
              <th>ساعت خروج</th>
              <th>امضا و اثر انپشت مددجو</th>
              <th>توضیحات</th>
            </tr>
            <tr>
              <td>1</td>
              <td>$100</td>
              <td>January</td>
              <td>$100</td>
              <td>January</td>
              <td>$100</td>
            </tr>
          </table>
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
  name: "FQ12-24-00",
  data: () => {
    return {
      formcode: "FQ12-24-00",
      nationalno: "",
      form: {
        startdate: "",
        cfname: "",
        clname: "",
        eduunit: "",
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

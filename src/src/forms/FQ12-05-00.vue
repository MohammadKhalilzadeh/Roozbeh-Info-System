<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>پذیــرش متقــاضی</h4>
      </div>
      <section class="sections">
        <div class="date-slop">
          <label class="date-label" for="docadate">تاریخ تنظیم:</label>
          <date-picker class="date-picker" v-model="form.docdate" />
        </div>
        <div class="date-slop">
          <label class="date-label" for="docadate">تاریخ تولد:</label>
          <date-picker class="date-picker" v-model="form.birthdate" />
        </div>
      </section>
      <section class="sections">
        <input
          class="input-field"
          type="text"
          placeholder="نام متقاضی"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          placeholder="نام خانوادگی متقاضی"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="text"
          placeholder="نام پدر"
          v-model="form.father"
        />
        <input
          class="input-field"
          type="text"
          placeholder="شماره شناسنامه"
          v-model="form.idnumber"
        />
        <input
          class="input-field"
          type="number"
          placeholder="شماره ملی"
          v-model="nationalno"
        />
        <input
          class="input-field"
          type="number"
          placeholder="تعداد عائله تحت تکفل"
          v-model="form.numberofsupervisions"
        />
        <input
          class="input-field"
          type="text"
          placeholder="صادره از"
          v-model="form.eligedby"
        />
        <input
          class="input-field"
          type="tel"
          placeholder="شماره تماس"
          v-model="form.phone"
        />
        <div class="textarea-holder">
          <textarea
            placeholder="آدرس"
            class="textarea-input"
            v-model="form.address"
            rows="3"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section class="sections">
        <button class="thebtn" @click="submitForm">ذخیره</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-05-00",
  data: () => {
    return {
      formcode: "FQ12-05-00",
      nationalno: "",
      form: {
        docdate: "",
        birthdate: "",
        cfname: "",
        clname: "",
        father: "",
        idnumber: "",
        nationalno: "",
        numberofsupervisions: "",
        eligedby: "",
        phone: "",
        address: "",
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

.date-picker {
  width: 60%;
}
</style>

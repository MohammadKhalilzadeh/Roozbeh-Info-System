<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>پیگیری وضعیت مددجو پس از خروج از مؤسسه</h4>
      </section>
      <section class="form-fields">
        <div class="sections">
          <div class="date-slop">
            <label class="date-label" for="adddate">تاریخ ورود:</label>
            <date-picker class="date-picker" v-model="form.entrydate" />
          </div>
          <div class="date-slop">
            <label class="date-label" for="adddate">تاریخ خروج:</label>
            <date-picker class="date-picker" v-model="form.exitdate" />
          </div>
        </div>
      </section>
      <section class="sections">
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
          type="number"
          name="lname"
          id="lname"
          placeholder="کد ملی"
          v-model="nationalno"
        />
        <input
          class="input-field"
          type="number"
          name="skill"
          placeholder="امتیاز کل"
          v-model="form.totalscore"
        />
        <input
          class="input-field"
          type="number"
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
      <section class="sections">
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
          type="number"
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
          type="number"
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
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.jobadrs"
            name="Textarea"
            id="textarea"
            rows="2"
            placeholder="آدرس محل کار"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            v-model="form.familystatus"
            class="textarea-input"
            rows="3"
            placeholder="شرایط خانوادگی"
          >
          </textarea>
        </div>
        <div class="date-slop">
          <label class="date-label" for="adddate">تاریخ پیگیری:</label>
          <date-picker class="date-picker" v-model="form.trackdate" />
        </div>
        <div class="textarea-holder">
          <textarea
            v-model="form.clientpersonals"
            class="textarea-input"
            rows="3"
            placeholder="وضعیت شخصی مددجو"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            v-model="form.spouse"
            class="textarea-input"
            rows="3"
            placeholder="همسر"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            v-model="form.kidsandedu"
            class="textarea-input"
            rows="3"
            placeholder="وضعیت فرزندان و شرایط تحصیلی"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            v-model="form.visitresult"
            class="textarea-input"
            rows="3"
            placeholder="نتیجه بازدید"
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
  name: "FQ12-16-00",
  data: () => {
    return {
      formcode: "FQ12-16-00",
      nationalno: "",
      form: {
        entrydate: "",
        exitdate: "",
        // 0
        cfname: "",
        clname: "",
        totalscore: "",
        clientcode: "",
        registereds: "",
        // 1
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
.form-root {
  overflow: hidden;
  width: 100%;
  padding: 2%;
  margin: 0;
}

.form-paper {
  width: 100%;
  border: black 1px solid;
  padding: 20px;
  margin: 10px auto;
}

.paper-title {
  text-align: center;
  padding: 40px;
}

.form-fields {
  width: 100%;
  padding: 20px;
}

.input-field-2 {
  width: 200px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.textarea-holder {
  width: 100%;
}

.textarea-input {
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.thebtn {
  background-color: #006df3;
  margin: 20px 15px 10px;
  border-radius: 5px;
}

.date-picker {
  width: 60%;
}

@media (min-width: 800px) {
  .date-slop {
    width: 50%;
    float: right;
  }

  .input-field-2 {
    width: 200px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .date-label {
    width: 80px;
  }

  legend {
    font-size: 1rem;
  }

  .radio-opt-2 {
    float: right;
  }

  .radio-input-2 {
    width: 30px;
    padding: 5px;
  }

  .radio-txt {
    width: 270px;
  }
}
</style>

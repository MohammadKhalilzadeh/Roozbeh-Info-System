<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>معرفی به اشتغال خانگی</h4>
      </section>
      <section class="form-fields">
        <div>
          <div class="date-slop">
            <label class="date-label" for="adddate">تاریخ شروع:</label>
            <date-picker class="date-picker" v-model="form.startdate" />
          </div>
          <div class="date-slop">
            <label class="date-label" for="adddate">تاریخ تولد:</label>
            <date-picker class="date-picker" v-model="form.enddate" />
          </div>
        </div>
      </section>
      <section class="sections">
        <div class="sections">
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
            name="skill"
            placeholder="کد ملی"
            v-model="nationalno"
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
        </div>
      </section>
      <hr />
      <section class="sections">
        <div id="radio-box">
          <fieldset>
            <legend>وضعیت تاهل؟</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="huey"
                name="maritalstatus"
                value="مجرد"
              />
              <label class="radio-txt" for="huey">مجرد</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="maritalstatus"
                value="متاهل"
              />
              <label class="radio-txt" for="dewey">متاهل</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="maritalstatus"
                value="مطلقه"
              />
              <label class="radio-txt" for="dewey">مطلقه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="maritalstatus"
                value="فوت همسر"
              />
              <label class="radio-txt" for="dewey">فوت همسر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="maritalstatus"
                value="همسر مفقود الاثر"
              />
              <label class="radio-txt" for="dewey">همسر مفقود الاثر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="maritalstatus"
                value="ترک منزل همسر"
              />
              <label class="radio-txt" for="dewey">ترک منزل همسر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="maritalstatus"
                value="زندانی همسر"
              />
              <label class="radio-txt" for="dewey">زندانی همسر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstatus"
                type="radio"
                id="dewey"
                name="maritalstatus"
                value="در حال طلاق"
              />
              <label class="radio-txt" for="dewey">در حال طلاق</label>
            </div>
          </fieldset>
        </div>
        <div class="sections">
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
        <div class="sections">
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
        <div class="textarea-holder">
          <textarea
            v-model="form.theory"
            class="textarea-input"
            rows="3"
            placeholder="نظریه مشاور / مددکار"
          >
          </textarea>
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
      <section class="sections">
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="واحد محترم"
            v-model="form.unit"
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
        </div>
        <div class="textarea-holder">
          <textarea
            v-model="form.skills"
            class="textarea-input"
            rows="2"
            placeholder="مهارتها و توانایی ها"
          >
          </textarea>
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
      <section class="sections">
        <div class="textarea-holder">
          <textarea
            v-model="form.finalres"
            class="textarea-input"
            rows="2"
            placeholder="نتیجه نهایی"
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
  name: "FQ12-20-00",
  data: () => {
    return {
      formcode: "FQ12-20-00",
      nationalno: "",
      form: {
        startdate: "",
        enddate: "",
        // 1
        cfname: "",
        clname: "",
        father: "",
        education: "",
        // 2
        maritalstatus: "",
        anyillness: "",
        incapability: "",
        permanant: "",
        cell: "",
        theory: "",
        madadkarimngr: "",
        // 3
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

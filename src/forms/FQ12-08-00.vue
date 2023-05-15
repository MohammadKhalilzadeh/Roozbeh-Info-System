<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>معرفی مددجو به واحد آموزشی</h4>
      </div>
      <div class="form field">
        <div class="sections">
          <div class="sections-2">
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام متقاضی"
              v-model="form.cfname"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام خانوادگی متقاضی"
              v-model="form.clname"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام دوره آموزشی"
              v-model="form.course"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="مدت"
              v-model="form.duration"
            />
            <input
              class="input-field"
              type="number"
              name="Name"
              id="name"
              placeholder="کد ملی"
              v-model="nationalno"
            />
          </div>
          <div class="sections-2">
            <div class="date-slop">
              <label class="date-label">تاریخ شروع</label>
              <date-picker
                class="date-picker"
                name="Date"
                v-model="form.startdate"
              />
            </div>
          </div>
        </div>
        <hr />
        <div class="sections">
          <h2>مشخصات مددجو</h2>
          <div class="sections-2">
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام متقاضی"
              v-model="form.cfname"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام خانوادگی متقاضی"
              v-model="form.clname"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام پدر"
              v-model="form.father"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="تحصیلات"
              v-model="form.education"
            />
          </div>
          <div class="sections-2">
            <div class="date-slop">
              <label class="date-label">تاریخ تولد</label>
              <date-picker class="date-picker" v-model="form.birthdate" />
            </div>
          </div>
        </div>
        <hr />
        <div class="sections">
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت تاهل</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="huey"
                  name="thestatus"
                  value="مجرد"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="huey">مجرد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="dewey"
                  name="thestatus"
                  value="متاهل"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="dewey">متاهل</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="thestatus"
                  value="مطلقه"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="louie">مطلقه</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="thestatus"
                  value="فوت همسر"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="louie">فوت همسر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="thestatus"
                  value="همسر مفقودالاثر"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="louie">همسر مفقودالاثر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="thestatus"
                  value="ترک منزل همسر"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="louie">ترک منزل همسر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="thestatus"
                  value="همسر زندانی"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="louie">همسر زندانی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="thestatus"
                  value="در حال طلاق"
                  v-model="form.thestatus"
                />
                <label class="radio-txt" for="louie">در حال طلاق</label>
              </div>
            </fieldset>
          </div>
        </div>
        <hr />
        <div class="sections">
          <div>
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="سابقه بیماری"
              v-model="form.illnesshist"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="سابقه ناتوانی"
              v-model="form.disabilityhist"
            />
            <input
              class="input-field"
              type="tel"
              name="Name"
              id="name"
              placeholder="شماره تلفن همراه"
              v-model="form.pphone"
            />
            <input
              class="input-field"
              type="tel"
              name="Name"
              id="name"
              placeholder="شماره تلفن ثابت"
              v-model="form.cphone"
            />
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.conditions"
              name="Textarea"
              id="textarea"
              rows="3"
              placeholder="نظریه مشاور/مددکار در خصوص شرایط متقاضی جهت ورود به کارگاه های آموزشی"
            >
            </textarea>
          </div>
        </div>
        <hr />
        <div class="sections">
          <button class="thebtn" @click="submitForm">ذخیره</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-08-00",
  data: () => {
    return {
      formcode: "FQ12-08-00",
      nationalno: "",
      form: {
        cfname: "",
        clname: "",
        course: "",
        duration: "",
        startdate: "",
        father: "",
        education: "",
        birthdate: "",
        thestatus: "",
        illnesshist: "",
        disabilityhist: "",
        pphone: "",
        cphone: "",
        conditions: "",
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

.sections {
  padding: 20px;
  margin: 40px 20px;
}

.sections-2 {
  padding: 10px;
  margin: 40px 20px;
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

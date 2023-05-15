<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>قرارداد آموزشی</h4>
      </div>
      <section class="sections">
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="استان"
          v-model="form.province"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="شهرستان"
          v-model="form.city"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="بخش"
          v-model="form.part"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="نام متقاضی"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="نام خانوادگی متقاضی"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="نام پدر"
          v-model="form.father"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="شماره شناسنامه"
          v-model="form.idnumber"
        />
        <input
          class="input-field"
          type="number"
          name="Name"
          placeholder="کد ملی"
          v-model="nationalno"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="صادره از"
          v-model="form.confirmedfrom"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          placeholder="متولد"
          v-model="form.birthplace"
        />
        <input
          class="input-field"
          type="tel"
          name="Name"
          placeholder="تلفن"
          v-model="form.phone"
        />
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.address"
            name="Textarea"
            id="textarea"
            rows="2"
            placeholder="نشانی"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="date-slop">
          <label class="date-label">مورخ</label>
          <date-picker class="date-picker" name="Date" v-model="form.thedate" />
        </div>
        <div class="sections-2">
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="نام مرکز یادگیری"
            v-model="form.educenter"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="نام مدیر"
            v-model="form.managerfname"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="نام خانوادگی مدیر"
            v-model="form.managerlname"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="نام پدر"
            v-model="form.managerfather"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="شماره شناسنامه"
            v-model="form.manageridnum"
          />
          <input
            class="input-field"
            type="number"
            name="Name"
            id="name"
            placeholder="کد ملی"
            v-model="form.managernationalno"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="صادره از"
            v-model="form.managerconfirmedfrom"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="متولد"
            v-model="form.managerbirthplace"
          />
          <input
            class="input-field"
            type="number"
            name="Name"
            id="name"
            placeholder="شماره مجوز"
            v-model="form.permitnum"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="استان"
            v-model="form.managerprovince"
          />
          <input
            class="input-field"
            type="tel"
            name="Name"
            id="name"
            placeholder="تلفن"
            v-model="form.managerphone"
          />
        </div>
        <div class="textarea-holder">
          <textarea
            v-model="form.managerphone"
            class="textarea-input"
            rows="2"
            placeholder="نشانی"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section class="sections">
        <input
          class="input-field"
          type="text"
          name="Name"
          id="name"
          placeholder="نام رئیس مرکز آموزشی"
          v-model="form.bossfname"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          id="name"
          placeholder="نام خانوادگی مرکز آموزشی"
          v-model="form.bosslname"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          id="name"
          placeholder="شهرستان"
          v-model="form.bosscity"
        />
        <div class="textarea-holder">
          <textarea
            v-model="form.bossadres"
            class="textarea-input"
            rows="2"
            placeholder="آدرس"
          ></textarea>
        </div>
      </section>
      <hr />
      <section class="sections">
        <h2>ماده 1 - موضوع و مدت قرارداد</h2>
        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="نام حرفه"
            v-model="form.skill"
          />
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="کد استاندارد"
            v-model="form.standardno"
          />
        </div>
        <div class="date-slop">
          <label class="date-label">تاریخ شروع</label>
          <date-picker class="date-picker" v-model="form.startdate" />
        </div>
      </section>
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>شیفت برگزاری کلاس ها</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="drone"
                value="صبح"
                v-model="form.shift"
              />
              <label class="radio-txt">صبح</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="drone"
                value="شیفت عصر"
                v-model="form.shift"
              />
              <label class="radio-txt" for="dewey">شیفت عصر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="drone"
                value="شنبه"
                v-model="form.shift"
              />
              <label class="radio-txt" for="louie">شنبه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="drone"
                value="یک شنبه"
                v-model="form.shift"
              />
              <label class="radio-txt" for="louie">یک شنبه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="drone"
                value="دو شنبه"
                v-model="form.shift"
              />
              <label class="radio-txt" for="louie">دو شنبه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="drone"
                value="سه شنبه"
                v-model="form.shift"
              />
              <label class="radio-txt" for="louie">سه شنبه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="drone"
                value="چهار شنبه"
                v-model="form.shift"
              />
              <label class="radio-txt" for="louie">چهار شنبه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="drone"
                value="پنج شنبه"
                v-model="form.shift"
              />
              <label class="radio-txt" for="louie">پنج شنبه</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <h2>محل اجرای قرارداد</h2>
        <input
          class="input-field"
          type="text"
          name="Name"
          id="name"
          placeholder="کارگاه (مرکز یادگیری)"
          v-model="form.workshop"
        />
        <input
          class="input-field"
          type="text"
          name="Name"
          id="name"
          placeholder="نشانی"
          v-model="form.workshopadrs"
        />
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
  name: "FQ12-07-00",
  data: () => {
    return {
      formcode: "FQ12-07-00",
      nationalno: "",
      form: {
        province: "",
        city: "",
        part: "",
        cfname: "",
        clname: "",
        father: "",
        idnumber: "",
        confirmedfrom: "",
        birthplace: "",
        phone: "",
        address: "",
        // 2
        thedate: "",
        educenter: "",
        managerfname: "",
        managerlname: "",
        managerfather: "",
        manageridnum: "",
        managernationalno: "",
        managerconfirmedfrom: "",
        managerbirthplace: "",
        permitnum: "",
        managerprovince: "",
        managerphone: "",
        manageradrs: "",
        // 3
        bossfname: "",
        bosslname: "",
        bosscity: "",
        bossadres: "",
        // 4
        skill: "",
        standardno: "",
        startdate: "",
        // 5
        shift: "",
        // 6
        workshop: "",
        workshopadrs: "",
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
  margin: 30px;
}

.sections-2 {
  padding: 20px;
  margin: 20px;
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

<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>کاربرگ تسویه مددجو با مؤسسه خیریه استاد روزبه</h4>
      </section>
      <section class="sections">
        <div class="date-slop">
          <label class="date-label" for="adddate">تاریخ ورود:</label>
          <date-picker class="date-picker" v-model="form.entrydate" />
        </div>
        <div class="date-slop">
          <label class="date-label" for="adddate">تاریخ خروج:</label>
          <date-picker class="date-picker" v-model="form.exitdate" />
        </div>
        <div class="date-slop">
          <label class="date-label" for="adddate">تاریخ تولد:</label>
          <date-picker class="date-picker" v-model="form.birthdate" />
        </div>
      </section>
      <section class="sections">
        <div class="sections">
          <div class="sections">
            <input
              class="input-field-2"
              type="text"
              name="fname"
              id="fname"
              placeholder="نام"
              v-model="form.cfname"
            />
            <input
              class="input-field-2"
              type="text"
              name="lname"
              id="lname"
              placeholder="نام خانوادگی"
              v-model="form.clname"
            />
            <input
              class="input-field-2"
              type="text"
              name="skill"
              placeholder="مهارت آموز دوره آموزشی"
              v-model="form.coursename"
            />
            <input
              class="input-field-2"
              type="number"
              name="nationalid"
              placeholder="کد ملی"
              v-model="nationalno"
            />
          </div>
        </div>
      </section>
      <section class="sections">
        <button class="thebtn" @click="submitForm">ذخیره</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-15-00",
  data: () => {
    return {
      formcode: "FQ12-15-00",
      nationalno: "",
      form: {
        entrydate: "",
        exitdate: "",
        birthdate: "",
        cfname: "",
        clname: "",
        coursename: "",
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
  padding: 30px;
  margin: 30px 20px;
}

.sections-2 {
  padding: 30px;
  margin: 40px;
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

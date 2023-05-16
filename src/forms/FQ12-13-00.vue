<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>ارزیابی و نتایج شرکت در دوره های آموزشی</h4>
      </section>
      <section class="section">
        <div class="section">
          <label class="date-label">تاریخ شروع دوره:</label>
          <date-picker class="date-picker" v-model="form.startdate" />
          <label class="date-label">تاریخ پایان دوره:</label>
          <date-picker class="date-picker" v-model="form.enddate" />
        </div>
      </section>
      <section class="section">
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
          placeholder="کد ملی مددجو"
          v-model="nationalno"
        />
        <input
          class="input-field"
          type="text"
          name="edu"
          placeholder="میزان تحصیلات"
          v-model="form.cedulvl"
        />
        <input
          class="input-field"
          type="text"
          name="course"
          placeholder="نام دوره آموزشی"
          v-model="form.coursename"
        />
      </section>
      <section class="section">
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.analyzeres"
            rows="3"
            placeholder="تحلیل و نتیجه دوره برگزار شده"
          >
          </textarea>
        </div>
      </section>
      <section class="section">
        <button class="thebtn" @click="submitForm">ذخیره</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-13-00",
  data: () => {
    return {
      formcode: "FQ12-13-00",
      nationalno: "",
      form: {
        startdate: "",
        enddate: "",
        cfname: "",
        clname: "",
        cedulvl: "",
        coursename: "",
        analyzeres: "",
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

<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h3>معرفی به سازمان های حمایتی یا واحد اشتغال و کاریابی</h3>
      </div>
      <div class="form-fields">
        <div class="section">
          <div class="date-slop">
            <label class="date-label">تاریخ</label>
            <date-picker
              class="date-picker"
              v-model="form.docdate"
              name="docdate"
            />
          </div>
        </div>
        <div class="section">
          <input
            class="input-field"
            type="text"
            name="AudienceName"
            id="audience"
            placeholder="نام واحد"
            v-model="form.deporgname"
          />
          <input
            class="input-field"
            type="text"
            name="AudienceName"
            id="audience"
            placeholder="نام کامل مدیر سازمان یا واحد کاریابی"
            v-model="form.calleefullname"
          />
          <input
            class="input-field"
            type="text"
            name="clientfname"
            id="clientfname"
            placeholder="نام متقاضی"
            v-model="form.cfname"
          />
          <input
            class="input-field"
            type="text"
            name="clientlname"
            id="clientlname"
            placeholder="نام خانوادگی متقاضی"
            v-model="form.clname"
          />
          <input
            class="input-field"
            type="number"
            name="nationalno"
            id="nationalno"
            placeholder="شماره ملی"
            v-model="nationalno"
          />
          <input
            class="input-field"
            type="text"
            name="service"
            id="service"
            placeholder="نام خدمات حمایتی یا اشتغال و کاریابی"
            v-model="form.servicetitle"
          />
          <input
            class="input-field"
            type="text"
            name="skill"
            id="skill"
            placeholder="زمینه مهارت متقاضی"
            v-model="form.skill"
          />
        </div>
        <div class="section">
          <h5>
            مدیر محترم سازمان / واحد محترم کاریابی
            <span>{{ form.deporgname }}</span>
          </h5>
          <h6>
            آقای / خانم <span>{{ form.calleefullname }}</span>
          </h6>
          <p class="paragraph">
            با سلام، بدین وسیله سرکار خانم
            <span>{{ form.cfname }} {{ form.clname }}</span>
            به شماره ملی
            <span>{{ nationalno }}</span>
            برای استفاده از خدمات حمایتی / خدمات اشتغال و کاریابی
            <span>{{ form.servicetitle }}</span>
            به حضور جنابعالی معرفی می‌گردد. لازم به ذکر است نامبرده در زمینه
            <span>{{ form.skill }}</span>
            مهارت داشته و علاقمند اشتغال به کار در این زمینه می‌باشد. خواهشمند
            است دستورات لازم را مبذول بفرمایید.
          </p>
          <h5>با تشکر، مدیر مددکاری موسسه خیریه روزبه</h5>
        </div>
        <div class="thanks">
          <h5>با تشکر</h5>
          <h5>مدیر مددکاری موسسه خیریه روزبه</h5>
        </div>
        <div class="section">
          <button class="thebtn" @click="submitForm">ذخیره</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-02-00",
  data: () => {
    return {
      formcode: "FQ12-02-00",
      nationalno: "",
      form: {
        docdate: "",
        deporgname: "",
        calleefullname: "",
        cfname: "",
        clname: "",
        servicetitle: "",
        skill: "",
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

.input-field {
  width: 300px;
}

.section {
  padding: 30px;
  margin: 30px auto;
}

span {
  font-weight: bold;
}

.thanks {
  text-align: center;
  font-weight: bolder;
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

<template>
  <div>
    <div class="paper-border">
      <div class="header">
        <h3>معرفی به سازمان های حمایتی یا واحد اشتغال و کاریابی</h3>
      </div>
      <div class="form-content">
        <section>
          <label for="date">تاریخ</label>
          <input
            class="input-field"
            type="date"
            name="Date"
            id="date"
            v-model="form.docdate"
          />
        </section>
        <hr />
        <section>
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
            type="text"
            name="nationalno"
            id="nationalno"
            placeholder="شماره ملی"
            v-model="form.nationalno"
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
        </section>
        <hr />
        <section id="matn">
          <h5>مدیر محترم سازمان / واحد محترم کاریابی {{ form.deporgname }}</h5>
          <h6>آقای / خانم {{ form.calleefullname }}</h6>
          <p>
            با سلام، بدین وسیله سرکار خانم
            {{ form.cfname }} {{ form.clname }}
            به شماره ملی
            {{ nationalno }}
            برای استفاده از خدمات حمایتی / خدمات اشتغال و کاریابی
            {{ form.servicetitle }}
            به حضور جنابعالی معرفی می‌گردد. لازم به ذکر است نامبرده در زمینه
            {{ form.skill }}
            مهارت داشته و علاقمند اشتغال به کار در این زمینه می‌باشد. خواهشمند
            است دستورات لازم را مبذول بفرمایید.
          </p>
          <h5>با تشکر، مدیر مددکاری موسسه خیریه روزبه</h5>
        </section>
        <hr />
        <section>
          <button @click="submitForm">ذخیره</button>
        </section>
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
.paper-border {
  direction: rtl;
  border: 2px solid #0b9fc2;
  border-radius: 15px;
  margin: 20px;
  text-align: start;
}

.header {
  width: 96%;
  margin: 3%;
  text-align: center;
}

.form-content {
  padding: 5%;
}

#matn {
  padding: 3%;
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
</style>

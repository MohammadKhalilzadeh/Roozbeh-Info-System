<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>معرفی به واحد بهداشت و درمان</h4>
      </section>
      <section class="sections">
        <div class="date-slop">
          <label class="date-label" for="adddate">تاریخ:</label>
          <date-picker class="date-picker" v-model="form.thedate" />
        </div>
      </section>
      <section class="sections">
        <div class="sections">
          <input
            class="input-field"
            type="text"
            name="skill"
            placeholder="نام مسئول واحد بهداشت و درمان"
            v-model="form.healthunitmngr"
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
          <input
            class="input-field"
            type="number"
            name="nationalid"
            placeholder="شماره ملی"
            v-model="nationalno"
          />
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
  name: "FQ12-23-00",
  data: () => {
    return {
      formcode: "FQ12-23-00",
      nationalno: "",
      form: {
        thedate: "",
        healthunitmngr: "",
        cfname: "",
        clname: "",
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

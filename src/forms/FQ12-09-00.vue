<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>معرفی به واحد بهداشت و درمان</h4>
      </div>
      <div class="form fields">
        <section class="sections">
          <div class="date-slop">
            <label class="date-label" for="introdate">تاریخ معرفی:</label>
            <date-picker class="date-picker" v-model="form.referdate" />
          </div>
        </section>
        <section class="sections">
          <input
            class="input-field"
            type="text"
            name="fname"
            id="fname"
            placeholder="نام"
            v-model="form.cfname"
          />
          <input
            class="input-field"
            type="text"
            name="lname"
            id="lname"
            placeholder="نام خانوادگی"
            v-model="form.clname"
          />
          <input
            class="input-field"
            type="number"
            placeholder="کد ملی"
            v-model="nationalno"
          />
          <input
            class="input-field"
            type="text"
            name="father"
            id="father"
            placeholder="نام پدر"
            v-model="form.father"
          />
          <input
            class="input-field"
            type="number"
            name="birthyear"
            id="birthyear"
            placeholder="سال تولد"
            v-model="form.birthyear"
          />
          <input
            class="input-field"
            type="text"
            name="education"
            id="education"
            placeholder="میزان تحصیلات"
            v-model="form.educationlvl"
          />
        </section>
        <hr />
        <section class="sections">
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت تاهل</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="مجرد"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="huey">مجرد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="متاهل"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="dewey">متاهل</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="مطلقه"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="louie">مطلقه</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="فوت همسر"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="louie">فوت همسر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="همسر مفقودالاثر"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="louie">همسر مفقودالاثر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="ترک منزل همسر"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="louie">ترک منزل همسر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="همسر زندانی"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="louie">همسر زندانی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="در حال طلاق"
                  v-model="form.maritalstatus"
                />
                <label class="radio-txt" for="louie">در حال طلاق</label>
              </div>
            </fieldset>
          </div>
        </section>
        <hr />
        <section class="sections">
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.illness"
              name="Textarea"
              id="textarea"
              rows="3"
              placeholder="بیماری فعلی"
            >
            </textarea>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.previllness"
              name="Textarea"
              id="textarea"
              rows="3"
              placeholder="سابقه بیماری قبلی"
            >
            </textarea>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.previllness"
              name="Textarea"
              id="textarea"
              rows="3"
              placeholder="سابقه مصرف دارو خاص"
            >
            </textarea>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.specialdrug"
              name="Textarea"
              id="textarea"
              rows="3"
              placeholder="سابقه عادت خاص"
            >
            </textarea>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.specialhabit"
              name="Textarea"
              id="textarea"
              rows="3"
              placeholder="وضعیت بیماری روحی"
            >
            </textarea>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.hygience"
              name="Textarea"
              id="textarea"
              rows="3"
              placeholder="وضعیت بهداشت فردی"
            >
            </textarea>
          </div>
        </section>
        <hr />
        <!-- <section class="sections">
          <div class="textarea-input">
            <table>
              <tr>
                <th>تاریخ معرفی به پزشک</th>
                <th>نام پزشک</th>
                <th>نوع تخصص</th>
                <th>مشخصات اولیه بیماری</th>
                <th>گزارش بیماری</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </section> -->
        <section class="sections">
          <div class="textarea-holder">
            <textarea
              placeholder="توضیح درصورت بروز موارد خاص  "
              class="textarea-input"
              id="textarea"
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-09-00",
  data: () => {
    return {
      formcode: "FQ12-09-00",
      nationalno: "",
      form: {
        referdate: "",
        cfname: "",
        clname: "",
        father: "",
        birthyear: "",
        educationlvl: "",
        maritalstatus: "",
        illness: "",
        previllness: "",
        specialdrug: "",
        specialhabit: "",
        mentalillness: "",
        hygience: "",
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

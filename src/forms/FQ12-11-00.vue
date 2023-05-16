<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>معرفی به واحد فرهنگی موسسه خیریه روزبه</h4>
      </section>
      <section class="sections">
        <input
          class="input-field"
          type="number"
          name="phone"
          id="phone"
          placeholder="کد ملی"
          v-model="nationalno"
        />
      </section>
      <section class="sections">
        <h4>مشخصات مددجو</h4>
        <div class="sections">
          <div class="date-slop">
            <label class="date-label">تاریخ شروع دوره:</label>
            <date-picker class="date-picker" v-model="form.begindate" />
          </div>
          <div class="date-slop">
            <label class="date-label">تاریخ اتمام دوره:</label>
            <date-picker class="date-picker" v-model="form.finishdate" />
          </div>
        </div>
      </section>
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
              <label class="radio-txt">مجرد</label>
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
              <label class="radio-txt">متاهل</label>
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
              <label class="radio-txt">مطلقه</label>
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
              <label class="radio-txt">فوت همسر</label>
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
              <label class="radio-txt">همسر مفقودالاثر</label>
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
              <label class="radio-txt">ترک منزل همسر</label>
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
              <label class="radio-txt">همسر زندانی</label>
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
              <label class="radio-txt">در حال طلاق</label>
            </div>
          </fieldset>
        </div>
      </section>
      <section class="sections">
        <div>
          <h4>مشخصات همسر</h4>
        </div>
        <div class="sections">
          <input
            class="input-field"
            type="text"
            name="spousefname"
            id="spousefname"
            placeholder="نام همسر"
            v-model="form.spfname"
          />
          <input
            class="input-field"
            type="text"
            name="spouselname"
            id="spouselname"
            placeholder="نام خانوادگی همسر"
            v-model="form.splname"
          />
          <input
            class="input-field"
            type="text"
            name="spouseage"
            id="spouseage"
            placeholder="سن همسر"
            v-model="form.spage"
          />
          <input
            class="input-field"
            type="text"
            name="spousejob"
            id="spousejob"
            placeholder="شغل همسر"
            v-model="form.spjob"
          />
          <input
            class="input-field"
            type="text"
            name="spouseedu"
            id="spouseedu"
            placeholder="تحصیلات همسر"
            v-model="form.spedu"
          />
          <input
            class="input-field"
            type="text"
            name="spousephealth"
            id="spousephealth"
            placeholder="وضعیت سلامت جسمانی"
            v-model="form.spphysicalhealth"
          />
          <input
            class="input-field"
            type="text"
            name="spousemhealth"
            id="spousemhealth"
            placeholder="وضعیت سلامت روانی"
            v-model="form.spmentalhealth"
          />
          <input
            class="input-field"
            type="text"
            name="kids"
            id="kids"
            placeholder="تعداد فرزندان جهت استفاده از حمایت ها"
            v-model="form.kidsforsupport"
          />
        </div>
      </section>
      <hr />
      <!-- <section class="sections">
        <h4>مشخصات فرزندان مددجو (حمایت شونده)</h4>
        <div class="sections">
          <div class="textarea-input">
            <table>
              <tr>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>کد ملی</th>
                <th>تاریخ تولد</th>
                <th>شماره تماس</th>
                <th>میزان تحصیلات</th>
                <th>شماره تماس و آدرس محل تحصیل</th>
                <th>وضعیت اشتغال</th>
                <th>شماره تماس و آدرس محل کار</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </section> -->
      <section class="sections">
        <div class="sections-2">
          <input
            class="input-field"
            type="tel"
            name="phone"
            id="phone"
            placeholder="شماره تماس ثابت"
            v-model="form.permanent"
          />
          <input
            class="input-field"
            type="tel"
            name="familyphone"
            id="familyphone"
            placeholder="شماره تلفن همراه مادر یا پدر"
            v-model="form.parentsphone"
          />
        </div>
        <div class="sections-2">
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.resadrs"
              rows="3"
              placeholder="آدرس محل سکونت"
            >
            </textarea>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.kidsmentalstate"
              rows="3"
              placeholder="وضعیت سلامت جسمانی و روانی هر یک از فرزندان"
            >
            </textarea>
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
  name: "FQ12-11-00",
  data: () => {
    return {
      formcode: "FQ12-11-00",
      nationalno: "",
      form: {
        begindate: "",
        finishdate: "",
        maritalstatus: "",
        spfname: "",
        splname: "",
        spage: "",
        spjob: "",
        spedu: "",
        spphysicalhealth: "",
        spmentalhealth: "",
        kidsforsupport: "",
        permanent: "",
        parentsphone: "",
        resadrs: "",
        kidsmentalstate: "",
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

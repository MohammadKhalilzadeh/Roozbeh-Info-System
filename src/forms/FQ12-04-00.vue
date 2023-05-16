<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>معرفی به واحد مشــاوره</h4>
      </div>
      <hr />
      <section class="sections">
        <input
          class="input-field"
          type="text"
          name="clientfname"
          placeholder="نام کامل متقاضی"
          v-model="form.cfullname"
        />
        <div class="sections">
          <h5>
            بدینوسیله خانم
            {{ form.cfullname }}
          </h5>
          <br />
          <p>
            جهت مشــاوره اولیه معرفی می‌شوند، پرونده مددجو نامبرده به پیوست
            می‌باشد.
          </p>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="sfullname"
            id="sfullname"
            placeholder="نام و نام خانوادگی و امضا مسئول مددکاری به عنوان امضاء"
            v-model="form.signature"
          />
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="header">
          <h5>مشخصات متقاضی:</h5>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="cfname"
            id="cfname"
            placeholder="نام متقاضی"
            v-model="form.cfname"
          />
          <input
            class="input-field"
            type="text"
            name="cfname"
            id="cfname"
            placeholder="نام خانوادگی متقاضی"
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
            type="text"
            name="edu"
            id="edu"
            placeholder="تحصیلات"
            v-model="form.education"
          />
          <div class="form-fields">
            <div class="date-slop">
              <label class="date-label">تاریخ تولد</label>
              <date-picker
                class="date-picker"
                name="Date"
                v-model="form.birthdate"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>وضعیت تاهل؟</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="مجرد"
              />
              <label class="radio-txt" for="huey">مجرد</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="متاهل"
              />
              <label class="radio-txt" for="dewey">متاهل</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="مطلقه"
              />
              <label class="radio-txt" for="dewey">مطلقه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="فوت همسر"
              />
              <label class="radio-txt" for="dewey">فوت همسر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="همسر مفقود الاثر"
              />
              <label class="radio-txt" for="dewey">همسر مفقود الاثر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="ترک منزل همسر"
              />
              <label class="radio-txt" for="dewey">ترک منزل همسر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="زندانی همسر"
              />
              <label class="radio-txt" for="dewey">زندانی همسر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.maritalstate"
                type="radio"
                name="maritalstate"
                value="در حال طلاق"
              />
              <label class="radio-txt" for="dewey">در حال طلاق</label>
            </div>
          </fieldset>
        </div>

        <div class="textarea-holder">
          <textarea
            placeholder="سابقه بیماری جسمی و روحی و روانی:"
            class="textarea-input"
            v-model="form.healthissueerc"
            rows="3"
          >
          </textarea>
        </div>

        <div class="textarea-holder">
          <textarea
            placeholder="سابقه سو مصرف مواد مخدر:"
            class="textarea-input"
            v-model="form.dodrugrec"
            rows="3"
          >
          </textarea>
        </div>

        <div class="textarea-holder">
          <textarea
            placeholder="سابقه مصرف دارو:"
            class="textarea-input"
            v-model="form.anydrugs"
            rows="3"
          >
          </textarea>
        </div>

        <div class="textarea-holder">
          <textarea
            placeholder="سابقه روابط فردی:"
            class="textarea-input"
            v-model="form.relrec"
            rows="3"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>دارای بیمه خدمات درمانی:</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.insurance"
                type="radio"
                name="insurance"
                value="کمیته امداد"
              />
              <label class="radio-txt" for="huey">کمیته امداد</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.insurance"
                type="radio"
                name="insurance"
                value="روستایی"
              />
              <label class="radio-txt" for="dewey">روستایی</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.insurance"
                type="radio"
                name="insurance"
                value="تامین اجتماعی"
              />
              <label class="radio-txt" for="dewey">تامین اجتماعی</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.insurance"
                type="radio"
                name="insurance"
                value="سلامت"
              />
              <label class="radio-txt" for="dewey">سلامت</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.insurance"
                type="radio"
                name="insurance"
                value="نیروهای مسلح"
              />
              <label class="radio-txt" for="dewey">نیروهای مسلح</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.insurance"
                type="radio"
                name="insurance"
                value="سایر ارگانها"
              />
              <label class="radio-txt" for="dewey">سایر ارگانها</label>
            </div>
          </fieldset>
        </div>
        <br />
        <div>
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
        </div>
        <br />

        <div class="radio-box">
          <fieldset>
            <legend>وضعیت سلامت همسر:</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.sphealth"
                type="radio"
                name="sphealth"
                value="سابقه بیماری"
              />
              <label class="radio-txt" for="huey">سابقه بیماری</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.sphealth"
                type="radio"
                name="sphealth"
                value="سابقه اعتیاد"
              />
              <label class="radio-txt" for="dewey">سابقه اعتیاد</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.sphealth"
                type="radio"
                name="sphealth"
                value="از کار افتاده"
              />
              <label class="radio-txt" for="dewey">از کار افتاده</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.sphealth"
                type="radio"
                name="sphealth"
                value="سالم"
              />
              <label class="radio-txt" for="dewey">سالم</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.sphealth"
                type="radio"
                name="sphealth"
                value="بدهکار"
              />
              <label class="radio-txt" for="dewey">بدهکار</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.sphealth"
                type="radio"
                name="sphealth"
                value="سابقه خودکشی"
              />
              <label class="radio-txt" for="dewey">سابقه خودکشی</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>وضعیت مسکن:</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="accommodation"
                value="اجاره‌ای"
              />
              <label class="radio-txt" for="huey">اجاره‌ای</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="accommodation"
                value="رهنی"
              />
              <label class="radio-txt" for="huey">رهنی</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="accommodation"
                value="شخصی"
              />
              <label class="radio-txt" for="huey">شخصی</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="accommodation"
                value="ساکن منزل پدر شوهر"
              />
              <label class="radio-txt" for="huey">ساکن منزل پدر شوهر</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="accommodation"
                value="ساکن منزل پدری"
              />
              <label class="radio-txt" for="huey">ساکن منزل پدری</label>
            </div>
          </fieldset>
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            placeholder="میزان اجاره بها"
            v-model="form.rent"
          />
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            placeholder="میزان رهن"
            v-model="form.rahn"
          />
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            placeholder="شغل پدر"
            v-model="form.fatherjob"
          />
        </div>

        <div class="textarea-holder">
          <textarea
            placeholder="آدرس و شماره تلفن"
            class="textarea-input"
            v-model="form.adrsphone"
            name="Textarea"
            rows="3"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div>
          <div class="textarea-holder">
            <textarea
              placeholder="نظر مشــاوره در مورد شرایط متقاضی:"
              class="textarea-input"
              v-model="form.counsoleropinion"
              name="Textarea"
              rows="3"
            >
            </textarea>
          </div>

          <div class="textarea-holder">
            <textarea
              placeholder="نظریه مدیر مددکاری:"
              class="textarea-input"
              v-model="form.manageropinion"
              name="Textarea"
              rows="3"
            >
            </textarea>
          </div>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>با توجه به توضیحات ذکر شده نتیجه زیر حاصل شد:</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.results"
                type="radio"
                name="results"
                value="متقاضی شرایط پذیرش در موسسه را ندارد"
              />
              <label class="radio-txt" for="huey"
                >متقاضی شرایط پذیرش در موسسه را ندارد</label
              >
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.results"
                type="radio"
                name="results"
                value="متقاضی شرایط پذیرش در موسسه را دارد و به واحد مشاوره معرفی میگردد"
              />
              <label class="radio-txt" for="dewey">
                متقاضی شرایط پذیرش در موسسه را دارد و به واحد مشاوره معرفی
                میگردد
              </label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <button class="thebtn" @click="submitForm">ذخیره</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-04-00",
  data: () => {
    return {
      formcode: "FQ12-04-00",
      nationalno: "",
      form: {
        cfullname: "",
        signature: "",
        cfname: "",
        clname: "",
        father: "",
        education: "",
        birthdate: "",
        maritalstate: "",
        healthissueerc: "",
        dodrugrec: "",
        anydrugs: "",
        relrec: "",
        insurance: "",
        spfname: "",
        splname: "",
        spage: "",
        spjob: "",
        sphealth: "",
        accommodation: "",
        rent: "",
        rahn: "",
        fatherjob: "",
        adrsphone: "",
        counsoleropinion: "",
        manageropinion: "",
        results: "",
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
  padding: 20px;
  margin: 30px;
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

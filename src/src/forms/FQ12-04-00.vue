<template>
  <div>
    <div class="paper-templ">
      <div class="header">
        <h3>معرفی به واحد مشــاوره</h3>
      </div>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="clientfname"
          id="clientfname"
          placeholder="نام کامل متقاضی"
          v-model="form.cfullname"
        />
        <div>
          <h5>
            بدینوسیله خانم
            {{ cfullname }}
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
      <section>
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
          <div>
            <label for="birthdate">تاریخ تولد</label>
            <input
              v-model="form.birthdate"
              class="input-field"
              type="date"
              name="Date"
              id="date"
            />
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>وضعیت تاهل؟</legend>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">مجرد</label>
            </div>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">متاهل</label>
            </div>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">مطلقه</label>
            </div>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">فوت همسر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">همسر مفقود الاثر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">ترک منزل همسر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">زندانی همسر</label>
            </div>

            <div>
              <input
                v-model="form.maritalstate"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">در حال طلاق</label>
            </div>
          </fieldset>
        </div>

        <div class="input-field">
          <textarea
            v-model="form.healthissueerc"
            name="Textarea"
            id="textarea"
            rows="3"
          >
            سابقه بیماری جسمی و روحی و روانی:
          </textarea>
        </div>

        <div class="input-field">
          <textarea
            v-model="form.dodrugrec"
            name="Textarea"
            id="textarea"
            rows="3"
          >
            سابقه سو مصرف مواد مخدر:
          </textarea>
        </div>

        <div class="input-field">
          <textarea
            v-model="form.anydrugs"
            name="Textarea"
            id="textarea"
            rows="3"
          >
            سابقه مصرف دارو:
          </textarea>
        </div>

        <div class="input-field">
          <textarea
            v-model="form.relrec"
            name="Textarea"
            id="textarea"
            rows="3"
          >
            سابقه روابط فردی:
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>دارای بیمه خدمات درمانی:</legend>

            <div class="radio-opt">
              <input
                v-model="form.insurance"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">کمیته امداد</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.insurance"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">روستایی</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.insurance"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">تامین اجتماعی</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.insurance"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">سلامت</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.insurance"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">نیروهای مسلح</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.insurance"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">سایر ارگانها</label>
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

        <div id="radio-box">
          <fieldset>
            <legend>وضعیت سلامت همسر:</legend>

            <div class="radio-opt">
              <input
                v-model="form.sphealth"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">سابقه بیماری</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.sphealth"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">سابقه اعتیاد</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.sphealth"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">از کار افتاده</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.sphealth"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">سالم</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.sphealth"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">بدهکار</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.sphealth"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">سابقه خودکشی</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>وضعیت مسکن:</legend>

            <div class="radio-opt">
              <input
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">اجاره‌ای</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">رهنی</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">شخصی</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">ساکن منزل پدر شوهر</label>
            </div>

            <div class="radio-opt">
              <input
                v-model="form.accommodation"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">ساکن منزل پدری</label>
            </div>
          </fieldset>
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="میزان اجاره بها"
            v-model="form.rent"
          />
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="میزان رهن"
            v-model="form.rahn"
          />
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="شغل پدر"
            v-model="form.fatherjob"
          />
        </div>

        <div class="input-field">
          <textarea
            v-model="form.adrsphone"
            name="Textarea"
            id="textarea"
            rows="3"
          >
            آدرس و شماره تلفن
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div>
          <div class="input-field">
            <textarea
              v-model="form.counsoleropinion"
              name="Textarea"
              id="textarea"
              rows="3"
            >
              نظر مشــاوره در مورد شرایط متقاضی:
            </textarea>
          </div>

          <div class="input-field">
            <textarea
              v-model="form.manageropinion"
              name="Textarea"
              id="textarea"
              rows="3"
            >
              نظریه مدیر مددکاری:
            </textarea>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>با توجه به توضیحات ذکر شده نتیجه زیر حاصل شد:</legend>

            <div>
              <input
                v-model="form.results"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">متقاضی شرایط پذیرش در موسسه را ندارد</label>
            </div>

            <div>
              <input
                v-model="form.results"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey"
                >متقاضی شرایط پذیرش در موسسه را دارد و به واحد مشاوره معرفی
                میگردد</label
              >
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <button @click="submitForm">ذخیره</button>
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
.paper-templ {
  direction: rtl;
  margin: 20px;
  padding: 3%;
  border: #0b9fc2 2px solid;
  border-radius: 15px;
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

<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>بازدید از منزل</h4>
      </div>
      <div class="form-fields">
        <div class="date-slop">
          <label class="date-label">تاریخ تشکیل پرونده</label>
          <date-picker class="date-picker" v-model="form.docdate" />
        </div>
        <div class="date-slop">
          <label class="date-label">تاریخ بازدید</label>
          <date-picker
            class="date-picker"
            type="date"
            v-model="form.visitdate"
          />
        </div>
      </div>
      <section class="sections">
        <div class="sections">
          <input
            class="input-field"
            type="text"
            placeholder="نام متقاضی"
            v-model="form.cfname"
          />
          <input
            class="input-field"
            type="text"
            placeholder="نام خانوادگی متقاضی"
            v-model="form.clname"
          />
          <input
            class="input-field"
            type="number"
            placeholder="کد متقاضی"
            v-model="form.clientcode"
          />
          <input
            class="input-field"
            type="number"
            placeholder="کد ملی"
            v-model="nationalno"
          />
          <input
            class="input-field"
            type="tel"
            placeholder="تلفن ثابت"
            v-model="form.cpermphone"
          />
          <input
            class="input-field"
            type="tel"
            placeholder="تلفن"
            v-model="form.ccellphone"
          />
          <input
            class="input-field"
            type="text"
            placeholder="آدرس"
            v-model="form.caddress"
          />
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>نوع مسکن متقاضی چیست؟</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="accommodation"
                value="خانه ویلایی"
                v-model="form.accommodation"
              />
              <label class="radio-txt">خانه ویلایی</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="accommodation"
                value="آپارتمان"
                v-model="form.accommodation"
              />
              <label class="radio-txt">آپارتمان</label>
            </div>
          </fieldset>
        </div>
        <div>
          <input
            class="input-field"
            type="number"
            name="Area"
            id="area"
            placeholder="متراژ"
            v-model="form.area"
          />
        </div>
        <div id="radio-box">
          <fieldset>
            <legend>تعداد اتاق و فضای لازم برای اعضای خانواده:</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.properspace"
                type="radio"
                name="properspace"
                value="مناسب است"
              />
              <label class="radio-txt">مناسب است</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.properspace"
                type="radio"
                name="properspace"
                value="نامناسب است"
              />
              <label class="radio-txt">نامناسب است</label>
            </div>
          </fieldset>
        </div>
        <div>
          <input
            class="input-field"
            type="number"
            placeholder="تعداد اتاق"
            v-model="form.rooms"
          />
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>نوع سکونت متقاضی چیست؟</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accomtype"
                type="radio"
                name="accomtype"
                value="ملکی"
              />
              <label class="radio-txt">ملکی</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accomtype"
                type="radio"
                name="accomtype"
                value="رهنی و اجاره‌ای"
              />
              <label class="radio-txt">رهنی و اجاره‌ای</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.accomtype"
                type="radio"
                name="accomtype"
                value="سازمانی"
              />
              <label class="radio-txt">سازمانی</label>
            </div>
          </fieldset>
        </div>

        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            rows="8"
            v-model="form.accomtypedesc"
            placeholder="توضیحات: مبلغ اجاره و رهن..."
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.buildingstatus"
            name="Textarea"
            rows="8"
            placeholder="وضعیت معماری ساختمان، رطوبت دیواره‌ها و سقف چگونه است؟"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.rightcombo"
            name="Textarea"
            rows="8"
            placeholder="تعداد اتاق‌ها جوابگوی ترکیب سنی و جنسی خانواده است؟"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>آیا محل سکونت از امکانات اولیه برخوردار است؟</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.basicfacilities"
                type="checkbox"
                id="huey"
                value="آب"
              />
              <label class="radio-txt">آب</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                value="برق"
              />
              <label class="radio-txt">برق</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                value="گاز"
              />
              <label class="radio-txt">گاز</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                value="تلفن"
              />
              <label class="radio-txt">تلفن</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                value="کولر"
              />
              <label class="radio-txt">کولر</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>
              آیا تسهیلات فرهنگی اجتماعی لازم در دسترس خانواده است؟
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.socialaids"
                type="checkbox"
                id="huey"
                value="مدرسه"
              />
              <label class="radio-txt">مدرسه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.socialaids"
                type="checkbox"
                id="dewey"
                value="مسجد"
              />
              <label class="radio-txt">مسجد</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.socialaids"
                type="checkbox"
                id="dewey"
                value="کتابخانه"
              />
              <label class="radio-txt">کتابخانه</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.socialaids"
                type="checkbox"
                id="dewey"
                value="فرهنگسرا"
              />
              <label class="radio-txt">فرهنگسرا</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.socialaids"
                type="checkbox"
                id="dewey"
                value="پارک"
              />
              <label class="radio-txt">پارک</label>
            </div>
          </fieldset>
        </div>
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.isnative"
            name="Textarea"
            id="textarea"
            rows="8"
            placeholder="خانواده متقاضی در این محل بومی هستند یا مهاجر؟"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>
              آیا محل سکونت متقاضی از نور آفتاب کافی و هوای سالم برخوردار است؟
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.healthenv"
                type="radio"
                id="huey"
                name="healthenv"
                value="بله"
              />
              <label class="radio-txt">بله</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.healthenv"
                type="radio"
                id="dewey"
                name="healthenv"
                value="خیر"
              />
              <label class="radio-txt">خیر</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>آیا حداقل وسایل زندگی فراهم است؟</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.minequips"
                type="checkbox"
                value="یخچال"
              />
              <label class="radio-txt" for="huey">یخچال</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.minequips"
                type="checkbox"
                value="اجاق گاز"
              />
              <label class="radio-txt" for="dewey">اجاق گاز</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.minequips"
                type="checkbox"
                value="فرش"
              />
              <label class="radio-txt" for="dewey">فرش</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.minequips"
                type="checkbox"
                value="تلویزیون"
              />
              <label class="radio-txt" for="dewey">تلویزیون</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.minequips"
                type="checkbox"
                value="بخاری"
              />
              <label class="radio-txt" for="dewey">بخاری</label>
            </div>
          </fieldset>
        </div>
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.otherminequips"
            rows="8"
            placeholder="سایر: ......"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>
              آیا محیط خانه از نظافت لازم در حد متعارف برخوردار است؟
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.cleanhouseenv"
                type="radio"
                name="cleanhouseenv"
                value="ضعیف"
              />
              <label class="radio-txt">ضعیف</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.cleanhouseenv"
                type="radio"
                name="cleanhouseenv"
                value="متوسط"
              />
              <label class="radio-txt">متوسط</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.cleanhouseenv"
                type="radio"
                name="cleanhouseenv"
                value="عالی"
              />
              <label class="radio-txt">عالی</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>
              آیا امکان دسترسی به مراکز بهداشتی درمانی به راحتی وجود دارد؟
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.healthcareaccess"
                type="radio"
                name="healthcareaccess"
                value="بله"
              />
              <label class="radio-txt">بله</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.healthcareaccess"
                type="radio"
                name="healthcareaccess"
                value="خیر"
              />
              <label class="radio-txt">خیر</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.familytime"
            rows="8"
            placeholder="میزان حضور والدین در محل سکونت و در کنار فرزندان در شبانه روز تا چه حدی است؟"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="textarea-holder">
          <textarea
            placeholder="آیا در بین اعضای خانواده متقاضی، فرد معتاد یا دارای سابقه خلافکاری اخلاقی یا بیماری روانی وجود دارد؟"
            class="textarea-input"
            v-model="form.familycrimehistory"
            rows="8"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="آیا عضوی از خانواده متقاضی، دارای سابقه زندانی یا کانون اصلاح و تربیت است؟"
            class="textarea-input"
            v-model="form.jailforclient"
            rows="8"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="آیا در بین اعضای خانواده متقاضی بیماری صعب العلاج یا معلول یا سالمند معلول وجود دارد؟"
            class="textarea-input"
            v-model="form.disability"
            rows="8"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="آیا در بین اعضای خانواده متقاضی دانش آموز و دانشجو وجود دارد؟ چند نفر؟"
            class="textarea-input"
            v-model="form.stdinfamily"
            rows="8"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="وضعیت اشتغال و سربازی اعضای خانواده چگونه است؟ آیا فرد بیکاری وجود دارد؟"
            class="textarea-input"
            v-model="form.familyempstate"
            rows="8"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="وضعیت ازدواج مراجع و خانواده او اعم از خواهران و برادران چگونه است؟"
            class="textarea-input"
            v-model="form.clientandfamilymarriage"
            rows="8"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="میزان بدهی خانواده یا اقساط ماهیانه چگونه است؟"
            class="textarea-input"
            v-model="form.familyloans"
            rows="8"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="textarea-holder">
          <textarea
            class="textarea-input"
            v-model="form.evaluationresults"
            rows="8"
            placeholder="ارزیابی مددکار بازدیدکننده از جو حاکم بر خانواده و شرایط مراجعه کننده:"
          >
          </textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="نظر مدیر مددکاری"
            class="textarea-input"
            v-model="form.opinion"
            rows="8"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>با توجه به توضیحات ذکر شده نتیجه زیر حاصل شد:</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.totalresults"
                type="radio"
                name="totalresults"
                value="متقاضی شرایط پذیرش در موسسه را ندارد"
              />
              <label class="radio-txt"
                >متقاضی شرایط پذیرش در موسسه را ندارد</label
              >
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                v-model="form.totalresults"
                type="radio"
                name="totalresults"
                value="متقاضی شرایط پذیرش در موسسه را دارد و به واحد مشاوره معرفی میگردد"
              />
              <label class="radio-txt">
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
  name: "FQ12-03-00",
  data: () => {
    return {
      formcode: "FQ12-03-00",
      nationalno: "",
      form: {
        docdate: "",
        visitdate: "",
        // Client
        cfname: "",
        clname: "",
        clientcode: "",
        cpermphone: "",
        ccellphone: "",
        caddress: "",
        // Accomadation
        accommodation: "",
        area: "",
        properspace: "",
        rooms: "",
        accomtype: "",
        accomtypedesc: "",
        buildingstatus: "",
        rightcombo: "",
        basicfacilities: [],
        socialaids: [],
        isnative: "",
        healthenv: "",
        minequips: [],
        otherminequips: "",
        cleanhouseenv: "",
        healthcareaccess: "",
        familytime: "",
        familycrimehistory: "",
        jailforclient: "",
        disability: "",
        stdinfamily: "",
        familyempstate: "",
        clientandfamilymarriage: "",
        familyloans: "",
        evaluationresults: "",
        opinion: "",
        totalresults: "",
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

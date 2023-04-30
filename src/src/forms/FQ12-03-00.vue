<template>
  <div>
    <div class="paper-templ">
      <div class="header">
        <h3>بازدید از منزل</h3>
      </div>
      <div class="paper-dates">
        <label for="filedate">تاریخ تشکیل پرونده</label>
        <input
          class="input-field"
          type="date"
          name="Date"
          id="date"
          v-model="form.docdate"
        />
        <label for="filedate">تاریخ بازدید</label>
        <input
          class="input-field"
          type="date"
          name="Date"
          id="date"
          v-model="form.visitdate"
        />
      </div>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="Clientfname"
          id="clientfname"
          placeholder="نام متقاضی"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          name="Clientlname"
          id="clientlname"
          placeholder="نام خانوادگی متقاضی"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="text"
          name="Clientcode"
          id="clientcode"
          placeholder="کد متقاضی"
          v-model="form.clientcode"
        />
        <input
          class="input-field"
          type="text"
          name="Staticphone"
          id="staticphone"
          placeholder="تلفن ثابت"
          v-model="form.cpermphone"
        />
        <input
          class="input-field"
          type="text"
          name="phone"
          id="phone"
          placeholder="تلفن"
          v-model="form.ccellphone"
        />
        <input
          class="input-field"
          type="text"
          name="address"
          id="address"
          placeholder="آدرس"
          v-model="form.caddress"
        />
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>نوع مسکن متقاضی چیست؟</legend>

            <div>
              <input
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                v-model="form.accommodation"
              />
              <label for="huey">خانه ویلایی</label>
            </div>

            <div>
              <input
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
                v-model="form.accommodation"
              />
              <label for="dewey">آپارتمان</label>
            </div>
          </fieldset>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="Area"
            id="area"
            placeholder="متراژ"
            v-model="form.area"
          />
        </div>
        <div id="radio-box">
          <fieldset>
            <legend>تعداد اتاق و فضای لازم برای اعضای خانواده:</legend>

            <div>
              <input
                v-model="form.properspace"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">مناسب است</label>
            </div>

            <div>
              <input
                v-model="form.properspace"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">نامناسب است</label>
            </div>
          </fieldset>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="numofroom"
            id="numofroom"
            placeholder="تعداد اتاق"
            v-model="form.rooms"
          />
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>نوع سکونت متقاضی چیست؟</legend>

            <div>
              <input
                v-model="form.accomtype"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">ملکی</label>
            </div>

            <div>
              <input
                v-model="form.accomtype"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">رهنی و اجاره‌ای</label>
            </div>

            <div>
              <input
                v-model="form.accomtype"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">سازمانی</label>
            </div>
          </fieldset>
        </div>

        <div class="input-field">
          <textarea
            name="Textarea"
            id="textarea"
            rows="8"
            v-model="form.accomtypedesc"
          >
توضیحات: مبلغ اجاره و رهن...</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea
            v-model="form.buildingstatus"
            name="Textarea"
            id="textarea"
            rows="8"
          >
وضعیت معماری ساختمان، رطوبت دیواره‌ها و سقف چگونه است؟</textarea
          >
        </div>
        <div class="input-field">
          <textarea
            v-model="form.rightcombo"
            name="Textarea"
            id="textarea"
            rows="8"
          >
تعداد اتاق‌ها جوابگوی ترکیب سنی و جنسی خانواده است؟</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>آیا محل سکونت از امکانات اولیه برخوردار است؟</legend>

            <div>
              <input
                v-model="form.basicfacilities"
                type="checkbox"
                id="huey"
                name="drone"
                value="huey"
              />
              <label for="huey">آب</label>
            </div>

            <div>
              <input
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">برق</label>
            </div>

            <div>
              <input
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">گاز</label>
            </div>

            <div>
              <input
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">تلفن</label>
            </div>

            <div>
              <input
                v-model="form.basicfacilities"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">کولر</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>
              آیا تسهیلات فرهنگی اجتماعی لازم در دسترس خانواده است؟
            </legend>

            <div>
              <input
                v-model="form.socialaids"
                type="checkbox"
                id="huey"
                name="drone"
                value="huey"
              />
              <label for="huey">مدرسه</label>
            </div>

            <div>
              <input
                v-model="form.socialaids"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">مسجد</label>
            </div>

            <div>
              <input
                v-model="form.socialaids"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">کتابخانه</label>
            </div>

            <div>
              <input
                v-model="form.socialaids"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">فرهنگسرا</label>
            </div>

            <div>
              <input type="checkbox" id="dewey" name="drone" value="dewey" />
              <label for="dewey">پارک</label>
            </div>
          </fieldset>
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="8">
خانواده متقاضی در این محل بومی هستند یا مهاجر؟</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>
              آیا محل سکونت متقاضی از نور آفتاب کافی و هوای سالم برخوردار است؟
            </legend>

            <div>
              <input
                v-model="form.healthenv"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              />
              <label for="huey">بله</label>
            </div>

            <div>
              <input
                v-model="form.healthenv"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">خیر</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>آیا حداقل وسایل زندگی فراهم است؟</legend>

            <div>
              <input
                v-model="form.minequips"
                type="checkbox"
                id="huey"
                name="drone"
                value="huey"
              />
              <label for="huey">یخچال</label>
            </div>

            <div>
              <input
                v-model="form.minequips"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">اجاق گاز</label>
            </div>

            <div>
              <input
                v-model="form.minequips"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">فرش</label>
            </div>

            <div>
              <input
                v-model="form.minequips"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">تلویزیون</label>
            </div>

            <div>
              <input
                v-model="form.minequips"
                type="checkbox"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">بخاری</label>
            </div>
          </fieldset>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.otherminequips"
            name="Textarea"
            id="textarea"
            rows="8"
          >
سایر: ......</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>
              آیا محیط خانه از نظافت لازم در حد متعارف برخوردار است؟
            </legend>

            <div>
              <input
                v-model="form.cleanhouseenv"
                type="radio"
                id="huey"
                name="drone"
                value="huey"
              />
              <label for="huey">ضعیف</label>
            </div>

            <div>
              <input
                v-model="form.cleanhouseenv"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">متوسط</label>
            </div>

            <div>
              <input
                v-model="form.cleanhouseenv"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">عالی</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>
              آیا امکان دسترسی به مراکز بهداشتی درمانی به راحتی وجود دارد؟
            </legend>

            <div>
              <input
                v-model="form.healthcareaccess"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">بله</label>
            </div>

            <div>
              <input
                v-model="form.healthcareaccess"
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
              />
              <label for="dewey">خیر</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea
            v-model="form.familytime"
            name="Textarea"
            id="textarea"
            rows="8"
          >
            میزان حضور والدین در محل سکونت و در کنار فرزندان در شبانه روز تا چه حدی است؟
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea
            v-model="form.familycrimehistory"
            name="Textarea"
            id="textarea"
            rows="8"
          >
             آیا در بین اعضای خانواده متقاضی، فرد معتاد یا دارای سابقه خلافکاری اخلاقی یا بیماری روانی وجود دارد؟
          </textarea>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.jailforclient"
            name="Textarea"
            id="textarea"
            rows="8"
          >
             آیا عضوی از خانواده متقاضی، دارای سابقه زندانی یا کانون اصلاح و تربیت است؟
          </textarea>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.disability"
            name="Textarea"
            id="textarea"
            rows="8"
          >
             آیا در بین اعضای خانواده متقاضی بیماری صعب العلاج یا معلول یا سالمند معلول وجود دارد؟
          </textarea>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.stdinfamily"
            name="Textarea"
            id="textarea"
            rows="8"
          >
             آیا در بین اعضای خانواده متقاضی دانش آموز و دانشجو وجود دارد؟ چند نفر؟
          </textarea>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.familyempstate"
            name="Textarea"
            id="textarea"
            rows="8"
          >
             وضعیت اشتغال و سربازی اعضای خانواده چگونه است؟ آیا فرد بیکاری وجود دارد؟
          </textarea>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.clientandfamilymarriage"
            name="Textarea"
            id="textarea"
            rows="8"
          >
             وضعیت ازدواج مراجع و خانواده او اعم از خواهران و برادران چگونه است؟
          </textarea>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.familyloans"
            name="Textarea"
            id="textarea"
            rows="8"
          >
            میزان بدهی خانواده یا اقساط ماهیانه چگونه است؟
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea
            v-model="form.evaluationresults"
            name="Textarea"
            id="textarea"
            rows="8"
          >
            ارزیابی مددکار بازدیدکننده از جو حاکم بر خانواده و شرایط مراجعه کننده:
          </textarea>
        </div>
        <div class="input-field">
          <textarea
            v-model="form.opinion"
            name="Textarea"
            id="textarea"
            rows="8"
          >
            نظر مدیر مددکاری
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>با توجه به توضیحات ذکر شده نتیجه زیر حاصل شد:</legend>

            <div>
              <input
                v-model="form.totalresults"
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
                v-model="form.totalresults"
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
        basicfacilities: "",
        socialaids: "",
        healthenv: "",
        minequips: "",
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

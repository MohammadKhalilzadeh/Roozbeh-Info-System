<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>معرفی به واحد فرهنگی موسسه خیریه روزبه</h3>
      </section>
      <section>
        <h4>مشخصات مددجو</h4>
        <div>
          <label for="adddate">تاریخ شروع دوره:</label>
          <input
            v-model="form.begindate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
          <label for="adddate">تاریخ اتمام دوره:</label>
          <input
            v-model="form.finishdate"
            class="input-field"
            type="date"
            name="Date"
            id="date"
          />
        </div>
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>وضعیت تاهل</legend>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="huey"
                name="drone"
                value="مجرد"
                v-model="form.maritalstatus"
              />
              <label for="huey">مجرد</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="dewey"
                name="drone"
                value="متاهل"
                v-model="form.maritalstatus"
              />
              <label for="dewey">متاهل</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="مطلقه"
                v-model="form.maritalstatus"
              />
              <label for="louie">مطلقه</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="فوت همسر"
                v-model="form.maritalstatus"
              />
              <label for="louie">فوت همسر</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="همسر مفقودالاثر"
                v-model="form.maritalstatus"
              />
              <label for="louie">همسر مفقودالاثر</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="ترک منزل همسر"
                v-model="form.maritalstatus"
              />
              <label for="louie">ترک منزل همسر</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="همسر زندانی"
                v-model="form.maritalstatus"
              />
              <label for="louie">همسر زندانی</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="در حال طلاق"
                v-model="form.maritalstatus"
              />
              <label for="louie">در حال طلاق</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <h4>مشخصات همسر</h4>
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
      <section>
        <h4>مشخصات فرزندان مددجو (حمایت شونده)</h4>
        <div class="input-field">
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
      </section>
      <hr />
      <section>
        <div>
          <input
            class="input-field"
            type="text"
            name="phone"
            id="phone"
            placeholder="شماره تماس ثابت"
            v-model="form.permanent"
          />
          <input
            class="input-field"
            type="text"
            name="familyphone"
            id="familyphone"
            placeholder="شماره تلفن همراه مادر یا پدر"
            v-model="form.parentsphone"
          />
        </div>
        <div>
          <div class="input-field">
            <textarea
              v-model="form.resadrs"
              name="Textarea"
              id="textarea"
              rows="3"
            >
                آدرس محل سکونت
              </textarea
            >
          </div>
          <div class="input-field">
            <textarea
              v-model="form.kidsmentalstate"
              name="Textarea"
              id="textarea"
              rows="3"
            >
                وضعیت سلامت جسمانی و روانی هر یک از فرزندان
              </textarea
            >
          </div>
        </div>
      </section>
      <hr />
      <section>
        <button @click="submitForm">Submit</button>
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
</style>

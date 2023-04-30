<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>خدمات حمایتی مؤسسه در زمان آموزش مددجو</h3>
      </section>
      <section>
        <input
          class="input-field"
          type="text"
          name="fname"
          id="fname"
          placeholder="نام مددجو"
        />
        <input
          class="input-field"
          type="text"
          name="lname"
          id="lname"
          placeholder="نام خانوادگی مددجو"
        />
        <input
          class="input-field"
          type="text"
          name="father"
          id="father"
          placeholder="مدت زمان آموزش"
        />
      </section>
      <section>
        <div class="input-field">
          <table>
            <tr>
              <th>ردیف</th>
              <th>عنوان</th>
              <th>تعداد مورد</th>
              <th>مبلغ به ريال</th>
            </tr>
            <tr>
              <td>1</td>
              <td>مشاوره</td>
              <td>
                <input
                  v-model="form.counsultants"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.counsultantsp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>وام ضروری</td>
              <td>
                <input
                  v-model="form.loans"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.loansp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>خدمات پزشکی و درمانی</td>
              <td>
                <input
                  v-model="form.healthservices"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.healthservicesp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>هزینه تحصیل فرزندان</td>
              <td>
                <input
                  v-model="form.kidsedusprt"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.kidsedusprtp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>کلاسهای جبرانی و کنکوری فرزندان</td>
              <td>
                <input
                  v-model="form.kidstutors"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.kidstutorsp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>وام مسکن</td>
              <td>
                <input
                  v-model="form.accommloans"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.accommloansp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>هزینه مسکن بلاعوض</td>
              <td>
                <input
                  v-model="form.accommsprts"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.accommsprtsp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>کمک موردی بلاعوض</td>
              <td>
                <input
                  v-model="form.specialhelps"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.specialhelpsp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>پیگیری های حین آموزش</td>
              <td>
                <input
                  v-model="form.edutracks"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.edutracksp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>اردو</td>
              <td>
                <input
                  v-model="form.trips"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.tripsp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>

            <tr>
              <td>11</td>
              <td>هزینه مهدکودک بلاعوض</td>
              <td>
                <input
                  v-model="form.kindergardensprt"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.kindergardensprtp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>عیدی نقدی پاداش</td>
              <td>
                <input
                  v-model="form.bonus"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.bonusp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>مواد غذایی خام</td>
              <td>
                <input
                  v-model="form.rawfood"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.rawfoodp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>مواد غذایی پخته</td>
              <td>
                <input
                  v-model="form.preparedfood"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.preparedfoodp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>پوشاک عید</td>
              <td>
                <input
                  v-model="form.newyearclothing"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.newyearclothingp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>جهیزیه</td>
              <td>
                <input
                  v-model="form.jahaz"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.jahazp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>سیسمونی</td>
              <td>
                <input
                  v-model="form.sismuni"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.sismunip"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>لوازم منزل</td>
              <td>
                <input
                  v-model="form.housefurni"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.housefurnip"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>سایر مواد (لباس پرسنلی)</td>
              <td>
                <input
                  v-model="form.workcloth"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.workclothp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>کمک هزینه آموزش</td>
              <td>
                <input
                  v-model="form.edusprt"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
              <td>
                <input
                  v-model="form.edusprtp"
                  class="input-field"
                  type="text"
                  placeholder="مقدار"
                />
              </td>
            </tr>
          </table>
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
  name: "FQ12-12-00",
  data: () => {
    return {
      formcode: "FQ12-12-00",
      nationalno: "",
      form: {
        counsultants: "",
        counsultantsp: "",
        loans: "",
        loansp: "",
        healthservices: "",
        healthservicesp: "",
        kidsedusprt: "",
        kidsedusprtp: "",
        kidstutors: "",
        kidstutorsp: "",
        accommloans: "",
        accommloansp: "",
        accommsprts: "",
        accommsprtsp: "",
        specialhelps: "",
        specialhelpsp: "",
        edutracks: "",
        edutracksp: "",
        trips: "",
        tripsp: "",
        kindergardensprt: "",
        kindergardensprtp: "",
        bonus: "",
        bonusp: "",
        rawfood: "",
        rawfoodp: "",
        preparedfood: "",
        preparedfoodp: "",
        newyearclothing: "",
        newyearclothingp: "",
        jahaz: "",
        jahazp: "",
        sismuni: "",
        sismunip: "",
        housefurni: "",
        housefurnip: "",
        workcloth: "",
        workclothp: "",
        edusprt: "",
        edusprtp: "",
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

table {
  width: 100%;
}
</style>

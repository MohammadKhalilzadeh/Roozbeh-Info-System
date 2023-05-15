<template>
  <div class="form-root">
    <div class="paper-templ">
      <div class="paper-title">
        <h4>معرفی به واحد بهداشت و درمان</h4>
      </div>
      <section>
        <label class="labels"
          ><span>تاریخ معرفی:</span> {{ form.content.referdate }}</label
        >
        <label class="labels"
          ><span>نام:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام خانوادگی:</span> {{ form.content.clname }}</label
        >
        <label class="labels"><span>کد ملی:</span> {{ form.nationalno }}</label>
        <label class="labels"
          ><span>نام پدر:</span> {{ form.content.father }}</label
        >
        <label class="labels"
          ><span>سال تولد:</span> {{ form.content.birthyear }}</label
        >
        <label class="labels"
          ><span>میزان تحصیلات:</span> {{ form.content.educationlvl }}</label
        >
        <label class="labels"
          ><span>وضعیت تاهل:</span> {{ form.content.maritalstatus }}</label
        >
      </section>
      <hr />
      <section>
        <p class="paragraph">
          <span>بیماری فعلی:</span> {{ form.content.illness }}
        </p>
        <p class="paragraph">
          <span>سابقه بیماری قبلی:</span> {{ form.content.previllness }}
        </p>
        <p class="paragraph">
          <span>سابقه مصرف دارو خاص:</span> {{ form.content.specialdrug }}
        </p>
        <p class="paragraph">
          <span>سابقه عادت خاص:</span> {{ form.content.specialhabit }}
        </p>
        <p class="paragraph">
          <span>وضعیت بیماری روحی:</span> {{ form.content.mentalillness }}
        </p>
        <p class="paragraph">
          <span>وضعیت بهداشت فردی:</span> {{ form.content.hygience }}
        </p>
      </section>
      <hr />
      <section>
        <div class="input-field">
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
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
          توضیح درصورت بروز موارد خاص  
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <button class="close" @click="deleteit(form._id)">حذف</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-09-00",
  data: () => {
    return {
      form: {},
    };
  },
  methods: {
    async deleteit(id) {
      await axios
        .delete("http://localhost:3000/forms/" + id)
        .then((res) => {
          if (res.status == 200) {
            alert("فرم حذف شد");
          } else {
            alert("خطا در پردازش");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async created() {
    await axios
      .get("http://localhost:3000/forms/single/" + this.$route.params.id)
      .then((res) => {
        if (res.status == 200) {
          this.form = res.data;
        } else {
          alert("خطا در پردازش درخواست");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

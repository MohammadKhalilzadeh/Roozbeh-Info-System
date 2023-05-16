<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>پیگیری وضعیت مددجو در حین آموزش</h3>
      </section>
      <section>
        <label for="adddate">تاریخ جذب:</label>
        <input
          v-model="form.admissiondate"
          class="input-field"
          type="date"
          name="Date"
          id="date"
        />
        <label for="adddate">تاریخ اتمام دوره آموزشی:</label>
        <input
          v-model="form.courseenddate"
          class="input-field"
          type="date"
          name="Date"
          id="date"
        />
      </section>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="cfname"
          id="cfname"
          placeholder="نام مددجو"
          v-model="form.cfname"
        />
        <input
          class="input-field"
          type="text"
          name="clname"
          id="clname"
          placeholder="نام خانواده مددجو"
          v-model="form.clname"
        />
        <input
          class="input-field"
          type="text"
          name="clname"
          id="clname"
          placeholder="کد ملی مددجو"
          v-model="nationalno"
        />
        <input
          class="input-field"
          type="text"
          name="edudep"
          id="edudep"
          placeholder="واحد آموزشی"
          v-model="form.edudep"
        />
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ نوبت اول مشاوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نتیجه مشاوره</textarea
          >
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نظریه مدیر مددکاری</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ نوبت دوم مشاوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نتیجه مشاوره</textarea
          >
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نظریه مدیر مددکاری</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <h4>مشاوره های تخصصی انجام شده:</h4>
        <section>
          <div>
            <label for="adddate">تاریخ:</label>
            <input class="input-field" type="date" name="Date" id="date" />
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="counsultant"
              id="counsultant"
              placeholder="نام مشاور"
            />
            <div class="input-field">
              <textarea name="Textarea" id="textarea" rows="3">
                نتیجه مشاور
              </textarea>
            </div>
            <div class="input-field">
              <textarea name="Textarea" id="textarea" rows="3">
                نتیجه مددکاری
              </textarea>
            </div>
          </div>
        </section>
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
  name: "FQ12-10-00",
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
            window.location.reload();
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

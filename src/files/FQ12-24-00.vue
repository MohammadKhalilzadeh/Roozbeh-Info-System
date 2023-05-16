<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>حضور و غیاب مددجو در واحد آموزش</h4>
      </section>
      <section class="sections">
        <label class="labels"
          ><span>تاریخ شروع دوره:</span> {{ form.content.startdate }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels"
          ><span>نام مددجو:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام خانوادگی مددجو:</span> {{ form.content.clname }}</label
        >
        <label class="labels"
          ><span>نام واحد آموزشی:</span> {{ form.content.eduunit }}</label
        >
        <label class="labels"><span>کد ملی:</span> {{ form.nationalno }}</label>
      </section>
      <!-- <hr />
      <section class="sections">
        <div>
          <table>
            <tr>
              <th>ردیف</th>
              <th>تاریخ</th>
              <th>ساعت ورود</th>
              <th>ساعت خروج</th>
              <th>امضا و اثر انپشت مددجو</th>
              <th>توضیحات</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </section> -->
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
  name: "FQ12-24-00",
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
  text-align: justify;
}

.paper-title {
  text-align: center;
  padding: 40px;
}

.form-fields {
  width: 100%;
  padding: 20px;
}

.labels {
  width: 50%;
}

span {
  font-weight: 600;
}
</style>

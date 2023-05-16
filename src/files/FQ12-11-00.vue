<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>معرفی به واحد فرهنگی موسسه خیریه روزبه</h4>
      </section>
      <section class="sections">
        <h5>مشخصات مددجو</h5>
        <div class="sections">
          <label class="labels"
            ><span>تاریخ شروع دوره:</span> {{ form.content.begindate }}</label
          >
          <label class="labels"
            ><span>تاریخ اتمام دوره:</span> {{ form.content.finishdate }}</label
          >
          <label class="labels"
            ><span>تاریخ شروع دوره:</span>
            {{ form.content.maritalstatus }}</label
          >
        </div>
      </section>
      <section class="sections">
        <h4>مشخصات همسر</h4>
        <div class="sections">
          <label class="labels"
            ><span>نام همسر:</span> {{ form.content.spfname }}</label
          >
          <label class="labels"
            ><span>نام خانوادگی همسر:</span> {{ form.content.splname }}</label
          >
          <label class="labels"
            ><span>سن همسر:</span> {{ form.content.spage }}</label
          >
          <label class="labels"
            ><span>شغل همسر:</span> {{ form.content.spjob }}</label
          >
          <label class="labels"
            ><span>تحصیلات همسر:</span> {{ form.content.spfname }}</label
          >
          <label class="labels"
            ><span>وضعیت سلامت جسمانی:</span>
            {{ form.content.spphysicalhealth }}</label
          >
          <label class="labels"
            ><span>وضعیت سلامت روانی:</span>
            {{ form.content.spmentalhealth }}</label
          >
          <label class="labels"
            ><span>تعداد فرزندان جهت استفاده از حمایت ها:</span>
            {{ form.content.kidsforsupport }}</label
          >
        </div>
      </section>
      <!-- <section class="sections">
        <h5>مشخصات فرزندان مددجو (حمایت شونده)</h5>
        <div class="sections">
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
      </section> -->
      <section class="sections">
        <div>
          <label class="labels"
            ><span>شماره تماس ثابت:</span> {{ form.content.permanent }}</label
          >
          <label class="labels"
            ><span>شماره تلفن همراه مادر یا پدر:</span>
            {{ form.content.parentsphone }}</label
          >
        </div>
        <div class="sections">
          <p class="paragraph">
            <span>آدرس محل سکونت:</span> {{ form.content.resadrs }}
          </p>
          <p class="paragraph">
            <span>وضعیت سلامت جسمانی و روانی هر یک از فرزندان:</span>
            {{ form.content.kidsmentalstate }}
          </p>
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
  name: "FQ12-11-00",
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

.paragraph {
  font-family: "Vazir";
}
</style>

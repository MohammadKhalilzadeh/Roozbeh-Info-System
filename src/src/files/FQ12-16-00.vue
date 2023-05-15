<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h3>پیگیری وضعیت مددجو پس از خروج از مؤسسه</h3>
      </section>
      <section class="sections">
        <label class="labels"
          ><span>تاریخ ورود:</span> {{ form.content.entrydate }}</label
        >
        <label class="labels"
          ><span>تاریخ خروج:</span> {{ form.content.exitdate }}</label
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
        <label class="labels"><span>کد ملی:</span> {{ form.nationalno }}</label>
        <label class="labels"
          ><span>امتیاز کل:</span> {{ form.content.totalscore }}</label
        >
        <label class="labels"
          ><span>کد مددجو:</span> {{ form.content.clientcode }}</label
        >
        <label class="labels"
          ><span>دوره آموزشی گذارنده شده:</span>
          {{ form.content.registereds }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels"
          ><span>وضعیت اشتغال:</span> {{ form.content.employment }}</label
        >
        <label class="labels"
          ><span>ساعت کاری:</span> {{ form.content.workhours }}</label
        >
        <label class="labels"
          ><span>وضعیت استخدام:</span> {{ form.content.hired }}</label
        >
        <label class="labels"
          ><span>حقوق ماهیانه / دستمزدی:</span> {{ form.content.salary }}</label
        >
        <label class="labels"
          ><span>بیمه:</span> {{ form.content.insurance }}</label
        >
        <hr />
        <p class="paragraph">
          <span>آدرس محل کار:</span> {{ form.content.jobadrs }}
        </p>
        <p class="paragraph">
          <span>شرایط خانوادگی:</span> {{ form.content.familystatus }}
        </p>
        <hr />
        <label class="labels"
          ><span>تاریخ پیگیری:</span> {{ form.content.trackdate }}</label
        >
        <hr />
        <label class="labels"
          ><span>وضعیت شخصی مددجو:</span>
          {{ form.content.clientpersonals }}</label
        >
        <hr />
        <p class="paragraph"><span>همسر:</span> {{ form.content.spouse }}</p>
        <p class="paragraph">
          <span>وضعیت فرزندان و شرایط تحصیلی:</span>
          {{ form.content.kidsandedu }}
        </p>
        <p class="paragraph">
          <span>نتیجه بازدید:</span> {{ form.content.visitresult }}
        </p>
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
  name: "FQ12-16-00",
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

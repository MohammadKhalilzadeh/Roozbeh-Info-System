<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>معرفی مددجو به واحد آموزشی</h4>
      </div>
      <section>
        <label class="labels"
          ><span>نام متقاضی:</span> {{ form.content.cfname }}</label
        >
        <label
          ><span>نام خانوادگی متقاضی:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام دوره آموزشی:</span> {{ form.content.course }}</label
        >
        <label class="labels"
          ><span>مدت:</span> {{ form.content.duration }}</label
        >
        <label class="labels"><span>کد ملی:</span> {{ form.nationalno }}</label>
        <label class="labels"
          ><span>تاریخ شروع:</span> {{ form.content.startdate }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <h5>مشخصات مددجو</h5>
        <div>
          <label class="labels"
            ><span>نام متقاضی:</span> {{ form.content.cfname }}</label
          >
          <label class="labels"
            ><span>نام خانوادگی متقاضی:</span> {{ form.content.cfname }}</label
          >
          <label class="labels"
            ><span>نام پدر:</span> {{ form.content.father }}</label
          >
          <label class="labels"
            ><span>تحصیلات:</span> {{ form.content.education }}</label
          >
          <label class="labels"
            ><span>وضعیت تاهل:</span> {{ form.content.thestatus }}</label
          >
          <label class="labels"
            ><span>تاریخ تولد:</span> {{ form.content.birthdate }}</label
          >
        </div>
      </section>
      <hr />
      <section>
        <div>
          <label class="labels"
            ><span>سابقه بیماری:</span> {{ form.content.illnesshist }}</label
          >
          <label class="labels"
            ><span>سابقه ناتوانی:</span>
            {{ form.content.disabilityhist }}</label
          >
          <label class="labels"
            ><span>شماره تلفن همراه:</span> {{ form.content.pphone }}</label
          >
          <label class="labels"
            ><span>شماره تلفن ثابت:</span> {{ form.content.cphone }}</label
          >
        </div>
      </section>
      <div class="sections">
        <p class="paragraph">
          نظریه مشاور/مددکار در خصوص شرایط متقاضی جهت ورود به کارگاه های آموزشی:
          {{ form.content.conditions }}
        </p>
      </div>
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
  name: "FQ12-08-00",
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

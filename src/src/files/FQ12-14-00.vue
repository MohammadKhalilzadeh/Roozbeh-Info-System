<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h3>رضایت سنجی دوره های آموزشی وخدمات حمایتی</h3>
      </div>
      <section class="sections">
        <div>
          <label class="labels"
            ><span>تاریخ تنظیم:</span> {{ form.content.setdate }}</label
          >
        </div>
        <div>
          <label class="labels"
            ><span>نام مددجو:</span> {{ form.content.cfname }}</label
          >
          <label class="labels"
            ><span>نام خانوادگی مددجو:</span> {{ form.content.clname }}</label
          >
          <label class="labels"
            ><span>کد ملی:</span> {{ form.nationalno }}</label
          >
          <label class="labels"
            ><span>نام دوره آموزشی:</span> {{ form.content.course }}</label
          >
        </div>
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>رفتار مدیر آموزش با مددجو:</span>
          {{ form.content.relwithmngr }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>یرگزاری دوره ها مطابق با سر فصل های آموزشی تعریف شده:</span>
          {{ form.content.acrdingunits }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان علمی و کاربردی بودن دوره های برگزار شده:</span>
          {{ form.content.usefulcourses }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          >توانایی مربی در انتقال اطلاعات و توضیحات:
          {{ form.content.tutorquality }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>گشاده رویی مربیان و احترام بین همکاران و تکریم مددجو:</span>
          {{ form.content.respectfullness }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>مناسب بودن میزان زمان تعریف شده برای دوره های آموزشی:</span>
          {{ form.content.properduration }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>مناسب بودن زیرساخت های آموزشی:</span>
          {{ form.content.rightfrustructures }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان دسترسی به مدیران و مسئولان موسسه:</span>
          {{ form.content.accesstobosses }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span
            >تشویق و حمایت های معنوی در جمع، لوح تقدیر، جوایز نقدی و غیر
            نقدی:</span
          >
          {{ form.content.bonuses }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان حمایت های پزشکی ارائه شده از مددجو:</span>
          {{ form.content.medicalsupports }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان بهبود حاصل شده از حمایت های پزشکی:</span>
          {{ form.content.resultquality }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان حمایت های پزشکی از خانواده مددجو:</span>
          {{ form.content.medicalsupportcosts }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان حمایت های جانبی:</span>
          {{ form.content.sidesupports }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان حمایت های مالی و کمک هزینه تحصیلی:</span>
          {{ form.content.edusupports }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان پیشرفیت تحصیلی فرزندان مددجویان:</span>
          {{ form.content.eduprogress }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان حضور در اردوها و بازدیدها:</span>
          {{ form.content.presentintrips }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان حمایت های مشاوره‌ای و تاثیر آن بر زندگی شخصی:</span>
          {{ form.content.consultanteffect }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان ارائه آموزش های مهارت های زندگی:</span>
          {{ form.content.lifelessons }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان حمایت های معیشتی:</span>
          {{ form.content.financialaid }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>میزان خدمات رفاهی:</span> {{ form.content.refahservs }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels" for="setdate"
          ><span>درصد رضایت مددجو:</span> {{ form.content.satisfaction }}</label
        >
        <p class="paragraph"><span>توضیحات:</span> {{ form.content.desc }}</p>
        <p class="paragraph">
          <span>تحلیل نتیجه بدست آمده:</span> {{ form.content.result }}
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
  name: "FQ12-14-00",
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

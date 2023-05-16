<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>قرارداد آموزشی</h4>
      </div>
      <section>
        به استناد مصوبه مورخ 1396/11/5 شورای عالی اشتغال بر اساس دستورالعمل
        اجرایی طرح مهارت آموزی در محیط کار واقعی این قرارداد در استان
        <span>{{ form.content.province }}</span>
        شهرستان <span>{{ form.content.city }}</span> بخش
        <span>{{ form.content.part }}</span> فی مابین خانم / آقای
        <span>{{ form.content.cfname }} {{ form.content.clname }}</span> فرزند
        <span>{{ form.content.father }}</span> شماره شناسنامه
        <span>{{ form.content.idnumber }}</span> کد ملی
        <span>{{ form.nationalno }}</span> صادره از
        <span>{{ form.content.confirmedfrom }}</span> متولد
        <span>{{ form.content.birthplace }}</span> به نشانی
        <span>{{ form.content.address }}</span> شماره تلفن
        <span>{{ form.content.phone }}</span>
        به عنوان طرف اول این قرارداد مهارت آموز اطلاق می گردد و مرکز یادگیری تحت
        عنوان
        <span>{{ form.content.thedate }}</span>
        با مدیریت خانم/آقای
        <span
          >{{ form.content.managerfname }} {{ form.content.managerlname }}</span
        >
        فرزند <span>{{ form.content.managerfather }}</span> شماره شناسنامه
        <span>{{ form.content.manageridnum }}</span> کد ملی
        <span>{{ form.content.managernationalno }}</span> صادره از
        <span>{{ form.content.managerconfirmedfrom }}</span> متولد
        <span>{{ form.content.permitnum }}</span> و به شماره مجوز
        <span>{{ form.content.permitnum }}</span> مورخ
        <span>{{ form.content.thedate }}</span> اداره کل آموزش فنی و حرفه ای
        استان <span>{{ form.content.managerprovince }}</span> با آدرس
        <span>{{ form.content.managerphone }}</span> شماره تلفن
        <span>{{ form.content.managerphone }}</span>
        به عنوان طرف دوم قرارداد که در این قرارداد به عنوان مجری می باشد، منعقد
        می گردد. همچنین خانم/آقای
        <span>{{ form.content.bossfname }} {{ form.content.bosslname }}</span>
        رئیس مرکز آموزش فنی و حرفه ای شهرستان
        <span>{{ form.content.bosscity }}</span> به نمایندگی از اداره کل آموزش
        فنی و حرفه ای این استان به نشانی
        <span>{{ form.content.bossadres }}</span>
        به عنوان ناظر قرارداد تعیین میگردد.
      </section>
      <hr />
      <section>
        <h5>ماده 1 - موضوع و مدت قرارداد</h5>
        <div>
          آموزش در مرکز یادگیری در قالب طرح آموزش به شیوه مهارت آموزی در محیط
          کار واقعی در حرفه <span>{{ form.content.skill }}</span> با کد
          استاندارد <span>{{ form.content.standardno }}</span> که مدت زمان آموزش
          آن بر اساس بند 3 ماده 5 دستورالعمل آموزش به شیوه مهارت آموزی در محیط
          کار واقعی برابر زمان مندرج در استاندارد آموزشی تا سقف یک سال می باشد.
          از تاریخ <span>{{ form.content.startdate }}</span>
          اجرا خواهد شد.
        </div>
      </section>
      <hr />
      <section>
        <label
          ><span>شیفت برگزاری کلاس ها:</span> {{ form.content.shift }}</label
        >
      </section>
      <hr />
      <section>
        <h5>ماده 2 - محل اجرای قرارداد</h5>
        <div>
          محل اجرای قرارداد کارگاه (مرکز یادگیری)
          <span>{{ form.content.workshop }}</span>
          به نشانی <span>{{ form.content.workshopadrs }}</span>
          می باشد.
        </div>
      </section>
      <hr />
      <section>
        <h5>ماده 3 - تعهدات طرف اول قرارداد (مهارت آموز)</h5>
        <div class="sections">
          <p class="paragraph">رعایت شئونات اخلاقی در محیط آموزش</p>
          <p class="paragraph">
            حضور به موقع و مستمر در کارگاه مطابق برنامه آموزشی (تئوری و عملی) و
            خروج در پایان ساعت مقرر
          </p>
          <p class="paragraph">
            رعایت اصول و موازین بهداشتی و همکاری گروهی با سایر افراد و مسئولین
            در پاکیزه نگهداشتن فضای کارگاه
          </p>
          <p class="paragraph">
            استفاده از لباس، کفش و لوازم ایمنی مناسب در طول دوره و رعایت کامل
            همه مقررات ایمنی
          </p>
          <p class="paragraph">حفظ و نگهداری از وسایل و تجهیزات کارگاه</p>
          <p class="paragraph">پرداخت هزینه های قانونی ثبت نام</p>
        </div>
      </section>
      <hr />
      <section>
        <h5>ماده 4 - تعهدات طرف دوم قرارداد (مرکز یادگیری)</h5>
        <div class="sections">
          <p class="paragraph">رعایت شئونات اخلاقی در محیط آموزش</p>
          <p class="paragraph">
            آموزش مهارت آموزش بر اساس استاندارد و سرفصل های آموززشی فنی و حرفه
            ای کشور
          </p>
          <p class="paragraph">
            همکاری با اداره کل و مرکز آموزش فنی و حرفه ای استان در راستای
            ارزیابی و سنجش مهارت آموختگان در پایان دوره آموزشی
          </p>
          <p class="paragraph">
            تامین وسایل و تجهیزات آموزشی متناسب با استاندارد حرفه و امکانات
            ضروری بهداشتی و ایمنی در جهت حفظ سلامتی و ایمنی مهارت آموز
          </p>
        </div>
      </section>
      <hr />
      <section>
        <h5>ماده 5 - تعهدات مرکز آموزش فنی و حرفه ای شهرستان</h5>
        <div class="sections">
          <p class="paragraph">اجرای آزمون پایان دوره آموزشی</p>
          <p class="paragraph">
            صدور گواهی شرکت در دوره یا گواهینامه مهارت برای مهارت آموز در صورت
            کسب حد نصاب نمره قبولی
          </p>
          <p class="paragraph">نظارت مستمر بر اجرای صحیح مفاد قرارداد</p>
          <p class="paragraph">
            پوشش بیمه مسئولیت مدنی مهارت آموز در طول مدت زمان اجرای آموزش در
            مرکز یادگیری
          </p>
          <p class="paragraph">تامین لباس کار مهارت آموز</p>
        </div>
      </section>
      <hr />
      <section>
        <h5>ماده 6 - سایر موارد</h5>
        <div class="sections">
          <p class="paragraph">
            رسیدگی به اختلاف بین مهارت آموز و استادکار توسط مجتمع امور صنفی
            شهرستان و در صورت عدم رفع مشکل از سوی مرکز آموزش فنی و حرفه ای
            شهرستان صورت می پذیرد
          </p>
          <p class="paragraph">
            این قرارداد یک قرارداد آموزشی است و از شمول قانونی کار و تامین
            اجتماعی خارج می باشد،
          </p>
        </div>
      </section>
      <hr />
      <section>
        <h5>ماده 7 - کلیات</h5>
        <div>
          <p class="paragraph">
            این قرارداد در 7 ماده در تاریخ
            <span>{{ form.content.thedate }}</span>
            و در 3 نسخه تهیه و پس از امضا و مبادله لازم الاجرا می باشد.
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
  name: "FQ12-07-00",
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
  async mounted() {
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

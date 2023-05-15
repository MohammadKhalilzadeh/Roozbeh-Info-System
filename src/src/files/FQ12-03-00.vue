<template>
  <div>
    <div class="paper-templ">
      <div class="paper-title">
        <h3>بازدید از منزل</h3>
      </div>
      <div class="paper-dates">
        <label class="labels"
          ><span>تاریخ تشکیل پرونده:</span> {{ form.content.docdate }}</label
        >
        <label class="labels"
          ><span>تاریخ بازدید:</span> {{ form.content.visitdate }}</label
        >
      </div>
      <hr />
      <section>
        <label class="labels"
          ><span>نام متقاضی:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام خانوادگی متقاضی:</span> {{ form.content.clname }}</label
        >
        <label class="labels"
          ><span>کد متقاضی:</span> {{ form.content.clientcode }}</label
        >
        <label class="labels"><span>کد ملی:</span> {{ form.nationalno }}</label>
        <label class="labels"
          ><span>تلفن ثابت:</span> {{ form.content.cpermphone }}</label
        >
        <label class="labels"
          ><span>تلفن:</span> {{ form.content.ccellphone }}</label
        >
        <label class="labels"
          ><span>آدرس:</span> {{ form.content.caddress }}</label
        >
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>نوع مسکن متقاضی چیست؟</span>
          {{ form.content.accommodation }}</label
        >
        <label class="labels"
          ><span>متراژ:</span> {{ form.content.area }}</label
        >
        <label class="labels"
          ><span>تعداد اتاق و فضای لازم برای اعضای خانواده:</span>
          {{ form.content.properspace }}</label
        >
        <label class="labels"
          ><span>تعداد اتاق:</span> {{ form.content.rooms }}</label
        >
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>نوع سکونت متقاضی چیست؟</span>
          {{ form.content.accomtype }}</label
        >
        <p class="paragraph">
          <span>توضیحات مبلغ اجاره و رهن و ... :</span>
          {{ form.content.accomtypedesc }}
        </p>
      </section>
      <hr />
      <section>
        <p class="paragraph">
          <span>وضعیت معماری ساختمان، رطوبت دیواره‌ها و سقف چگونه است؟</span>
          {{ form.content.buildingstatus }}
        </p>
        <p class="paragraph">
          <span>تعداد اتاق‌ها جوابگوی ترکیب سنی و جنسی خانواده است؟</span>
          {{ form.content.rightcombo }}
        </p>
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>آیا محل سکونت از امکانات اولیه برخوردار است؟</span>
          {{ form.content.basicfacilities }}</label
        >
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>آیا تسهیلات فرهنگی اجتماعی لازم در دسترس خانواده است؟</span>
          {{ form.content.socialaids }}</label
        >
        <p class="paragraph">
          <span>خانواده متقاضی در این محل بومی هستند یا مهاجر؟</span>
          {{ form.content.isnative }}
        </p>
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span
            >آیا محل سکونت متقاضی از نور آفتاب کافی و هوای سالم برخوردار
            است؟</span
          >
          {{ form.content.healthenv }}</label
        >
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>آیا حداقل وسایل زندگی فراهم است؟</span>
          {{ form.content.minequips }}</label
        >
        <p class="paragraph">
          <span>سایر:</span> {{ form.content.otherminequips }}
        </p>
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>آیا محیط خانه از نظافت لازم در حد متعارف برخوردار است؟</span>
          {{ form.content.cleanhouseenv }}</label
        >
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span
            >آیا امکان دسترسی به مراکز بهداشتی درمانی به راحتی وجود دارد؟</span
          >
          {{ form.content.healthcareaccess }}</label
        >
      </section>
      <hr />
      <section>
        <p class="paragraph">
          <span
            >میزان حضور والدین در محل سکونت و در کنار فرزندان در شبانه روز تا چه
            حدی است؟</span
          >
          {{ form.content.familytime }}
        </p>
      </section>
      <hr />
      <section>
        <p class="paragraph">
          <span
            >آیا در بین اعضای خانواده متقاضی، فرد معتاد یا دارای سابقه خلافکاری
            اخلاقی یا بیماری روانی وجود دارد؟</span
          >
          {{ form.content.familycrimehistory }}
        </p>
        <p class="paragraph">
          <span
            >آیا عضوی از خانواده متقاضی، دارای سابقه زندانی یا کانون اصلاح و
            تربیت است؟</span
          >
          {{ form.content.jailforclient }}
        </p>
        <p class="paragraph">
          <span
            >آیا در بین اعضای خانواده متقاضی بیماری صعب العلاج یا معلول یا
            سالمند معلول وجود دارد؟</span
          >
          {{ form.content.disability }}
        </p>
        <p class="paragraph">
          <span
            >آیا در بین اعضای خانواده متقاضی دانش آموز و دانشجو وجود دارد؟ چند
            نفر؟</span
          >
          {{ form.content.stdinfamily }}
        </p>
        <p class="paragraph">
          <span
            >وضعیت اشتغال و سربازی اعضای خانواده چگونه است؟ آیا فرد بیکاری وجود
            دارد؟</span
          >
          {{ form.content.familyempstate }}
        </p>
        <p class="paragraph">
          <span
            >وضعیت ازدواج مراجع و خانواده او اعم از خواهران و برادران چگونه
            است؟</span
          >
          {{ form.content.clientandfamilymarriage }}
        </p>
        <p class="paragraph">
          <span>میزان بدهی خانواده یا اقساط ماهیانه چگونه است؟</span>
          {{ form.content.familyloans }}
        </p>
      </section>
      <hr />
      <section>
        <p class="paragraph">
          <span
            >ارزیابی مددکار بازدیدکننده از جو حاکم بر خانواده و شرایط مراجعه
            کننده:</span
          >
          {{ form.content.evaluationresults }}
        </p>
        <p class="paragraph">
          <span>نظر مدیر مددکاری:</span> {{ form.content.opinion }}
        </p>
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>با توجه به توضیحات ذکر شده نتیجه زیر حاصل شد:</span>
          {{ form.content.totalresults }}</label
        >
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
  name: "FQ12-03-00",
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

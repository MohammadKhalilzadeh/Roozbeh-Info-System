<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>اطلاعات اولیه متقاضیان آموزش در مؤسسه خیریه روزبه</h4>
      </div>
      <div class="form-fields">
        <section>
          <label class="labels">
            <span> تاریخ مراجعه: </span>
            {{ form.content.referdate }}</label
          >
          <label class="labels">
            <span> تاریخ تولد: </span>
            {{ form.content.birthdate }}</label
          >
        </section>
        <hr />
        <section>
          <label class="labels">
            <span> نام متقاضی: </span>
            {{ form.content.cfname }}</label
          >
          <label class="labels"
            ><span>نام خانوادگی متقاضی:</span> {{ form.content.clname }}</label
          >
          <label class="labels"
            ><span>نام پدر:</span> {{ form.content.father }}</label
          >
          <label class="labels"
            ><span>شماره ملی:</span> {{ form.content.nationalno }}</label
          >
          <label class="labels"
            ><span>میزان تحصیلات:</span> {{ form.content.educationlvl }}</label
          >
          <label class="labels"
            ><span>رشته تحصیلی:</span> {{ form.content.major }}</label
          >
          <label class="labels"
            ><span>وضعیت جسمانی:</span> {{ form.content.physicalstatus }}</label
          >
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>وضعیت سلامت روحی و روانی:</span>
            {{ form.content.mentalstatus }}</label
          >
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>وضعیت تاهل:</span> {{ form.content.thestatus }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.thestatus }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>نام معرف:</span> {{ form.content.introfname }}</label
          >
          <label class="labels"
            ><span>نام خانوادگی معرف:</span>
            {{ form.content.introlname }}</label
          >
          <label class="labels"
            ><span>شماره تماس:</span> {{ form.content.introphone }}</label
          >
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>معرفی:</span> {{ form.content.intro }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.introdesc }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>وضعیت بیمه:</span> {{ form.content.insurancestate }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.insurancedesc }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>وضعیت پدر:</span> {{ form.content.fatherstate }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.fatherstatedesc }}
          </p>
          <div class="the-theme">
            <label class="labels"
              ><span>شغل فعلی پدر:</span> {{ form.content.fatherjob }}</label
            >
            <label class="labels"
              ><span>آدرس محل کار فعلی:</span>
              {{ form.content.fatherjobadrs }}</label
            >
          </div>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>وضعیت مادر:</span> {{ form.content.motherstate }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.motherstatedesc }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>وضعیت همسر:</span> {{ form.content.spousestate }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.spousestatedesc }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>نام همسر:</span> {{ form.content.spousestate }}</label
          >
          <label class="labels"
            ><span>نام خانوادگی همسر:</span>
            {{ form.content.spousestate }}</label
          >
          <label class="labels"
            ><span>کد ملی همسر:</span> {{ form.content.spnationalno }}</label
          >
          <label class="labels"
            ><span> میزان سواد همسر: </span>
            {{ form.content.spousestate }}</label
          >
          <label class="labels"
            ><span>شغل قبلی همسر:</span> {{ form.content.splastjob }}</label
          >
          <label class="labels">شغل فعلی همسر: {{ form.content.spjob }}</label>
          <label class="labels"
            ><span>آدرس محل کار فعلی:</span> {{ form.content.spjobadrs }}</label
          >
          <label class="labels"
            ><span>تاریخ تولد:</span> {{ form.content.spbirthdate }}</label
          >
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>آیا همسر سابق زندانی دارد؟</span>
            {{ form.content.jailforsp }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.jailforspdesc }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>آیا اعضا خانواده اعتیاد دارند؟</span>
            {{ form.content.familyaddict }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.familyaddictdesc }}
          </p>
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.addictionprevent }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>آیا اعضا خانواده سابقه زندانی دارند؟</span>
            {{ form.content.jailforfamily }}</label
          >
          <p class="paragraph">
            <span>توضیحات:</span> {{ form.content.jailforfamilydesc }}
          </p>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>تعداد فرزندان تحت تکفل:</span>
            {{ form.content.kidstocare }}</label
          >
          <label class="labels"
            ><span>تعداد اعضای خانواده:</span>
            {{ form.content.familymembers }}</label
          >
          <label class="labels"
            ><span>شماره تلفن ثابت:</span>
            {{ form.content.permenantphone }}</label
          >
          <label class="labels"
            ><span>شماره همراه:</span> {{ form.content.cellphone }}</label
          >
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span>وضعیت مسکن:</span> {{ form.content.accomodation }}</label
          >
          <label class="labels"
            ><span>میزان اجاره بها:</span> {{ form.content.rent }}</label
          >
          <label class="labels"
            ><span>میزان رهن:</span> {{ form.content.rahn }}</label
          >
          <div class="the-theme">
            <p class="paragraph">
              <span>توضیحات:</span> {{ form.content.accomodationdesc }}
            </p>
          </div>
          <div class="the-theme">
            <label class="labels"
              ><span>آدرس منزل:</span> {{ form.content.address }}</label
            >
            <label class="labels"
              ><span>کد پستی:</span> {{ form.content.postalcode }}</label
            >
          </div>
        </section>
        <hr />
        <section>
          <label class="labels"
            ><span
              >چگونگی برخورداری از خدمات سایر ارگان ها و موسسات خیریه:</span
            >
            {{ form.content.otherorgsservs }}</label
          >
          <div class="the-theme">
            <label class="labels"
              ><span>سایر:</span> {{ form.content.otherorgsservs }}</label
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="the-theme">
            <legend>مبلغ میزان درآمد ماهانه تقریبی متقاضی</legend>
            <div class="the-theme">
              <label class="labels"
                ><span>منبع کسب درآمد:</span>
                {{ form.content.incomesrc }}</label
              >
              <label class="labels"
                ><span>میزان درآمد ماهانه به ریال:</span>
                {{ form.content.income }}</label
              >
            </div>
            <div class="the-theme">
              <p class="paragraph">
                <span>توانمندی های شخصی متقاضی و نوع مهارت هایی که دارد:</span>
                {{ form.content.skillsdesc }}
              </p>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <label class="labels">
            <span>متقاضی به کدام یک از مهارت های زیر علاقمند است؟</span>
            {{ form.content.favskill }}</label
          >
          <div class="the-theme">
            <p class="paragraph">
              <span>توضیحات:</span> {{ form.content.favskilldesc }}
            </p>
          </div>
        </section>
        <hr />
        <section>
          <div class="the-theme">
            <label class="labels">
              <span>درخواست متقاضی از موسسه و هدف مراجعه:</span>
              {{ form.content.reqandgoal }}</label
            >
            <label class="labels">
              <span>مدت زمانی که در وضعیت فعلی قرار دارند:</span>
              {{ form.content.stateduration }}</label
            >
            <label class="labels"
              ><span>اصلی ترین مشکلات موجود فعلی:</span>
              {{ form.content.mainissues }}</label
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="the-theme">
            <label class="labels">
              <span>نام و نام خانوادگی متقاضی:</span>
              {{ form.content.clientfullname }}</label
            >
            <label class="labels"
              ><span>نام و نام خانوادگی پرسشگر:</span>
              {{ form.content.interviewer }}</label
            >
          </div>
          <div class="the-theme">
            <label>
              <span>تاریخ دریافت مدرک و تشکیل پرونده:</span>
              {{ form.content.filegatheringdate }}</label
            >
          </div>
        </section>
        <hr />
        <section>
          <label class="labels">
            <span>با توجه به توضیحات داده شده نتایج زیر حاصل شد:</span>
            {{ form.content.results }}</label
          >
          <div class="the-theme">
            <p class="the-theme paragraph">
              <span>اقدامات انجام شده پس از اولین مراجعه:</span>
              {{ form.content.followingsteps }}
            </p>
          </div>
        </section>
        <hr />
        <section>
          <button class="close" @click="deleteit(form._id)">حذف</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-01-00",
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
  font-family: "Vazir";
}

.form-paper {
  width: 100%;
  border: black 1px solid;
  padding: 20px;
  margin: 10px auto;
  text-align: justify;
  font-family: "Vazir";
}

.paper-title {
  text-align: center;
  padding: 40px;
  font-family: "Vazir";
}

.form-fields {
  width: 100%;
  padding: 20px;
  font-family: "Vazir";
}

.labels {
  width: 50%;
  font-family: "Vazir";
}

span {
  font-weight: 600;
  font-family: "Vazir";
}

.paragraph {
  font-family: "Vazir";
}
</style>

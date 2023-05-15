<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h3>معرفی به واحد مشــاوره</h3>
      </div>
      <section class="form-fields">
        <div>
          <h5>
            بدینوسیله خانم
            <span>{{ form.content.cfullname }}</span>
          </h5>
          <br />
          <p class="paragraph">
            جهت مشــاوره اولیه معرفی می‌شوند، پرونده مددجو نامبرده به پیوست
            می‌باشد.
          </p>
        </div>
        <div>
          <label class="labels"
            >نام و نام خانوادگی و امضا مسئول مددکاری به عنوان امضاء:
            <span>{{ form.content.signature }}</span></label
          >
        </div>
      </section>
      <hr />
      <section>
        <div class="header">
          <h5>مشخصات متقاضی:</h5>
        </div>
        <div>
          <label class="labels"
            ><span>نام متقاضی:</span> {{ form.content.cfname }}</label
          >
          <label class="labels"
            ><span>نام خانوادگی متقاضی:</span> {{ form.content.clname }}</label
          >
          <label class="labels"
            ><span>کد ملی:</span> {{ form.nationalno }}</label
          >
          <label class="labels"
            ><span>نام پدر:</span> {{ form.content.father }}</label
          >
          <label class="labels"
            ><span>تحصیلات:</span> {{ form.content.education }}</label
          >
          <label class="labels"
            ><span>تاریخ تولد:</span> {{ form.content.birthdate }}</label
          >
        </div>
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>وضعیت تاهل:</span> {{ form.content.maritalstate }}</label
        >
        <p class="paragraph">
          <span>سابقه بیماری جسمی و روحی و روانی:</span>
          {{ form.content.healthissueerc }}
        </p>
        <p class="paragraph">
          <span>سابقه سو مصرف مواد مخدر:</span> {{ form.content.dodrugrec }}
        </p>
        <p class="paragraph">
          <span>سابقه مصرف دارو:</span> {{ form.content.anydrugs }}
        </p>
        <p class="paragraph">
          <span>سابقه روابط فردی:</span> {{ form.content.relrec }}
        </p>
      </section>
      <hr />
      <section>
        <p class="paragraph">
          <span>دارای بیمه خدمات درمانی:</span> {{ form.content.insurance }}
        </p>
        <hr />
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
          ><span>وضعیت سلامت همسر:</span> {{ form.content.sphealth }}</label
        >
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>وضعیت مسکن:</span> {{ form.content.accommodation }}</label
        >
        <label class="labels"
          ><span>میزان اجاره بها:</span> {{ form.content.rent }}</label
        >
        <label class="labels"
          ><span>میزان رهن:</span> {{ form.content.rahn }}</label
        >
        <label class="labels"
          ><span>شغل پدر:</span> {{ form.content.fatherjob }}</label
        >
        <hr />
        <p class="paragraph">
          <span>آدرس و شماره تلفن:</span> {{ form.content.adrsphone }}
        </p>
      </section>
      <hr />
      <section>
        <div>
          <p class="paragraph">
            <span>نظر مشــاوره در مورد شرایط متقاضی:</span>
            {{ form.content.counsoleropinion }}
          </p>
          <p class="paragraph">
            <span>نظریه مدیر مددکاری:</span> {{ form.content.manageropinion }}
          </p>
        </div>
      </section>
      <hr />
      <section>
        <label class="labels"
          ><span>با توجه به توضیحات ذکر شده نتیجه زیر حاصل شد:</span>
          {{ form.content.results }}</label
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
  name: "FQ12-04-00",
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

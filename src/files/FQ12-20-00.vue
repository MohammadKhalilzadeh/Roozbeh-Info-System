<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>معرفی به اشتغال خانگی</h4>
      </section>
      <section class="sections">
        <label class="labels"
          ><span>تاریخ شروع:</span> {{ form.content.startdate }}</label
        >
        <label class="labels"
          ><span>تاریخ تولد:</span> {{ form.content.enddate }}</label
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
          ><span>نام پدر:</span> {{ form.content.father }}</label
        >
        <label class="labels"
          ><span>تحصیلات:</span> {{ form.content.education }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <label class="labels"
          ><span>وضعیت تاهل:</span> {{ form.content.maritalstatus }}</label
        >
        <div>
          <label class="labels"
            ><span>سابقه بیماری/ناتوانی:</span>
            {{ form.content.anyillness }}</label
          >
          <label class="labels"
            ><span>سابقه ناتوانی:</span> {{ form.content.incapability }}</label
          >
        </div>
        <div>
          <label class="labels"
            ><span>شماره تلفن ثابت:</span> {{ form.content.permanant }}</label
          >
          <label class="labels"
            ><span>شماره تلفن همراه:</span> {{ form.content.cell }}</label
          >
          <label class="labels"
            ><span>مدیر مددکاری:</span> {{ form.content.madadkarimngr }}</label
          >
        </div>
        <div>
          <p class="paragraph">
            <span>نظریه مشاور / مددکار:</span> {{ form.content.theory }}
          </p>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div>
          <label class="labels"
            ><span>واحد محترم:</span> {{ form.content.unit }}</label
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
            ><span>مدیر آموزش:</span> {{ form.content.edumngr }}</label
          >
        </div>
        <div>
          <p class="paragraph">
            <span>مهارتها و توانایی ها:</span> {{ form.content.skills }}
          </p>
        </div>
      </section>
      <hr />
      <section class="sections">
        <p class="paragraph">
          <span>نتیجه نهایی:</span> {{ form.content.finalres }}
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
  name: "FQ12-20-00",
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

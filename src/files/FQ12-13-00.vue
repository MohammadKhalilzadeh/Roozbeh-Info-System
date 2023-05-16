<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h3>ارزیابی و نتایج شرکت در دوره های آموزشی</h3>
      </section>
      <section class="sections">
        <div>
          <label class="labels" for="adddate"
            ><span>تاریخ شروع دوره:</span> {{ form.content.startdate }}</label
          >
          <label class="labels" for="adddate"
            ><span>تاریخ پایان دوره:</span> {{ form.content.enddate }}</label
          >
        </div>
      </section>
      <section class="sections">
        <label class="labels"
          ><span>نام مددجو:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام خانوادگی مددجو:</span> {{ form.content.clname }}</label
        >
        <label class="labels"
          ><span>کد ملی مددجو:</span> {{ form.nationalno }}</label
        >
        <label class="labels"
          ><span>میزان تحصیلات:</span> {{ form.content.cedulvl }}</label
        >
        <label class="labels"
          ><span>نام دوره آموزشی:</span> {{ form.content.coursename }}</label
        >
      </section>
      <section class="sections">
        <p class="paragraph">
          <span>تحلیل و نتیجه دوره برگزار شده:</span>
          {{ form.content.analyzeres }}
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
  name: "FQ12-13-00",
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

<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>کاربرگ تسویه مددجو با مؤسسه خیریه استاد روزبه</h4>
      </section>
      <section class="sections">
        <div>
          <label class="labels"
            ><span>تاریخ ورود:</span> {{ form.content.entrydate }}</label
          >
          <label class="labels"
            ><span>تاریخ خروج:</span> {{ form.content.exitdate }}</label
          >
          <label class="labels"
            ><span>تاریخ تولد:</span> {{ form.content.birthdate }}</label
          >
        </div>
      </section>
      <hr />
      <section class="sections">
        <label class="labels"
          ><span>نام:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام خانوادگی:</span> {{ form.content.clname }}</label
        >
        <label class="labels"
          ><span>مهارت آموز دوره آموزشی:</span>
          {{ form.content.coursename }}</label
        >
        <label class="labels"><span>کد ملی:</span> {{ form.nationalno }}</label>
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
  name: "FQ12-15-00",
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
</style>

<template>
  <div class="form-root">
    <div class="form-paper">
      <section class="paper-title">
        <h4>معرفی به واحدهای حمایتی و خدماتی</h4>
      </section>
      <section class="sections">
        <label class="labels"
          ><span>تاریخ تنظیم درخواست:</span> {{ form.content.reqdate }}</label
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
          ><span>نام مدیر واحد:</span> {{ form.content.unitmanager }}</label
        >
        <label class="labels"
          ><span>نام خدمات:</span> {{ form.content.servicename }}</label
        >
        <label class="labels"
          ><span>نام مدیر مددکاری:</span>
          {{ form.content.madadkarimngr }}</label
        >
      </section>
      <hr />
      <section class="sections">
        <div>
          <label class="labels"
            ><span>تاریخ:</span> {{ form.content.thedate }}</label
          >
          <label class="labels"
            ><span>تاریخ مراجعه:</span> {{ form.content.refdate }}</label
          >
          <label class="labels"
            ><span>نام واحد:</span> {{ form.content.unitname }}</label
          >
        </div>
        <div>
          <p class="paragraph">
            <span>شرح اقدامات:</span> {{ form.content.actionsdesc }}
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
  name: "FQ12-18-00",
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

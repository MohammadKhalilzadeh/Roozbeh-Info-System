<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h3>معرفی به سازمان های حمایتی یا واحد اشتغال و کاریابی</h3>
      </div>
      <div class="form-content">
        <section class="section">
          <label
            >تاریخ: <span>{{ form.content.docdate }}</span></label
          >
        </section>
        <section class="section">
          <h5>
            مدیر محترم سازمان / واحد محترم کاریابی
            <span>{{ form.content.deporgname }}</span>
          </h5>
          <h6>
            آقای / خانم <span>{{ form.content.calleefullname }}</span>
          </h6>
          <p class="paragraph">
            با سلام، بدین وسیله سرکار خانم
            <span>{{ form.content.cfname }} {{ form.content.clname }}</span>
            به شماره ملی
            <span>{{ form.nationalno }}</span>
            برای استفاده از خدمات حمایتی / خدمات اشتغال و کاریابی
            <span>{{ form.content.servicetitle }}</span>
            به حضور جنابعالی معرفی می‌گردد. لازم به ذکر است نامبرده در زمینه
            <span>{{ form.content.skill }}</span>
            مهارت داشته و علاقمند اشتغال به کار در این زمینه می‌باشد. خواهشمند
            است دستورات لازم را مبذول بفرمایید.
          </p>
        </section>
        <section class="section thanks">
          <h5>با تشکر</h5>
          <h5>مدیر مددکاری موسسه خیریه روزبه</h5>
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
  name: "FQ12-02-00",
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

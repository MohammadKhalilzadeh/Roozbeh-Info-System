<template>
  <div class="form-root">
    <div class="paper-form">
      <section class="paper-title">
        <h4>خدمات حمایتی مؤسسه در زمان آموزش مددجو</h4>
      </section>
      <section class="sections">
        <label class="labels"
          ><span>نام مددجو:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام خانوادگی مددجو:</span> {{ form.content.clname }}</label
        >
        <label class="labels"><span>کد ملی:</span> {{ form.nationalno }}</label>
        <label class="labels"
          ><span>مدت زمان آموزش:</span> {{ form.content.duration }}</label
        >
      </section>
      <section class="sections">
        <div class="tb-bg">
          <table>
            <tr>
              <th>ردیف</th>
              <th>عنوان</th>
              <th>تعداد مورد</th>
              <th>مبلغ به ريال</th>
            </tr>
            <tr>
              <td>1</td>
              <td>مشاوره</td>
              <td>
                {{ form.content.counsultants }}
              </td>
              <td>
                {{ form.content.counsultantsp }}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>وام ضروری</td>
              <td>
                {{ form.content.loans }}
              </td>
              <td>
                {{ form.content.loansp }}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>خدمات پزشکی و درمانی</td>
              <td>
                {{ form.content.healthservices }}
              </td>
              <td>
                {{ form.content.healthservicesp }}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>هزینه تحصیل فرزندان</td>
              <td>
                {{ form.content.kidsedusprt }}
              </td>
              <td>
                {{ form.content.kidsedusprtp }}
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>کلاسهای جبرانی و کنکوری فرزندان</td>
              <td>
                {{ form.content.kidstutors }}
              </td>
              <td>
                {{ form.content.kidstutorsp }}
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>وام مسکن</td>
              <td>
                {{ form.content.accommloans }}
              </td>
              <td>
                {{ form.content.accommloansp }}
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>هزینه مسکن بلاعوض</td>
              <td>
                {{ form.content.accommsprts }}
              </td>
              <td>
                {{ form.content.accommsprtsp }}
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>کمک موردی بلاعوض</td>
              <td>
                {{ form.content.specialhelps }}
              </td>
              <td>
                {{ form.content.specialhelpsp }}
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>پیگیری های حین آموزش</td>
              <td>
                {{ form.content.edutracks }}
              </td>
              <td>
                {{ form.content.edutracksp }}
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>اردو</td>
              <td>
                {{ form.content.trips }}
              </td>
              <td>
                {{ form.content.tripsp }}
              </td>
            </tr>

            <tr>
              <td>11</td>
              <td>هزینه مهدکودک بلاعوض</td>
              <td>
                {{ form.content.kindergardensprt }}
              </td>
              <td>
                {{ form.content.kindergardensprtp }}
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>عیدی نقدی پاداش</td>
              <td>
                {{ form.content.bonus }}
              </td>
              <td>
                {{ form.content.bonusp }}
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>مواد غذایی خام</td>
              <td>
                {{ form.content.rawfood }}
              </td>
              <td>
                {{ form.content.rawfoodp }}
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>مواد غذایی پخته</td>
              <td>
                {{ form.content.preparedfood }}
              </td>
              <td>
                {{ form.content.preparedfoodp }}
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>پوشاک عید</td>
              <td>
                {{ form.content.newyearclothing }}
              </td>
              <td>
                {{ form.content.newyearclothingp }}
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>جهیزیه</td>
              <td>
                {{ form.content.jahaz }}
              </td>
              <td>
                {{ form.content.jahazp }}
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>سیسمونی</td>
              <td>
                {{ form.content.sismuni }}
              </td>
              <td>
                {{ form.content.sismunip }}
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>لوازم منزل</td>
              <td>
                {{ form.content.housefurni }}
              </td>
              <td>
                {{ form.content.housefurnip }}
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>سایر مواد (لباس پرسنلی)</td>
              <td>
                {{ form.content.workcloth }}
              </td>
              <td>
                {{ form.content.workclothp }}
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>کمک هزینه آموزش</td>
              <td>
                {{ form.content.edusprt }}
              </td>
              <td>
                {{ form.content.edusprtp }}
              </td>
            </tr>
          </table>
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
  name: "FQ12-12-00",
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
.tb-bg {
  width: 100%;
  margin: 30px 0px;
}

table {
  width: 100%;
}

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

<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>آشنایی با دوره های آموزشی مؤسسه خیریه روزبه</h4>
      </div>
      <section>
        <label class="labels"
          ><span>نام متقاضی:</span> {{ form.content.cfname }}</label
        >
        <label class="labels"
          ><span>نام خانوادگی متقاضی:</span> {{ form.content.clname }}</label
        >
        <label class="labels"
          ><span>نام پدر:</span> {{ form.content.father }}</label
        >
        <label class="labels"
          ><span>شماره ملی:</span> {{ form.nationalno }}</label
        >
        <label class="labels"
          ><span>نام واحد آموزشی:</span> {{ form.content.edudepname }}</label
        >
      </section>
      <section>
        <div class="text-holder">
          <p class="paragraph">
            اینجانب
            <span>{{ form.content.cfname }} {{ form.content.clname }}</span>
            فرزند
            <span>{{ form.content.father }}</span>
            به شماره ملی
            <span>{{ form.nationalno }}</span>
            با مطالعه و اطلاع کامل سرفصل های آموزشی موسسه خیریه روزبه، مایلم در
            واحد آموزشی
            <span>{{ form.content.edudepname }}</span>
            مشغول به یادگیری و مهارت آموزی شوم.
          </p>
        </div>
      </section>
      <section class="sections">
        <div class="textarea-input">
          <table>
            <tr>
              <th>ردیف</th>
              <th>آشپزی</th>
              <th>آشپزی</th>
              <th>قنادی</th>
              <th>خیاطی</th>
            </tr>
            <tr>
              <td>1</td>
              <td>آشنایی به مواد اولیه و شرایط نگهداری دستگاه‌ها</td>
              <td>آشنایی با شرایط نگهداری مواد غذایی</td>
              <td>آشنایی به مواد اولیه و شرایط نگهداری دستگاه‌ها</td>
              <td>آشنایی با دشتگاه ها و ابزار خیاطی</td>
            </tr>
            <tr>
              <td>2</td>
              <td>پاک کردن و خرد کردن سبزیجات و فرمول انواع سبزی های مخلوط</td>
              <td>پاک کردن مرغ، ماهی، گوشت و ...</td>
              <td>تهیه و پخت انواع حلوا سنتی و دیماج</td>
              <td>نخ چینی، وردستی، اتوی خرج کار، اتوکشی</td>
            </tr>
            <tr>
              <td>3</td>
              <td>شست و شوی سبزیجات</td>
              <td>تهیه انواع سوپ، آش، کوفته، کشک بادمجان</td>
              <td>تهیه و تزئین و بسته بندی حلوا فانتزی</td>
              <td>انتقال الگو روی پارچه، کمک به برش</td>
            </tr>
            <tr>
              <td>4</td>
              <td>خشک کردن سبزی، صیفی و میوه و بسته بندی</td>
              <td>تهیه انواع خورشت</td>
              <td>تهیه انواع شیرینی خشک</td>
              <td>آموزش سردوزی آسان و سردوزی پیشرفته</td>
            </tr>
            <tr>
              <td>5</td>
              <td>شست و شوی سبزیجات</td>
              <td>تهیه انواع پلو و چلو</td>
              <td>تهیه انواع شیرینی خشک</td>
              <td>دوخت با چرخ میان دوز و راست دوز</td>
            </tr>
            <tr>
              <td>6</td>
              <td>خرد کردن صیفی جات</td>
              <td>تهیه انواع پیراشکی، فینگرفود و غذا های نیمه آماده</td>
              <td>تهیه پیراشکی و اردک</td>
              <td>آموزش دوخت جیب، دوخت یقه، دوخت زیپ</td>
            </tr>
            <tr>
              <td>7</td>
              <td>سرخ کردن انواع سبزی و صیفی</td>
              <td>تهیه انواع دلمه و کتلت</td>
              <td>تهیه نان پنجره ای</td>
              <td>آموزش کار با دستگاه دکمه زن و زدن دکمه فلزی، چرخ دکمه</td>
            </tr>
            <tr>
              <td>8</td>
              <td>تهیه آبمیوه</td>
              <td>تهیه ته چین، لازانیا</td>
              <td>تهیه دنات</td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td>پاک کردن انواع حبوبات و بسته بندی</td>
              <td>انواع خوراک، ساندویچ و فست فود</td>
              <td>تهیه انواع دسر</td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td>تهیه انواع ترشی و شور</td>
              <td>انواع سالاد و پیتزا</td>
              <td>تهیه انواع مربا</td>
              <td></td>
            </tr>
            <tr>
              <td>11</td>
              <td>تهیه انواع سالاد</td>
              <td>-</td>
              <td>تهیه انواع شربت</td>
              <td></td>
            </tr>
          </table>
        </div>
      </section>
      <section class="sections">
        <div class="textarea-input">
          <table>
            <tr>
              <th>ردیف</th>
              <th>بافندگی</th>
              <th>انبارداری</th>
              <th>فروشندگی</th>
              <th>حسابداری</th>
            </tr>
            <tr>
              <td>1</td>
              <td>قلاب بافی</td>
              <td>
                آشنایی با اصول انبارداری، انبارگردانی، FIFO کنترل انبارها و
                سیستم
              </td>
              <td>آشنایی به اصول فروشندگی</td>
              <td>آشنایی با اصطلاحات و اصول حسابداری</td>
            </tr>
            <tr>
              <td>2</td>
              <td>دستباف خردسال</td>
              <td>
                کنترل شرایط محیطی انبارها و شرایط نگهداری مواد اولیه و مسائل
                ایمنی و بهداشتی
              </td>
              <td>
                کنترل شرایط محیطی و بهداشتی(بهداشت محصولات بسته بندی، برفک زدایی
                یخجال، نظافت محیط و دستگاه ها، دمای یخچال ها و محیط)
              </td>
              <td>آشنایی با انواع سرفصل های حسابداری و ماهیت حساب ها</td>
            </tr>
            <tr>
              <td>3</td>
              <td>دستباف بزرگسال</td>
              <td>چیدمان و انبارش کالاها و قفسه ها</td>
              <td>آشنایی با محصولات، بسته بندی و شرایط نگهداری آنها</td>
              <td>آموزش تعریف کدینگ حسابداری</td>
            </tr>
            <tr>
              <td>4</td>
              <td>ماشین بافت خردسال</td>
              <td>آشنایی با حداقل، حداکثر موجودی و نقطه سفارش کالا</td>
              <td>چیدمان و انبارش محصولات در یخچال ها متناسب با سیستم</td>
              <td>آشنایی با نرم افزار مالی</td>
            </tr>
            <tr>
              <td>5</td>
              <td>ماشین بافت بزرگسال</td>
              <td>
                انبارداری دریافت با تحویل کالا (فرآیند ورود و خروج کالا از
                انبارها)
              </td>
              <td>
                تحویل محصول و ثبت در انبار فروشگاه (از واحد تولید، مرجوعی)
              </td>
              <td>آموزش نحوه صدور سند دستی</td>
            </tr>
            <tr>
              <td>6</td>
              <td>سرمه دوزی و دوخت سرویس آشپزخانه</td>
              <td>کنترل موجودی، کاردکس نویسی و ثبت دفتر انبار</td>
              <td>فروشندگی در خط فروش</td>
              <td>آموزش نحوه ثبت درآمو و هزینه(رویدادهای مالی)</td>
            </tr>
            <tr>
              <td>7</td>
              <td>-</td>
              <td>ثبت درخواست خرید و رسید دریافت کالا</td>
              <td>ثبت و تحویل سفارشات مشتری به صورت تلفنی و حضوری</td>
              <td>-</td>
            </tr>
            <tr>
              <td>8</td>
              <td>-</td>
              <td>-</td>
              <td>پایش مشتری</td>
              <td>-</td>
            </tr>
            <tr>
              <td>9</td>
              <td>-</td>
              <td>-</td>
              <td>صندوق داری و ثبت فاکتور مشتری</td>
              <td>-</td>
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
  name: "FQ12-06-00",
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

table,
tr,
th {
  text-align: center;
}

.paragraph {
  font-family: "Vazir";
}
</style>

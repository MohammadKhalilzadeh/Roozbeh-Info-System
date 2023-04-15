<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>پیگیری وضعیت مددجو پس از خروج از مؤسسه</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ ورود:</label>
          <input class="input-field" type="date" name="Date" id="date" />
          <label for="adddate">تاریخ خروج:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>
      </section>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="fname"
          id="fname"
          placeholder="نام مددجو"
        />
        <input
          class="input-field"
          type="text"
          name="lname"
          id="lname"
          placeholder="نام خانوادگی مددجو"
        />
        <input
          class="input-field"
          type="text"
          name="skill"
          placeholder="امتیاز کل"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="کد مددجو"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="دوره آموزشی گذارنده شده"
        />
      </section>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="fname"
          id="fname"
          placeholder="وضعیت اشتغال"
        />
        <input
          class="input-field"
          type="text"
          name="lname"
          id="lname"
          placeholder="ساعت کاری"
        />
        <input
          class="input-field"
          type="text"
          name="skill"
          placeholder="وضعیت استخدام"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="حقوق ماهیانه / دستمزدی"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="بیمه"
        />
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="2">
  آدرس محل کار</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
  شرایط خانوادگی</textarea
          >
        </div>
        <div>
          <label for="adddate">تاریخ پیگیری:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
  وضعیت شخصی مددجو</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">همسر</textarea>
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
  وضعیت فرزندان و شرایط تحصیلی</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
  نتیجه بازدید</textarea
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {};
  },
};
</script>

<style>
.paper-templ {
  direction: rtl;
  margin: 20px;
  padding: 3%;
  border: #0b9fc2 2px solid;
  border-radius: 15px;
}

table {
  width: 100%;
}
</style>

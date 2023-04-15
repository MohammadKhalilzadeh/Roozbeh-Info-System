<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>معرفی به اشتغال خانگی</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ شروع:</label>
          <input class="input-field" type="date" name="Date" id="date" />
          <label for="adddate">تاریخ تولد:</label>
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
          placeholder="نام پدر"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="تحصیلات"
        />
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>وضعیت تاهل؟</legend>

            <div>
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">مجرد</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">متاهل</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">مطلقه</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">فوت همسر</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">همسر مفقود الاثر</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">ترک منزل همسر</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">زندانی همسر</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">در حال طلاق</label>
            </div>
          </fieldset>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="سابقه بیماری/ناتوانی"
          />
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="سابقه ناتوانی"
          />
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="شماره تلفن ثابت"
          />
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="شماره تلفن همراه"
          />
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
  نظریه مشاور / مددکار</textarea
          >
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="مدیر مددکاری"
          />
        </div>
      </section>
      <hr />
      <section>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="واحد محترم"
          />
        </div>
        <div>
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
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="2">
  مهارتها و توانایی ها</textarea
          >
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="nationalid"
            placeholder="مدیر آموزش"
          />
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="2">
  نتیجه نهایی</textarea
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

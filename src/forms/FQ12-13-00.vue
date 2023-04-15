<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>ارزیابی و نتایج شرکت در دوره های آموزشی</h3>
      </section>
      <section>
        <div>
          <label for="adddate">تاریخ شروع دوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
          <label for="adddate">تاریخ پایان دوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>
      </section>
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
          name="edu"
          placeholder="میزان تحصیلات"
        />
        <input
          class="input-field"
          type="text"
          name="course"
          placeholder="نام دوره آموزشی"
        />
      </section>
      <section>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
                تحلیل و نتیجه دوره برگزار شده
              </textarea
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

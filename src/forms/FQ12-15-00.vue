<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>کاربرگ تسویه مددجو با مؤسسه خیریه استاد روزبه</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ ورود:</label>
          <input class="input-field" type="date" name="Date" id="date" />
          <label for="adddate">تاریخ خروج:</label>
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
          placeholder="نام"
        />
        <input
          class="input-field"
          type="text"
          name="lname"
          id="lname"
          placeholder="نام خانوادگی"
        />
        <input
          class="input-field"
          type="text"
          name="skill"
          placeholder="مهارت آموز دوره آموزشی"
        />
        <input
          class="input-field"
          type="text"
          name="nationalid"
          placeholder="کد ملی"
        />
      </section>
      <hr />
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

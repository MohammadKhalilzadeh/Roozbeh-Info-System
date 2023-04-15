<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>حضور و غیاب مددجو در واحد آموزش</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ شروع دوره:</label>
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
          name="nationalid"
          placeholder="نام واحد آموزشی"
        />
      </section>
      <hr />
      <section>
        <div class="input-field">
          <table>
            <tr>
              <th>ردیف</th>
              <th>تاریخ</th>
              <th>ساعت ورود</th>
              <th>ساعت خروج</th>
              <th>امضا و اثر انپشت مددجو</th>
              <th>توضیحات</th>
            </tr>
            <tr>
              <td>1</td>
              <td>$100</td>
              <td>January</td>
              <td>$100</td>
              <td>January</td>
              <td>$100</td>
            </tr>
          </table>
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

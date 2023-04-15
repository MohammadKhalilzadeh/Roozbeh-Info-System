<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>معرفی به واحد بهداشت و درمان</h3>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>
      </section>
      <hr />
      <section>
        <input
          class="input-field"
          type="text"
          name="skill"
          placeholder="نام مسئول واحد بهداشت و درمان"
        />
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
          placeholder="شماره ملی"
        />
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

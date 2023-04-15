<template>
  <div>
    <div class="paper-templ">
      <div class="header">
        <h3>پذیــرش متقــاضی</h3>
      </div>
      <section>
        <div>
          <label for="docadate">تاریخ تنظیم:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>
        <div>
          <label for="docadate">تاریخ تولد:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>
      </section>
      <section>
        <input
          class="input-field"
          type="text"
          name="clientfname"
          id="clientfname"
          placeholder="نام متقاضی"
        />
        <input
          class="input-field"
          type="text"
          name="clientlname"
          id="clientlname"
          placeholder="نام خانوادگی متقاضی"
        />
        <input
          class="input-field"
          type="text"
          name="father"
          id="father"
          placeholder="نام پدر"
        />
        <input
          class="input-field"
          type="text"
          name="shno"
          id="shno"
          placeholder="شماره شناسنامه"
        />
        <input
          class="input-field"
          type="text"
          name="nationalno"
          id="nationalno"
          placeholder="شماره ملی"
        />
        <input
          class="input-field"
          type="text"
          name="kids"
          id="kids"
          placeholder="تعداد عائله تحت تکفل"
        />
        <input
          class="input-field"
          type="text"
          name="city"
          id="city"
          placeholder="صادره از"
        />
        <input
          class="input-field"
          type="text"
          name="phone"
          id="phone"
          placeholder="شماره تماس"
        />
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">آدرس</textarea>
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

.widget-list {
  direction: rtl;
  margin: 5%;
  width: 90%;
  padding: 3%;
  border: solid 1px #0b9fc2;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: right;
  align-items: start;
}

.radio-opt {
  width: 33%;
  margin: 0px;
  float: right;
}

.radio-input {
  width: 30px;
  margin: 0;
}
</style>

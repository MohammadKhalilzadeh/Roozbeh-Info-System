<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>پیگیری وضعیت مددجو در حین آموزش</h3>
      </section>
      <section>
        <label for="adddate">تاریخ جذب:</label>
        <input class="input-field" type="date" name="Date" id="date" />
        <label for="adddate">تاریخ اتمام دوره آموزشی:</label>
        <input class="input-field" type="date" name="Date" id="date" />
      </section>
      <section>
        <input
          class="input-field"
          type="text"
          name="cfname"
          id="cfname"
          placeholder="نام مددجو"
        />
        <input
          class="input-field"
          type="text"
          name="clname"
          id="clname"
          placeholder="نام خانواده مددجو"
        />
        <input
          class="input-field"
          type="text"
          name="edudep"
          id="edudep"
          placeholder="واحد آموزشی"
        />
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ نوبت اول مشاوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نتیجه مشاوره</textarea
          >
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نظریه مدیر مددکاری</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div>
          <label for="adddate">تاریخ نوبت دوم مشاوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نتیجه مشاوره</textarea
          >
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
نظریه مدیر مددکاری</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <h4>مشاوره های تخصصی انجام شده:</h4>
        <section>
          <div>
            <label for="adddate">تاریخ:</label>
            <input class="input-field" type="date" name="Date" id="date" />
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="counsultant"
              id="counsultant"
              placeholder="نام مشاور"
            />
            <div class="input-field">
              <textarea name="Textarea" id="textarea" rows="3">
                نتیجه مشاور
              </textarea>
            </div>
            <div class="input-field">
              <textarea name="Textarea" id="textarea" rows="3">
                نتیجه مددکاری
              </textarea>
            </div>
          </div>
        </section>
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
</style>

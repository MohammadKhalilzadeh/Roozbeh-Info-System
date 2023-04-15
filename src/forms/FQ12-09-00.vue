<template>
  <div>
    <div class="paper-templ">
      <div class="header">
        <h3>معرفی به واحد بهداشت و درمان</h3>
      </div>
      <section>
        <label for="introdate">تاریخ معرفی:</label>
        <input class="input-field" type="date" name="Date" id="date" />
      </section>
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
          name="father"
          id="father"
          placeholder="نام پدر"
        />
        <input
          class="input-field"
          type="text"
          name="birthyear"
          id="birthyear"
          placeholder="سال تولد"
        />
        <input
          class="input-field"
          type="text"
          name="education"
          id="education"
          placeholder="میزان تحصیلات"
        />
      </section>
      <hr />
      <section>
        <div class="radio-box">
          <fieldset>
            <legend>وضعیت تاهل</legend>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="huey"
                name="drone"
                value="مجرد"
                checked
              />
              <label for="huey">مجرد</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="dewey"
                name="drone"
                value="متاهل"
              />
              <label for="dewey">متاهل</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="مطلقه"
              />
              <label for="louie">مطلقه</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="فوت همسر"
              />
              <label for="louie">فوت همسر</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="همسر مفقودالاثر"
              />
              <label for="louie">همسر مفقودالاثر</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="ترک منزل همسر"
              />
              <label for="louie">ترک منزل همسر</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="همسر زندانی"
              />
              <label for="louie">همسر زندانی</label>
            </div>

            <div class="radio-opt">
              <input
                class="radio-input"
                type="radio"
                id="louie"
                name="drone"
                value="در حال طلاق"
              />
              <label for="louie">در حال طلاق</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
بیماری فعلی</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
سابقه بیماری قبلی</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
سابقه مصرف دارو خاص</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
سابقه عادت خاص</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
وضعیت بیماری روحی</textarea
          >
        </div>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
وضعیت بهداشت فردی</textarea
          >
        </div>
      </section>
      <hr />
      <section>
        <div class="input-field">
          <table>
            <tr>
              <th>تاریخ معرفی به پزشک</th>
              <th>نام پزشک</th>
              <th>نوع تخصص</th>
              <th>مشخصات اولیه بیماری</th>
              <th>گزارش بیماری</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </section>
      <section>
        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
          توضیح درصورت بروز موارد خاص  
          </textarea>
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
</style>

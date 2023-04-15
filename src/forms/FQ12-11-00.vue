<template>
  <div>
    <div class="paper-templ">
      <section class="header">
        <h3>معرفی به واحد فرهنگی موسسه خیریه روزبه</h3>
      </section>
      <section>
        <h4>مشخصات مددجو</h4>
        <div>
          <label for="adddate">تاریخ شروع دوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
          <label for="adddate">تاریخ اتمام دوره:</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </div>
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
        <h4>مشخصات همسر</h4>
        <div>
          <input
            class="input-field"
            type="text"
            name="spousefname"
            id="spousefname"
            placeholder="نام همسر"
          />
          <input
            class="input-field"
            type="text"
            name="spouselname"
            id="spouselname"
            placeholder="نام خانوادگی همسر"
          />
          <input
            class="input-field"
            type="text"
            name="spouseage"
            id="spouseage"
            placeholder="سن همسر"
          />
          <input
            class="input-field"
            type="text"
            name="spousejob"
            id="spousejob"
            placeholder="شغل همسر"
          />
          <input
            class="input-field"
            type="text"
            name="spouseedu"
            id="spouseedu"
            placeholder="تحصیلات همسر"
          />
          <input
            class="input-field"
            type="text"
            name="spousephealth"
            id="spousephealth"
            placeholder="وضعیت سلامت جسمانی"
          />
          <input
            class="input-field"
            type="text"
            name="spousemhealth"
            id="spousemhealth"
            placeholder="وضعیت سلامت روانی"
          />
          <input
            class="input-field"
            type="text"
            name="kids"
            id="kids"
            placeholder="تعداد فرزندان جهت استفاده از حمایت ها"
          />
        </div>
      </section>
      <hr />
      <section>
        <h4>مشخصات فرزندان مددجو (حمایت شونده)</h4>
        <div class="input-field">
          <table>
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>کد ملی</th>
              <th>تاریخ تولد</th>
              <th>شماره تماس</th>
              <th>میزان تحصیلات</th>
              <th>شماره تماس و آدرس محل تحصیل</th>
              <th>وضعیت اشتغال</th>
              <th>شماره تماس و آدرس محل کار</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </section>
      <hr />
      <section>
        <div>
          <input
            class="input-field"
            type="text"
            name="phone"
            id="phone"
            placeholder="شماره تماس ثابت"
          />
          <input
            class="input-field"
            type="text"
            name="familyphone"
            id="familyphone"
            placeholder="شماره تلفن همراه مادر یا پدر"
          />
        </div>
        <div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="3">
                آدرس محل سکونت
              </textarea
            >
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="3">
                وضعیت سلامت جسمانی و روانی هر یک از فرزندان
              </textarea
            >
          </div>
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

<template>
  <div>
    <div class="paper-templ">
      <div class="header">
        <h3>معرفی به واحد مشــاوره</h3>
      </div>
      <hr />
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
        <div>
          <h5>
            بدینوسیله خانم
            {{ cfname }} {{ clname }}
          </h5>
          <br />
          <p>
            جهت مشــاوره اولیه معرفی می‌شوند، پرونده مددجو نامبرده به پیوست
            می‌باشد.
          </p>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="sfullname"
            id="sfullname"
            placeholder="نام و نام خانوادگی و امضا مسئول مددکاری به عنوان امضاء"
          />
        </div>
      </section>
      <hr />
      <section>
        <div class="header">
          <h5>مشخصات متقاضی:</h5>
        </div>
        <div>
          <input
            class="input-field"
            type="text"
            name="cfname"
            id="cfname"
            placeholder="نام متقاضی"
          />
          <input
            class="input-field"
            type="text"
            name="cfname"
            id="cfname"
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
            name="edu"
            id="edu"
            placeholder="تحصیلات"
          />
          <div>
            <label for="birthdate">تاریخ تولد</label>
            <input class="input-field" type="date" name="Date" id="date" />
          </div>
        </div>
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

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
            سابقه بیماری جسمی و روحی و روانی:
          </textarea>
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
            سابقه سو مصرف مواد مخدر:
          </textarea>
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
            سابقه مصرف دارو:
          </textarea>
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
            سابقه روابط فردی:
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>دارای بیمه خدمات درمانی:</legend>

            <div class="radio-opt">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">کمیته امداد</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">روستایی</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">تامین اجتماعی</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">سلامت</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">نیروهای مسلح</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">سایپ ارگانها</label>
            </div>
          </fieldset>
        </div>
        <br />
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
        </div>
        <br />

        <div id="radio-box">
          <fieldset>
            <legend>وضعیت سلامت همسر:</legend>

            <div class="radio-opt">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">سابقه بیماری</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">سابقه اعتیاد</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">از کار افتاده</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">سالم</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">بدهکار</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">سابقه خودکشی</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>وضعیت مسکن:</legend>

            <div class="radio-opt">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">اجاره‌ای</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">رهنی</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">شخصی</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">ساکن منزل پدر شوهر</label>
            </div>

            <div class="radio-opt">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">ساکن منزل پدری</label>
            </div>
          </fieldset>
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="میزان اجاره بها"
          />
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="میزان رهن"
          />
        </div>

        <div>
          <input
            class="input-field"
            type="text"
            name="Name"
            id="name"
            placeholder="شغل پدر"
          />
        </div>

        <div class="input-field">
          <textarea name="Textarea" id="textarea" rows="3">
            آدرس و شماره تلفن
          </textarea>
        </div>
      </section>
      <hr />
      <section>
        <div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="3">
              نظر مشــاوره در مورد شرایط متقاضی:
            </textarea>
          </div>

          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="3">
              نظریه مدیر مددکاری:
            </textarea>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div id="radio-box">
          <fieldset>
            <legend>با توجه به توضیحات ذکر شده نتیجه زیر حاصل شد:</legend>

            <div>
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">متقاضی شرایط پذیرش در موسسه را ندارد</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey"
                >متقاضی شرایط پذیرش در موسسه را دارد و به واحد مشاوره معرفی
                میگردد</label
              >
            </div>
          </fieldset>
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

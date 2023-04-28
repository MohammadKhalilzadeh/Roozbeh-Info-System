<template>
  <div>
    <div class="widget-list">
      <h4>اطلاعات اولیه متقاضیان آموزش در مؤسسه خیریه روزبه</h4>
      <div class="all-field">
        <section>
          <label for="refdate">تاریخ مراجعه</label>
          <input
            class="input-field"
            type="date"
            name="Date"
            id="date"
            v-model="form.referdate"
          />
          <label for="refdate">تاریخ تولد</label>
          <input
            class="input-field"
            type="date"
            name="Date"
            id="date"
            v-model="form.birthdate"
          />
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            name="Firstname"
            id="firstname"
            placeholder="نام متقاضی"
            v-model="form.cfname"
          />
          <input
            class="input-field"
            type="text"
            name="Lastname"
            id="lastname"
            placeholder="نام خانوادگی متقاضی"
            v-model="form.clname"
          />
          <input
            class="input-field"
            type="text"
            name="Father"
            id="father"
            placeholder="نام پدر"
            v-model="form.father"
          />
          <input
            class="input-field"
            type="text"
            name="Nationalid"
            id="nationalid"
            placeholder="شماره ملی"
            v-model="form.nationalno"
          />
          <input
            class="input-field"
            type="text"
            name="Edulevel"
            id="edulevel"
            placeholder="میزان تحصیلات"
            v-model="form.educationlvl"
          />
          <input
            class="input-field"
            type="text"
            name="major"
            id="major"
            placeholder="رشته تحصیلی"
            v-model="form.major"
          />
          <input
            class="input-field"
            type="text"
            name="Physicalstate"
            id="physicalstate"
            placeholder="وضعیت جسمانی"
            v-model="form.physicalstatus"
          />
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت سلامت روحی و روانی</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  v-bind:value="'سابقه بیماری روحی و روانی در خانواده'"
                  v-model="form.mentalstatus"
                />
                <label for="huey">سابقه بیماری روحی و روانی در خانواده</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  v-bind:value="'سابقه بیماری روحی و روانی مراجع'"
                  v-model="form.mentalstatus"
                />
                <label for="dewey">سابقه بیماری روحی و روانی مراجع</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  v-bind:value="'سابقه مصرف دارو و بستری'"
                  v-model="form.mentalstatus"
                />
                <label for="louie">سابقه مصرف دارو و بستری</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  v-bind:value="'سابقه سو مصرف مواد'"
                  v-model="form.mentalstatus"
                />
                <label for="louie">سابقه سو مصرف مواد</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  v-bind:value="'تحت درمان متخصص اعصاب و روان'"
                  v-model="form.mentalstatus"
                />
                <label for="louie">تحت درمان متخصص اعصاب و روان</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  v-bind:value="'سابقه خودکشی'"
                  v-model="form.mentalstatus"
                />
                <label for="louie">سابقه خودکشی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  v-bind:value="'خودزنی'"
                  v-model="form.mentalstatus"
                />
                <label for="louie">خودزنی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  v-bind:value="'دگرزنی'"
                  v-model="form.mentalstatus"
                />
                <label for="louie">دگرزنی</label>
              </div>
            </fieldset>
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
                  v-model="form.thestatus"
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
                  v-model="form.thestatus"
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
                  v-model="form.thestatus"
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
                  v-model="form.thestatus"
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
                  v-model="form.thestatus"
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
                  v-model="form.thestatus"
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
                  v-model="form.thestatus"
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
                  v-model="form.thestatus"
                />
                <label for="louie">در حال طلاق</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.thestatusdesc"
            >
توضیحات</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            name="introfname"
            id="introfname"
            placeholder="نام معرف"
            v-model="form.introfname"
          />
          <input
            class="input-field"
            type="text"
            name="introlname"
            id="introlname"
            placeholder="نام خانوادگی معرف"
            v-model="form.introlname"
          />
          <input
            class="input-field"
            type="text"
            name="introphone"
            id="introphone"
            placeholder="شماره تماس"
            v-model="form.introphone"
          />
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>معرفی</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="حمایت از زندانیان"
                  v-model="form.intro"
                />
                <label for="huey">حمایت از زندانیان</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="بهزیستی"
                  v-model="form.intro"
                />
                <label for="dewey">بهزیستی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="کمیته امداد"
                  v-model="form.intro"
                />
                <label for="louie">کمیته امداد</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="بنیاد شهید"
                  v-model="form.intro"
                />
                <label for="louie">بنیاد شهید</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="سازمانهای غیر دولتی"
                  v-model="form.intro"
                />
                <label for="louie">سازمانهای غیر دولتی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="سایر ارگانها"
                  v-model="form.intro"
                />
                <label for="louie">سایر ارگانها</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.introdesc"
            >
توضیحات</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت بیمه</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="بیمه کمیته امداد"
                  checked
                  v-model="form.insurancestate"
                />
                <label for="huey">بیمه کمیته امداد</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="بیمه تامین اجتماعی"
                  v-model="form.insurancestate"
                />
                <label for="dewey">بیمه تامین اجتماعی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="بیمه نیروهای مسلح"
                  v-model="form.insurancestate"
                />
                <label for="louie">بیمه نیروهای مسلح</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="بیمه سلامت"
                  v-model="form.insurancestate"
                />
                <label for="louie">بیمه سلامت</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="سایر ارگانها"
                  v-model="form.insurancestate"
                />
                <label for="louie">سایر ارگانها</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.insurancedesc"
            >
توضیحات</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت پدر</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="فوت"
                  checked
                  v-model="form.fatherstate"
                />
                <label for="huey">فوت</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="بازنشسته"
                  v-model="form.fatherstate"
                />
                <label for="dewey">بازنشسته</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="بیکار"
                  v-model="form.fatherstate"
                />
                <label for="louie">بیکار</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="شاغل"
                  v-model="form.fatherstate"
                />
                <label for="louie">شاغل</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="میزان سواد"
                  v-model="form.fatherstate"
                />
                <label for="louie">میزان سواد</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.fatherstatedesc"
            >
توضیحات</textarea
            >
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="Fatherjob"
              id="fatherjob"
              placeholder="شغل فعلی پدر"
              v-model="form.fatherjob"
            />
            <input
              class="input-field"
              type="text"
              name="Fatherjobadrs"
              id="fatherjobadrs"
              placeholder="آدرس محل کار فعلی"
              v-model="form.fatherjobadrs"
            />
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت مادر</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="فوت"
                  checked
                  v-model="form.motherstate"
                />
                <label for="huey">فوت</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="متاهل"
                  v-model="form.motherstate"
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
                  v-model="form.motherstate"
                />
                <label for="louie">مطلقه</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="در حال طلاق"
                  v-model="form.motherstate"
                />
                <label for="louie">در حال طلاق</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="ترک منزل"
                  v-model="form.motherstate"
                />
                <label for="louie">ترک منزل</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="میزان سواد"
                  v-model="form.motherstate"
                />
                <label for="louie">میزان سواد</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.motherstatedesc"
            >
توضیحات</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت همسر</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="وضعیت عمومی - سالم"
                  checked
                  v-model="form.spousestate"
                />
                <label for="huey">وضعیت عمومی - سالم</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="بیمار"
                  v-model="form.spousestate"
                />
                <label for="dewey">بیمار</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="معتاد"
                  v-model="form.spousestate"
                />
                <label for="louie">معتاد</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="از کار افتاده"
                  v-model="form.spousestate"
                />
                <label for="louie">از کار افتاده</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="بدهکار"
                  v-model="form.spousestate"
                />
                <label for="louie">بدهکار</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.spousestatedesc"
            >
توضیحات</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            name="Spousefname"
            id="spousefname"
            placeholder="نام همسر"
            v-model="form.spfname"
          />
          <input
            class="input-field"
            type="text"
            name="Spouselname"
            id="spouselname"
            placeholder="نام خانوادگی همسر"
            v-model="form.splname"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseidno"
            id="spouseidno"
            placeholder="کد ملی همسر"
            v-model="form.spnationalno"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseedu"
            id="spouseedu"
            placeholder="میزان سواد همسر"
            v-model="form.speducation"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseprejob"
            id="Spouseprejob"
            placeholder="شغل قبلی همسر"
            v-model="form.splastjob"
          />
          <input
            class="input-field"
            type="text"
            name="Spousecrnjob"
            id="Spousecrnjob"
            placeholder="شغل فعلی همسر"
            v-model="form.spjob"
          />
          <input
            class="input-field"
            type="text"
            name="Spousejobadrs"
            id="spousejobadrs"
            placeholder="آدرس محل کار فعلی"
            v-model="form.spjobadrs"
          />
          <label for="spousebirthdate">تاریخ تولد</label>
          <input
            class="input-field"
            type="date"
            name="Date"
            id="date"
            v-model="form.spbirthdate"
          />
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>آیا همسر سابق زندانی دارد؟</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="بله"
                  checked
                  v-model="form.jailforsp"
                />
                <label for="huey">بله</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="خیر"
                  v-model="form.jailforsp"
                />
                <label for="dewey">خیر</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.jailforspdesc"
            >
توضیحات</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>آیا اعضا خانواده اعتیاد دارند؟</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="بله"
                  checked
                />
                <label for="huey">بله</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="خیر"
                />
                <label for="dewey">خیر</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">
اقدامات انجام شده در مورد اعتیاد</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>آیا اعضا خانواده سابقه زندانی دارند؟</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="بله"
                  checked
                  v-model="form.jailforfamily"
                />
                <label for="huey">بله</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="خیر"
                  v-model="form.jailforfamily"
                />
                <label for="dewey">خیر</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.jailforfamilydesc"
            >
توضیحات</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            name="numofkids"
            id="numofkinds"
            placeholder="تعداد فرزندان تحت تکفل"
            v-model="form.kidstocare"
          />
          <input
            class="input-field"
            type="text"
            name="familynum"
            id="familynum"
            placeholder="تعداد اعضای خانواده"
            v-model="form.familymembers"
          />
          <input
            class="input-field"
            type="text"
            name="staticphone"
            id="staticphone"
            placeholder="شماره تلفن ثابت"
            v-model="form.permenantphone"
          />
          <input
            class="input-field"
            type="text"
            name="mobilephone"
            id="mobilephone"
            placeholder="شماره همراه"
            v-model="form.cellphone"
          />
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت مسکن</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="شخصی"
                  checked
                  v-model="form.accomodation"
                />
                <label for="huey">شخصی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="اجاره"
                  v-model="form.accomodation"
                />
                <label for="dewey">اجاره</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="سایر"
                  v-model="form.accomodation"
                />
                <label for="dewey">سایر</label>
              </div>
            </fieldset>
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="rent"
              id="rent"
              placeholder="میزان اجاره بها"
              v-model="form.rent"
            />
            <input
              class="input-field"
              type="text"
              name="rent2"
              id="rent2"
              placeholder="میزان رهن"
              v-model="form.rahn"
            />
          </div>
          <div class="input-field">
            <textarea
              name="Textarea"
              id="textarea"
              rows="8"
              v-model="form.accomodationdesc"
            >
توضیحات</textarea
            >
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="adrs"
              id="adrs"
              placeholder="آدرس منزل"
              v-model="form.address"
            />
            <input
              class="input-field"
              type="text"
              name="postcode"
              id="postcode"
              placeholder="کد پستی"
              v-model="form.postalcode"
            />
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>
                چگونگی برخورداری از خدمات سایر ارگان ها و موسسات خیریه
              </legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="کمیته امداد"
                  checked
                  v-model="form.otherorgsservs"
                />
                <label for="huey">کمیته امداد</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="بهزیستی"
                  v-model="form.otherorgsservs"
                />
                <label for="dewey">بهزیستی</label>
              </div>
            </fieldset>
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="others"
              id="others"
              placeholder="سایر"
              v-model="form.otherorgsservs"
            />
          </div>
        </section>
        <hr />
        <section>
          <div>
            <legend>مبلغ میزان درآمد ماهانه تقریبی متقاضی</legend>
            <div>
              <input
                class="input-field"
                type="text"
                name="incomesrc"
                id="incomesrc"
                placeholder="منبع کسب درآمد"
                v-model="form.incomesrc"
              />
              <input
                class="input-field"
                type="text"
                name="income"
                id="income"
                placeholder="میزان درآمد ماهانه به ریال"
                v-model="form.income"
              />
            </div>
            <div class="input-field">
              <textarea
                name="Textarea"
                id="textarea"
                rows="8"
                v-model="form.skillsdesc"
              >
توانمندی های شخصی متقاضی و نوع مهارت هایی که دارد</textarea
              >
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>متقاضی به کدام کی از مهارت های زیر علاقمند است؟</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="آشپزی"
                  checked
                />
                <label for="huey">آشپزی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="قنادی"
                />
                <label for="dewey">قنادی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="بافندگی"
                />
                <label for="dewey">بافندگی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="خیاطی"
                />
                <label for="dewey">خیاطی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="حسابداری"
                />
                <label for="dewey">حسابداری</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="فروشندگی"
                />
                <label for="dewey">فروشندگی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="انبارداری"
                />
                <label for="dewey">انبارداری</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="اشتغال خانگی"
                />
                <label for="dewey">اشتغال خانگی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="پرستاری سالمند"
                />
                <label for="dewey">پرستاری سالمند</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="پرستاری کودک"
                />
                <label for="dewey">پرستاری کودک</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="کار خدماتی"
                />
                <label for="dewey">کار خدماتی</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <input
              class="input-field"
              type="text"
              name="req"
              id="req"
              placeholder="درخواست متقاضی از موسسه و هدف مراجعه"
            />
            <input
              class="input-field"
              type="text"
              name="statedur"
              id="statedur"
              placeholder="مدت زمانی که در وضعیت فعلی قرار دارند"
            />
            <input
              class="input-field"
              type="text"
              name="mainproblems"
              id="mainproblems"
              placeholder="اصلی ترین مشکلات موجود فعلی"
            />
          </div>
        </section>
        <hr />
        <section>
          <div>
            <input
              class="input-field"
              type="text"
              placeholder="نام و نام خانوادگی پرسشگر"
            />
            <input
              class="input-field"
              type="text"
              placeholder="نام و نام خانوادگی متقاضی"
            />
          </div>
          <div>
            <label for="refdate">تاریخ دریافت مدرک و تشکیل پرونده</label>
            <input class="input-field" type="date" name="Date" id="date" />
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>با توجه به توضیحات داده شده نتایج زیر حاصل شد:</legend>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="huey"
                  name="drone"
                  value="اشیب پذیر"
                  checked
                />
                <label for="huey"
                  >متقاضی از دسته زنان و خانواده های آسیب پدیر محسوب می
                  شود</label
                >
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="جویای کار"
                />
                <label for="dewey">متقاضی جویای کار</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="جویای حمایت"
                />
                <label for="dewey"
                  >متقاضی جویای حمایت از سازمانهای حمایتی است</label
                >
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="شرایط پذیرش"
                />
                <label for="dewey">متقاضی شرایط پذیرش در موسسه را دارد</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="ندارد"
                />
                <label for="dewey">ندارد</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">
اقدامات انجام شده پس از اولین مراجعه</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <button @click="submitform">Submit</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-01-00",
  data: () => {
    return {
      formcode: "FQ12-01-00",
      nationalno: "",
      form: {
        referdate: "",
        cfname: "",
        clname: "",
        father: "",
        nationalno: "",
        birthdate: "",
        educationlvl: "",
        major: "",
        physicalstatus: "",
        mentalstatus: "",
        thestatus: "",
        thestatusdesc: "",
        introfname: "",
        introlname: "",
        introphone: "",
        intro: "",
        introdesc: "",
        insurancestate: "",
        insurancedesc: "",
        fatherstate: "",
        fatherstatedesc: "",
        fatherjob: "",
        fatherjobadrs: "",
        motherstate: "",
        motherstatedesc: "",
        spousestate: "",
        spousestatedesc: "",
        spfname: "",
        splname: "",
        spnationalno: "",
        spbirthdate: "",
        speducation: "",
        splastjob: "",
        spjob: "",
        spjobadrs: "",
        jailforsp: "",
        jailforspdesc: "",
        spadct: "",
        spadctdesc: "",
        adtcstepsdesc: "",
        jailforfamily: "",
        jailforfamilydesc: "",
        kidstocare: "",
        familymembers: "",
        // table ...
        permenantphone: "",
        cellphone: "",
        accomodation: "",
        rent: "",
        rahn: "",
        accomodationdesc: "",
        address: "",
        postalcode: "",
        otherorgsservs: "",
        income: "",
        incomesrc: "",
        monthlyincome: "",
        skillsdesc: "",
        favlist: [],
        reqandgoal: "",
        stateduration: "",
        mainissues: "",
      },
    };
  },
  methods: {
    submitform() {
      axios
        .post("http://localhost:3000/forms", {
          formcode: this.formcode,
          nationalno: this.nationalno,
          content: this.form,
        })
        .then((res) => {
          console.log(res.status);
          console.log(res.data);
        });
    },
  },
};
</script>

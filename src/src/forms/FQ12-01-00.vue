<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>اطلاعات اولیه متقاضیان آموزش در مؤسسه خیریه روزبه</h4>
      </div>
      <div class="form-fields">
        <section>
          <div class="date-slop">
            <label class="date-label">تاریخ مراجعه</label>
            <date-picker
              class="date-picker"
              name="referdate"
              v-model="form.referdate"
            />
          </div>
          <div class="date-slop">
            <label class="date-label">تاریخ تولد</label>
            <date-picker
              class="date-picker"
              name="birthdate"
              v-model="form.birthdate"
            />
          </div>
        </section>
        <section>
          <input
            class="input-field"
            type="text"
            name="Firstname"
            placeholder="نام متقاضی"
            v-model="form.cfname"
          />
          <input
            class="input-field"
            type="text"
            name="Lastname"
            placeholder="نام خانوادگی متقاضی"
            v-model="form.clname"
          />
          <input
            class="input-field"
            type="text"
            name="Father"
            placeholder="نام پدر"
            v-model="form.father"
          />
          <input
            class="input-field"
            type="number"
            name="Nationalid"
            placeholder="شماره ملی"
            v-model="nationalno"
          />
          <input
            class="input-field"
            type="text"
            name="Edulevel"
            placeholder="میزان تحصیلات"
            v-model="form.educationlvl"
          />
          <input
            class="input-field"
            type="text"
            name="major"
            placeholder="رشته تحصیلی"
            v-model="form.major"
          />
          <input
            class="input-field"
            type="text"
            name="Physicalstate"
            placeholder="وضعیت جسمانی"
            v-model="form.physicalstatus"
          />
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت سلامت روحی و روانی</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="سابقه بیماری روحی و روانی در خانواده"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt"
                  >سابقه بیماری روحی و روانی در خانواده</label
                >
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="سابقه بیماری روحی و روانی مراجع"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt">سابقه بیماری روحی و روانی مراجع</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="سابقه مصرف دارو و بستری"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt">سابقه مصرف دارو و بستری</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="سابقه سو مصرف مواد"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt">سابقه سو مصرف مواد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="تحت درمان متخصص اعصاب و روان"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt">تحت درمان متخصص اعصاب و روان</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="سابقه خودکشی"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt">سابقه خودکشی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="خودزنی"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt">خودزنی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="mentalstatus"
                  value="دگرزنی"
                  v-model="form.mentalstatus"
                />
                <label class="radio-txt">دگرزنی</label>
              </div>
            </fieldset>
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت تاهل</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="مجرد"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">مجرد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="متاهل"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">متاهل</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="مطلقه"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">مطلقه</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="فوت همسر"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">فوت همسر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="همسر مفقودالاثر"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">همسر مفقودالاثر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="ترک منزل همسر"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">ترک منزل همسر</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="همسر زندانی"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">همسر زندانی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="thestatus"
                  value="در حال طلاق"
                  v-model="form.thestatus"
                />
                <label class="radio-txt">در حال طلاق</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              rows="8"
              v-model="form.thestatusdesc"
              placeholder="توضیحات"
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
            placeholder="نام معرف"
            v-model="form.introfname"
          />
          <input
            class="input-field"
            type="text"
            placeholder="نام خانوادگی معرف"
            v-model="form.introlname"
          />
          <input
            class="input-field"
            type="tel"
            placeholder="شماره تماس"
            v-model="form.introphone"
          />
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>معرفی</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="intro"
                  type="radio"
                  value="حمایت از زندانیان"
                  v-model="form.intro"
                />
                <label class="radio-txt">حمایت از زندانیان</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="intro"
                  type="radio"
                  value="بهزیستی"
                  v-model="form.intro"
                />
                <label class="radio-txt">بهزیستی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="intro"
                  type="radio"
                  value="کمیته امداد"
                  v-model="form.intro"
                />
                <label class="radio-txt">کمیته امداد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="intro"
                  type="radio"
                  value="بنیاد شهید"
                  v-model="form.intro"
                />
                <label class="radio-txt">بنیاد شهید</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="intro"
                  type="radio"
                  value="سازمانهای غیر دولتی"
                  v-model="form.intro"
                />
                <label class="radio-txt">سازمانهای غیر دولتی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="intro"
                  type="radio"
                  value="سایر ارگانها"
                  v-model="form.intro"
                />
                <label class="radio-txt">سایر ارگانها</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              rows="8"
              v-model="form.introdesc"
              placeholder="توضیحات"
            ></textarea>
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت بیمه</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="insurancestate"
                  type="radio"
                  value="بیمه کمیته امداد"
                  v-model="form.insurancestate"
                />
                <label class="radio-txt">بیمه کمیته امداد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="insurancestate"
                  type="radio"
                  value="بیمه تامین اجتماعی"
                  v-model="form.insurancestate"
                />
                <label class="radio-txt">بیمه تامین اجتماعی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="insurancestate"
                  type="radio"
                  value="بیمه نیروهای مسلح"
                  v-model="form.insurancestate"
                />
                <label class="radio-txt">بیمه نیروهای مسلح</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="insurancestate"
                  type="radio"
                  value="بیمه سلامت"
                  v-model="form.insurancestate"
                />
                <label class="radio-txt">بیمه سلامت</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="insurancestate"
                  type="radio"
                  value="سایر ارگانها"
                  v-model="form.insurancestate"
                />
                <label class="radio-txt">سایر ارگانها</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              rows="8"
              v-model="form.insurancedesc"
              placeholder="توضیحات"
            ></textarea>
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت پدر</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="fatherstate"
                  type="radio"
                  value="فوت"
                  v-model="form.fatherstate"
                />
                <label class="radio-txt">فوت</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="fatherstate"
                  type="radio"
                  value="بازنشسته"
                  v-model="form.fatherstate"
                />
                <label class="radio-txt">بازنشسته</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="fatherstate"
                  type="radio"
                  value="بیکار"
                  v-model="form.fatherstate"
                />
                <label class="radio-txt">بیکار</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="fatherstate"
                  type="radio"
                  value="شاغل"
                  v-model="form.fatherstate"
                />
                <label class="radio-txt">شاغل</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  name="fatherstate"
                  type="radio"
                  value="میزان سواد"
                  v-model="form.fatherstate"
                />
                <label class="radio-txt">میزان سواد</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              rows="8"
              v-model="form.fatherstatedesc"
              placeholder="توضیحات"
            >
توضیحات</textarea
            >
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              placeholder="شغل فعلی پدر"
              v-model="form.fatherjob"
            />
            <input
              class="input-field"
              type="text"
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

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="motherstate"
                  value="فوت"
                  v-model="form.motherstate"
                />
                <label class="radio-txt">فوت</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="motherstate"
                  value="متاهل"
                  v-model="form.motherstate"
                />
                <label class="radio-txt">متاهل</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="motherstate"
                  value="مطلقه"
                  v-model="form.motherstate"
                />
                <label class="radio-txt">مطلقه</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="motherstate"
                  value="در حال طلاق"
                  v-model="form.motherstate"
                />
                <label class="radio-txt">در حال طلاق</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="motherstate"
                  value="ترک منزل"
                  v-model="form.motherstate"
                />
                <label class="radio-txt">ترک منزل</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="motherstate"
                  value="میزان سواد"
                  v-model="form.motherstate"
                />
                <label class="radio-txt">میزان سواد</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              name="Textarea"
              rows="8"
              v-model="form.motherstatedesc"
              placeholder="توضیحات"
            ></textarea>
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت همسر</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="spousestate"
                  value="وضعیت عمومی - سالم"
                  v-model="form.spousestate"
                />
                <label class="radio-txt">وضعیت عمومی - سالم</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="spousestate"
                  value="بیمار"
                  v-model="form.spousestate"
                />
                <label class="radio-txt">بیمار</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="spousestate"
                  value="معتاد"
                  v-model="form.spousestate"
                />
                <label class="radio-txt">معتاد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="spousestate"
                  value="از کار افتاده"
                  v-model="form.spousestate"
                />
                <label class="radio-txt">از کار افتاده</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="spousestate"
                  value="بدهکار"
                  v-model="form.spousestate"
                />
                <label class="radio-txt">بدهکار</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              name="Textarea"
              rows="8"
              v-model="form.spousestatedesc"
              placeholder="توضیحات"
            ></textarea>
          </div>
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            name="Spousefname"
            placeholder="نام همسر"
            v-model="form.spfname"
          />
          <input
            class="input-field"
            type="text"
            name="Spouselname"
            placeholder="نام خانوادگی همسر"
            v-model="form.splname"
          />
          <input
            class="input-field"
            type="number"
            name="Spouseidno"
            placeholder="کد ملی همسر"
            v-model="form.spnationalno"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseedu"
            placeholder="میزان سواد همسر"
            v-model="form.speducation"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseprejob"
            placeholder="شغل قبلی همسر"
            v-model="form.splastjob"
          />
          <input
            class="input-field"
            type="text"
            name="Spousecrnjob"
            placeholder="شغل فعلی همسر"
            v-model="form.spjob"
          />
          <input
            class="input-field"
            type="text"
            name="Spousejobadrs"
            placeholder="آدرس محل کار فعلی"
            v-model="form.spjobadrs"
          />
          <div class="date-slop">
            <label class="date-label">تاریخ تولد</label>
            <date-picker
              class="date-picker"
              name="Date"
              v-model="form.spbirthdate"
            />
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>آیا همسر سابق زندانی دارد؟</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="jailforsp"
                  value="بله"
                  v-model="form.jailforsp"
                />
                <label class="radio-txt">بله</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="jailforsp"
                  value="خیر"
                  v-model="form.jailforsp"
                />
                <label class="radio-txt">خیر</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              name="Textarea"
              rows="8"
              v-model="form.jailforspdesc"
              placeholder="توضیحات"
            ></textarea>
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>آیا اعضا خانواده اعتیاد دارند؟</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="familyaddict"
                  value="بله"
                  v-model="form.familyaddict"
                />
                <label class="radio-txt">بله</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="familyaddict"
                  value="خیر"
                  v-model="form.familyaddict"
                />
                <label class="radio-txt">خیر</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              name="Textarea"
              v-model="form.familyaddictdesc"
              rows="8"
              placeholder="توضیحات"
            ></textarea>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.addictionprevent"
              name="Textarea"
              rows="8"
              placeholder="اقدامات انجام شده در مورد اعتیاد"
            >
اقدامات انجام شده در مورد اعتیاد
</textarea
            >
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>آیا اعضا خانواده سابقه زندانی دارند؟</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="jailforfamily"
                  value="بله"
                  v-model="form.jailforfamily"
                />
                <label class="radio-txt">بله</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="jailforfamily"
                  value="خیر"
                  v-model="form.jailforfamily"
                />
                <label class="radio-txt">خیر</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              name="Textarea"
              rows="8"
              v-model="form.jailforfamilydesc"
              placeholder="توضیحات"
            ></textarea>
          </div>
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="number"
            name="numofkids"
            placeholder="تعداد فرزندان تحت تکفل"
            v-model="form.kidstocare"
          />
          <input
            class="input-field"
            type="number"
            name="familynum"
            placeholder="تعداد اعضای خانواده"
            v-model="form.familymembers"
          />
          <input
            class="input-field"
            type="tel"
            name="staticphone"
            placeholder="شماره تلفن ثابت"
            v-model="form.permenantphone"
          />
          <input
            class="input-field"
            type="tel"
            name="mobilephone"
            placeholder="شماره همراه"
            v-model="form.cellphone"
          />
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>وضعیت مسکن</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="accomodation"
                  value="شخصی"
                  v-model="form.accomodation"
                />
                <label class="radio-txt">شخصی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="accomodation"
                  value="اجاره"
                  v-model="form.accomodation"
                />
                <label class="radio-txt">اجاره</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="accomodation"
                  value="سایر"
                  v-model="form.accomodation"
                />
                <label class="radio-txt">سایر</label>
              </div>
            </fieldset>
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="rent"
              placeholder="میزان اجاره بها"
              v-model="form.rent"
            />
            <input
              class="input-field"
              type="text"
              name="rent2"
              placeholder="میزان رهن"
              v-model="form.rahn"
            />
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              name="Textarea"
              rows="8"
              v-model="form.accomodationdesc"
              placeholder="توضیحات"
            ></textarea>
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="adrs"
              placeholder="آدرس منزل"
              v-model="form.address"
            />
            <input
              class="input-field"
              type="text"
              name="postcode"
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

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="otherorgsservs"
                  value="کمیته امداد"
                  v-model="form.otherorgsservs"
                />
                <label class="radio-txt">کمیته امداد</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="otherorgsservs"
                  value="بهزیستی"
                  v-model="form.otherorgsservs"
                />
                <label class="radio-txt">بهزیستی</label>
              </div>
            </fieldset>
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="others"
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
                placeholder="منبع کسب درآمد"
                v-model="form.incomesrc"
              />
              <input
                class="input-field"
                type="number"
                name="income"
                placeholder="میزان درآمد ماهانه به ریال"
                v-model="form.income"
              />
            </div>
            <div class="textarea-holder">
              <textarea
                class="textarea-input"
                name="Textarea"
                rows="8"
                v-model="form.skillsdesc"
                placeholder="توانمندی های شخصی متقاضی و نوع مهارت هایی که دارد"
              >
              </textarea>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>متقاضی به کدام یک از مهارت های زیر علاقمند است؟</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="آشپزی"
                  v-model="form.favskill"
                />
                <label class="radio-txt">آشپزی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="قنادی"
                  v-model="form.favskill"
                />
                <label class="radio-txt">قنادی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="بافندگی"
                  v-model="form.favskill"
                />
                <label class="radio-txt">بافندگی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="خیاطی"
                  v-model="form.favskill"
                />
                <label class="radio-txt">خیاطی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="حسابداری"
                  v-model="form.favskill"
                />
                <label class="radio-txt">حسابداری</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="فروشندگی"
                  v-model="form.favskill"
                />
                <label class="radio-txt">فروشندگی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="انبارداری"
                  v-model="form.favskill"
                />
                <label class="radio-txt">انبارداری</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="اشتغال خانگی"
                  v-model="form.favskill"
                />
                <label class="radio-txt">اشتغال خانگی</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="پرستاری سالمند"
                  v-model="form.favskill"
                />
                <label class="radio-txt">پرستاری سالمند</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="پرستاری کودک"
                  v-model="form.favskill"
                />
                <label class="radio-txt">پرستاری کودک</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="favskill"
                  value="کار خدماتی"
                  v-model="form.favskill"
                />
                <label class="radio-txt">کار خدماتی</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              name="Textarea"
              v-model="form.favskilldesc"
              rows="8"
              placeholder="توضیحات"
            >
            </textarea>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <input
              class="input-field"
              type="text"
              name="req"
              v-model="form.reqandgoal"
              placeholder="درخواست متقاضی از موسسه و هدف مراجعه"
            />
            <input
              class="input-field"
              type="text"
              name="statedur"
              v-model="form.stateduration"
              placeholder="مدت زمانی که در وضعیت فعلی قرار دارند"
            />
            <input
              class="input-field"
              type="text"
              name="mainproblems"
              v-model="form.mainissues"
              placeholder="اصلی ترین مشکلات موجود فعلی"
            />
          </div>
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            v-model="form.clientfullname"
            placeholder="نام و نام خانوادگی پرسشگر"
          />
          <input
            class="input-field"
            type="text"
            v-model="form.interviewer"
            placeholder="نام و نام خانوادگی متقاضی"
          />
          <div class="date-slop">
            <label class="date-label">تاریخ دریافت مدرک و تشکیل پرونده</label>
            <date-picker
              class="date-picker"
              name="Date"
              v-model="form.filegatheringdate"
            />
          </div>
        </section>
        <hr />
        <section>
          <div class="radio-box">
            <fieldset>
              <legend>با توجه به توضیحات داده شده نتایج زیر حاصل شد:</legend>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="drone"
                  v-model="form.results"
                  value="متقاضی از دسته زنان و خانواده های آسیب پدیر محسوب می
                  شود"
                />
                <label class="radio-txt"
                  >متقاضی از دسته زنان و خانواده های آسیب پدیر محسوب می
                  شود</label
                >
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="drone"
                  v-model="form.results"
                  value="متقاضی جویای کار"
                />
                <label class="radio-txt">متقاضی جویای کار</label>
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="drone"
                  v-model="form.results"
                  value="متقاضی جویای حمایت از سازمانهای حمایتی است"
                />
                <label class="radio-txt"
                  >متقاضی جویای حمایت از سازمانهای حمایتی است</label
                >
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="drone"
                  v-model="form.results"
                  value="متقاضی شرایط پذیرش در موسسه را دارد"
                />
                <label class="radio-txt"
                  >متقاضی شرایط پذیرش در موسسه را دارد</label
                >
              </div>

              <div class="radio-opt-2">
                <input
                  class="radio-input-2"
                  type="radio"
                  name="drone"
                  v-model="form.results"
                  value="ندارد"
                />
                <label class="radio-txt">ندارد</label>
              </div>
            </fieldset>
          </div>
          <div class="textarea-holder">
            <textarea
              class="textarea-input"
              v-model="form.followingsteps"
              name="Textarea"
              rows="8"
              placeholder="اقدامات انجام شده پس از اولین مراجعه"
            ></textarea>
          </div>
        </section>
        <hr />
        <section>
          <button class="thebtn" @click="submitform">ذخیره</button>
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
        familyaddict: "",
        familyaddictdesc: "",
        addictionprevent: "",
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
        favskilldesc: "",
        favskill: "",
        reqandgoal: "",
        stateduration: "",
        mainissues: "",
        clientfullname: "",
        interviewer: "",
        filegatheringdate: "",
        results: "",
        followingsteps: "",
        skillsdesc: "",
      },
    };
  },
  methods: {
    submitform() {
      let instance = axios.create();

      delete instance.defaults.headers.common["Accept"];
      delete instance.defaults.headers.common["X-Requested-With"];
      delete instance.defaults.headers.common["X-CSRF-TOKEN"];

      console.log({
        content: this.form,
        nationalno: this.nationalno,
      });
      instance
        .post("http://localhost:3000/forms/", {
          formcode: this.formcode,
          nationalno: this.nationalno,
          content: this.form,
        })
        .then((res) => {
          console.log(res.status);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.form-root {
  overflow: hidden;
  width: 100%;
  padding: 2%;
  margin: 0;
}

.form-paper {
  width: 100%;
  border: black 1px solid;
  padding: 20px;
  margin: 10px auto;
}

.paper-title {
  text-align: center;
  padding: 40px;
}

.form-fields {
  width: 100%;
  padding: 20px;
}

.input-field-2 {
  width: 200px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.textarea-holder {
  width: 100%;
}

.textarea-input {
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.thebtn {
  background-color: #006df3;
  margin: 20px 15px 10px;
  border-radius: 5px;
}

.date-picker {
  width: 60%;
}

@media (min-width: 800px) {
  .date-slop {
    width: 50%;
    float: right;
  }

  .input-field-2 {
    width: 200px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .date-label {
    width: 80px;
  }

  legend {
    font-size: 1rem;
  }

  .radio-opt-2 {
    float: right;
  }

  .radio-input-2 {
    width: 30px;
    padding: 5px;
  }

  .radio-txt {
    width: 270px;
  }
}
</style>

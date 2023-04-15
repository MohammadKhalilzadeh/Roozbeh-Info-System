<template>
  <div>
    <div class="widget-list">
      <h4>اطلاعات اولیه متقاضیان آموزش در مؤسسه خیریه روزبه</h4>
      <div class="all-field">
        <section>
          <label for="refdate">تاریخ مراجعه</label>
          <input class="input-field" type="date" name="Date" id="date" />
          <label for="refdate">تاریخ تولد</label>
          <input class="input-field" type="date" name="Date" id="date" />
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            name="Firstname"
            id="firstname"
            placeholder="نام متقاضی"
          />
          <input
            class="input-field"
            type="text"
            name="Lastname"
            id="lastname"
            placeholder="نام خانوادگی متقاضی"
          />
          <input
            class="input-field"
            type="text"
            name="Father"
            id="father"
            placeholder="نام پدر"
          />
          <input
            class="input-field"
            type="text"
            name="Nationalid"
            id="nationalid"
            placeholder="شماره ملی"
          />
          <input
            class="input-field"
            type="text"
            name="Edulevel"
            id="edulevel"
            placeholder="میزان تحصیلات"
          />
          <input
            class="input-field"
            type="text"
            name="major"
            id="major"
            placeholder="رشته تحصیلی"
          />
          <input
            class="input-field"
            type="text"
            name="Physicalstate"
            id="physicalstate"
            placeholder="وضعیت جسمانی"
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
                  value="سابقه بیماری روحی و روانی در خانواده"
                  checked
                />
                <label for="huey">سابقه بیماری روحی و روانی در خانواده</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="سابقه بیماری روحی و روانی مراجع"
                />
                <label for="dewey">سابقه بیماری روحی و روانی مراجع</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="سابقه مصرف دارو و بستری"
                />
                <label for="louie">سابقه مصرف دارو و بستری</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="سابقه سو مصرف مواد"
                />
                <label for="louie">سابقه سو مصرف مواد</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="تحت درمان متخصص اعصاب و روان"
                />
                <label for="louie">تحت درمان متخصص اعصاب و روان</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="سابقه خودکشی"
                />
                <label for="louie">سابقه خودکشی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="خودزنی"
                />
                <label for="louie">خودزنی</label>
              </div>

              <div class="radio-opt">
                <input
                  class="radio-input"
                  type="radio"
                  id="louie"
                  name="drone"
                  value="دگرزنی"
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
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
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
          />
          <input
            class="input-field"
            type="text"
            name="introlname"
            id="introlname"
            placeholder="نام خانوادگی معرف"
          />
          <input
            class="input-field"
            type="text"
            name="introphone"
            id="introphone"
            placeholder="شماره تماس"
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
                  checked
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
                />
                <label for="louie">سایر ارگانها</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
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
                />
                <label for="louie">سایر ارگانها</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
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
                />
                <label for="louie">میزان سواد</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="Fatherjob"
              id="fatherjob"
              placeholder="شغل فعلی پدر"
            />
            <input
              class="input-field"
              type="text"
              name="Fatherjobadrs"
              id="fatherjobadrs"
              placeholder="آدرس محل کار فعلی"
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
                  value="در حال طلاق"
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
                />
                <label for="louie">میزان سواد</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
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
                />
                <label for="louie">بدهکار</label>
              </div>
            </fieldset>
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
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
          />
          <input
            class="input-field"
            type="text"
            name="Spouselname"
            id="spouselname"
            placeholder="نام خانوادگی همسر"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseidno"
            id="spouseidno"
            placeholder="کد ملی همسر"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseedu"
            id="spouseedu"
            placeholder="میزان سواد همسر"
          />
          <input
            class="input-field"
            type="text"
            name="Spouseprejob"
            id="Spouseprejob"
            placeholder="شغل قبلی همسر"
          />
          <input
            class="input-field"
            type="text"
            name="Spousecrnjob"
            id="Spousecrnjob"
            placeholder="شغل فعلی همسر"
          />
          <input
            class="input-field"
            type="text"
            name="Spousejobadrs"
            id="spousejobadrs"
            placeholder="آدرس محل کار فعلی"
          />
          <label for="spousebirthdate">تاریخ تولد</label>
          <input class="input-field" type="date" name="Date" id="date" />
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
        </section>
        <hr />
        <section>
          <input
            class="input-field"
            type="text"
            name="numofkids"
            id="numofkinds"
            placeholder="تعداد فرزندان تحت تکفل"
          />
          <input
            class="input-field"
            type="text"
            name="familynum"
            id="familynum"
            placeholder="تعداد اعضای خانواده"
          />
          <input
            class="input-field"
            type="text"
            name="staticphone"
            id="staticphone"
            placeholder="شماره تلفن ثابت"
          />
          <input
            class="input-field"
            type="text"
            name="mobilephone"
            id="mobilephone"
            placeholder="شماره همراه"
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
            />
            <input
              class="input-field"
              type="text"
              name="rent2"
              id="rent2"
              placeholder="میزان رهن"
            />
          </div>
          <div class="input-field">
            <textarea name="Textarea" id="textarea" rows="8">توضیحات</textarea>
          </div>
          <div>
            <input
              class="input-field"
              type="text"
              name="adrs"
              id="adrs"
              placeholder="آدرس منزل"
            />
            <input
              class="input-field"
              type="text"
              name="postcode"
              id="postcode"
              placeholder="کد پستی"
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
              />
              <input
                class="input-field"
                type="text"
                name="income"
                id="income"
                placeholder="میزان درآمد ماهانه به ریال"
              />
            </div>
            <div class="input-field">
              <textarea name="Textarea" id="textarea" rows="8">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FQ12-01-00",
  data: () => {
    return {};
  },
  methods: {},
};
</script>

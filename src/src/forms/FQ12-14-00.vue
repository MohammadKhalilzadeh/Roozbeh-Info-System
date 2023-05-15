<template>
  <div class="form-root">
    <div class="form-paper">
      <div class="paper-title">
        <h4>رضایت سنجی دوره های آموزشی وخدمات حمایتی</h4>
      </div>
      <section class="sections">
        <div class="sections">
          <div class="date-slop">
            <label class="date-label">تاریخ تنظیم</label>
            <date-picker class="date-picker" v-model="form.setdate" />
          </div>
        </div>
        <div class="sections">
          <div class="section">
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام مددجو"
              v-model="form.cfname"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام خانوادگی مددجو"
              v-model="form.clname"
            />
            <input
              class="input-field"
              type="number"
              name="Name"
              id="name"
              placeholder="کد ملی"
              v-model="nationalno"
            />
            <input
              class="input-field"
              type="text"
              name="Name"
              id="name"
              placeholder="نام دوره آموزشی"
              v-model="form.course"
            />
          </div>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>رفتار مدیر آموزش با مددجو</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="relwithmngr"
                value="ضعیف"
                v-model="form.relwithmngr"
              />
              <label class="radio-txt">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="relwithmngr"
                value="متوسط"
                v-model="form.relwithmngr"
              />
              <label class="radio-txt">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="relwithmngr"
                value="خوب"
                v-model="form.relwithmngr"
              />
              <label class="radio-txt">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="relwithmngr"
                value="عالی"
                v-model="form.relwithmngr"
              />
              <label class="radio-txt">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>
              یرگزاری دوره ها مطابق با سر فصل های آموزشی تعریف شده
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                v-model="form.acrdingunits"
                name="acrdingunits"
                value="ضعیف"
              />
              <label for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                v-model="form.acrdingunits"
                name="acrdingunits"
                value="متوسط"
              />
              <label for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                v-model="form.acrdingunits"
                name="acrdingunits"
                value="خوب"
              />
              <label for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                v-model="form.acrdingunits"
                name="acrdingunits"
                value="عالی"
              />
              <label for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان علمی و کاربردی بودن دوره های برگزار شده</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                v-model="form.usefulcourses"
                name="usefulcourses"
                value="ضعیف"
              />
              <label class="radio-txt">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                v-model="form.usefulcourses"
                name="usefulcourses"
                value="متوسط"
              />
              <label class="radio-txt">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                v-model="form.usefulcourses"
                name="usefulcourses"
                value="خوب"
              />
              <label class="radio-txt">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                v-model="form.usefulcourses"
                name="usefulcourses"
                value="عالی"
              />
              <label class="radio-txt">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>توانایی مربی در انتقال اطلاعات و توضیحات</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="tutorquality"
                value="ضعیف"
                v-model="form.tutorquality"
              />
              <label class="radio-txt">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="tutorquality"
                value="متوسط"
                v-model="form.tutorquality"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="tutorquality"
                value="خوب"
                v-model="form.tutorquality"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="tutorquality"
                value="عالی"
                v-model="form.tutorquality"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>
              گشاده رویی مربیان و احترام بین همکاران و تکریم مددجو
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="respectfullness"
                value="ضعیف"
                v-model="form.respectfullness"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="respectfullness"
                value="متوسط"
                v-model="form.respectfullness"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="respectfullness"
                value="خوب"
                v-model="form.respectfullness"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="respectfullness"
                value="عالی"
                v-model="form.respectfullness"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>
              مناسب بودن میزان زمان تعریف شده برای دوره های آموزشی
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="properduration"
                v-model="form.properduration"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="properduration"
                v-model="form.properduration"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="properduration"
                v-model="form.properduration"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="properduration"
                v-model="form.properduration"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>مناسب بودن زیرساخت های آموزشی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="rightfrustructures"
                v-model="form.rightfrustructures"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="rightfrustructures"
                v-model="form.rightfrustructures"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="rightfrustructures"
                v-model="form.rightfrustructures"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="rightfrustructures"
                v-model="form.rightfrustructures"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان دسترسی به مدیران و مسئولان موسسه</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="accesstobosses"
                v-model="form.accesstobosses"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="accesstobosses"
                v-model="form.accesstobosses"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="accesstobosses"
                v-model="form.accesstobosses"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="accesstobosses"
                v-model="form.accesstobosses"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>
              تشویق و حمایت های معنوی در جمع، لوح تقدیر، جوایز نقدی و غیر نقدی
            </legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="bonuses"
                v-model="form.bonuses"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="bonuses"
                v-model="form.bonuses"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="bonuses"
                v-model="form.bonuses"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="bonuses"
                v-model="form.bonuses"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان حمایت های پزشکی ارائه شده از مددجو</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="medicalsupports"
                v-model="form.medicalsupports"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="medicalsupports"
                v-model="form.medicalsupports"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="medicalsupports"
                v-model="form.medicalsupports"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="medicalsupports"
                v-model="form.medicalsupports"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان بهبود حاصل شده از حمایت های پزشکی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="resultquality"
                v-model="form.resultquality"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="resultquality"
                v-model="form.resultquality"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="resultquality"
                v-model="form.resultquality"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="resultquality"
                v-model="form.resultquality"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان حمایت های پزشکی از خانواده مددجو</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="medicalsupportcosts"
                v-model="form.medicalsupportcosts"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="medicalsupportcosts"
                v-model="form.medicalsupportcosts"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="medicalsupportcosts"
                v-model="form.medicalsupportcosts"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="medicalsupportcosts"
                v-model="form.medicalsupportcosts"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان حمایت های جانبی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="sidesupports"
                v-model="form.sidesupports"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="sidesupports"
                v-model="form.sidesupports"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="sidesupports"
                v-model="form.sidesupports"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="sidesupports"
                v-model="form.sidesupports"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان حمایت های مالی و کمک هزینه تحصیلی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="edusupports"
                v-model="form.edusupports"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="edusupports"
                v-model="form.edusupports"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="edusupports"
                v-model="form.edusupports"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="edusupports"
                v-model="form.edusupports"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان پیشرفیت تحصیلی فرزندان مددجویان</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="eduprogress"
                v-model="form.eduprogress"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="eduprogress"
                v-model="form.eduprogress"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="eduprogress"
                v-model="form.eduprogress"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="eduprogress"
                v-model="form.eduprogress"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان حضور در اردوها و بازدیدها</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="presentintrips"
                v-model="form.presentintrips"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="presentintrips"
                v-model="form.presentintrips"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="presentintrips"
                v-model="form.presentintrips"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="presentintrips"
                v-model="form.presentintrips"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان حمایت های مشاوره‌ای و تاثیر آن بر زندگی شخصی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="consultanteffect"
                v-model="form.consultanteffect"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="consultanteffect"
                v-model="form.consultanteffect"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="consultanteffect"
                v-model="form.consultanteffect"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="consultanteffect"
                v-model="form.consultanteffect"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان ارائه آموزش های مهارت های زندگی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="lifelessons"
                v-model="form.lifelessons"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="lifelessons"
                v-model="form.lifelessons"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="lifelessons"
                v-model="form.lifelessons"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="lifelessons"
                v-model="form.lifelessons"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان حمایت های معیشتی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="financialaid"
                v-model="form.financialaid"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="financialaid"
                v-model="form.financialaid"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="financialaid"
                v-model="form.financialaid"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="financialaid"
                v-model="form.financialaid"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="radio-box">
          <fieldset>
            <legend>میزان خدمات رفاهی</legend>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="huey"
                name="refahservs"
                v-model="form.refahservs"
                value="ضعیف"
              />
              <label class="radio-txt" for="huey">ضعیف - 2</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="dewey"
                name="refahservs"
                v-model="form.refahservs"
                value="متوسط"
              />
              <label class="radio-txt" for="dewey">متوسط - 3</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="refahservs"
                v-model="form.refahservs"
                value="خوب"
              />
              <label class="radio-txt" for="louie">خوب - 4</label>
            </div>

            <div class="radio-opt-2">
              <input
                class="radio-input-2"
                type="radio"
                id="louie"
                name="refahservs"
                v-model="form.refahservs"
                value="عالی"
              />
              <label class="radio-txt" for="louie">عالی - 5</label>
            </div>
          </fieldset>
        </div>
      </section>
      <hr />
      <section class="sections">
        <div class="sections">
          <input
            class="input-field"
            type="text"
            placeholder="درصد رضایت مددجو"
            v-model="form.satisfaction"
          />
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="توضیحات"
            class="textarea-input"
            v-model="form.desc"
            name="Textarea"
            id="textarea"
            rows="2"
          ></textarea>
        </div>
        <div class="textarea-holder">
          <textarea
            placeholder="تحلیل نتیجه بدست آمده"
            class="textarea-input"
            v-model="form.result"
            name="Textarea"
            id="textarea"
            rows="2"
          >
          </textarea>
        </div>
      </section>
      <hr />
      <section class="sections">
        <button class="thebtn" @click="submitForm">ذخیره</button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FQ12-14-00",
  data: () => {
    return {
      formcode: "FQ12-14-00",
      nationalno: "",
      form: {
        setdate: "",
        cfname: "",
        clname: "",
        course: "",
        relwithmngr: "",
        acrdingunits: "",
        usefulcourses: "",
        tutorquality: "",
        respectfullness: "",
        properduration: "",
        rightfrustructures: "",
        accesstobosses: "",
        bonuses: "",
        medicalsupports: "",
        resultquality: "",
        medicalsupportcosts: "",
        sidesupports: "",
        edusupports: "",
        eduprogress: "",
        presentintrips: "",
        consultanteffect: "",
        lifelessons: "",
        financialaid: "",
        refahservs: "",
        satisfaction: "",
        desc: "",
        result: "",
      },
    };
  },
  methods: {
    submitForm() {
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

<style>
.paper-templ {
  direction: rtl;
  margin: 20px;
  padding: 3%;
  border: #02b075 2px solid;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.widget-list {
  direction: rtl;
  margin: 5%;
  width: 90%;
  padding: 3%;
  border: solid 1px #02b075;
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

.text-holder {
  padding: 3%;
}

.date-picker {
  width: 60%;
}
</style>

<template>
  <div class="about">
    <input type="button" value="FQ12-06/00" @click="openModals" class="btns" />
    <div v-if="myModel">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" @click="myModel = false">
                    <span>&times;</span>
                  </button>
                  <h4 class="modal-title">{{ dynamicTitle }}</h4>
                </div>
                <div class="modal-body">
                  <div class="from-group">
                    <div class="widget-list">
                      <h2>آشنایی با دوره های آموزشی مؤسسه خیریه روزبه</h2>
                      <h3>FQ12-06/00</h3>
                      <div class="table-holder">
                        <table>
                          <tr>
                            <th>ردیف</th>
                            <th>آشپزی</th>
                            <th>آشپزی</th>
                            <th>قنادی</th>
                            <th>خیاطی</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              آشنایی با مواد اولیه و شرایط نگهداری دستگاه ها
                            </td>
                            <td>آشنایی با شرایط نگهداری مواد غذایی</td>
                            <td>
                              آشنایی با مواد اولیه و شرایط نگهداری دستگاه ها
                            </td>
                            <td>آشنایی با دستگاه ها و ابزار خیاطی</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              آشنایی با مواد اولیه و شرایط نگهداری دستگاه ها
                            </td>
                            <td>آشنایی با شرایط نگهداری مواد غذایی</td>
                            <td>
                              آشنایی با مواد اولیه و شرایط نگهداری دستگاه ها
                            </td>
                            <td>آشنایی با دستگاه ها و ابزار خیاطی</td>
                          </tr>
                        </table>
                      </div>
                      <div class="details-form">
                        <input
                          class="input-field"
                          type="text"
                          name="firstname"
                          placeholder="نام"
                          v-model="firstname"
                        />
                        <input
                          class="input-field"
                          type="text"
                          name="lastname"
                          placeholder="نام خانوادگی"
                          v-model="lastname"
                        />
                        <input
                          class="input-field"
                          type="text"
                          name="father"
                          placeholder="نام پدر"
                          v-model="father"
                        />
                        <input
                          class="input-field"
                          type="text"
                          name="nationalid"
                          placeholder="شماره ملی"
                          v-model="nationalid"
                        />
                        <input
                          class="input-field"
                          type="text"
                          name="edudep"
                          placeholder="واحد آموزشی"
                          v-model="edudept"
                        />
                      </div>
                      <div class="form-txt">
                        <p>
                          اینجانب
                          {{ firstname }}
                          {{ lastname }}
                          فرزند
                          {{ father }}
                          به شماره ملی
                          {{ nationalid }}
                          با مطالعه و اطلاع کامل سر فصل های آموزشی موسسه خیریه
                          روزبه، مایلم در واحد آموزشی
                          {{ edudept }}
                          مشغول به یادگیری و مهارت آموزی شوم.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <input type="button" value="FQ12-04/00" @click="openModals" class="btns" />
    <div v-if="myModel2">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" @click="myModel2 = false">
                    <span>&times;</span>
                  </button>
                  <h4 class="modal-title">{{ dynamicTitle }}</h4>
                </div>
                <div class="modal-body">
                  <div class="from-group">
                    <div class="widget-list">
                      <h2>لیست معرفی به اشتغال مددجویان پس از ترخیص</h2>
                      <h3>LQ12-04/00</h3>
                      <div class="details-form">
                        <input
                          class="input-field"
                          type="text"
                          name="firstname"
                          placeholder="نام مددجو"
                        />
                        <input
                          class="input-field"
                          type="text"
                          name="lastname"
                          placeholder="نام خانوادگی مددجو"
                        />
                        <input
                          class="input-field"
                          type="text"
                          name="edudept"
                          placeholder="واحد آموزشی"
                        />
                        <input
                          class="input-field"
                          type="date"
                          name="Date"
                          id="date"
                        />
                        <input
                          class="input-field"
                          type="date"
                          name="Date"
                          id="date"
                        />
                      </div>
                      <div class="table-holder">
                        <table>
                          <tr>
                            <th>1</th>
                            <th>تاریخ معرفی</th>
                            <th>محل اشتغال</th>
                            <th>توضیحات</th>
                          </tr>
                          <tr>
                            <td>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Corrupti, id.
                            </td>
                            <td>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Obcaecati, soluta.
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Tempora, recusandae.
                            </td>
                            <td>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Ad deleniti amet voluptatibus
                              quas, dicta debitis?
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      myModel: false,
      actionButton: "Insert",
      dynamicTitle: "Testing Modal for Forms",
    };
  },
  methods: {
    openModals() {
      this.myModel = true;
    },
  },
};
</script>

<style>
.about {
  padding: 5%;
}

.modal-content {
  direction: rtl;
  margin: 5%;
  width: 90%;
  padding: 3%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

.widget-list,
.btns {
  direction: rtl;
  margin: 5%;
  width: 90%;
  padding: 3%;
  border: solid 1px #0b9fc2;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

.table-holder {
  align-content: center;
  width: 100%;
  padding: 2%;
}

td {
  padding: 30px;
  word-wrap: break-word;
}

.details-form {
  width: 100%;
  padding: 2%;
}

.btns {
  width: 200px;
  padding: 1%;
  margin: 20px 30px;
}
</style>

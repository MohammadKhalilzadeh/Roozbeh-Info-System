<template>
  <div class="root">
    <div class="customer-forms">
      <button class="toggler" @click="openModals">FQ12-01/00</button>
      <div v-if="my01Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my01Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120100></FQ120100>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals2">FQ12-02/00</button>
      <div v-if="my02Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my02Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120200></FQ120200>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals3">FQ12-03/00</button>
      <div v-if="my03Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my03Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120300></FQ120300>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals5">FQ12-05/00</button>
      <div v-if="my05Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my05Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120500></FQ120500>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals6">FQ12-06/00</button>
      <div v-if="my06Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my06Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120600></FQ120600>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals7">FQ12-07/00</button>
      <div v-if="my07Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my07Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120700></FQ120700>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals8">FQ12-08/00</button>
      <div v-if="my08Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my08Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120800></FQ120800>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- <button class="toggler" @click="openModals10">FQ12-10/00</button>
      <div v-if="my10Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my10Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121000></FQ121000>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div> -->

      <button class="toggler" @click="openModals11">FQ12-11/00</button>
      <div v-if="my11Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my11Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121100></FQ121100>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals12">FQ12-12/00</button>
      <div v-if="my12Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my12Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121200></FQ121200>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals13">FQ12-13/00</button>
      <div v-if="my13Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my13Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121300></FQ121300>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals14">FQ12-14/00</button>
      <div v-if="my14Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my14Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121400></FQ121400>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals15">FQ12-15/00</button>
      <div v-if="my15Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my15Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121500></FQ121500>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals16">FQ12-16/00</button>
      <div v-if="my16Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my16Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121600></FQ121600>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals18">FQ12-18/00</button>
      <div v-if="my18Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my18Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ121800></FQ121800>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="toggler" @click="openModals20">FQ12-20/00</button>
      <div v-if="my20Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my20Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ122000></FQ122000>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <hr />
    <div class="client-maker">
      <input
        class="input-field"
        type="text"
        placeholder="کد ملی"
        v-model="form.nationalno"
      />
      <button class="toggler" @click="createClient">ایجاد متقاضی</button>
    </div>
    <hr />
    <div class="client-maker search-bar">
      <input
        class="input-field"
        type="text"
        placeholder="جست و جو با کد ملی"
        v-model="search"
        @keyup="searchit"
      />
    </div>
    <hr />

    <div class="client-list">
      <div v-if="!state.nosearch && state.searchResults.length > 0">
        <div
          class="the-tile"
          v-for="(i, index) in searchedclientsforms"
          :key="index"
        >
          <div class="tile-header">
            <h4>کد ملی متقاضی: {{ i.nationalno }}</h4>
          </div>
          <div class="your-forms">
            <button
              @click="openForms(f.formcode, f._id)"
              class="toggler"
              v-for="(f, index) in i.forms"
              :key="index"
            >
              {{ f.formcode }}
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="searchedclientsforms.length == 0 && search.length == 0">
        <div class="the-tile" v-for="(i, index) in clientsforms" :key="index">
          <div class="tile-header">
            <h4>کد ملی متقاضی: {{ i.nationalno }}</h4>
          </div>
          <div class="your-forms">
            <button
              @click="openForms(f.formcode, f._id)"
              class="toggler"
              v-for="(f, index) in i.forms"
              :key="index"
            >
              {{ f.formcode }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FQ120100 from "@/forms/FQ12-01-00.vue";
import FQ120200 from "@/forms/FQ12-02-00.vue";
import FQ120300 from "@/forms/FQ12-03-00.vue";
import FQ120500 from "@/forms/FQ12-05-00.vue";
import FQ120600 from "@/forms/FQ12-06-00.vue";
import FQ120700 from "@/forms/FQ12-07-00.vue";
import FQ120800 from "@/forms/FQ12-08-00.vue";
// import FQ121000 from "@/forms/FQ12-10-00.vue";
import FQ121100 from "@/forms/FQ12-11-00.vue";
import FQ121200 from "@/forms/FQ12-12-00.vue";
import FQ121300 from "@/forms/FQ12-13-00.vue";
import FQ121400 from "@/forms/FQ12-14-00.vue";
import FQ121500 from "@/forms/FQ12-15-00.vue";
import FQ121600 from "@/forms/FQ12-16-00.vue";
import FQ121800 from "@/forms/FQ12-18-00.vue";
import FQ122000 from "@/forms/FQ12-20-00.vue";
// import router from "@/router";
import axios from "axios";

export default {
  name: "MadadKari",
  data() {
    return {
      listofclients: [],
      clientsforms: [],
      searchedclientsforms: [],
      search: "",
      state: {
        searchResults: [],
        nosearch: true,
      },
      form: {
        nationalno: "",
      },
      my01Model: false,
      my02Model: false,
      my03Model: false,
      my05Model: false,
      my06Model: false,
      my07Model: false,
      my08Model: false,
      // my10Model: false,
      my11Model: false,
      my12Model: false,
      my13Model: false,
      my14Model: false,
      my15Model: false,
      my16Model: false,
      my18Model: false,
      my20Model: false,
      actionButton: "Insert",
    };
  },
  components: {
    FQ120100,
    FQ120200,
    FQ120300,
    FQ120500,
    FQ120600,
    FQ120700,
    FQ120800,
    // FQ121000,
    FQ121100,
    FQ121200,
    FQ121300,
    FQ121400,
    FQ121500,
    FQ121600,
    FQ121800,
    FQ122000,
  },
  methods: {
    async searchit() {
      this.state.searchResults = [];
      this.searchedclientsforms = [];
      let url = "http://localhost:3000/clients/boss/search";
      await axios
        .post(url, { search: this.search })
        .then((res) => {
          if (this.search === "") {
            this.state.nosearch = true;
            return;
          }
          this.state.nosearch = false;
          this.state.searchResults = res.data.map((product) => product);
        })
        .catch((err) => {
          console.log(err);
        });

      this.state.searchResults.forEach(async (element) => {
        await axios
          .get("http://localhost:3000/forms/madadkari/" + element.nationalno)
          .then((response) => {
            if (response.status == 200) {
              this.searchedclientsforms.push({
                nationalno: element.nationalno,
                forms: response.data,
              });
            } else {
              alert("خطا در پردازش درخواست");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    openModals() {
      this.my01Model = true;
    },
    openModals2() {
      this.my02Model = true;
    },
    openModals3() {
      this.my03Model = true;
    },
    openModals5() {
      this.my05Model = true;
    },
    openModals6() {
      this.my06Model = true;
    },
    openModals7() {
      this.my07Model = true;
    },
    openModals8() {
      this.my08Model = true;
    },
    // openModals10() {
    //   console.log("works");
    //   this.my10Model = true;
    // },
    openModals11() {
      this.my11Model = true;
    },
    openModals12() {
      this.my12Model = true;
    },
    openModals13() {
      this.my13Model = true;
    },
    openModals14() {
      this.my14Model = true;
    },
    openModals15() {
      this.my15Model = true;
    },
    openModals16() {
      this.my16Model = true;
    },
    openModals18() {
      this.my18Model = true;
    },
    openModals20() {
      this.my20Model = true;
    },
    async createClient() {
      console.log(this.form);
      await axios
        .post("http://localhost:3000/clients", this.form)
        .then((response) => {
          if (response.status == 200) {
            alert("متقاضی با موفقیت افزوده شد");
          } else {
            alert("ناموفق در ایجاد متقاضی جدید");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openForms(formname, formid) {
      if (formname == "FQ12-01-00") {
        this.$router.push("/userpanel/madadkhari/fq120100/" + formid);
      }
      if (formname == "FQ12-02-00") {
        this.$router.push("/userpanel/madadkhari/fq120200/" + formid);
      }
      if (formname == "FQ12-03-00") {
        this.$router.push("/userpanel/madadkhari/fq120300/" + formid);
      }
      if (formname == "FQ12-05-00") {
        this.$router.push("/userpanel/madadkhari/fq120500/" + formid);
      }
      if (formname == "FQ12-06-00") {
        this.$router.push("/userpanel/madadkhari/fq120600/" + formid);
      }
      if (formname == "FQ12-07-00") {
        this.$router.push("/userpanel/madadkhari/fq120700/" + formid);
      }
      if (formname == "FQ12-08-00") {
        this.$router.push("/userpanel/madadkhari/fq120800/" + formid);
      }
      if (formname == "FQ12-11-00") {
        this.$router.push("/userpanel/madadkhari/fq121100/" + formid);
      }
      if (formname == "FQ12-12-00") {
        this.$router.push("/userpanel/madadkhari/fq121200/" + formid);
      }
      if (formname == "FQ12-13-00") {
        this.$router.push("/userpanel/madadkhari/fq121300/" + formid);
      }
      if (formname == "FQ12-14-00") {
        this.$router.push("/userpanel/madadkhari/fq121400/" + formid);
      }
      if (formname == "FQ12-15-00") {
        this.$router.push("/userpanel/madadkhari/fq121500/" + formid);
      }
      if (formname == "FQ12-16-00") {
        this.$router.push("/userpanel/madadkhari/fq121600/" + formid);
      }
      if (formname == "FQ12-18-00") {
        this.$router.push("/userpanel/madadkhari/fq121800/" + formid);
      }
      if (formname == "FQ12-20-00") {
        this.$router.push("/userpanel/madadkhari/fq122000/" + formid);
      }
    },
  },
  async created() {
    await axios
      .get("http://localhost:3000/clients")
      .then((response) => {
        if (response.status == 200) {
          this.listofclients = response.data;
        } else {
          alert("خطا در پردازش درخواست");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    this.listofclients.forEach(async (element) => {
      await axios
        .get("http://localhost:3000/forms/madadkari/" + element.nationalno)
        .then((response) => {
          this.clientsforms.push({
            nationalno: element.nationalno,
            forms: response.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>

<style>
.root {
  padding: 5%;
}

.customer-forms,
.client-maker,
.the-tile {
  width: 100%;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}

.search-bar {
  align-items: center;
  text-align: center;
}

.the-tile {
  text-align: center;
  padding: 3%;
}

.toggler {
  background-color: #006df3;
  margin: 20px 15px 10px;
  border-radius: 5px;
}

.close {
  background-color: #f30000;
  color: #fff;
}
</style>

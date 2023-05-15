<template>
  <div class="root">
    <div class="customer-forms">
      <button class="toggler" @click="openModals24">FQ12-24/00</button>
      <div v-if="my24Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my24Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ122400></FQ122400>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <hr />
    <div class="client-maker search-bar">
      <input
        class="input-field"
        type="text"
        placeholder="جست و جو با کد ملی"
        v-model="search"
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
import FQ122400 from "@/forms/FQ12-24-00.vue";
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
      my24Model: false,
      actionButton: "Insert",
    };
  },
  components: {
    FQ122400,
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
          .get("http://localhost:3000/forms/educator/" + element.nationalno)
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
    openModals24() {
      console.log("works");
      this.my24Model = true;
    },
    openForms(formname, formid) {
      if (formname == "FQ12-24-00") {
        this.$router.push("/userpanel/education/fq122400/" + formid);
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
        .get("http://localhost:3000/forms/educator/" + element.nationalno)
        .then((response) => {
          if (response.status == 200) {
            this.clientsforms.push({
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
};
</script>

<style>
.root {
  padding: 5%;
}

.customer-forms,
.the-tile {
  width: 100%;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
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

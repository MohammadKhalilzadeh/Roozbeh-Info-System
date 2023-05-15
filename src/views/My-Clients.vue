<template>
  <div class="clients-home">
    <div class="search-users">
      <input
        class="input-field"
        type="text"
        placeholder="یافتن متقاضی"
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
      <div v-else>
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
import axios from "axios";

export default {
  name: "UserManage",
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
    };
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
          .get("http://localhost:3000/forms/boss/" + element.nationalno)
          .then((response) => {
            this.searchedclientsforms.push({
              nationalno: element.nationalno,
              forms: response.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    openForms(formname, formid) {
      if (formname == "FQ12-13-00") {
        this.$router.push("/director/clients/fq121300/" + formid);
      }
      if (formname == "FQ12-14-00") {
        this.$router.push("/director/clients/fq121400/" + formid);
      }
    },
  },
};
</script>

<style>
.clients-home {
  direction: rtl;
  padding: 30px;
}

.search-users {
  width: 90%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px auto;
  padding: 30px;
  align-items: center;
  text-align: center;
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

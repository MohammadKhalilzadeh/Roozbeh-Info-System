<template>
  <div class="about">
    <div class="forms-list">
      <button @click="openModals23">FQ12-23/00</button>
      <div v-if="my23Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my23Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ122300></FQ122300>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button @click="openModals24">FQ12-24/00</button>
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
  </div>
</template>

<script>
import FQ122300 from "@/forms/FQ12-23-00.vue";
import FQ122400 from "@/forms/FQ12-24-00.vue";

export default {
  name: "MadadKari",
  data() {
    return {
      my23Model: false,
      my24Model: false,
      actionButton: "Insert",
    };
  },
  components: {
    FQ122300,
    FQ122400,
  },
  methods: {
    openModals23() {
      console.log("works");
      this.my23Model = true;
    },
    openModals24() {
      console.log("works");
      this.my24Model = true;
    },
  },
};
</script>

<style>
.forms-list {
  width: 96%;
  margin: 30px auto;
  padding: 3%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button {
  margin: 20px 10px;
}

.modal-content {
  margin: 2%;
  width: 96%;
}
</style>

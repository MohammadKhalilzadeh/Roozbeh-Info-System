<template>
  <div class="about">
    <div class="forms-list">
      <button @click="openModals9">FQ12-09/00</button>
      <div v-if="my09Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my09Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120900></FQ120900>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- <button @click="openModals21">FQ12-21/00</button>
      <div v-if="my21Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my21Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ122100></FQ122100>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div> -->

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
    </div>
  </div>
</template>

<script>
import FQ120900 from "@/forms/FQ12-09-00.vue";
// import FQ122100 from "@/forms/FQ12-21-00.vue";
import FQ122300 from "@/forms/FQ12-23-00.vue";

export default {
  name: "MadadKari",
  data() {
    return {
      my09Model: false,
      //   my21Model: false,
      my23Model: false,
      actionButton: "Insert",
    };
  },
  components: {
    FQ120900,
    // FQ122100,
    FQ122300,
  },
  methods: {
    openModals9() {
      console.log("works");
      this.my09Model = true;
    },
    // openModals21() {
    //   console.log("works");
    //   this.my21Model = true;
    // },
    openModals23() {
      console.log("works");
      this.my23Model = true;
    },
  },
};
</script>

<style>
.forms-list {
  width: 96%;
  margin: 30px auto;
  padding: 3%;
  border: 2px solid #0b9fc2;
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

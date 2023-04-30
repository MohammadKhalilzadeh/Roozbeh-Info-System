<template>
  <div class="about">
    <div class="forms-list">
      <button @click="openModals4">FQ12-04/00</button>
      <div v-if="my04Model">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      @click="my04Model = false"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FQ120400></FQ120400>
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
import FQ120400 from "@/forms/FQ12-04-00.vue";

export default {
  name: "MadadKari",
  data() {
    return {
      my04Model: false,
      actionButton: "Insert",
    };
  },
  components: {
    FQ120400,
  },
  methods: {
    openModals4() {
      console.log("works");
      this.my04Model = true;
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

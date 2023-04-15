<template>
  <div class="about">
    <div class="forms-list">
      <button @click="openModals">FQ12-01/00</button>
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

      <button @click="openModals2">FQ12-02/00</button>
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

      <button @click="openModals3">FQ12-03/00</button>
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

      <button @click="openModals5">FQ12-05/00</button>
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

      <button @click="openModals6">FQ12-06/00</button>
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

      <button>FQ12-07/00</button>
      <button>FQ12-08/00</button>

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

      <button @click="openModals10">FQ12-10/00</button>
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
      </div>

      <button @click="openModals11">FQ12-11/00</button>
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

      <button @click="openModals12">FQ12-12/00</button>
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

      <button @click="openModals13">FQ12-13/00</button>
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

      <button>FQ12-14/00</button>

      <button @click="openModals15">FQ12-15/00</button>
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

      <button @click="openModals16">FQ12-16/00</button>
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

      <button @click="openModals18">FQ12-18/00</button>
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

      <button @click="openModals20">FQ12-20/00</button>
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

      <button>FQ12-14/00</button>
      <button>FQ12-14/00</button>
    </div>
  </div>
</template>

<script>
import FQ120100 from "@/forms/FQ12-01-00.vue";
import FQ120200 from "@/forms/FQ12-02-00.vue";
import FQ120300 from "@/forms/FQ12-03-00.vue";
import FQ120400 from "@/forms/FQ12-04-00.vue";
import FQ120500 from "@/forms/FQ12-05-00.vue";
import FQ120600 from "@/forms/FQ12-06-00.vue";
import FQ120900 from "@/forms/FQ12-09-00.vue";
import FQ121000 from "@/forms/FQ12-10-00.vue";
import FQ121100 from "@/forms/FQ12-11-00.vue";
import FQ121200 from "@/forms/FQ12-12-00.vue";
import FQ121300 from "@/forms/FQ12-13-00.vue";
import FQ121500 from "@/forms/FQ12-15-00.vue";
import FQ121600 from "@/forms/FQ12-16-00.vue";
import FQ121800 from "@/forms/FQ12-18-00.vue";
import FQ122000 from "@/forms/FQ12-20-00.vue";
import FQ122300 from "@/forms/FQ12-23-00.vue";
import FQ122400 from "@/forms/FQ12-24-00.vue";

export default {
  name: "MadadKari",
  data() {
    return {
      my01Model: false,
      my02Model: false,
      my03Model: false,
      my04Model: false,
      my05Model: false,
      my06Model: false,
      my09Model: false,
      my10Model: false,
      my11Model: false,
      my12Model: false,
      my13Model: false,
      my15Model: false,
      my16Model: false,
      my18Model: false,
      my20Model: false,
      my23Model: false,
      my24Model: false,
      actionButton: "Insert",
    };
  },
  components: {
    FQ120100,
    FQ120200,
    FQ120300,
    FQ120400,
    FQ120500,
    FQ120600,
    FQ120900,
    FQ121000,
    FQ121100,
    FQ121200,
    FQ121300,
    FQ121500,
    FQ121600,
    FQ121800,
    FQ122000,
    FQ122300,
    FQ122400,
  },
  methods: {
    openModals() {
      console.log("works");
      this.my01Model = true;
    },
    openModals2() {
      console.log("works");
      this.my02Model = true;
    },
    openModals3() {
      console.log("works");
      this.my03Model = true;
    },
    openModals4() {
      console.log("works");
      this.my04Model = true;
    },
    openModals5() {
      console.log("works");
      this.my05Model = true;
    },
    openModals6() {
      console.log("works");
      this.my06Model = true;
    },
    openModals9() {
      console.log("works");
      this.my09Model = true;
    },
    openModals10() {
      console.log("works");
      this.my10Model = true;
    },
    openModals11() {
      console.log("works");
      this.my11Model = true;
    },
    openModals12() {
      console.log("works");
      this.my12Model = true;
    },
    openModals13() {
      console.log("works");
      this.my13Model = true;
    },
    openModals15() {
      console.log("works");
      this.my15Model = true;
    },
    openModals16() {
      console.log("works");
      this.my16Model = true;
    },
    openModals18() {
      console.log("works");
      this.my18Model = true;
    },
    openModals20() {
      console.log("works");
      this.my20Model = true;
    },
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

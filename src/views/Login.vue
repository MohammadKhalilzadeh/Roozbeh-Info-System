<template>
  <div class="root">
    <div class="inputs-box">
      <div class="box-row">
        <input class="input-field" type="text" placeholder="Username" />
      </div>
      <div class="box-row">
        <input class="input-field" type="text" placeholder="Password" />
      </div>
      <div class="box-row">
        <button>CEO Login</button>
      </div>
      <div class="box-row">
        <button>Staff Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => {
    return {};
  },
};
</script>

<style>
.inputs-box {
  width: 500px;
  margin: 30px auto;
  padding: 3%;
  border: 2px solid #0b9fc2;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.box-row {
  width: 90%;
  margin: 10px auto;
}

.input-field {
  width: 350px;
  margin: 10px auto;
}

button {
  margin: 10px auto;
}
</style>

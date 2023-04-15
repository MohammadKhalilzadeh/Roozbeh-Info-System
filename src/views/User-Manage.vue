<template>
  <div class="home">
    <div class="user-ops">
      <input
        class="input-field"
        type="text"
        name="firstname"
        id="firstname"
        placeholder="نام همکار"
      />
      <input
        class="input-field"
        type="text"
        name="lastname"
        id="lastname"
        placeholder="نام خانوادگی همکار"
      />
      <input
        class="input-field"
        type="text"
        name="username"
        id="username"
        placeholder="نام کاربری"
      />
      <input
        class="input-field"
        type="text"
        name="password"
        id="password"
        placeholder="رمزعبور"
      />
      <select class="input-field" name="cars" id="cars">
        <option value="volv">Option 1</option>
        <option value="saab">Option 2</option>
        <option value="opel">Option 3</option>
        <option value="audi">Option 4</option>
      </select>
      <button>ایجاد</button>
    </div>
    <hr />
    <div class="employees-list">
      <table>
        <tr>
          <th>ردیف</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>نام کاربری</th>
          <th>عملیات</th>
        </tr>
        <tr>
          <td>0</td>
          <td>محمد</td>
          <td>خلیل زاده</td>
          <td>mohammadkh</td>
          <td>
            <button class="delete">حذف</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserManage",
  data: () => ({}),
};
</script>

<style>
.home {
  direction: rtl;
  padding: 5%;
}

.user-ops {
  width: 500px;
  border: 1px solid #0b9fc2;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 40px auto;
  padding: 3%;
}

input {
  width: 300px;
  text-align: start;
  margin: 10px auto;
}

button {
  width: 150px;
  background-color: #0b9fc2;
  color: white;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.employees-list {
  width: 800px;
  padding: 3%;
  margin: 30px auto;
  border: solid 2px #0b9fc2;
  border-radius: 15px;
}

.delete {
  background-color: #c2140b;
}
</style>

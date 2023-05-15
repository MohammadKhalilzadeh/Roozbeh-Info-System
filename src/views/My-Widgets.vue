<template>
  <div class="widget-list">
    <input
      class="input-field"
      type="text"
      name="Name"
      id="name"
      placeholder="Text Field Name"
    />
    <input class="input-field" type="date" name="Date" id="date" />
    <input class="input-field" type="time" name="Time" id="time" />

    <select class="input-field" name="cars" id="cars">
      <option value="volv">Option 1</option>
      <option value="saab">Option 2</option>
      <option value="opel">Option 3</option>
      <option value="audi">Option 4</option>
    </select>

    <div id="radio-box">
      <fieldset>
        <legend>Select from below:</legend>

        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Option 1</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Option 2</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Option 3</label>
        </div>
      </fieldset>
    </div>

    <div class="input-field">
      <textarea name="Textarea" id="textarea" rows="8"></textarea>
    </div>

    <div class="input-field table">
      <table>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>February</td>
          <td>$80</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
};
</script>

<style>
.widget-list {
  margin: 5%;
  width: 90%;
  padding: 3%;
  border: #18191b;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.input-field,
#radio-box {
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 15px 20px;
}

textarea {
  width: 98%;
  margin: 20px 1%;
}

p,
label {
  font: 1rem "Fira Sans", sans-serif;
}

input {
  margin: 0.4rem;
}

.table {
  width: 90%;
}

table,
th,
td {
  border: 1px solid #0b9fc2;
}
</style>

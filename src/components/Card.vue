<template>
  <div class="container pt-5">
    <nav>
      <transition name="fade" mode="out-in">
        <i
          class="material-icons menu"
          v-if="!show"
          @click="show = !show"
          key="menu"
          >menu</i
        >
        <i class="material-icons clear" v-else @click="show = !show" key="clear"
          >clear</i
        >
      </transition>
      <transition name="fade">
        <ul v-if="show">
          <li v-for="item in items" v-bind:key="item">{{ item }}</li>
        </ul>
      </transition>
    </nav>
    <div class="row mb-3">
      <div class="col">
        <h1>Issyk-Kul travel</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="search">Find your travel</label>
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="Tour, name ..."
          />
        </div>

        <hr />

        <ul class="list-group">
          <li class="list-group-item list-group-item-action pointer">12345</li>
          <li class="list-group-item list-group-item-action pointer">12345</li>
          <li class="list-group-item list-group-item-action pointer">12345</li>
        </ul>
      </div>
      <div class="col-md-8 pt-3">
        <div class="row">
          <div class="col-md-5">
            <h2>Ken-Suu</h2>
            <img src="../assets/logo.png" alt="" class="rounded detailed-car-image">
          </div>
          <div class="col-md-7 pt-5">
            <h5>car details</h5>

            <ul>
              <li>Model - <strong>Focus</strong></li>
              <li>Year - <strong>2020</strong></li>
              <li>Owner - <strong>Max</strong></li>
            </ul>
            <p>+996703960077</p>

            <button class="btn btn-outline-success mr-3">Show phone</button>

            <button class="btn btn-primery">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: () => ({
    items: ["Home", "About", "Blog", "Map", "Contacts"],
    show: false
  })
};
</script>
<style scoped>
.container {
  width: 900px;
  background: #2ddb61;
  color: #fff;
}
.detailed-car-image{
  height: 200px;
}
.pointer{
  cursor: pointer;
}
</style>

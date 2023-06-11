<template>
  <div class="main-container">
    <h1>Product List</h1>
    <Display/>
  </div>
</template>

<script>
import Display from "../components/Display.vue";
export default {
  name: "ProductListView",
  components:{
    Display
  }

}
</script>

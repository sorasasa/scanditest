<template>
  <div class="main-container">
    <h1>Add a product:</h1>
    <ProductForm/>
  </div>
</template>
<script>
import ProductForm from "../components/ProductForm.vue"
export default {
  name:"AddView",
  components: {
    ProductForm
  }
}
</script>



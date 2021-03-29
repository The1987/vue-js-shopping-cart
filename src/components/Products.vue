<template>
  <!-- PRODUCT GRID -->
  <div id="products_section" class="grid-container">
    <!-- <AddItem @add-item='$emit("add-to-cart", addItem)' title='My Amazing Product Title' price="$25.00" quantity=1 /> -->
    <!-- PRODUCT DETAILS -->
    <!-- PRODUCT TITLE -->
    <div class="grid-item item1">
       <h2>{{ title }}</h2>
    </div>

    <!-- PRODUCT IMAGE -->
    <!-- <div class="grid-item item2">
      <img :src="producImage" />
    </div> -->

    <!-- PRODUCT ATTRIBUTES -->
    <div class="grid-item item3">
      <h3>Price: {{ price }}</h3>
      <h3>Quantity: {{ quantity }}</h3>
    </div>

    <!-- CART BUTTONS -->
    <div class="grid-item item4">
      <Button
        @click="addToCart()"
        id="add_to_cart_id"
        class="buttons"
        text="Add To Cart"
        color="green"
      />
      <!-- @click="$store.commit('addToCart')" -->
      <br />
      <Button
        id="clear_cart_id"
        class="buttons"
        text="Clear Cart"
        color="red"
      />
    </div>
  </div>
</template>

<script>
import '../../public/style/style.scss'
import Button from "../components/Button"


export default {
  name: "Products",
  components: {
    Button,
  },
  data() {
    return {
      id: 1,
      title: "Advanced Beard Growth Kit",
      price: "$57.00",
      quantity: 1,
      text: "This is a great product. Cant wait for you to receive it",
      productImage: "../assets/beard_club.png",
    };
  },
  methods: {
    addToCart() {

      var addItem = {
        id: this.id,
        title: this.title,
        price: this.price,
        quantity: this.quantity,
      };
      console.log("comp: Products | Add Item to Cart: ", addItem);
      this.$emit("add-to-cart", addItem);

    },
  },
};
</script>

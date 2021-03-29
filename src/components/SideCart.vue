<template>
  <div id="side_cart_id" style="display: none">
    <div class="cart-grid-container">
      <div
        v-on:click="onClick()"
        id="side_cart_close_id"
        class="cart-grid-item"
      >
        <h1>{{ title }}</h1>
      </div>
      <!-- PRODUCTS / CART ITEMS WILL GO -->
      <div id="side_cart_items_id" class="cart-grid-item">
        <Cart @delete-item="deleteItem" :items="items" />
      </div>
      <div id="side_cart_subtotal_id" class="cart-grid-item">
        Subtotal $X
        <br />
        <Button text="Checkout" class="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart";
import Button from "../components/Button";

export default {
  name: "SideCart",
  props: ["title"],
  components: {
    Cart,
    Button,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    deleteItem(id) {
      console.log("delete item: ", id);
      if (confirm("Are you sure?")) {
        this.items = this.items.filter((item) => item.id !== id);
      }
    },
    onClick() {
      document.getElementById("side_cart_id").style.display = "none";
    },
  },
  addToCart(item) {
    console.log("comp: Item 1", item);
    this.items = [...this.items, items];
  },
  created() {
    this.items = [
      {
        // id: 1,
        // title: "Product 1",
        // price: "$25.00",
        // quantity: 1,
        // text: "This is a great product. Cant wait for you to receive it",
      },
    ];
  },
};
</script>

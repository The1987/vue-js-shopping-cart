import { createStore } from 'vuex'

export default createStore({
  // App Data - Async //
  state: {

    // cart: []

    // SAMPLE PRODUCT //
    // id: 1,
    // title: "Advanced Beard Growth Kit",
    // price: "$57.00",
    // quantity: 1,
    // text: "This is a great product. Cant wait for you to receive it",
    // productImage: "../assets/beard_club.png",

    // CART ITEMS //
  
  },

  // Methods - Commit //
  mutations: {

      // addToCart(state) {
      //   var addItem = {
      //     id: state.id,
      //     title: state.title,
      //     price: state.price,
      //     quantity: state.quantity,
      //     text: state.text,
      //     productImage: state.productImage
      //   };
      //   console.log("comp: Products | Add Item to Cart: ", addItem);
      //   // this.$emit("add-to-cart", addItem)
      // },
   
  },

  // Commit Mutation First - Async - Dispatch //
  actions: {
  },

  // Get Data from State - can filter data //
  getters: {
  },

  // Breaking up sections of app //
  modules: {
  }
})

<template>
  <div>
    <Header />
    <Products />
    <SideCart title="X" />
  </div>
</template>

<script>
import '../public/style/style.scss'
import Header from './components/Header'
import Products from './components/Products'
import SideCart from "./components/SideCart";

export default {
  name: 'App',
  components: {
    Header,
    Products,
    SideCart
  }
}
</script>

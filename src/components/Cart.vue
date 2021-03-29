<template>
  <div v-bind:key="item.id" v-for="item in items">
    <ul>
        <Items 
        @add-to-cart="addToCart"
        @delete-item='$emit("delete-item", item.id)' :item='item' />
    </ul>
  </div>
</template>

<script>
import '../../public/style/style.scss'
import Items from '../components/Items'

export default {
  name: 'Cart',
  props: {
    items: Array
  },
  components: {
    Items
  },
  emits: ['delete-item']
}
</script>

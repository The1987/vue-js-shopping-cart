<template>
    <li>
        <span>{{item.title}}</span>
        <span style="float: right; font-weight: 700;" @click='onDelete(item.id)'>Remove X</span>
        <br>
        <span>Price: {{item.price}}</span>
        <br>
        <span>Quantity: {{item.quantity}}</span>
        <br>
        <span>Description: {{item.text}}</span>
        <br>
        <br>
    </li>
</template>

<script>
import '../../public/style/style.scss'

export default {
  name: 'Items',
  props: {
    item: Object
  },
  methods: {
    onDelete (id) {
      console.log('comp: Items: ', id)
      this.$emit('delete-item', id)
    }
  }
}
</script>

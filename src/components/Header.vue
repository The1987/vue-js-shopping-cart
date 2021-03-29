<template>
  <header>
    <div class='nav'>
        <img  v-on:click ="onClick()" id='cart_id' :src="icon"/>
    </div>
  </header>
</template>

<script>
import '../../public/style/style.scss'
import icon from '../assets/shopify_icon.png'

export default {
  name: 'Header',
  data: function () {
    return {
      icon: icon
    }
  },
  props: ['title'],
  methods: {
    onClick () {
      console.log('This button is working.......man!')
      document.getElementById('side_cart_id').style.display = 'block'
    }
  }
}
</script>

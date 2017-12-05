<template>
<div class="test">
  <input type="text" name="" value="" v-model="title"><br>
  <h1>{{ title }}</h1>
  <p v-if="showName">{{ user.firstName }}</p>
  <p v-else="showName">no-body</p>
  <ul>
    <li v-for="item in items">{{ item.title }}</li>
  </ul>
  <button type="button" name="button" v-on:click="greet('params')">Greet</button>

  <input type="text" name="" value="" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

  <br>
  <label for="name">first name</label>
  <input type="text" name="" value="" v-model="user.firstName">
  <h3>{{ fullName }}</h3>
  <br>
  <h2>{{ msg }}</h2>
</div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
      showName: true,
      user: {
        firstName: 'john',
        lastName: 'doe'
      },
      items: [{
          title: 'Item one'
        },
        {
          title: 'Item two'
        },
        {
          title: 'Item three'
        },
      ]
    }
  },
  methods: {
    greet: (greeting) => {
      alert(greeting);
    },
    pressKey: (e) => {
      console.log(e.target.value)
    },
    enterHit: () => {
      console.log('enter hit');
    },
  },
  computed: {
    fullName: () => {
      return this.title;
    }
  }
}
</script>

<style scoped>
</style>

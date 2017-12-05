<template lang="html">
  <div class="app">
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Ninjas from '@/components/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    'app-header': Header,
    'ninjas': Ninjas,
    'app-footer': Footer,
  },
  data() {
    return {
      ninjas: [{
          name: 'Ryu',
          speciality: 'Vue Components',
          show: false
        },
        {
          name: 'Crystal',
          speciality: 'HTML Wizardry',
          show: false
        },
        {
          name: 'Hitoshi',
          speciality: 'Click Events',
          show: false
        },
        {
          name: 'Tango',
          speciality: 'Conditionals',
          show: false
        },
        {
          name: 'Kami',
          speciality: 'Webpack',
          show: false
        },
        {
          name: 'Yoshi',
          speciality: 'Data Diggin',
          show: false
        }
      ],
      title: "app vue"
    }
  },
  methods: {
    updateTitle: function(updateTitle) {
      this.title = updateTitle;
    }
  }
}
</script>

<style lang="css" scoped>
</style>

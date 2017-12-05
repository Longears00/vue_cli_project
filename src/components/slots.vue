<template lang="html">
  <div class="app">
      <app-formHelper>
          <div class="" slot="form-header">
              <h3>customer title</h3>
              <p>information about form</p>
          </div>
          <div class="" slot="form-fileds">
              <input type="text" placeholder="name" required name="" value="">
             <input type="password" placeholder="password" required name="" value="">
         </div>
          <div class="" slot="form-controls">
              <input type="button" v-on:click="handleSubmit" name="" value="submit">
          </div>

      </app-formHelper>
  </div>
</template>

<script>
import formHelper from '@/components/formhelper';


export default {
  components: {
    'app-formHelper': formHelper,

  },
  data() {
    return {
      title: "i am slot title",
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>

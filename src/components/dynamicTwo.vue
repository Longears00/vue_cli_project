<template lang="html">
    <div>
         <form-helper2>
             <div slot="form-header">
                 <h3>Form Two - Log In</h3>
                 <p>Enter your details to log-in</p>
             </div>
             <div slot="form-fields">
                 <input type="text" placeholder="username" required />
                 <input type="password" placeholder="password" required />
             </div>
             <div slot="form-controls">
                 <button v-on:click="handleSubmit">Login</button>
             </div>
         </form-helper2>
     </div>
</template>


<script>
// Imports
import formHelper2 from './formHelper.vue'
export default {
  components: {
    'form-helper2': formHelper2
  },
  data() {
    return {}
  },
  methods: {
    handleSubmit: function() {
      alert('thanks for logging in (form two)');
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>

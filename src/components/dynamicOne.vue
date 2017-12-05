<template lang="html">
    <div>
         <form-helper1>
             <div slot="form-header">
                 <h3>Form One - Contact Us</h3>
                 <p>Fill in this form to contact us</p>
             </div>
             <div slot="form-fields">
                 <input type="text" placeholder="name" required />
                 <label>Your Message:</label>
                 <textarea></textarea>
             </div>
             <div slot="form-controls">
                 <button v-on:click="handleSubmit">Send</button>
             </div>
         </form-helper1>
     </div>
</template>

<script>
// Imports
import formHelper1 from './formHelper.vue'
export default {
  components: {
    'form-helper1': formHelper1
  },
  data() {
    return {}
  },
  methods: {
    handleSubmit: function() {
      alert('thanks for submitting form one & contacting us');
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

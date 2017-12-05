<template lang="html">
    <div class="">
        <keep-alive>
            <components v-bind:is="components"></components>
        </keep-alive>
        <button type="button" name="button" v-on:click="components='dynamic-one'">show dynamic one</button>
        <button type="button" name="button" v-on:click="components='dynamic-two'">show dynamic two</button>
    </div>
</template>

<script>
import dynamicOne from '@/components/dynamicOne';
import dynamicTwo from '@/components/dynamicTwo';

export default {
  components: {
    'dynamic-one': dynamicOne,
    'dynamic-two': dynamicTwo
  },
  data() {
    return {
      components: 'dynamic-one',
    }
  },
}
</script>

<style lang="css">
</style>

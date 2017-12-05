<template>
<div class="users">
  <h1>users</h1>
  <form v-on:submit="addUser">
    <input type="text" v-model="newUser.name" placeholder="name">
    <input type="text" v-model="newUser.email" placeholder="email">
    <input type="submit" value="submit">
  </form>
  <ul>
    <li v-for="user in users">
      <input type="checkbox" class="toggle" v-model="user.contacted">
      <span :class="{contacted: user.contacted}">
       {{ user.name }}:{{ user.email }}
   </span>
      <input type="button" v-on:click="deleteUser(user)" value="delete">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'users',
  data() {
    return {
      newUser: {},
      users: [{
          name: 'name1',
          contacted: false,
          email: '1email'
        },
        {
          name: 'name2',
          contacted: false,
          email: '2email'
        },
        {
          name: 'name3',
          contacted: false,
          email: '3email'
        }
      ]
    }
  },
  created: () => {
    console.log(this.$http);

  },
  methods: {

    addUser: (e) => {
      e.preventDefault();
      // this.users.push({
      //   name: this.newUser.name,
      //   email: this.newUser.email,
      //   contacted: false
      // });

      console.log(this);
    },
    deleteUser: (e) => {
      console.log(this.users);
      this.users.splice(this.users.indexOf(user), 1);
    }
  },

}
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>

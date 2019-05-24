<template>
    <!-- <section class="user-page"> -->
    <section class="logInPage">
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" v-model="email" placeholder="Enter Username" name="uname" required>
            <label for="psw"><b>Password</b></label>
            <input type="password"  v-model="password" placeholder="Enter Password" name="psw" required>
            <button v-on:click="login">Login</button>
        </div>
        <div class="container" style="background-color:#f1f1f1">
            <button type="button" v-on:click="logout" class="cancelbtn">Cancel</button>
            <span class="psw">If you don't have an account, <router-link to="/sign-up" >create account</router-link></span>
        </div>
    </section>
</template>

<script>
import firebase, { functions } from 'firebase'

export default {
  name: 'user',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // special note: Using an arrow function will bind the callback to the current context, so this.$router still works.
          const email = user.user.email
          this.$emit('user-login-email', email)
          this.$router.replace('home')
        },
        (err) => {
          alert('Warning! ' + err.message)
        }
      )
    },
    logout: function () {
      firebase.auth().signOut().then(
        (user) => {
          alert('Success logging out')
          this.$emit('user-login-email', 'None')
        },
        (err) => {
          alert(`Failed logging out ${err.message}`)
        }
      )
    }
  }
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    h1 {
        font-size: 30px;
    }
    header {
        position: sticky;
        top: 0px;
        background-color: lightsteelblue;
        padding: 16px;
        margin: 12;
    }
    header nav ul {
        list-style-type: none;
    }
    header nav ul li {
        margin: 6px;
    }
    footer {
        position: fixed;
        bottom: 0%;
        background-color: lightsteelblue;
        padding: 8px;
        width: 100%;
    }
    section {
        display: flex;
        flex-direction: column;
        padding: 12px;
        margin: 12px;
    }
    section p,
    details {
        margin: 12px;
        padding: 12px;
        line-height: 150%;
    }
    /* Full-width inputs */
    input[type=text],
    input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    /* Set a style for all buttons */
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }
    /* Extra style for the cancel button (red) */
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }
    /* Add padding to containers */
    .container {
        padding: 16px;
    }
    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }
</style>

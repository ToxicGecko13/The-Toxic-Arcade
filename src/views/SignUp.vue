<template>
    <!-- <div class="sign-up"> -->
    <div class="signUp">
        <div class="container">
            <h3>Let's create a new account!</h3>
            <input type="text" v-model="email" placeholder="Email"><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button v-on:click="signup">Sign Up</button>
        </div>
        <div class="container" style="background-color:#f1f1f1">
            <span>or go back to <router-link to="/user" >User</router-link>.</span>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'signUp',
        data() {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            signup: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        alert('Your account has been created');
                        this.$router.push('/user');
                    },
                    (err) => {
                        alert(`Warning! ${err.message}`)
                    }
                );
            }
        }
    }
</script>
    
<style scoped>
    .signUp {
        margin-top: 40px;
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
    p {
        display: block;
        margin-top: 20px;
        font-size: 11px;
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

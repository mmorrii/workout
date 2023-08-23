<template>
    <div class="registration">
            <div class="registration-block">
                <h2>Registration</h2>
                <form action="">
                    <div class="input-block">
                        <input type="text" required>
                        <label>Username</label>
                    </div>
                    <div class="input-block">
                        <input type="email" required>
                        <label>Email</label>
                    </div>
                    <div class="input-block">
                        <input id="password" type="password" required>
                        <label>Password</label>
                        <i :class="eyeIcon"
                           @click="toggleVisibility">
                        </i>
                    </div>
                    <button type="submit">Sign up</button>
                </form>
                <p>Already have an account?
                    <router-link to="/log-in">Sign in</router-link>
                </p>
                <div class="back-home">
                    <router-link to="/home">
                        <i class="fa-solid fa-house"></i>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "SignUp",
    data() {
        return {
            eyeIcon: "fa-regular fa-eye-slash",
        }
    },
    mounted() {
        document.body.style.overflow = 'hidden';
    },
    methods: {
        toggleVisibility() {
            const input = document.getElementById('password');
            
            if (input.type === "password") {
                input.type = "text";
                this.eyeIcon = "fa-regular fa-eye";
            } else {
                input.type = "password";
                this.eyeIcon = "fa-regular fa-eye-slash";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/views/styles/sign-up.scss";
</style>
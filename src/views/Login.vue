<template>
    <div class="login">
        <div class="login-block">
            <h2>Login</h2>
            <form action="">
                <div class="input-block">
                    <input type="text" required>
                    <label>Username</label>
                </div>
                <div class="input-block">
                    <input id="password" type="password" required>
                    <label>Password</label>
                    <i :class="eyeIcon"
                       @click="toggleVisibility"
                    >
                    </i>
                </div>
                <button type="submit">Sign in</button>
            </form>
            <p>Don't have an account?
                <router-link to="/workout/sign-up">Sign up</router-link>
            </p>
            <div class="back-home">
                <router-link to="/workout">
                    <i class="fa-solid fa-house"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            eyeIcon: "fa-regular fa-eye-slash",
        }
    },
    mounted() {
        setTimeout(() => {
            document.body.style.overflow = 'hidden';
        }, 300)
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
@import "@/views/styles/login.scss";
</style>
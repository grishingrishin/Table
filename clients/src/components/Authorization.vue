<template>
    <div class="auth">
        <div class="auth__main">
            <form action="/" class="auth__form" @submit.prevent="loginHandler">
                <div class="auth__field">
                    <label for="auth_login" class="auth__label">Login</label>
                    <input
                        type="text"
                        name="login"
                        class="auth__input"
                        placeholder="Enter your login"
                        id="auth_login"
                        v-model="login"
                        required
                    />
                </div>
                <div class="auth__field">
                    <label for="auth__password" class="auth__label">Password</label>
                    <input
                        type="password"
                        name="password"
                        class="auth__input"
                        placeholder="Enter your password"
                        id="auth__password"
                        v-model="password"
                        required
                    />
                </div>
                <div class="auth__action">
                    <button type="submit" class="auth__submit">Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Authorization',
    data() {
        return {
            login: '',
            password: '',
        };
    },
    methods: {
        ...mapActions(['authorization']),
        loginHandler() {
            const { login, password } = this;

            return this.authorization({ login, password })
                .then(() => this.$router.push('/'))
                .catch(error => new Error(error));
        },
    },
};
</script>

<style lang="scss">
.auth {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;

    &__main {
        flex: 0 1 320px;
    }

    &__form {
        margin-top: -80%;
    }

    &__field {
        margin-top: 1em;
    }

    &__input {
        width: 100%;
        margin-top: 0.5em;
        padding: 0 1em;
        line-height: 46px;
    }

    &__action {
        margin-top: 2em;
    }

    &__submit {
        padding: 0 14px;
        font-weight: bold;
        font-size: 1em;
        line-height: 2em;
        border: 2px solid #000;
        border-radius: 4px;
    }
}
</style>

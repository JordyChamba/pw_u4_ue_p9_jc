<template>
    <div class="login-card">
        <div class="card-header">
            <h2>Bienvenido</h2>
            <p>Ingresa tus credenciales para continuar</p>
        </div>

        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="username">Usuario</label>
                <input type="text" id="username" v-model="username" placeholder="Ej. admin" required />
            </div>

            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" placeholder="••••••••" required />
            </div>

            <button type="submit" :disabled="loading" class="login-btn">
                <span v-if="loading" class="spinner"></span>
                {{ loading ? "Autenticando..." : "Iniciar Sesión" }}
            </button>

            <Transition name="fade">
                <p v-if="error" class="error-message">
                    <span class="error-icon">⚠️</span> {{ error }}
                </p>
            </Transition>
        </form>
    </div>
</template>

<script>
import { loginFachada } from "@/clients/AuthClient";

export default {
    name: "LoginComponent",
    data() {
        return {
            username: "",
            password: "",
            error: null,
            loading: false,
        };
    },
    methods: {
        async handleLogin() {
            this.loading = true;
            this.error = null;

            try {
                const response = await loginFachada(this.username, this.password);

                if (response && response.accessToken) {
                    sessionStorage.setItem("token", response.accessToken);
                    sessionStorage.setItem("role", response.role);
                    this.$router.push("/");
                } else {
                    this.error = "Credenciales incorrectas o token no recibido";
                }

            } catch (err) {
                console.error("Error:", err);
                this.error = "Error al iniciar sesión. Verifique sus credenciales.";
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Audiowide:wght@400;500;600;700&display=swap');

.login-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 420px;
    z-index: 10;
    transition: transform 0.3s ease;
    font-family: 'Poppins', sans-serif;
}

.card-header {
    text-align: center;
    margin-bottom: 2.5rem;
}

h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #fff, #a5b4fc);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.card-header p {
    color: #94a3b8;
    font-size: 0.95rem;
}

.form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #e2e8f0;
    font-size: 0.9rem;
    font-weight: 500;
    margin-left: 0.25rem;
}

input {
    width: 100%;
    padding: 1rem 1.25rem;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 1rem;
    color: #fff;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #6366f1;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

input::placeholder {
    color: #64748b;
}

.login-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #63f1a3, #46e57b);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.login-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
}

.login-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    background: #4b5563;
}

.error-message {
    background: rgba(239, 68, 68, 0.2);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #fca5a5;
    padding: 0.75rem;
    border-radius: 8px;
    margin-top: 1.5rem;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.spinner {
    width: 18px;
    height: 18px;
    border: 2px solid #ffffff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

<template>
    <div class="login-container">
        <div class="login-card">
            <h2>Autenticando...</h2>
            <p>Redirigiendo al sistema...</p>

            <!-- FORMULARIO DE LOGIN COMENTADO -->
            <!-- 
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="username">Usuario:</label>
                    <input type="text" id="username" v-model="username" placeholder="Ingrese su usuario" required />
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" v-model="password" placeholder="Ingrese su contraseña"
                        required />
                </div>
                <button type="submit" :disabled="loading">
                    {{ loading ? "Ingresando..." : "Ingresar" }}
                </button>
                <p v-if="error" class="error-message">{{ error }}</p>
            </form>
            -->
        </div>
    </div>
</template>

<script>
// import { loginFachada } from "@/clients/AuthClient";

export default {
    data() {
        return {
            username: "",
            password: "",
            error: null,
            loading: false,
        };
    },
    mounted() {
        // Auto-login al cargar la página
        this.handleLogin();
    },
    methods: {
        async handleLogin() {
            this.loading = true;
            this.error = null;

            // Simular login sin llamar al backend
            // Solo para probar el guardián de rutas
            try {
                console.log("Login automático - guardián activo");

                // Guardar token simulado en sessionStorage
                sessionStorage.setItem("token", "mock-token-123");
                sessionStorage.setItem("role", "user");

                // Redirigir al home
                setTimeout(() => {
                    this.$router.push("/");
                }, 500);

            } catch (err) {
                console.error("Error:", err);
                this.error = "Error inesperado.";
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
}

.login-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h2 {
    margin-bottom: 1.5rem;
    color: #333;
}

.form-group {
    margin-bottom: 1rem;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    /* Ensure padding doesn't affect width */
}

button {
    width: 100%;
    padding: 0.75rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 1rem;
}

button:hover {
    background-color: #3aa876;
}

button:disabled {
    background-color: #a8d5c2;
    cursor: not-allowed;
}

.error-message {
    color: #e74c3c;
    margin-top: 1rem;
    font-size: 0.9rem;
}
</style>

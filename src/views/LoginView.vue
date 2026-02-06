<template>
    <div class="login-container">
        <LoginComponent />
    </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
    components: {
        LoginComponent,
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%);
    font-family: 'Poppins', sans-serif;
    color: #fff;
    overflow: hidden;
    position: relative;
}

/* Background patterns/shapes */
.login-container::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(233, 69, 96, 0.2) 0%, rgba(233, 69, 96, 0) 70%);
    border-radius: 50%;
    pointer-events: none;
}

.login-container::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(216, 218, 223, 0.89) 0%, rgba(222, 230, 226, 0.801) 70%);
    border-radius: 50%;
    pointer-events: none;
}
</style>

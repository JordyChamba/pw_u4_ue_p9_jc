<template>
  <nav v-if="!isLoginPage">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/consultar-todos">Consultar Todos</router-link> |
    <router-link to="/consultar-id">Consultar por ID</router-link> |
    <router-link to="/guardar">Guardar</router-link> |
    <router-link to="/actualizar">Actualizar</router-link> |
    <router-link to="/actualizar-parcial">Actualizar Parcial</router-link> |
    <router-link to="/eliminar">Eliminar</router-link> |
    <a href="#" @click.prevent="logout" class="logout-btn">Cerrar Sesión</a>
  </nav>
  <router-view />
</template>

<script>
export default {
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logout-btn {
  color: #e74c3c !important;
  cursor: pointer;
}

.logout-btn:hover {
  text-decoration: underline;
}
</style>

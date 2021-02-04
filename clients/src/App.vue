<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
}

button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
}

#app {
    font-family: monospace, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>

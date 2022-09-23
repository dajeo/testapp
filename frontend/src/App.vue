<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <RouterLink class="link" active-class="link-active" to="/">
                Заявки
            </RouterLink>
            <RouterLink class="link" active-class="link-active" to="/about">
                Настройки
            </RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
header {
    margin: 18px;
    text-align: center;
}

.link {
    text-decoration: none;
    color: inherit;
    padding: 10px;
    transition: 0.2s;
}

.link:hover {
    color: #666666;
}

.link-active {
    color: blue;
}
</style>

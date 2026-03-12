<template>
  <Container>
    <header class="my-4 flex items-center justify-end " :style="{ height: '40px' }">
      <nav class="flex items-centerw-max gap-8 mx-8">
        <NuxtLink to="/" class="nav-link">Booking</NuxtLink>
        <NuxtLink to="/newsletter" class="nav-link">Newsletter</NuxtLink>
        <NuxtLink to="/contact-us" class="nav-link">Contact Us</NuxtLink>
      </nav>
    </header>
  </Container>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav-link {
  margin-top: 2px;
  font-weight: 400;
  color: #27272a;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: #000;
}

.nav-link.router-link-active {
  border-bottom: 2px solid black;
  padding-bottom: 2px;
}
</style>
<template>
  <div class="min-h-screen dark:bg-gray-900">
    <main class="flex-1">
      <Navbar />
      <client-only>
        <slot />
      </client-only>
    </main>

    <!-- <Footer /> -->

  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';


const mobileMenuOpen = ref(false)

watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
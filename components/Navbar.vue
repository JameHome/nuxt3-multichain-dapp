<template>
    <div class="navbar w-full h-20 bg-amber-400 flex justify-between items-center">
        <div class="logo ml-5 font-bold text-2xl">多链DApp</div>
        <ClientOnly>
            <SolConnect />
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
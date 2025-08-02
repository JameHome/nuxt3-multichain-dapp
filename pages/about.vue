<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="prose dark:prose-invert max-w-none">
      <h1>{{ t('navigation.about') }}</h1>
      <p>{{ t('messages.welcome_message') }}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <UCard>
          <template #header>
            <h3>{{ t('common.success') }}</h3>
          </template>
          <p>{{ t('messages.operation_success') }}</p>
        </UCard>

        <UCard>
          <template #header>
            <h3>{{ t('navigation.services') }}</h3>
          </template>
          <p>{{ t('messages.loading_data') }}</p>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'About',
  ogTitle: 'About',
  description: 'About us page',
  ogDescription: 'Learn more about us'
})
</script>

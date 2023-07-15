<script lang="ts" setup>
import { ref } from 'vue'

const MyPopoverMessages = ref('~something to show~ lala')
</script>

<template>
  <div>
    <n-card :bordered="false" class="settings-card">
      <n-space>
        <n-popover trigger="hover">
          <template #trigger>
            <n-button dashed type="success"> Device </n-button>
          </template>
          <span> {{ MyPopoverMessages }} </span>
        </n-popover>

        <n-popover trigger="hover">
          <template #trigger>
            <n-button dashed type="success"> Model </n-button>
          </template>
          <span> {{ MyPopoverMessages }} </span>
        </n-popover>

        <n-popover trigger="hover">
          <template #trigger>
            <n-button dashed type="success"> Model Scale </n-button>
          </template>
          <span> {{ MyPopoverMessages }} </span>
        </n-popover>

        <n-popover trigger="hover">
          <template #trigger>
            <n-button dashed type="success"> Denoise </n-button>
          </template>
          <span> {{ MyPopoverMessages }} </span>
        </n-popover>

        <n-popover trigger="hover">
          <template #trigger>
            <n-button dashed type="success"> TTA </n-button>
          </template>
          <span> {{ MyPopoverMessages }} </span>
        </n-popover>
      </n-space>

      <br />

      <n-space>
        <n-popover trigger="hover">
          <template #trigger>
            <n-button round type="success"> Output Folder </n-button>
          </template>
          <span> {{ MyPopoverMessages }} </span>
        </n-popover>

        <n-popover trigger="hover">
          <template #trigger>
            <n-button dashed type="success"> Custom Scale </n-button>
          </template>
          <span> {{ MyPopoverMessages }} </span>
        </n-popover>
      </n-space>
    </n-card>
  </div>
</template>

<style lang="scss" scoped>
.settings-card {
  background-color: transparent;
}
</style>

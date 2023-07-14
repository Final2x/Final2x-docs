<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TranslationOutlined } from '@vicons/antd'

const LangNum = ref(0)
const CurrentLanguage = computed(() => {
  const LangMap = ['English', '中文', '日本語']
  return LangMap[LangNum.value]
})

function ChangeLang(): void {
  LangNum.value = (LangNum.value + 1) % 3
}
</script>

<template>
  <div>
    <n-space>
      <n-button style="font-size: 36px" text @click="ChangeLang">
        <n-icon>
          <translation-outlined />
        </n-icon>
      </n-button>
      <n-button :bordered="false"> {{ CurrentLanguage }} </n-button>
    </n-space>
  </div>
</template>

<style scoped />
